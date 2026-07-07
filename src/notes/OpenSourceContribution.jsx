import { useState } from "react";
import { CheckCircle2, Download, GitBranch, GitCommit, GitMerge, GitPullRequest, MessageSquare, Upload } from "lucide-react";
import { Mermaid, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

const flowDiagram = (tr) => `flowchart LR
  A["Fork"] --> B["Clone"]
  B --> C["Branch"]
  C --> D["Commit"]
  D --> E["Push"]
  E --> F["Pull Request"]
  F -->|${tr ? "inceleme" : "review"}| G{"${tr ? "Onaylandı mı?" : "Approved?"}"}
  G -->|${tr ? "evet" : "yes"}| H["Merge"]
  G -->|${tr ? "değişiklik iste" : "request changes"}| C
`;

export function OpenSourceContributionNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeStep, setActiveStep] = useState(0);
  const pipeline = tr
    ? [
        { icon: Download, title: "Fork", purpose: "Projeyi kendi GitHub hesabına kopyalarsın.", action: "Orijinal repoda Fork butonuna bas." },
        { icon: Download, title: "Clone", purpose: "Kendi kopyanı bilgisayarına indirirsin.", action: "git clone ile lokal çalışma alanı aç." },
        { icon: GitBranch, title: "Branch", purpose: "Ana koddan ayrılan güvenli bir çalışma dalı açarsın.", action: "Değişikliği bu dalda yap." },
        { icon: GitCommit, title: "Commit", purpose: "Küçük ve anlamlı değişikliği kayda geçirirsin.", action: "Mesajı kısa, net ve gerçek yap." },
        { icon: Upload, title: "Push", purpose: "Değişikliği GitHub'daki fork'una gönderirsin.", action: "Branch'i origin'e push et." },
        { icon: GitPullRequest, title: "Pull Request", purpose: "Değişikliğini ana projeye önerirsin.", action: "Ne yaptığını ve nasıl test ettiğini yaz." },
        { icon: MessageSquare, title: "Review", purpose: "Bakımcı yorum yapar, gerekirse düzenleme ister.", action: "Yorumu sakin oku, branch'te düzelt." },
        { icon: GitMerge, title: "Merge", purpose: "Onaylanan katkı ana koda girer.", action: "Katkın artık projenin parçasıdır." },
      ]
    : [
        { icon: Download, title: "Fork", purpose: "Copy the project into your own GitHub account.", action: "Press Fork on the original repository." },
        { icon: Download, title: "Clone", purpose: "Download your copy to your computer.", action: "Use git clone to open a local workspace." },
        { icon: GitBranch, title: "Branch", purpose: "Create a safe work branch away from main.", action: "Make the change on that branch." },
        { icon: GitCommit, title: "Commit", purpose: "Record a small, meaningful change.", action: "Keep the message short, clear, and real." },
        { icon: Upload, title: "Push", purpose: "Send the change to your GitHub fork.", action: "Push the branch to origin." },
        { icon: GitPullRequest, title: "Pull Request", purpose: "Propose your change to the main project.", action: "Explain what changed and how you tested it." },
        { icon: MessageSquare, title: "Review", purpose: "Maintainers comment and may request edits.", action: "Read calmly, update the same branch." },
        { icon: GitMerge, title: "Merge", purpose: "The approved contribution enters main.", action: "Your contribution is now part of the project." },
      ];
  const active = pipeline[activeStep];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Katkı Pipeline'ı" : "Contribution Pipeline"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[1fr_1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {pipeline.map((step, index) => {
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
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Aktif aşama" : "Active stage"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.purpose}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Sonraki refleks" : "Next reflex"}</p>
              <p className="mt-2 text-sm font-semibold">{active.action}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Terimler" : "Terms"}>
        <NoteTable
          headers={tr ? ["Terim", "Anlamı"] : ["Term", "Meaning"]}
          rows={[
            ["Fork", tr ? "Bir reponun kendi hesabına kopyasını oluşturma." : "Creating a copy of someone else's repo under your own account."],
            ["PR (Pull Request)", tr ? "Değişikliğini orijinal projeye önerme." : "Proposing your change to the original project."],
            ["Merge", tr ? "Onaylanan değişikliğin ana koda birleştirilmesi." : "Integrating an approved change into the main code."],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Fork'tan Merge'e Akış" : "Fork-to-Merge Flow"}>
        <Mermaid theme={theme} chart={flowDiagram(tr)} />
        <TerminalBlock
          caption={tr ? "Fork'tan PR'a" : "From fork to PR"}
          lines={
            tr
              ? [
                  "git clone https://github.com/<kullanici-adin>/<repo>.git",
                  "cd <repo>",
                  "git checkout -b duzeltme/kisa-aciklama",
                  { comment: true, text: "# ... değişikliği yap ve test et ..." },
                  "git add .",
                  'git commit -m "kisa ve net aciklama"',
                  "git push origin duzeltme/kisa-aciklama",
                  { comment: true, text: "# GitHub'da 'Compare & pull request' butonuna tıkla" },
                ]
              : [
                  "git clone https://github.com/<your-username>/<repo>.git",
                  "cd <repo>",
                  "git checkout -b fix/short-description",
                  { comment: true, text: "# ... make and test the change ..." },
                  "git add .",
                  'git commit -m "short clear description"',
                  "git push origin fix/short-description",
                  { comment: true, text: "# On GitHub, click 'Compare & pull request'" },
                ]
          }
        />
      </NoteSection>
    </>
  );
}
