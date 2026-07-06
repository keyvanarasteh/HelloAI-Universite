import { Mermaid, NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

const tierDiagram = (tr) => `flowchart LR
  T["${tr ? "Gorev" : "Task"}"] --> D{"${tr ? "Ne kadar zor?" : "How hard is it?"}"}
  D -->|${tr ? "basit, net talimat" : "simple, clear instructions"}| M["${tr ? "Mini / Base model" : "Mini / Base model"}"]
  D -->|${tr ? "orta karmasiklik" : "medium complexity"}| F["${tr ? "Full model" : "Full model"}"]
  D -->|${tr ? "cok adimli, mantik agirlikli" : "multi-step, logic-heavy"}| R["${tr ? "Extra thinking / Reasoning" : "Extra thinking / Reasoning"}"]
`;

export function LlmModelsThinkingLevelsNote({ lang, theme }) {
  const tr = lang === "tr";

  return (
    <>
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
