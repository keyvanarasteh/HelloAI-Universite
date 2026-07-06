import { useState } from "react";
import { Binary, BrainCircuit, DatabaseZap, MemoryStick, ShieldCheck, Wrench } from "lucide-react";
import { NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

export function CybersecurityFoundationNote({ lang }) {
  const tr = lang === "tr";
  const [activeFoundation, setActiveFoundation] = useState("logic");
  const foundations = {
    logic: {
      icon: BrainCircuit,
      title: tr ? "Normal davranis" : "Normal behavior",
      unlocks: tr ? "Anomali, bug ve zafiyet ayrimini yaparsin." : "You can separate anomaly, bug, and vulnerability.",
      example: tr ? "Bir login akisinda ne olmali ki bypass'i fark edesin?" : "What should happen in login so you can notice a bypass?",
    },
    data: {
      icon: DatabaseZap,
      title: tr ? "Veri akisi" : "Data flow",
      unlocks: tr ? "SQL injection, XSS ve yetki kontrolu gibi konular netlesir." : "SQL injection, XSS, and authorization checks become clearer.",
      example: tr ? "Kullanici girdisi nereden geliyor, nereye gidiyor?" : "Where does user input come from, and where does it go?",
    },
    memory: {
      icon: MemoryStick,
      title: tr ? "Bellek mantigi" : "Memory logic",
      unlocks: tr ? "Buffer overflow ve dusuk seviye exploit mantigini anlarsin." : "You understand buffer overflow and low-level exploit logic.",
      example: tr ? "Veri ayrilan alani asarsa ne olur?" : "What happens when data exceeds allocated space?",
    },
    tools: {
      icon: Wrench,
      title: tr ? "Arac mantigi" : "Tool logic",
      unlocks: tr ? "Hazir araci kor kullanmak yerine ciktisini yorumlarsin." : "You interpret tool output instead of using tools blindly.",
      example: tr ? "Nmap sonucu hangi servis riskini isaret ediyor?" : "Which service risk does the Nmap result point to?",
    },
  };
  const active = foundations[activeFoundation];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Siber Guvenlik Temel Haritasi" : "Cybersecurity Foundation Map"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(foundations).map(([id, item]) => {
              const Icon = item.icon;
              const selected = id === activeFoundation;
              return (
                <button
                  key={id}
                  onClick={() => setActiveFoundation(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{item.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Temel beceri" : "Foundation skill"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <ShieldCheck size={14} />
                  {tr ? "Actigi guvenlik konusu" : "Security concept unlocked"}
                </div>
                <p className="text-sm leading-6">{active.unlocks}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <Binary size={14} />
                  {tr ? "Dusunme sorusu" : "Thinking question"}
                </div>
                <p className="text-sm leading-6 text-[var(--muted)]">{active.example}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Neden Algoritma ve Yazilim Mantigi?" : "Why Algorithm & Software Logic?"}>
        <NoteList
          items={
            tr
              ? [
                  "Bir sistemin normalde nasil davranmasi gerektigini bilmeden, sapmalari fark edemezsin.",
                  "Ornek: SQL injection'i anlamak icin once SQL sorgularinin nasil calistigini bilmek gerekir.",
                  "Bir bufer tasmasini anlamak icin bellek yonetimini ve dusuk seviye programlamayi bilmek gerekir.",
                ]
              : [
                  "You cannot spot deviations without knowing how a system is supposed to behave normally.",
                  "Example: understanding SQL injection requires first knowing how SQL queries work.",
                  "Understanding a buffer overflow requires knowing memory management and low-level programming.",
                ]
          }
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Siber guvenlik, sadece hazir araclari calistirmak degildir; araclarin arkasindaki mantigi anlamak gerekir. Once saglam bir programlama ve algoritma temeli kurulmali, guvenlik bilgisi bu temelin uzerine insa edilmelidir."
          : "Cybersecurity isn't just running ready-made tools — it's understanding the logic behind them. A solid programming and algorithm foundation should come first; security knowledge is built on top of it."}
      </NoteCallout>
    </>
  );
}
