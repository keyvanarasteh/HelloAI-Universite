import { useState } from "react";
import { Eye, Gavel, KeyRound, LockKeyhole, Router, ShieldCheck } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

const isolationDiagram = (tr) => `flowchart LR
  subgraph Insecure[${tr ? "İzole Edilmemiş" : "Not Isolated"}]
    G1["${tr ? "Misafir Cihaz" : "Guest Device"}"] --> N1["${tr ? "Guest Wi-Fi" : "Guest Wi-Fi"}"]
    N1 --> I1["${tr ? "Kurumsal İç Ağ" : "Internal Network"}"]
  end
  subgraph Secure[${tr ? "VLAN ile İzole" : "VLAN-Isolated"}]
    G2["${tr ? "Misafir Cihaz" : "Guest Device"}"] --> N2["${tr ? "Guest Wi-Fi (VLAN)" : "Guest Wi-Fi (VLAN)"}"]
    N2 --> W2["${tr ? "Sadece İnternet" : "Internet Only"}"]
  end
`;

export function WifiSecurityRisksNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeRisk, setActiveRisk] = useState("isolation");
  const risks = {
    isolation: {
      icon: Router,
      title: tr ? "Ağ izolasyonu" : "Network isolation",
      problem: tr ? "Guest ağ ana kurumsal ağa ulaşabiliyorsa risk büyür." : "Risk grows if the guest network can reach the internal network.",
      defense: tr ? "VLAN ile ayır, yalnızca İnternet çıkışı ver." : "Separate with VLAN and allow Internet-only access.",
    },
    plaintext: {
      icon: Eye,
      title: tr ? "Düz metin trafik" : "Plaintext traffic",
      problem: tr ? "HTTP veya zayıf portal formları ağda okunabilir hale gelebilir." : "HTTP or weak portal forms can become readable on the network.",
      defense: tr ? "HTTPS/HSTS zorla, hassas formları güvenli kanala taşı." : "Enforce HTTPS/HSTS and move sensitive forms to secure channels.",
    },
    otp: {
      icon: KeyRound,
      title: "OTP / Kod",
      problem: tr ? "Doğrulama kodu görünürse hesap ele geçirme zinciri başlayabilir." : "If verification codes are exposed, account takeover can begin.",
      defense: tr ? "Kodları asla HTTP veya güvensiz portalda taşıma; süre ve oran limitleri ekle." : "Never transmit codes over HTTP/unsafe portals; add expiry and rate limits.",
    },
    legal: {
      icon: Gavel,
      title: tr ? "Yasal sınır" : "Legal boundary",
      problem: tr ? "Gerçek kullanıcı verisini izinsiz hedeflemek suçtur." : "Targeting real user data without authorization is a crime.",
      defense: tr ? "Yalnızca yazılı izinli, kapsamı net ve izole lab testleri yap." : "Test only with written authorization, clear scope, and isolated labs.",
    },
  };
  const active = risks[activeRisk];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Guest Wi-Fi Risk Konsolu" : "Guest Wi-Fi Risk Console"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(risks).map(([id, risk]) => {
              const Icon = risk.icon;
              const selected = id === activeRisk;
              return (
                <button
                  key={id}
                  onClick={() => setActiveRisk(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{risk.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Risk modeli" : "Risk model"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--danger)]/40 bg-[var(--danger-soft)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--danger)]">
                  <LockKeyhole size={14} />
                  {tr ? "Sorun" : "Problem"}
                </div>
                <p className="text-sm leading-6 text-[var(--text)]">{active.problem}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <ShieldCheck size={14} />
                  {tr ? "Savunma refleksi" : "Defense reflex"}
                </div>
                <p className="text-sm font-semibold">{active.defense}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Guest Wi-Fi Neden Riskli Olabilir?" : "Why Guest Wi-Fi Can Be Risky"}>
        <NoteList
          items={
            tr
              ? [
                  "Misafir ağları genellikle hızlı kurulum için basit yapılandırılır; bazen ana kurumsal ağdan yeterince izole edilmez.",
                  "Ağ savunmasız kalırsa, şifrelenmemiş (HTTP) trafik veya zayıf giriş ekranları izlenebilir hale gelebilir.",
                  "Görülebilecek hassas veri örnekleri: kimlik numarası (TC kimlik no), telefon numarası, SMS/e-posta doğrulama kodu (OTP).",
                ]
              : [
                  "Guest networks are often set up quickly with minimal configuration and may not be well isolated from the internal network.",
                  "If the network is left exposed, unencrypted (HTTP) traffic or weak login screens can become observable.",
                  "Examples of sensitive data that could be exposed: national ID numbers, phone numbers, SMS/email verification codes (OTP).",
                ]
          }
        />
        <Mermaid theme={theme} chart={isolationDiagram(tr)} />
      </NoteSection>

      <NoteSection title={tr ? "Sonuçları" : "Consequences"}>
        <NoteTable
          headers={tr ? ["Risk", "Açıklama"] : ["Risk", "Description"]}
          rows={[
            [
              tr ? "Kimlik hırsızlığı" : "Identity theft",
              tr ? "Kimlik numarası gibi bilgilerle sahte başvuru veya işlem yapılabilir." : "Stolen ID numbers can be used for fraudulent applications/transactions.",
            ],
            [
              tr ? "Hesap ele geçirme" : "Account takeover",
              tr ? "OTP/doğrulama kodu çalınırsa oturum veya hesap devralınabilir." : "A stolen OTP/verification code can let an attacker hijack a session or account.",
            ],
            [
              tr ? "Kimliğe bürünme" : "Impersonation",
              tr
                ? "Ele geçirilen kimlikle mağdur, işlemediği bir suçla ilişkilendirilebilir."
                : "Using a stolen identity, the victim can end up linked to a crime they didn't commit.",
            ],
          ]}
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "KVKK ve hukuki boyut: TC kimlik no ve iletişim bilgisi KVKK kapsamında kişisel veridir. Yetkisiz ele geçirme, TCK'nin bilişim suçlarına ilişkin maddeleri kapsamında suçtur. Bu tür testler yalnızca yazılı izinli, kapsamı net pentest anlaşmaları içinde ve izole lab ortamlarında yapılabilir; gerçek kullanıcıların verisi asla izinsiz hedef alınmamalıdır."
          : "KVKK / legal angle: national ID numbers and contact info are personal data under Turkish law (KVKK), and unauthorized capture is a crime under the penal code's computer-crime articles. This kind of testing may only happen under a written, scoped pentest agreement in an isolated lab — never against real users' data without authorization."}
      </NoteCallout>

      <NoteSection title={tr ? "Savunma Önerileri" : "Defensive Recommendations"}>
        <NoteList
          items={
            tr
              ? [
                  "Guest ağı ana ağdan VLAN ile izole et.",
                  "Guest ağda zorunlu HTTPS/HSTS kullan.",
                  "WPA2/3-Enterprise gibi güçlü kimlik doğrulama tercih et.",
                  "Ağ izleme ve anormal trafik tespiti (IDS) kullan.",
                ]
              : [
                  "Isolate the guest network from the internal network with a VLAN.",
                  "Enforce HTTPS/HSTS on the guest network.",
                  "Prefer strong authentication like WPA2/3-Enterprise.",
                  "Use network monitoring and anomaly detection (IDS).",
                ]
          }
        />
      </NoteSection>
    </>
  );
}
