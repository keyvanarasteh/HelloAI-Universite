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

  return (
    <>
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
