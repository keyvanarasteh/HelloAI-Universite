import { Mermaid, NoteCallout, NoteSection, NoteTable } from "../components/NoteKit.jsx";

const architectureDiagram = `flowchart LR
  U["User / Kullanici"] --> F["FrontEnd\n(HTML, CSS, JS, React)"]
  F <--> B["BackEnd\n(API, is mantigi)"]
  B <--> D[("Database")]
`;

const agentDiagram = `flowchart TB
  subgraph chat[LLM Chat]
    direction LR
    Q1["Soru"] --> M1["Model"] --> A1["Metin cevap"]
  end
  subgraph agent[Agentic AI]
    direction LR
    Q2["Gorev"] --> M2["Model"] --> T["Arac cagir\n(dosya, komut, arama)"]
    T --> M2
    M2 --> A2["Eylem + sonuc"]
  end
`;

export function FrontendBackendAgenticNote({ lang, theme }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "FrontEnd vs BackEnd" : "FrontEnd vs BackEnd"}>
        <Mermaid theme={theme} chart={architectureDiagram} />
        <NoteTable
          headers={tr ? ["Katman", "Ne yapar", "Bu projedeki hali"] : ["Layer", "What it does", "In this project"]}
          rows={[
            [
              "FrontEnd",
              tr ? "Kullanicinin tarayicida gordugu ve etkilesime gectigi kisim." : "What the user sees and interacts with in the browser.",
              "React + Vite + Tailwind CSS",
            ],
            [
              "BackEnd",
              tr ? "Verinin islendigi, saklandigi, is mantiginin calistigi sunucu tarafi." : "The server side where data is processed, stored, business logic runs.",
              tr ? "Yok — bu proje sadece FrontEnd, veriler localStorage'da" : "None — this project is FrontEnd-only, data lives in localStorage",
            ],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "LLM Chat vs Agentic AI" : "LLM Chat vs Agentic AI"}>
        <Mermaid theme={theme} chart={agentDiagram} />
        <NoteCallout>
          {tr
            ? "LLM Chat: soru sorulur, model metinle cevap verir. Agentic AI: model arac kullanarak dosya okuma/yazma, komut calistirma gibi eylemleri zincirler (Claude Code, Codex). Fark: chat modeli \"soyler\", agent \"yapar\"."
            : "LLM Chat: you ask a question, the model replies with text. Agentic AI: the model chains actions using tools — reading/writing files, running commands (Claude Code, Codex). The difference: a chat model \"tells\", an agent \"does\"."}
        </NoteCallout>
      </NoteSection>
    </>
  );
}
