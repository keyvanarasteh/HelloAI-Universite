import { NoteCallout, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function AgentOutputAuditNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Nasil Denetlenir?" : "How to Audit"}>
        <NoteTable
          headers={tr ? ["Yontem", "Ne yapar"] : ["Method", "What it does"]}
          rows={[
            [
              tr ? "Live test" : "Live test",
              tr ? "Uygulamayi gercekten calistirip gozle/deneyerek dogrulama." : "Actually run the app and verify it by trying it out.",
            ],
            [
              tr ? "Logic test" : "Logic test",
              tr
                ? "Kodun mantiginin is kurallarina uygun olup olmadigini okuyarak kontrol etme."
                : "Reading the code to check it matches the intended business rules.",
            ],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Unit Test vs Real Test" : "Unit Test vs Real Test"}>
        <NoteTable
          headers={tr ? ["Tur", "Aciklama"] : ["Type", "Description"]}
          rows={[
            [
              tr ? "Unit test" : "Unit test",
              tr
                ? "Kucuk, izole bir fonksiyonun beklenen ciktiyi verip vermedigini otomatik kontrol eder."
                : "Automatically checks whether a small, isolated function gives the expected output.",
            ],
            [
              tr ? "Real test" : "Real test",
              tr
                ? "Uygulamanin butun olarak, gercek bir kullanici gibi uctan uca denenmesi."
                : "Trying the whole app end-to-end like a real user would.",
            ],
          ]}
        />
        <TerminalBlock
          caption={tr ? "Unit test calistirma ornegi" : "Running a unit test suite"}
          lines={["pytest -q", "npm run build"]}
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "Ikisi de gereklidir; sadece birine guvenmek yeterli degildir. AI agent'lar hatali, eksik veya \"kendinden emin ama yanlis\" kod uretebilir — yazilan kod her zaman insan tarafindan denetlenmelidir."
          : "Both are needed; relying on only one is not enough. AI agents can produce buggy, incomplete, or confidently-wrong code — written code should always be verified by a human."}
      </NoteCallout>
    </>
  );
}
