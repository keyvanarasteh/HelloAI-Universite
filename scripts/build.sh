#!/usr/bin/env bash

set -Eeuo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$PROJECT_ROOT/.env"
LOG_FILE="$(mktemp -t helloai-build-XXXXXX.log)"
TARGET_WEBSITE_URL="${TARGET_WEBSITE_URL:-}"
DRY_RUN=false
SUCCESS=false
ARCHIVE_PATH=""
WORK_DIR=""
ORIGINAL_PWD="$PWD"

if [[ -t 1 ]]; then
  RESET=$'\033[0m'
  BOLD=$'\033[1m'
  DIM=$'\033[2m'
  RED=$'\033[31m'
  GREEN=$'\033[32m'
  YELLOW=$'\033[33m'
  BLUE=$'\033[34m'
  CYAN=$'\033[36m'
else
  RESET=""
  BOLD=""
  DIM=""
  RED=""
  GREEN=""
  YELLOW=""
  BLUE=""
  CYAN=""
fi

usage() {
  cat <<'EOF'
Usage: ./scripts/build.sh [--url URL] [--dry-run] [--help]

Options:
  --url URL      Target website URL to package and upload
  --dry-run      Print the planned steps without building or uploading
  -h, --help     Show this help
EOF
}

write_log() {
  local level="$1"
  local message="$2"
  printf '%s [%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$level" "$message" >>"$LOG_FILE"
}

log() {
  local color="$1"
  local level="$2"
  local message="$3"
  write_log "$level" "$message"
  printf "%b[%s]%b %s\n" "$color" "$level" "$RESET" "$message"
}

info() { log "$CYAN" "INFO" "$1"; }
warn() { log "$YELLOW" "WARN" "$1"; }
success() { log "$GREEN" "OK" "$1"; }
error() { log "$RED" "ERR" "$1"; }

progress_bar() {
  local current="$1"
  local total="$2"
  local label="$3"
  local width=28
  local filled=$(( current * width / total ))
  local empty=$(( width - filled ))
  local bar filled_bar empty_bar pct
  filled_bar="$(printf '%*s' "$filled" '' | tr ' ' '#')"
  empty_bar="$(printf '%*s' "$empty" '' | tr ' ' '-')"
  pct=$(( current * 100 / total ))
  printf "%b[%s%s]%b %3d%% %s\n" "$BLUE" "$filled_bar" "$empty_bar" "$RESET" "$pct" "$label"
}

confirm() {
  local prompt="$1"
  local answer=""
  printf "%b%s%b [y/N]: " "$BOLD" "$prompt" "$RESET"
  if ! read -r answer; then
    return 1
  fi
  case "${answer,,}" in
    y|yes) return 0 ;;
    *) return 1 ;;
  esac
}

normalize_url() {
  local raw="$1"
  raw="${raw#"${raw%%[![:space:]]*}"}"
  raw="${raw%"${raw##*[![:space:]]}"}"
  if [[ -z "$raw" ]]; then
    return 1
  fi
  if [[ "$raw" =~ ^https?:// ]]; then
    printf '%s' "$raw"
  else
    printf 'https://%s' "$raw"
  fi
}

slugify() {
  local value="$1"
  value="${value#http://}"
  value="${value#https://}"
  value="${value%%/*}"
  value="${value//[^A-Za-z0-9._-]/-}"
  value="${value//--/-}"
  value="${value##-}"
  value="${value%%-}"
  if [[ -z "$value" ]]; then
    value="website"
  fi
  printf '%s' "$value"
}

require_command() {
  local cmd="$1"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    error "Missing required command: $cmd"
    exit 1
  fi
}

node_supports_current_vite() {
  local current_version
  if ! current_version="$(node -p 'process.versions.node' 2>/dev/null)"; then
    return 1
  fi
  awk -v version="$current_version" '
    BEGIN {
      split(version, parts, ".");
      major = parts[1] + 0;
      minor = parts[2] + 0;
      patch = parts[3] + 0;
      if (major > 20) exit 0;
      if (major < 20) exit 1;
      if (minor > 19) exit 0;
      if (minor < 19) exit 1;
      if (patch >= 0) exit 0;
      exit 1;
    }
  '
}

build_static_site() {
  if command -v node >/dev/null 2>&1 && node_supports_current_vite; then
    npm run build
  else
    warn "Current Node.js is too old for this Vite build; using Node 22 wrapper"
    npx -y node@22 node_modules/vite/bin/vite.js build
  fi
}

run_step() {
  local title="$1"
  shift
  local tmp_output
  tmp_output="$(mktemp -t helloai-step-XXXXXX.log)"

  printf "%b[%s]%b %s\n" "$DIM" "...." "$RESET" "$title"
  "$@" >"$tmp_output" 2>&1 &
  local pid=$!
  local spinner='|/-\\'
  local index=0

  while kill -0 "$pid" >/dev/null 2>&1; do
    printf "\r%b[%c]%b %s" "$BLUE" "${spinner:index%4:1}" "$RESET" "$title"
    index=$((index + 1))
    sleep 0.12
  done

  local status=0
  if wait "$pid"; then
    status=0
  else
    status=$?
  fi
  printf "\r\033[K"

  if [[ $status -eq 0 ]]; then
    printf "%b[OK]%b %s\n" "$GREEN" "$RESET" "$title"
    write_log "OK" "$title"
    cat "$tmp_output" >>"$LOG_FILE" || true
    rm -f "$tmp_output"
    return 0
  fi

  error "$title"
  printf "%b---- command output ----%b\n" "$RED" "$RESET"
  cat "$tmp_output" >&2
  printf "%b-----------------------%b\n" "$RED" "$RESET"
  write_log "ERR" "$title"
  cat "$tmp_output" >>"$LOG_FILE" || true
  rm -f "$tmp_output"
  return "$status"
}

cleanup() {
  cd "$ORIGINAL_PWD" >/dev/null 2>&1 || true
  if [[ "$SUCCESS" != true && -n "$ARCHIVE_PATH" && -f "$ARCHIVE_PATH" ]]; then
    rm -f "$ARCHIVE_PATH" || true
  fi
  if [[ -n "$WORK_DIR" && -d "$WORK_DIR" ]]; then
    rm -rf "$WORK_DIR" || true
  fi
}

on_error() {
  local line="$1"
  local exit_code="$2"
  printf "\n%b[ERR]%b Script failed at line %s (exit %s)\n" "$RED" "$RESET" "$line" "$exit_code" >&2
  printf "%bLog file:%b %s\n" "$YELLOW" "$RESET" "$LOG_FILE" >&2
  exit "$exit_code"
}

trap 'on_error $LINENO $?' ERR
trap cleanup EXIT

while (($#)); do
  case "$1" in
    --url)
      shift
      TARGET_WEBSITE_URL="${1:-}"
      ;;
    --dry-run)
      DRY_RUN=true
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      if [[ -z "$TARGET_WEBSITE_URL" ]]; then
        TARGET_WEBSITE_URL="$1"
      else
        error "Unknown argument: $1"
        usage
        exit 1
      fi
      ;;
  esac
  shift
done

printf "%b========================================%b\n" "$CYAN" "$RESET"
printf "%b  HelloAI Site Builder%b\n" "$BOLD" "$RESET"
printf "%b========================================%b\n" "$CYAN" "$RESET"
info "Log file: $LOG_FILE"

if [[ -f "$ENV_FILE" ]]; then
  info "Loading environment from .env"
  set -a
  source "$ENV_FILE"
  set +a
else
  warn ".env not found; continuing with the current shell environment"
fi

if [[ -z "$TARGET_WEBSITE_URL" ]]; then
  if [[ -n "${TARGET_WEBSITE_URL:-}" ]]; then
    TARGET_WEBSITE_URL="$(normalize_url "$TARGET_WEBSITE_URL")"
  else
    printf "%bTarget website URL%b: " "$BOLD" "$RESET"
    read -r TARGET_WEBSITE_URL
    TARGET_WEBSITE_URL="$(normalize_url "$TARGET_WEBSITE_URL")"
  fi
else
  TARGET_WEBSITE_URL="$(normalize_url "$TARGET_WEBSITE_URL")"
fi

if [[ ! "$TARGET_WEBSITE_URL" =~ ^https?://[^[:space:]]+$ ]]; then
  error "Invalid target website URL: $TARGET_WEBSITE_URL"
  exit 1
fi

HOST_SLUG="$(slugify "$TARGET_WEBSITE_URL")"
STAMP="$(date '+%Y%m%d-%H%M%S')"
ARCHIVE_NAME="${HOST_SLUG}-${STAMP}.zip"
ARCHIVE_PATH="$PROJECT_ROOT/$ARCHIVE_NAME"

progress_bar 1 5 "Target URL captured: $TARGET_WEBSITE_URL"
info "Target URL saved to variable"

if $DRY_RUN; then
  progress_bar 5 5 "Dry run complete"
  info "Planned archive: $ARCHIVE_PATH"
  if [[ -n "${SSH_HOST:-}" && -n "${SSH_USER:-}" && -n "${SSH_TARGET_DIR:-}" ]]; then
    info "Remote deployment settings detected in .env"
  fi
  exit 0
fi

require_command npm
require_command zip

cd "$PROJECT_ROOT"

export VITE_TARGET_WEBSITE_URL="$TARGET_WEBSITE_URL"
export TARGET_WEBSITE_URL

progress_bar 2 5 "Building static site"
run_step "Running production build" build_static_site

progress_bar 3 5 "Packaging dist directory"
run_step "Creating zip archive" zip -r "$ARCHIVE_PATH" dist -x "*.map" "*.log"
success "Archive created: $ARCHIVE_PATH"

REMOTE_READY=false
if [[ -n "${SSH_HOST:-}" && -n "${SSH_USER:-}" && -n "${SSH_TARGET_DIR:-}" ]]; then
  REMOTE_READY=true
  info "Remote deployment settings detected"
  if confirm "Upload archive to ${SSH_USER}@${SSH_HOST}:${SSH_TARGET_DIR}?"; then
    progress_bar 4 5 "Uploading archive"
    SSH_PORT="${SSH_PORT:-22}"
    if [[ -n "${SSH_PASSWORD:-}" && -n "$(command -v sshpass || true)" ]]; then
      export SSHPASS="$SSH_PASSWORD"
      SSH_CMD=(sshpass -e ssh -o StrictHostKeyChecking=no -p "$SSH_PORT" "$SSH_USER@$SSH_HOST")
      SCP_CMD=(sshpass -e scp -o StrictHostKeyChecking=no -P "$SSH_PORT")
    else
      SSH_CMD=(ssh -o StrictHostKeyChecking=no -p "$SSH_PORT" "$SSH_USER@$SSH_HOST")
      SCP_CMD=(scp -o StrictHostKeyChecking=no -P "$SSH_PORT")
    fi

    run_step "Ensuring remote directory" "${SSH_CMD[@]}" "mkdir -p \"$SSH_TARGET_DIR\""
    run_step "Uploading archive" "${SCP_CMD[@]}" "$ARCHIVE_PATH" "$SSH_USER@$SSH_HOST:$SSH_TARGET_DIR/$ARCHIVE_NAME"
    run_step "Extracting archive on remote host" "${SSH_CMD[@]}" "cd \"$SSH_TARGET_DIR\" && unzip -o \"$ARCHIVE_NAME\" && rm -f \"$ARCHIVE_NAME\""
    success "Remote upload complete"
  else
    warn "Upload skipped by user choice"
  fi
fi

progress_bar 5 5 "Cleanup complete"
SUCCESS=true
printf "\n%bDone%b\n" "$GREEN" "$RESET"
printf "%bArchive:%b %s\n" "$CYAN" "$RESET" "$ARCHIVE_PATH"
printf "%bLog:%b %s\n" "$CYAN" "$RESET" "$LOG_FILE"
if ! $REMOTE_READY; then
  warn "No remote deployment config found, so only the local archive was created."
fi
