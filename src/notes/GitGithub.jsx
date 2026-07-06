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

  return (
    <>
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
