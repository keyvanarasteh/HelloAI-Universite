import { useState } from "react";
import { Code2, Eye, LockKeyhole, Router, ShieldCheck, Unlock } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const httpDiagram = (tr) => `sequenceDiagram
  participant B as ${tr ? "Tarayıcı" : "Browser"}
  participant E as ${tr ? "Ağ Dinleyen" : "Network Eavesdropper"}
  participant S as ${tr ? "Sunucu" : "Server"}
  B->>S: HTTP ${tr ? "istek (düz metin)" : "request (plain text)"}
  Note over E: ${tr ? "Trafiği okuyabilir" : "Can read the traffic"}
  S->>B: HTTP ${tr ? "cevap (düz metin)" : "response (plain text)"}
`;

const httpsDiagram = (tr) => `sequenceDiagram
  participant B as ${tr ? "Tarayıcı" : "Browser"}
  participant E as ${tr ? "Ağ Dinleyen" : "Network Eavesdropper"}
  participant S as ${tr ? "Sunucu" : "Server"}
  B->>S: HTTPS ${tr ? "istek (TLS ile şifreli)" : "request (TLS-encrypted)"}
  Note over E: ${tr ? "Sadece şifreli veri görür" : "Only sees encrypted data"}
  S->>B: HTTPS ${tr ? "cevap (TLS ile şifreli)" : "response (TLS-encrypted)"}
`;

export function WebSecurityBasicsNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeLens, setActiveLens] = useState("https");
  const lenses = {
    web: {
      icon: Code2,
      title: "HTML / CSS / JS",
      visible: tr ? "Tarayıcının çalıştırdığı yapı, görünüm ve davranış dosyaları." : "Structure, styling, and behavior files executed by the browser.",
      habit: tr ? "Bir sayfayı incelerken önce hangi dosyanın ne yaptığını ayır." : "When inspecting a page, first separate which file does what.",
    },
    http: {
      icon: Unlock,
      title: "HTTP",
      visible: tr ? "İstek ve cevap düz metin olabilir; ağdaki biri içeriği okuyabilir." : "Requests and responses can be plain text; someone on the network may read content.",
      habit: tr ? "Şifre, form ve hassas veri için HTTP kullanma." : "Do not use HTTP for passwords, forms, or sensitive data.",
    },
    https: {
      icon: LockKeyhole,
      title: "HTTPS",
      visible: tr ? "İçerik TLS ile şifrelenir; ağı dinleyen kişi içeriği okuyamaz." : "Content is encrypted with TLS; a network observer cannot read it.",
      habit: tr ? "Adres çubuğunda HTTPS/kilit kontrolünü refleks haline getir." : "Make checking HTTPS/padlock in the address bar a reflex.",
    },
    guest: {
      icon: Router,
      title: tr ? "Guest Wi-Fi" : "Guest Wi-Fi",
      visible: tr ? "Bağlantı metaverisi, DNS/SNI ve zaman/IP logları görülebilir." : "Connection metadata, DNS/SNI, and time/IP logs may be visible.",
      habit: tr ? "Hassas işlemleri güvenmediğin ağda yapma; gerekiyorsa VPN kullan." : "Avoid sensitive actions on untrusted networks; use VPN when needed.",
    },
  };
  const active = lenses[activeLens];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Web Güvenlik Merceği" : "Web Security Lens"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(lenses).map(([id, lens]) => {
              const Icon = lens.icon;
              const selected = id === activeLens;
              return (
                <button
                  key={id}
                  onClick={() => setActiveLens(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{lens.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Ne görünür?" : "What is visible?"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <Eye size={14} />
                  {tr ? "Görünen alan" : "Visible surface"}
                </div>
                <p className="text-sm leading-6">{active.visible}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <ShieldCheck size={14} />
                  {tr ? "Güvenli refleks" : "Safe reflex"}
                </div>
                <p className="text-sm leading-6 text-[var(--muted)]">{active.habit}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "HTML/CSS/JS ve HTTPS" : "HTML/CSS/JS & HTTPS"}>
        <NoteList
          items={
            tr
              ? [
                  "Her web sitesi, tarayıcıya gönderilen HTML (yapı), CSS (görünüm) ve JS (davranış) dosyalarından oluşur.",
                  "Adres çubuğundaki kilit simgesi HTTPS kullanıldığını gösterir.",
                ]
              : [
                  "Every website is made of HTML (structure), CSS (look), and JS (behavior) sent to the browser.",
                  "The padlock icon in the address bar confirms HTTPS is being used.",
                ]
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-bold text-[var(--danger)]">HTTP</p>
            <Mermaid theme={theme} chart={httpDiagram(tr)} />
          </div>
          <div>
            <p className="mb-2 text-sm font-bold text-[var(--ok)]">HTTPS</p>
            <Mermaid theme={theme} chart={httpsDiagram(tr)} />
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Guest Wi-Fi Güvenliği" : "Guest Wi-Fi Security"}>
        <NoteList
          items={
            tr
              ? [
                  "Kafe veya okul gibi guest ağlarda trafik her zaman güvenli olmayabilir.",
                  "HTTPS siteler şifreli kalır; ancak hangi siteye bağlanıldığına dair DNS/SNI bilgileri görülebilir.",
                  "Ağ sağlayıcısı genellikle bağlantı loglarını (kim, ne zaman, hangi IP) tutar.",
                ]
              : [
                  "On guest networks like cafes/schools, traffic may not be encrypted.",
                  "HTTPS sites stay encrypted, but which site you connect to (DNS/SNI) can still be visible.",
                  "The network provider usually keeps connection logs (who, when, which IP).",
                ]
          }
        />
        <NoteCallout tone="warning">
          {tr
            ? "Pratik öneri: hassas işlemleri (banka, şifre girişi) bilinmeyen veya güvensiz ağlarda yapmaktan kaçın; mümkünse HTTPS'e ve gerekiyorsa VPN'e güven."
            : "Practical tip: avoid sensitive actions (banking, entering passwords) on unknown/untrusted networks; rely on HTTPS and a VPN when needed."}
        </NoteCallout>
      </NoteSection>
    </>
  );
}
