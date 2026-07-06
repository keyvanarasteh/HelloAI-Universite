import { useState } from "react";
import { Code2, Eye, LockKeyhole, Router, ShieldCheck, Unlock } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const httpDiagram = (tr) => `sequenceDiagram
  participant B as ${tr ? "Tarayici" : "Browser"}
  participant E as ${tr ? "Ag Dinleyen" : "Network Eavesdropper"}
  participant S as ${tr ? "Sunucu" : "Server"}
  B->>S: HTTP ${tr ? "istek (duz metin)" : "request (plain text)"}
  Note over E: ${tr ? "Trafigi okuyabilir" : "Can read the traffic"}
  S->>B: HTTP ${tr ? "cevap (duz metin)" : "response (plain text)"}
`;

const httpsDiagram = (tr) => `sequenceDiagram
  participant B as ${tr ? "Tarayici" : "Browser"}
  participant E as ${tr ? "Ag Dinleyen" : "Network Eavesdropper"}
  participant S as ${tr ? "Sunucu" : "Server"}
  B->>S: HTTPS ${tr ? "istek (TLS ile sifreli)" : "request (TLS-encrypted)"}
  Note over E: ${tr ? "Sadece sifreli veri gorur" : "Only sees encrypted data"}
  S->>B: HTTPS ${tr ? "cevap (TLS ile sifreli)" : "response (TLS-encrypted)"}
`;

export function WebSecurityBasicsNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeLens, setActiveLens] = useState("https");
  const lenses = {
    web: {
      icon: Code2,
      title: "HTML / CSS / JS",
      visible: tr ? "Tarayicinin calistirdigi yapi, gorunum ve davranis dosyalari." : "Structure, styling, and behavior files executed by the browser.",
      habit: tr ? "Bir sayfayi incelerken once hangi dosya ne is yapiyor ayir." : "When inspecting a page, first separate which file does what.",
    },
    http: {
      icon: Unlock,
      title: "HTTP",
      visible: tr ? "Istek ve cevap duz metin olabilir; agdaki biri icerigi okuyabilir." : "Requests and responses can be plain text; someone on the network may read content.",
      habit: tr ? "Sifre, form ve hassas veri icin HTTP kullanma." : "Do not use HTTP for passwords, forms, or sensitive data.",
    },
    https: {
      icon: LockKeyhole,
      title: "HTTPS",
      visible: tr ? "Icerik TLS ile sifrelenir; ag dinleyen kisi icerigi okuyamaz." : "Content is encrypted with TLS; a network observer cannot read it.",
      habit: tr ? "Adres cubugunda HTTPS/kilit kontrolunu refleks haline getir." : "Make checking HTTPS/padlock in the address bar a reflex.",
    },
    guest: {
      icon: Router,
      title: tr ? "Guest Wi-Fi" : "Guest Wi-Fi",
      visible: tr ? "Baglanti metaverisi, DNS/SNI ve zaman/IP loglari gorulebilir." : "Connection metadata, DNS/SNI, and time/IP logs may be visible.",
      habit: tr ? "Hassas islemleri guvenmedigin agda yapma; gerekiyorsa VPN kullan." : "Avoid sensitive actions on untrusted networks; use VPN when needed.",
    },
  };
  const active = lenses[activeLens];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Web Guvenlik Mercegi" : "Web Security Lens"}>
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Ne gorunur?" : "What is visible?"}</p>
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
                  {tr ? "Gorunen alan" : "Visible surface"}
                </div>
                <p className="text-sm leading-6">{active.visible}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <ShieldCheck size={14} />
                  {tr ? "Guvenli refleks" : "Safe reflex"}
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
                  "Her website, tarayiciya gonderilen HTML (yapi), CSS (gorunum), JS (davranis) dosyalarindan olusur.",
                  "Adres cubugundaki kilit simgesi HTTPS kullanildigini gosterir.",
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

      <NoteSection title={tr ? "Guest Wifi Guvenligi" : "Guest Wifi Security"}>
        <NoteList
          items={
            tr
              ? [
                  "Kafe/okul gibi guest aglarda trafik sifreli olmayabilir.",
                  "HTTPS siteler yine sifreli kalir; ama hangi siteye baglanildigi (DNS/SNI) gorulebilir.",
                  "Ag saglayicisi genelde baglanti loglarini (kim, ne zaman, hangi IP) tutar.",
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
            ? "Pratik oneri: hassas islemleri (banka, sifre girisi) bilinmeyen/guvensiz aglarda yapmaktan kacin, mumkunse HTTPS'e ve gerekiyorsa VPN'e guven."
            : "Practical tip: avoid sensitive actions (banking, entering passwords) on unknown/untrusted networks; rely on HTTPS and a VPN when needed."}
        </NoteCallout>
      </NoteSection>
    </>
  );
}
