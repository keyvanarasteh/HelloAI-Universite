import { useState } from "react";
import { Brain, Gauge, Rocket, ShieldCheck, Zap } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

const tierDiagram = (tr) => `flowchart LR
  T["${tr ? "Görev" : "Task"}"] --> D{"${tr ? "Ne kadar zor?" : "How hard is it?"}"}
  D -->|${tr ? "basit, net talimat" : "simple, clear instructions"}| M["${tr ? "Mini / Base model" : "Mini / Base model"}"]
  D -->|${tr ? "orta karmaşıklık" : "medium complexity"}| F["${tr ? "Full model" : "Full model"}"]
  D -->|${tr ? "çok adımlı, mantık ağırlıklı" : "multi-step, logic-heavy"}| R["${tr ? "Extra thinking / Reasoning" : "Extra thinking / Reasoning"}"]
`;

export function LlmModelsThinkingLevelsNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeScenario, setActiveScenario] = useState("balanced");
  const scenarios = {
    simple: {
      icon: Zap,
      title: tr ? "Basit ve hızlı" : "Simple and fast",
      model: tr ? "Mini / base model" : "Mini / base model",
      reason: tr ? "Talimat net, risk düşük, çıktı kolay kontrol edilir." : "Instructions are clear, risk is low, output is easy to check.",
      verify: tr ? "Sonucu hızlıca oku ve uygulamada dene." : "Read the result quickly and try it in the app.",
    },
    balanced: {
      icon: Gauge,
      title: tr ? "Dengeli iş" : "Balanced task",
      model: tr ? "Full model" : "Full model",
      reason: tr ? "Biraz belirsizlik veya birden fazla dosya/karar vardır." : "There is some ambiguity or more than one file/decision.",
      verify: tr ? "Build/test çalıştır, mantığı gözden geçir." : "Run build/tests and review the logic.",
    },
    complex: {
      icon: Brain,
      title: tr ? "Çok adımlı mantık" : "Multi-step logic",
      model: tr ? "Extra thinking / reasoning" : "Extra thinking / reasoning",
      reason: tr ? "Planlama, karşılaştırma, hata ayıklama veya güvenlik muhakemesi gerekir." : "Planning, comparison, debugging, or security reasoning is needed.",
      verify: tr ? "Ara adımları oku, test kapsamını genişlet." : "Read intermediate steps and broaden test coverage.",
    },
    critical: {
      icon: ShieldCheck,
      title: tr ? "Kritik karar" : "Critical decision",
      model: tr ? "En güçlü model + insan denetimi" : "Strongest model + human review",
      reason: tr ? "Hata maliyeti yüksekse model seçimi yetmez; denetim zorunludur." : "If the cost of error is high, model choice is not enough; review is required.",
      verify: tr ? "Kaynak, test, ikinci göz ve gerçek ortam kontrolü yap." : "Check sources, tests, second review, and real environment behavior.",
    },
  };
  const active = scenarios[activeScenario];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Model Seçim Mikseri" : "Model Choice Mixer"}>
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Önerilen seviye" : "Recommended level"}</p>
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
                {tr ? "Doğrulama refleksi" : "Verification reflex"}
              </div>
              <p className="text-sm font-semibold">{active.verify}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Eğitim Verisi ve Sinir Ağı" : "Training Data & Neural Networks"}>
        <NoteList
          items={
            tr
              ? [
                  "Model, devasa metin verilerinden kelimeler arasındaki örüntüleri öğrenir; yaptığı şey ezber değil, örüntü öğrenimidir.",
                  "Eğitim verisinin kalitesi, modelin kalitesini doğrudan belirler.",
                  "Sinir ağları, insan beynindeki nöron-sinaps mantığından esinlenir; ancak birebir aynı değildir.",
                  "Claude gibi modellerin zor görevlerdeki gücü, büyük ölçüde kaliteli ve iyi seçilmiş eğitim verilerinden gelir.",
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

      <NoteSection title={tr ? "İşe Göre Model/Düşünme Seviyesi Seçimi" : "Picking a Model/Thinking Level for the Job"}>
        <Mermaid theme={theme} chart={tierDiagram(tr)} />
        <NoteTable
          headers={tr ? ["Seviye", "Ne zaman kullanılır"] : ["Level", "When to use it"]}
          rows={[
            [tr ? "Base / mini" : "Base / mini", tr ? "Basit, hızlı, net talimatlı işler." : "Simple, fast, clearly instructed tasks."],
            [tr ? "Full" : "Full", tr ? "Orta ve yüksek karmaşıklıkta dengeli seçim." : "A balanced choice for medium-to-high complexity."],
            [
              tr ? "Extra thinking / reasoning" : "Extra thinking / reasoning",
              tr ? "Karmaşık, çok adımlı, mantık gerektiren işler." : "Complex, multi-step, logic-heavy work.",
            ],
          ]}
        />
      </NoteSection>

      <NoteCallout>
        {tr
          ? "Yeni bir model çıktığında ilk 1-2 ay genellikle en yüksek performansı verir; güncel modele geçmek çoğu zaman mantıklıdır. Yine de kritik işlerde hiçbir modele körü körüne güvenilmemeli; çıktı mutlaka denetlenmelidir."
          : "A newly released model usually performs best in its first 1-2 months; switching to it early is often worthwhile. Still, no model should be trusted blindly on critical work — always verify the output."}
      </NoteCallout>
    </>
  );
}
