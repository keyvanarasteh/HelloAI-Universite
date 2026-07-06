import { useState } from "react";
import { CheckCircle2, ClipboardCheck, FileText, GitCommit, ListChecks, Scale, Split, Target } from "lucide-react";
import { Mermaid, NoteCallout, NoteSection, NoteSteps } from "../components/NoteKit.jsx";

const processDiagram = `flowchart TD
  A["1. Problemi tanimla\n(idea.txt)"] --> B["2. Cozum yollarini listele"]
  B --> C["3. Karsilastir"]
  C --> D["4. En iyisini sec"]
  D --> E["5. 0-100 uygulama plani"]
  E --> F["6. Checklist: STEPS.md"]
  F --> G["7. Isaretle + commit/push"]
  G -->|yeni is| B
`;

export function ProblemSolvingNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeStep, setActiveStep] = useState(0);
  const studioSteps = tr
    ? [
        { icon: Target, title: "Problemi tanimla", artifact: "idea.txt", prompt: "Neyi, kimin icin, hangi sinirla cozuyorsun?" },
        { icon: Split, title: "Cozumleri listele", artifact: "alternatifler", prompt: "En az 2-3 yol yaz; ilk fikre kilitlenme." },
        { icon: Scale, title: "Karsilastir", artifact: "artilar / eksiler", prompt: "Zaman, risk, ogrenme ve kullanici faydasini yan yana koy." },
        { icon: CheckCircle2, title: "Sec", artifact: "karar notu", prompt: "Neden bu yolu sectigini tek paragrafta sabitle." },
        { icon: FileText, title: "0-100 planla", artifact: "ROADMAP.md", prompt: "Baslangictan calisan urune kadar sirali adimlari cikar." },
        { icon: ClipboardCheck, title: "Checklist yap", artifact: "STEPS.md", prompt: "Plani isaretlenebilir, test edilebilir maddelere cevir." },
        { icon: GitCommit, title: "Stabil ilerle", artifact: "commit + push", prompt: "Kucuk parcalar tamamlandikca kaydet, test et ve paylas." },
      ]
    : [
        { icon: Target, title: "Define the problem", artifact: "idea.txt", prompt: "What are you solving, for whom, and within which boundary?" },
        { icon: Split, title: "List solutions", artifact: "alternatives", prompt: "Write at least 2-3 paths; do not lock onto the first idea." },
        { icon: Scale, title: "Compare", artifact: "pros / cons", prompt: "Place time, risk, learning, and user value side by side." },
        { icon: CheckCircle2, title: "Choose", artifact: "decision note", prompt: "Freeze why this route won in one paragraph." },
        { icon: FileText, title: "Plan 0-100", artifact: "ROADMAP.md", prompt: "Map the path from first step to working product." },
        { icon: ClipboardCheck, title: "Make a checklist", artifact: "STEPS.md", prompt: "Turn the plan into checkable, testable tasks." },
        { icon: GitCommit, title: "Move stably", artifact: "commit + push", prompt: "Save, test, and share as small chunks become stable." },
      ];
  const active = studioSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "0-100 Karar Atolyesi" : "0-100 Decision Studio"}>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {studioSteps.map((step, index) => {
              const Icon = step.icon;
              const selected = index === activeStep;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={[
                    "flex min-h-24 flex-col items-start justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={19} />
                  <span>
                    <span className="block text-xs font-bold">{index + 1}. {step.title}</span>
                    <span className="mt-1 block text-[11px] text-[var(--muted)]">{step.artifact}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">
                  {tr ? "Uretilecek cikti" : "Artifact to produce"}
                </p>
                <h3 className="mt-1 text-xl font-bold">{active.artifact}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{active.prompt}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "0-100 Sureci" : "The 0-100 Process"}>
        <Mermaid theme={theme} chart={processDiagram} />
      </NoteSection>

      <NoteSection title={tr ? "7 Adim" : "7 Steps"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Problemi tanimla (ornek: idea.txt).",
                  "Olasi cozum yollarini listele.",
                  "Cozumleri karsilastir.",
                  "En iyi cozumu sec.",
                  "Secilen cozum icin 0-100 uygulama plani cikar.",
                  "Plani dogrula, checklist olarak STEPS.md yaz.",
                  "Adimlari isaretleyerek ilerle; stabil noktalarda branch/commit/push yap.",
                ]
              : [
                  "Define the problem (e.g. idea.txt).",
                  "List possible solutions.",
                  "Compare the solutions.",
                  "Choose the best solution.",
                  "Build a 0-100 implementation plan for it.",
                  "Verify the plan and turn it into a STEPS.md checklist.",
                  "Progress by checking off steps; branch, commit, and push at stable points.",
                ]
          }
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Bu surecin canli ornegi bu projede var: fikir icin idea.txt ve ROADMAP.md, checklist icin ADIMLAR.md. \"Yapim Sureci\" sayfasindaki commit zaman cizelgesi de bu adimlarin gercek hayattaki izidir."
          : "This project is a live example of the process: idea.txt and ROADMAP.md for the idea, ADIMLAR.md for the checklist. The commit timeline on the \"Build Process\" page is the real-world trace of these steps."}
      </NoteCallout>
    </>
  );
}
