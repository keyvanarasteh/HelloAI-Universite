import { useState } from "react";
import { CheckCircle2, GitBranch, GitCommit, GitMerge, GitPullRequest, TerminalSquare } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection, TerminalBlock } from "../components/NoteKit.jsx";

const branchDiagram = `gitGraph
  commit id: "init"
  commit id: "readme"
  branch feature
  checkout feature
  commit id: "work-1"
  commit id: "work-2"
  checkout main
  merge feature id: "merge feature"
  commit id: "release"
`;

export function GitGithubNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeStep, setActiveStep] = useState(0);
  const steps = tr
    ? [
        {
          icon: GitBranch,
          title: "Branch ac",
          body: "Ana kodu bozmadan yeni fikir icin ayri bir calisma alani baslat.",
          command: "git checkout -b feature/yeni-ozellik",
          signal: "Risk izole olur",
        },
        {
          icon: GitCommit,
          title: "Kucuk commit yap",
          body: "Her commit tek bir anlamli degisikligi anlatir; gelecekte ne oldugunu okumak kolaylasir.",
          command: 'git commit -m "ozellik: kisa aciklama"',
          signal: "Gecmis okunur",
        },
        {
          icon: GitPullRequest,
          title: "Push ve PR",
          body: "Degisikligi paylas, ekipten yorum al ve kodun ana projeye girmeden once kontrol edilmesini sagla.",
          command: "git push origin feature/yeni-ozellik",
          signal: "Ekip gorur",
        },
        {
          icon: GitMerge,
          title: "Merge et",
          body: "Onaylanan degisikligi ana koda birlestir; proje gecmisi temiz ve izlenebilir kalir.",
          command: "git merge feature/yeni-ozellik",
          signal: "Urun ilerler",
        },
      ]
    : [
        {
          icon: GitBranch,
          title: "Create a branch",
          body: "Start a separate workspace for a new idea without disturbing the main code.",
          command: "git checkout -b feature/new-feature",
          signal: "Risk is isolated",
        },
        {
          icon: GitCommit,
          title: "Make small commits",
          body: "Each commit explains one meaningful change, making history easier to read later.",
          command: 'git commit -m "feature: short description"',
          signal: "History is readable",
        },
        {
          icon: GitPullRequest,
          title: "Push and PR",
          body: "Share the change, invite feedback, and let the code be reviewed before it enters the main project.",
          command: "git push origin feature/new-feature",
          signal: "Team can review",
        },
        {
          icon: GitMerge,
          title: "Merge it",
          body: "Integrate the approved change into the main code while keeping project history traceable.",
          command: "git merge feature/new-feature",
          signal: "Product moves forward",
        },
      ];
  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Branch Studio" : "Branch Studio"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const selected = index === activeStep;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={[
                    "flex items-center gap-3 rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--surface)]">
                    {selected ? <CheckCircle2 size={19} /> : <Icon size={19} />}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{step.title}</span>
                    <span className="block text-xs text-[var(--muted)]">{step.signal}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">
                  {tr ? "Aktif adim" : "Active step"} {activeStep + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.body}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[#0b1020] p-4 text-sm text-emerald-300">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold text-white/55">
                <TerminalSquare size={14} />
                {tr ? "Komut refleksi" : "Command reflex"}
              </div>
              <code>
                <span className="mr-2 text-white/30">$</span>
                {active.command}
              </code>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Temel Kavramlar" : "Core Concepts"}>
        <NoteList
          items={
            tr
              ? [
                  "Github hesabin, senin yazilim CV'in gibi calisir — issverenler ve is ortaklari commit gecmisine bakar.",
                  "Branch: ana koddan (main) ayrilan, uzerinde bagimsiz calisilan bir dal.",
                  "Changelog: commit mesajlarinin degisiklikleri anlasilir sekilde ozetlemesi.",
                  "Teamwork: birden fazla kisi ayni projede coakisma yasamadan branch'ler ile calisir.",
                ]
              : [
                  "Your Github account works like your software CV — employers and collaborators look at your commit history.",
                  "Branch: an independent line of work split off from the main code.",
                  "Changelog: commit messages that clearly summarize what changed.",
                  "Teamwork: multiple people work on the same project without conflicts, using branches.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Bir Branch'in Hayat Dongusu" : "A Branch's Lifecycle"}>
        <Mermaid theme={theme} chart={branchDiagram} />
      </NoteSection>

      <NoteSection title={tr ? "Terminalde Ilk Kurulum ve Branch Akisi" : "First-Time Setup & Branch Flow in the Terminal"}>
        <TerminalBlock
          caption={tr ? "Global ayar (bir kere)" : "Global setup (once)"}
          lines={[
            'git config --global user.name "Adin Soyadin"',
            'git config --global user.email "eposta@ornek.com"',
          ]}
        />
        <TerminalBlock
          caption={tr ? "Gunluk branch akisi" : "Everyday branch flow"}
          lines={[
            "git checkout -b feature/yeni-ozellik",
            "git add .",
            'git commit -m "yeni ozellik: kisa aciklama"',
            "git push origin feature/yeni-ozellik",
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Kirmizi Cizgi" : "The Red Line"}>
        <NoteCallout tone="warning">
          {tr
            ? "Fake commit atmak (commit tarihini/sayisini yapay olarak sisirmek) teknik olarak mumkundur ama algilanabilir: bos commit'ler, anormal commit yogunlugu ve tutarsiz gecmis fark edilir. Sahte katki gecmisi asla yapilmamali — fark edildiginde guven kaybina yol acar."
            : "Faking commits (artificially inflating commit dates/counts) is technically possible but detectable: empty commits, unnatural commit density, and inconsistent history stand out. Never fake your contribution history — it destroys trust when discovered."}
        </NoteCallout>
      </NoteSection>
    </>
  );
}
