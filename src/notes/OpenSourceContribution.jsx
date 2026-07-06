import { useState } from "react";
import { CheckCircle2, Download, GitBranch, GitCommit, GitMerge, GitPullRequest, MessageSquare, Upload } from "lucide-react";
import { Mermaid, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

const flowDiagram = `flowchart LR
  A["Fork"] --> B["Clone"]
  B --> C["Branch"]
  C --> D["Commit"]
  D --> E["Push"]
  E --> F["Pull Request"]
  F -->|review| G{"Onaylandi mi?"}
  G -->|evet| H["Merge"]
  G -->|degisiklik iste| C
`;

export function OpenSourceContributionNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeStep, setActiveStep] = useState(0);
  const pipeline = tr
    ? [
        { icon: Download, title: "Fork", purpose: "Projeyi kendi Github hesabina kopyalarsin.", action: "Orijinal repoda Fork butonuna bas." },
        { icon: Download, title: "Clone", purpose: "Kendi kopyani bilgisayarina indirirsin.", action: "git clone ile lokal calisma alani ac." },
        { icon: GitBranch, title: "Branch", purpose: "Ana koddan ayrilan guvenli bir calisma dali acarsin.", action: "Degisikligi bu dalda yap." },
        { icon: GitCommit, title: "Commit", purpose: "Kucuk ve anlamli degisikligi kayda gecirirsin.", action: "Mesaji kisa, net ve gercek yap." },
        { icon: Upload, title: "Push", purpose: "Degisikligi Github'daki fork'una gonderirsin.", action: "Branch'i origin'e push et." },
        { icon: GitPullRequest, title: "Pull Request", purpose: "Degisikligini ana projeye onerirsin.", action: "Ne yaptigini ve nasil test ettigini yaz." },
        { icon: MessageSquare, title: "Review", purpose: "Bakimci yorum yapar, gerekirse duzenleme ister.", action: "Yorumu sakin oku, branch'te duzelt." },
        { icon: GitMerge, title: "Merge", purpose: "Onaylanan katkı ana koda girer.", action: "Katkin artik projenin parcasidir." },
      ]
    : [
        { icon: Download, title: "Fork", purpose: "Copy the project into your own Github account.", action: "Press Fork on the original repository." },
        { icon: Download, title: "Clone", purpose: "Download your copy to your computer.", action: "Use git clone to open a local workspace." },
        { icon: GitBranch, title: "Branch", purpose: "Create a safe work branch away from main.", action: "Make the change on that branch." },
        { icon: GitCommit, title: "Commit", purpose: "Record a small, meaningful change.", action: "Keep the message short, clear, and real." },
        { icon: Upload, title: "Push", purpose: "Send the change to your Github fork.", action: "Push the branch to origin." },
        { icon: GitPullRequest, title: "Pull Request", purpose: "Propose your change to the main project.", action: "Explain what changed and how you tested it." },
        { icon: MessageSquare, title: "Review", purpose: "Maintainers comment and may request edits.", action: "Read calmly, update the same branch." },
        { icon: GitMerge, title: "Merge", purpose: "The approved contribution enters main.", action: "Your contribution is now part of the project." },
      ];
  const active = pipeline[activeStep];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Katki Pipeline'i" : "Contribution Pipeline"}>
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Aktif asama" : "Active stage"}</p>
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
          headers={tr ? ["Terim", "Anlami"] : ["Term", "Meaning"]}
          rows={[
            ["Fork", tr ? "Bir reponun kendi hesabina kopyasini olusturma." : "Creating a copy of someone else's repo under your own account."],
            ["PR (Pull Request)", tr ? "Degisikligini orijinal projeye onerme." : "Proposing your change to the original project."],
            ["Merge", tr ? "Onaylanan degisikligin ana koda birlestirilmesi." : "Integrating an approved change into the main code."],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Fork'tan Merge'e Akis" : "Fork-to-Merge Flow"}>
        <Mermaid theme={theme} chart={flowDiagram} />
        <TerminalBlock
          caption={tr ? "Fork'tan PR'a" : "From fork to PR"}
          lines={[
            "git clone https://github.com/<kullanici-adin>/<repo>.git",
            "cd <repo>",
            "git checkout -b duzeltme/kisa-aciklama",
            { comment: true, text: tr ? "# ... degisikligi yap ve test et ..." : "# ... make and test the change ..." },
            "git add .",
            'git commit -m "kisa ve net aciklama"',
            "git push origin duzeltme/kisa-aciklama",
            { comment: true, text: tr ? "# Github'da 'Compare & pull request' butonuna tikla" : "# On Github, click 'Compare & pull request'" },
          ]}
        />
      </NoteSection>
    </>
  );
}
