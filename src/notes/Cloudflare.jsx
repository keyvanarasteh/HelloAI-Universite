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

  return (
    <>
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
