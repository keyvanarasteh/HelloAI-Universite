import { useState } from "react";
import { Bot, Code2, Database, MessageSquare, Monitor, Server, Wrench } from "lucide-react";
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
  const [activeLayer, setActiveLayer] = useState("frontend");
  const [activeAi, setActiveAi] = useState("agent");

  const layers = [
    {
      id: "frontend",
      icon: Monitor,
      title: "FrontEnd",
      short: tr ? "Kullanicinin gordugu ekran" : "The screen the user sees",
      detail: tr
        ? "Butonlar, formlar, renkler, sayfa gecisleri ve kullanici etkilesimi burada yasiyor."
        : "Buttons, forms, colors, page transitions, and user interaction live here.",
      tech: "HTML + CSS + JavaScript + React",
    },
    {
      id: "backend",
      icon: Server,
      title: "BackEnd",
      short: tr ? "Is mantigi ve API katmani" : "Business logic and API layer",
      detail: tr
        ? "Yetkilendirme, veri dogrulama, hesaplama ve kalici sistem kurallari genelde burada calisir."
        : "Authorization, validation, calculations, and persistent system rules usually run here.",
      tech: tr ? "Bu projede yok" : "Not used in this project",
    },
    {
      id: "database",
      icon: Database,
      title: tr ? "Veri" : "Data",
      short: tr ? "Bilginin saklandigi yer" : "Where information persists",
      detail: tr
        ? "Gercek uygulamalarda veritabani olur; bu projede tercih ve cevaplar tarayicinin localStorage alaninda tutulur."
        : "Real apps often use a database; this project keeps choices and answers in browser localStorage.",
      tech: "localStorage",
    },
  ];

  const aiModes = {
    chat: {
      icon: MessageSquare,
      title: "LLM Chat",
      prompt: tr ? "Bu hatayi nasil cozerim?" : "How do I fix this bug?",
      result: tr ? "Metinle aciklar, ornek verir, yonlendirir." : "Explains in text, gives examples, guides you.",
      action: tr ? "Soyler" : "Tells",
    },
    agent: {
      icon: Bot,
      title: "Agentic AI",
      prompt: tr ? "Projede hatayi bul, duzelt, test et." : "Find the bug in the project, fix it, test it.",
      result: tr ? "Dosya okur, kod yazar, komut calistirir ve sonucu raporlar." : "Reads files, edits code, runs commands, and reports the result.",
      action: tr ? "Yapar" : "Acts",
    },
  };
  const layer = layers.find((item) => item.id === activeLayer) || layers[0];
  const LayerIcon = layer.icon;
  const selectedAi = aiModes[activeAi];
  const AiIcon = selectedAi.icon;

  return (
    <>
      <NoteSection title={tr ? "Canli Mimari Katmanlari" : "Live Architecture Layers"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-2">
            {layers.map((item) => {
              const Icon = item.icon;
              const selected = item.id === activeLayer;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveLayer(item.id)}
                  className={[
                    "flex items-center gap-3 rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--surface)]">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{item.title}</span>
                    <span className="block text-xs text-[var(--muted)]">{item.short}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Secilen katman" : "Selected layer"}</p>
                <h3 className="mt-2 text-xl font-bold">{layer.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <LayerIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{layer.detail}</p>
            <div className="mt-5 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3 text-sm">
              <Code2 size={16} className="shrink-0 text-[var(--brand)]" />
              <span className="font-semibold">{layer.tech}</span>
            </div>
          </div>
        </div>
      </NoteSection>

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
        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
            {Object.entries(aiModes).map(([id, item]) => {
              const Icon = item.icon;
              const selected = activeAi === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveAi(id)}
                  className={[
                    "rounded-lg border p-4 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="mt-3 block text-sm font-bold">{item.title}</span>
                  <span className="mt-1 block text-xs text-[var(--muted)]">{item.action}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <AiIcon size={20} />
              </span>
              <h3 className="text-lg font-bold">{selectedAi.title}</h3>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Gorev" : "Task"}</p>
                <p className="mt-2 text-sm leading-6">{selectedAi.prompt}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <Wrench size={14} />
                  {tr ? "Cikti davranisi" : "Output behavior"}
                </div>
                <p className="text-sm leading-6 text-[var(--muted)]">{selectedAi.result}</p>
              </div>
            </div>
          </div>
        </div>
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
