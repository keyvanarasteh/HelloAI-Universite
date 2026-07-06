import { useState } from "react";
import { Brain, Gauge, Rocket, ShieldCheck, Zap } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

const tierDiagram = (tr) => `flowchart LR
  T["${tr ? "Gorev" : "Task"}"] --> D{"${tr ? "Ne kadar zor?" : "How hard is it?"}"}
  D -->|${tr ? "basit, net talimat" : "simple, clear instructions"}| M["${tr ? "Mini / Base model" : "Mini / Base model"}"]
  D -->|${tr ? "orta karmasiklik" : "medium complexity"}| F["${tr ? "Full model" : "Full model"}"]
  D -->|${tr ? "cok adimli, mantik agirlikli" : "multi-step, logic-heavy"}| R["${tr ? "Extra thinking / Reasoning" : "Extra thinking / Reasoning"}"]
`;

export function LlmModelsThinkingLevelsNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeScenario, setActiveScenario] = useState("balanced");
  const scenarios = {
    simple: {
      icon: Zap,
      title: tr ? "Basit ve hizli" : "Simple and fast",
      model: tr ? "Mini / base model" : "Mini / base model",
      reason: tr ? "Talimat net, risk dusuk, cikti kolay kontrol edilir." : "Instructions are clear, risk is low, output is easy to check.",
      verify: tr ? "Sonucu hizlica oku ve uygulamada dene." : "Read the result quickly and try it in the app.",
    },
    balanced: {
      icon: Gauge,
      title: tr ? "Dengeli is" : "Balanced task",
      model: tr ? "Full model" : "Full model",
      reason: tr ? "Biraz belirsizlik veya birden fazla dosya/karar vardir." : "There is some ambiguity or more than one file/decision.",
      verify: tr ? "Build/test calistir, mantigi gozden gecir." : "Run build/tests and review the logic.",
    },
    complex: {
      icon: Brain,
      title: tr ? "Cok adimli mantik" : "Multi-step logic",
      model: tr ? "Extra thinking / reasoning" : "Extra thinking / reasoning",
      reason: tr ? "Planlama, karsilastirma, hata ayiklama veya guvenlik muhakemesi gerekir." : "Planning, comparison, debugging, or security reasoning is needed.",
      verify: tr ? "Ara adimlari oku, test kapsamını genislet." : "Read intermediate steps and broaden test coverage.",
    },
    critical: {
      icon: ShieldCheck,
      title: tr ? "Kritik karar" : "Critical decision",
      model: tr ? "En guclu model + insan denetimi" : "Strongest model + human review",
      reason: tr ? "Hata maliyeti yuksekse model secimi yetmez; denetim zorunludur." : "If the cost of error is high, model choice is not enough; review is required.",
      verify: tr ? "Kaynak, test, ikinci goz ve gercek ortam kontrolu yap." : "Check sources, tests, second review, and real environment behavior.",
    },
  };
  const active = scenarios[activeScenario];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Model Secim Mikseri" : "Model Choice Mixer"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(scenarios).map(([id, scenario]) => {
              const Icon = scenario.icon;
              const selected = id === activeScenario;
              return (
                <button
                  key={id}
                  onClick={() => setActiveScenario(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{scenario.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Onerilen seviye" : "Recommended level"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.model}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.reason}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <Rocket size={14} />
                {tr ? "Dogrulama refleksi" : "Verification reflex"}
              </div>
              <p className="text-sm font-semibold">{active.verify}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Egitim Verisi ve Sinir Agi" : "Training Data & Neural Networks"}>
        <NoteList
          items={
            tr
              ? [
                  "Model, devasa metin verisinden kelimeler arasi oruntuleri ogrenir; ezber degil, oruntu ogrenimi yapar.",
                  "Egitim verisinin kalitesi, modelin kalitesini dogrudan belirler.",
                  "Sinir aglari, insan beynindeki noron-sinaps mantigindan esinlenir ama birebir ayni degildir.",
                  "Claude gibi modellerin zor gorevlerdeki gucu, buyuk olcude kaliteli/secilmis egitim verisinden gelir.",
                ]
              : [
                  "A model learns patterns between words from huge amounts of text — pattern learning, not memorization.",
                  "The quality of the training data directly determines the quality of the model.",
                  "Neural networks are inspired by the brain's neuron-synapse logic, but are not identical to it.",
                  "Models like Claude perform well on hard tasks largely due to high-quality, carefully selected training data.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Ise Gore Model/Dusunme Seviyesi Secimi" : "Picking a Model/Thinking Level for the Job"}>
        <Mermaid theme={theme} chart={tierDiagram(tr)} />
        <NoteTable
          headers={tr ? ["Seviye", "Ne zaman kullanilir"] : ["Level", "When to use it"]}
          rows={[
            [tr ? "Base / mini" : "Base / mini", tr ? "Basit, hizli, net talimatli isler." : "Simple, fast, clearly instructed tasks."],
            [tr ? "Full" : "Full", tr ? "Orta-yuksek karmasiklikta dengeli secim." : "A balanced choice for medium-to-high complexity."],
            [
              tr ? "Extra thinking / reasoning" : "Extra thinking / reasoning",
              tr ? "Karmasik, cok adimli, mantik gerektiren isler." : "Complex, multi-step, logic-heavy work.",
            ],
          ]}
        />
      </NoteSection>

      <NoteCallout>
        {tr
          ? "Yeni bir model cikinca ilk 1-2 ay genelde en yuksek performansi verir; guncel modele gecmek mantiklidir. Yine de kritik islerde hicbir modele korukorune guvenilmemeli — ciktiyi denetlemek gerekir."
          : "A newly released model usually performs best in its first 1-2 months; switching to it early is often worthwhile. Still, no model should be trusted blindly on critical work — always verify the output."}
      </NoteCallout>
    </>
  );
}
