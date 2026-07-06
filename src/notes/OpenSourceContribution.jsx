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

  return (
    <>
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
