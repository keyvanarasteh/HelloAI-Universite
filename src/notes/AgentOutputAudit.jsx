import { useState } from "react";
import { BrainCircuit, CheckCircle2, Eye, FlaskConical, PlayCircle, ShieldAlert } from "lucide-react";
import { NoteCallout, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function AgentOutputAuditNote({ lang }) {
  const tr = lang === "tr";
  const [activeMode, setActiveMode] = useState("live");
  const modes = {
    live: {
      icon: PlayCircle,
      title: tr ? "Live test" : "Live test",
      question: tr ? "Uygulama gerçekten çalışıyor mu?" : "Does the app really work?",
      action: tr ? "Tarayıcıda aç, tıkla, form doldur ve beklenen ekranı gözle." : "Open it in the browser, click, fill forms, observe the expected screen.",
      risk: tr ? "Sadece derlenmesi yetmez; kullanıcı akışı bozuk olabilir." : "Compiling is not enough; the user flow may still be broken.",
    },
    logic: {
      icon: BrainCircuit,
      title: tr ? "Logic test" : "Logic test",
      question: tr ? "Kod iş kuralını doğru temsil ediyor mu?" : "Does the code represent the business rule?",
      action: tr ? "Koşulları, veri akışını ve edge case'leri oku." : "Read conditions, data flow, and edge cases.",
      risk: tr ? "Kod çalışır ama yanlış karar verebilir." : "The code may run but make the wrong decision.",
    },
    unit: {
      icon: FlaskConical,
      title: tr ? "Unit test" : "Unit test",
      question: tr ? "Küçük parça beklenen çıktıyı veriyor mu?" : "Does the small unit return the expected output?",
      action: tr ? "İzole fonksiyonları otomatik testle kontrol et." : "Check isolated functions with automated tests.",
      risk: tr ? "Unit test iyi olsa da bütün akışı garanti etmez." : "Good unit tests still do not guarantee the full flow.",
    },
    real: {
      icon: Eye,
      title: tr ? "Real test" : "Real test",
      question: tr ? "Gerçek kullanıcı gibi deneyince ne oluyor?" : "What happens when trying it like a real user?",
      action: tr ? "Mobil/desktop, boş veri, uzun metin ve hata durumlarını dene." : "Try mobile/desktop, empty data, long text, and error states.",
      risk: tr ? "En değerli sorunlar genellikle burada görünür." : "The most valuable issues often appear here.",
    },
  };
  const active = modes[activeMode];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "AI Çıktısı Denetim Konsolu" : "AI Output Audit Console"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(modes).map(([id, mode]) => {
              const Icon = mode.icon;
              const selected = id === activeMode;
              return (
                <button
                  key={id}
                  onClick={() => setActiveMode(id)}
                  className={[
                    "flex min-h-28 flex-col justify-between rounded-lg border p-4 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{mode.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Denetim sorusu" : "Audit question"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.question}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <CheckCircle2 size={14} />
                  {tr ? "Ne yap" : "What to do"}
                </div>
                <p className="text-sm leading-6">{active.action}</p>
              </div>
              <div className="rounded-lg border border-[var(--danger)]/40 bg-[var(--danger-soft)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--danger)]">
                  <ShieldAlert size={14} />
                  {tr ? "Kaçırılan risk" : "Missed risk"}
                </div>
                <p className="text-sm leading-6 text-[var(--text)]">{active.risk}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Nasıl Denetlenir?" : "How to Audit"}>
        <NoteTable
          headers={tr ? ["Yöntem", "Ne yapar"] : ["Method", "What it does"]}
          rows={[
            [
              tr ? "Live test" : "Live test",
              tr ? "Uygulamayı gerçekten çalıştırıp gözlemleyerek ve deneyerek doğrulama." : "Actually run the app and verify it by trying it out.",
            ],
            [
              tr ? "Logic test" : "Logic test",
              tr
                ? "Kod mantığının iş kurallarına uygun olup olmadığını okuyarak kontrol etme."
                : "Reading the code to check it matches the intended business rules.",
            ],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Unit Test vs Real Test" : "Unit Test vs Real Test"}>
        <NoteTable
          headers={tr ? ["Tür", "Açıklama"] : ["Type", "Description"]}
          rows={[
            [
              tr ? "Unit test" : "Unit test",
              tr
                ? "Küçük, izole bir fonksiyonun beklenen çıktıyı verip vermediğini otomatik kontrol eder."
                : "Automatically checks whether a small, isolated function gives the expected output.",
            ],
            [
              tr ? "Real test" : "Real test",
              tr
                ? "Uygulamanın bütün olarak, gerçek bir kullanıcı gibi uçtan uca denenmesi."
                : "Trying the whole app end-to-end like a real user would.",
            ],
          ]}
        />
        <TerminalBlock
          caption={tr ? "Unit test çalıştırma örneği" : "Running a unit test suite"}
          lines={["pytest -q", "npm run build"]}
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "İkisi de gereklidir; sadece birine güvenmek yeterli değildir. AI agent'lar hatalı, eksik veya \"kendinden emin ama yanlış\" kod üretebilir; yazılan kod her zaman insan tarafından denetlenmelidir."
          : "Both are needed; relying on only one is not enough. AI agents can produce buggy, incomplete, or confidently-wrong code — written code should always be verified by a human."}
      </NoteCallout>
    </>
  );
}
