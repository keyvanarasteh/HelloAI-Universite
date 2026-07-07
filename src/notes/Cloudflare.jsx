import { useState } from "react";
import { Eye, Globe2, LockKeyhole, Radar, ShieldCheck, Server } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const trafficDiagram = (tr) => `sequenceDiagram
  participant V as ${tr ? "Ziyaretçi" : "Visitor"}
  participant C as Cloudflare
  participant O as ${tr ? "Origin Sunucu" : "Origin Server"}
  V->>C: HTTPS ${tr ? "istek" : "request"}
  Note over C: ${tr ? "TLS burada sonlanır\n(veri geçici olarak çözülür)" : "TLS terminates here\n(data briefly decrypted)"}
  C->>O: ${tr ? "istek iletilir" : "request forwarded"}
  O->>C: ${tr ? "cevap" : "response"}
  C->>V: HTTPS ${tr ? "cevap" : "response"}
`;

export function CloudflareNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeView, setActiveView] = useState("content");
  const views = {
    visitor: {
      icon: Globe2,
      title: tr ? "Ziyaretçi IP'si" : "Visitor IP",
      sees: tr ? "İstek önce Cloudflare'e gelir; ziyaretçinin IP'si burada görünür." : "The request reaches Cloudflare first; the visitor IP is visible there.",
      lesson: tr ? "Proxy hizmeti güven ve gizlilik sorularını birlikte getirir." : "A proxy service brings trust and privacy questions together.",
    },
    content: {
      icon: LockKeyhole,
      title: tr ? "Çözülmüş içerik" : "Decrypted content",
      sees: tr ? "TLS Cloudflare'de sonlanırsa içerik kısa süre çözülmüş halde işlenir." : "If TLS terminates at Cloudflare, content is briefly processed decrypted.",
      lesson: tr ? "HTTPS yalnızca iki uçtan ibaret değildir; aradaki proxy mimarisini de anlamak gerekir." : "HTTPS is not only endpoints; proxy architecture matters too.",
    },
    origin: {
      icon: Server,
      title: tr ? "Origin gizleme" : "Origin hiding",
      sees: tr ? "Ziyaretçi genellikle gerçek sunucuya değil Cloudflare IP'lerine gider." : "Visitors usually reach Cloudflare IPs, not the real server directly.",
      lesson: tr ? "Origin IP iyi saklanmazsa koruma katmanı zayıflar." : "If the origin IP is not hidden well, the protection layer weakens.",
    },
    defense: {
      icon: ShieldCheck,
      title: "DDoS / WAF",
      sees: tr ? "Trafik önce filtrelenir; kötü istekler origin'e ulaşmadan durdurulabilir." : "Traffic is filtered first; bad requests can be blocked before reaching origin.",
      lesson: tr ? "CDN hız, WAF savunma ve DDoS dayanımı aynı kapıda toplanır." : "CDN speed, WAF defense, and DDoS resilience meet at the same gate.",
    },
    risk: {
      icon: Radar,
      title: tr ? "Yanlış yapılandırma" : "Misconfiguration",
      sees: tr ? "DNS, eski kayıtlar veya direkt servisler origin IP'yi açığa çıkarabilir." : "DNS, old records, or direct services can reveal the origin IP.",
      lesson: tr ? "Proxy kullanmak yetmez; origin tarafını da sertleştirmek gerekir." : "Using a proxy is not enough; the origin also needs hardening.",
    },
  };
  const active = views[activeView];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Trafik Görünürlük Paneli" : "Traffic Visibility Panel"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-2">
            {Object.entries(views).map(([id, view]) => {
              const Icon = view.icon;
              const selected = id === activeView;
              return (
                <button
                  key={id}
                  onClick={() => setActiveView(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{view.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Cloudflare ne görür?" : "What can Cloudflare see?"}</p>
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
                  {tr ? "Görünürlük" : "Visibility"}
                </div>
                <p className="text-sm leading-6">{active.sees}</p>
              </div>
              <p className="text-sm leading-6 text-[var(--muted)]">{active.lesson}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Cloudflare Nedir ve Neden Yaygın?" : "What Is Cloudflare & Why So Common?"}>
        <NoteList
          items={
            tr
              ? [
                  "CDN, DDoS koruması, DNS ve WAF hizmetlerini bir arada sunan bir altyapı şirketidir.",
                  "Site Cloudflare arkasındaysa trafik önce Cloudflare'e, ardından gerçek sunucuya (origin) gider.",
                  "Ücretsiz plan, kolay DNS entegrasyonu ve güçlü DDoS koruması sayesinde birçok kurumsal site ve bazı AI/LLM servisleri tarafından tercih edilir.",
                ]
              : [
                  "An infrastructure provider bundling CDN, DDoS protection, DNS, and WAF.",
                  "If a site sits behind Cloudflare, traffic hits Cloudflare first, then the real (origin) server.",
                  "A free tier, easy DNS setup, and strong DDoS protection make it a common choice for enterprise sites and some AI/LLM services.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Cloudflare Ne Görür?" : "What Cloudflare Can See"}>
        <Mermaid theme={theme} chart={trafficDiagram(tr)} />
        <NoteCallout tone="warning">
          {tr
            ? "HTTPS genellikle Cloudflare'de sonlandırılır (TLS termination); yani şifrelenmiş trafiğin çözülmüş hali teknik olarak Cloudflare sunucularından geçer. Ziyaretçinin gerçek IP'si de önce Cloudflare'e görünür."
            : "HTTPS is usually terminated at Cloudflare (TLS termination), meaning the decrypted data technically passes through Cloudflare's servers. The visitor's real IP is also visible to Cloudflare first."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Artıları ve Eksileri" : "Pros & Cons"}>
        <div className="grid gap-3 sm:grid-cols-2">
          <NoteCallout tone="ok">
            {tr
              ? "Artıları: güçlü DDoS koruması, CDN hızı, ücretsiz SSL ve WAF ile SQLi/XSS'e karşı ek katman."
              : "Pros: strong DDoS protection, CDN speed, free SSL, a WAF layer against SQLi/XSS."}
          </NoteCallout>
          <NoteCallout tone="warning">
            {tr
              ? "Eksileri: merkezileşme riski, gizlilik tartışması ve yanlış yapılandırmada gerçek sunucu IP'sinin bulunabilmesi."
              : "Cons: centralization risk, privacy debate, and a misconfigured origin IP can be uncovered."}
          </NoteCallout>
        </div>
      </NoteSection>
    </>
  );
}
