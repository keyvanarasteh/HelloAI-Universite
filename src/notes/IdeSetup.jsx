import { useState } from "react";
import { CheckCircle2, GitBranch, KeyRound, PackageCheck, Play, Search, SquareTerminal } from "lucide-react";
import { NoteList, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function IdeSetupNote({ lang }) {
  const tr = lang === "tr";
  const [activeStep, setActiveStep] = useState(0);
  const setupSteps = tr
    ? [
        { icon: PackageCheck, title: "VSCode kur", detail: "Editor, terminal, git paneli ve extension sistemi tek yerde hazir olur.", check: "code --version" },
        { icon: Search, title: "Eklenti bul", detail: "Extensions panelinde Codex veya Claude Code icin resmi eklentiyi ara.", check: "Yayinci adini kontrol et" },
        { icon: KeyRound, title: "Hesapla giris yap", detail: "Agent'in proje baglaminda calisabilmesi icin gerekli hesaba baglan.", check: "Oturum acik mi?" },
        { icon: GitBranch, title: "Git kimligini ayarla", detail: "Commit'lerin dogru isim ve e-posta ile kaydedilmesini sagla.", check: "git config --global --list" },
        { icon: Play, title: "Komut paletinden baslat", detail: "Cmd/Ctrl+Shift+P ile agent komutunu ac ve projede dene.", check: "Ilk gorevi kucuk tut" },
      ]
    : [
        { icon: PackageCheck, title: "Install VSCode", detail: "Editor, terminal, git panel, and extension system are ready in one place.", check: "code --version" },
        { icon: Search, title: "Find extension", detail: "Search the Extensions panel for the official Codex or Claude Code extension.", check: "Check publisher name" },
        { icon: KeyRound, title: "Sign in", detail: "Connect the required account so the agent can work inside project context.", check: "Is the session active?" },
        { icon: GitBranch, title: "Set Git identity", detail: "Make sure commits are recorded with the right name and email.", check: "git config --global --list" },
        { icon: Play, title: "Start from command palette", detail: "Use Cmd/Ctrl+Shift+P to open the agent command and try it in the project.", check: "Keep the first task small" },
      ];
  const active = setupSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Kurulum Rotasi" : "Setup Route"}>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
          <div className="grid gap-2 sm:grid-cols-5">
            {setupSteps.map((step, index) => {
              const Icon = step.icon;
              const selected = index === activeStep;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  {selected ? <CheckCircle2 size={19} /> : <Icon size={19} />}
                  <span className="text-xs font-bold">{index + 1}. {step.title}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Aktif kurulum adimi" : "Active setup step"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.detail}</p>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[#0b1020] p-4 text-sm text-emerald-300">
              <SquareTerminal size={16} />
              <code>{active.check}</code>
            </div>
          </div>
        </div>
      </NoteSection>

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
          lines={
            tr
              ? [
                  "git --version",
                  'git config --global user.name "Adin Soyadin"',
                  'git config --global user.email "eposta@ornek.com"',
                  "git config --global --list",
                ]
              : [
                  "git --version",
                  'git config --global user.name "Your Name"',
                  'git config --global user.email "email@example.com"',
                  "git config --global --list",
                ]
          }
        />
      </NoteSection>
    </>
  );
}
