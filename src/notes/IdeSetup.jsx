import { NoteList, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function IdeSetupNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Neden VSCode?" : "Why VSCode?"}>
        <NoteList
          items={
            tr
              ? [
                  "Ucretsiz, acik kaynak, genis eklenti (extension) destegi.",
                  "Git entegrasyonu, terminal ve hata ayiklama araclari hazir gelir.",
                  "Codex ve Claude Code icin resmi eklentileri mevcut.",
                ]
              : [
                  "Free, open source, wide extension support.",
                  "Git integration, terminal, and debugging tools come built in.",
                  "It has official extensions for Codex and Claude Code.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Codex/Claude Eklentisi Kurulumu" : "Installing the Codex/Claude Extension"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "VSCode'u ac, sol menuden Extensions sekmesine git.",
                  "Arama kutusuna 'Codex' veya 'Claude Code' yaz.",
                  "Resmi eklentiyi bul ve Install butonuna tikla.",
                  "Istenirse OpenAI/Anthropic hesabinla giris yap.",
                  "Komut paletinden (Cmd/Ctrl+Shift+P) agent'i acarak kullanmaya basla.",
                ]
              : [
                  "Open VSCode, go to the Extensions tab on the left.",
                  "Search for 'Codex' or 'Claude Code'.",
                  "Find the official extension and click Install.",
                  "Sign in with your OpenAI/Anthropic account if prompted.",
                  "Open the agent from the command palette (Cmd/Ctrl+Shift+P) and start using it.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Global Git Ayarlari (Tum Platformlar)" : "Global Git Config (All Platforms)"}>
        <TerminalBlock
          caption={tr ? "Terminalde (Windows/macOS/Linux)" : "In the terminal (Windows/macOS/Linux)"}
          lines={[
            "git --version",
            'git config --global user.name "Adin Soyadin"',
            'git config --global user.email "eposta@ornek.com"',
            "git config --global --list",
          ]}
        />
      </NoteSection>
    </>
  );
}
