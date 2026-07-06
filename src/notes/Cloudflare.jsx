import { useState } from "react";
import { Eye, Globe2, LockKeyhole, Radar, ShieldCheck, Server } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const trafficDiagram = (tr) => `sequenceDiagram
  participant V as ${tr ? "Ziyaretci" : "Visitor"}
  participant C as Cloudflare
  participant O as ${tr ? "Origin Sunucu" : "Origin Server"}
  V->>C: HTTPS ${tr ? "istek" : "request"}
  Note over C: ${tr ? "TLS burada sonlanir\n(veri gecici olarak cozulur)" : "TLS terminates here\n(data briefly decrypted)"}
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
      title: tr ? "Ziyaretci IP'si" : "Visitor IP",
      sees: tr ? "Istek once Cloudflare'e gelir; ziyaretcinin IP'si burada gorunur." : "The request reaches Cloudflare first; the visitor IP is visible there.",
      lesson: tr ? "Proxy hizmeti guven ve gizlilik sorularini birlikte getirir." : "A proxy service brings trust and privacy questions together.",
    },
    content: {
      icon: LockKeyhole,
      title: tr ? "Cozulmus icerik" : "Decrypted content",
      sees: tr ? "TLS Cloudflare'de sonlanirsa icerik kisa sure cozulmus halde islenir." : "If TLS terminates at Cloudflare, content is briefly processed decrypted.",
      lesson: tr ? "HTTPS sadece iki uclu degil; aradaki proxy mimarisini de anlamak gerekir." : "HTTPS is not only endpoints; proxy architecture matters too.",
    },
    origin: {
      icon: Server,
      title: tr ? "Origin gizleme" : "Origin hiding",
      sees: tr ? "Ziyaretci genelde gercek sunucuya degil Cloudflare IP'lerine gider." : "Visitors usually reach Cloudflare IPs, not the real server directly.",
      lesson: tr ? "Origin IP iyi saklanmazsa koruma katmani zayiflar." : "If the origin IP is not hidden well, the protection layer weakens.",
    },
    defense: {
      icon: ShieldCheck,
      title: "DDoS / WAF",
      sees: tr ? "Trafik once filtrelenir; kotu istekler origin'e ulasmadan durdurulabilir." : "Traffic is filtered first; bad requests can be blocked before reaching origin.",
      lesson: tr ? "CDN hiz, WAF savunma, DDoS dayanimi ayni kapida toplanir." : "CDN speed, WAF defense, and DDoS resilience meet at the same gate.",
    },
    risk: {
      icon: Radar,
      title: tr ? "Yanlis yapilandirma" : "Misconfiguration",
      sees: tr ? "DNS, eski kayitlar veya direkt servisler origin IP'yi aciga cikarabilir." : "DNS, old records, or direct services can reveal the origin IP.",
      lesson: tr ? "Proxy kullanmak yetmez; origin tarafini da sertlestirmek gerekir." : "Using a proxy is not enough; the origin also needs hardening.",
    },
  };
  const active = views[activeView];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Trafik Gorunurluk Paneli" : "Traffic Visibility Panel"}>
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Cloudflare ne gorur?" : "What can Cloudflare see?"}</p>
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
                  {tr ? "Gorunurluk" : "Visibility"}
                </div>
                <p className="text-sm leading-6">{active.sees}</p>
              </div>
              <p className="text-sm leading-6 text-[var(--muted)]">{active.lesson}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Cloudflare Nedir ve Neden Yaygin?" : "What Is Cloudflare & Why So Common?"}>
        <NoteList
          items={
            tr
              ? [
                  "CDN + DDoS koruma + DNS + WAF hizmetlerini bir arada sunan bir altyapi sirketi.",
                  "Site Cloudflare arkasindaysa trafik once Cloudflare'e, oradan gercek sunucuya (origin) gider.",
                  "Ucretsiz plan, kolay DNS entegrasyonu ve guclu DDoS korumasi sayesinde bircok kurumsal site ve bazi AI/LLM servisleri tarafindan tercih edilir.",
                ]
              : [
                  "An infrastructure provider bundling CDN, DDoS protection, DNS, and WAF.",
                  "If a site sits behind Cloudflare, traffic hits Cloudflare first, then the real (origin) server.",
                  "A free tier, easy DNS setup, and strong DDoS protection make it a common choice for enterprise sites and some AI/LLM services.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Cloudflare Ne Gorur?" : "What Cloudflare Can See"}>
        <Mermaid theme={theme} chart={trafficDiagram(tr)} />
        <NoteCallout tone="warning">
          {tr
            ? "HTTPS genelde Cloudflare'de sonlandirilir (TLS termination); yani sifrelenmis trafigin cozulmus hali teknik olarak Cloudflare sunucularindan gecer. Ziyaretcinin gercek IP'si de once Cloudflare'e gorunur."
            : "HTTPS is usually terminated at Cloudflare (TLS termination), meaning the decrypted data technically passes through Cloudflare's servers. The visitor's real IP is also visible to Cloudflare first."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Artilari ve Eksileri" : "Pros & Cons"}>
        <div className="grid gap-3 sm:grid-cols-2">
          <NoteCallout tone="ok">
            {tr
              ? "Artilari: guclu DDoS koruma, CDN hizi, ucretsiz SSL, WAF ile SQLi/XSS'e karsi ek katman."
              : "Pros: strong DDoS protection, CDN speed, free SSL, a WAF layer against SQLi/XSS."}
          </NoteCallout>
          <NoteCallout tone="warning">
            {tr
              ? "Eksileri: merkezilesme riski, gizlilik tartismasi, yanlis yapilandirmada gercek sunucu IP'sinin bulunabilmesi."
              : "Cons: centralization risk, privacy debate, and a misconfigured origin IP can be uncovered."}
          </NoteCallout>
        </div>
      </NoteSection>
    </>
  );
}
