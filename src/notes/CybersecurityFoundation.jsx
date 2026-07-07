import { useState } from "react";
import { Binary, BrainCircuit, DatabaseZap, MemoryStick, ShieldCheck, Wrench } from "lucide-react";
import { NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

export function CybersecurityFoundationNote({ lang }) {
  const tr = lang === "tr";
  const [activeFoundation, setActiveFoundation] = useState("logic");
  const foundations = {
    logic: {
      icon: BrainCircuit,
      title: tr ? "Normal davranış" : "Normal behavior",
      unlocks: tr ? "Anomali, bug ve zafiyet ayrımını yaparsın." : "You can separate anomaly, bug, and vulnerability.",
      example: tr ? "Bir login akışında ne olmalı ki bypass'ı fark edesin?" : "What should happen in login so you can notice a bypass?",
    },
    data: {
      icon: DatabaseZap,
      title: tr ? "Veri akışı" : "Data flow",
      unlocks: tr ? "SQL injection, XSS ve yetki kontrolü gibi konular netleşir." : "SQL injection, XSS, and authorization checks become clearer.",
      example: tr ? "Kullanıcı girdisi nereden geliyor, nereye gidiyor?" : "Where does user input come from, and where does it go?",
    },
    memory: {
      icon: MemoryStick,
      title: tr ? "Bellek mantığı" : "Memory logic",
      unlocks: tr ? "Buffer overflow ve düşük seviye exploit mantığını anlarsın." : "You understand buffer overflow and low-level exploit logic.",
      example: tr ? "Veri ayrılan alanı aşarsa ne olur?" : "What happens when data exceeds allocated space?",
    },
    tools: {
      icon: Wrench,
      title: tr ? "Araç mantığı" : "Tool logic",
      unlocks: tr ? "Hazır aracı kör kullanmak yerine çıktısını yorumlarsın." : "You interpret tool output instead of using tools blindly.",
      example: tr ? "Nmap sonucu hangi servis riskini işaret ediyor?" : "Which service risk does the Nmap result point to?",
    },
  };
  const active = foundations[activeFoundation];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Siber Güvenlik Temel Haritası" : "Cybersecurity Foundation Map"}>
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
                  {tr ? "Açtığı güvenlik konusu" : "Security concept unlocked"}
                </div>
                <p className="text-sm leading-6">{active.unlocks}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <Binary size={14} />
                  {tr ? "Düşünme sorusu" : "Thinking question"}
                </div>
                <p className="text-sm leading-6 text-[var(--muted)]">{active.example}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Neden Algoritma ve Yazılım Mantığı?" : "Why Algorithm & Software Logic?"}>
        <NoteList
          items={
            tr
              ? [
                  "Bir sistemin normalde nasıl davranması gerektiğini bilmeden, sapmaları fark edemezsin.",
                  "Örnek: SQL injection'ı anlamak için önce SQL sorgularının nasıl çalıştığını bilmek gerekir.",
                  "Bir buffer overflow'u anlamak için bellek yönetimini ve düşük seviye programlamayı bilmek gerekir.",
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
          ? "Siber güvenlik, yalnızca hazır araçları çalıştırmak değildir; araçların arkasındaki mantığı anlamak gerekir. Önce sağlam bir programlama ve algoritma temeli kurulmalı, güvenlik bilgisi bu temelin üzerine inşa edilmelidir."
          : "Cybersecurity isn't just running ready-made tools — it's understanding the logic behind them. A solid programming and algorithm foundation should come first; security knowledge is built on top of it."}
      </NoteCallout>
    </>
  );
}
