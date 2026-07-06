import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const timelineDiagram = (tr) => `flowchart TD
  V["${tr ? "Zafiyet var (bilinmiyor)" : "Vulnerability exists (unknown)"}"] --> F["${tr ? "Bir arastirmaci/saldirgan bulur" : "A researcher/attacker discovers it"}"]
  F --> R{"${tr ? "Ne yapilir?" : "What happens next?"}"}
  R -->|${tr ? "sorumlu bildirim" : "responsible disclosure"}| B["${tr ? "Bug bounty / ureticiye bildirim" : "Bug bounty / vendor notified"}"]
  R -->|${tr ? "kara/gri pazar" : "black/gray market"}| S["${tr ? "En yuksek teklife satilir" : "Sold to the highest bidder"}"]
  B --> P["${tr ? "Yama yayinlanir" : "Patch released"}"]
  S --> E["${tr ? "Sessizce/hedefli kullanilir" : "Used quietly / in targeted attacks"}"]
  E -.->|${tr ? "sonunda fark edilir" : "eventually discovered"}| P
`;

export function ZeroDayNote({ lang, theme }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Tanim" : "Definition"}>
        <NoteList
          items={
            tr
              ? [
                  "0-day: ureticinin henuz haberdar olmadigi veya henuz yama yayinlamadigi guvenlik acigi.",
                  "Isim buradan gelir: uretici acigi ogrendiginde yamayi cikarmak icin '0 gunu' vardir — acik zaten aktif kullanimda olabilir.",
                  "0-day exploit: bu aciktan faydalanan, henuz savunmasi olmayan saldiri kodu/teknigi.",
                ]
              : [
                  "0-day: a security flaw the vendor doesn't yet know about, or hasn't patched yet.",
                  "The name comes from the vendor having '0 days' to fix it once discovered — it may already be actively exploited.",
                  "0-day exploit: attack code/technique that takes advantage of the flaw before any defense exists.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Kesiften Yamaya Giden Yol" : "From Discovery to Patch"}>
        <Mermaid theme={theme} chart={timelineDiagram(tr)} />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "Neden tehlikeli: henuz imza/yama olmadigi icin klasik antivirus/IDS tarafindan yakalanmasi zordur; kritik sistemlerde (kamu, saglik, enerji, bankacilik) kullanilirsa buyuk hasar verebilir; APT gruplari hedefli saldirilarda sessizce saklar."
          : "Why it's dangerous: with no signature or patch yet, classic antivirus/IDS struggle to catch it; used against critical systems (government, health, energy, banking) it can cause major damage; APT groups stockpile them quietly for targeted attacks."}
      </NoteCallout>

      <NoteSection title={tr ? "Savunma Yaklasimlari" : "Defensive Approaches"}>
        <NoteList
          items={
            tr
              ? [
                  "Duzenli ve hizli yama yonetimi.",
                  "Katmanli guvenlik (defense-in-depth).",
                  "Davranissal/anomali tabanli tespit (EDR).",
                  "Az yetki ilkesi (least privilege).",
                  "Kurumsal bug bounty programlarina destek.",
                ]
              : [
                  "Regular, fast patch management.",
                  "Defense-in-depth (layered security).",
                  "Behavioral/anomaly-based detection (EDR).",
                  "Least privilege principle.",
                  "Supporting corporate bug bounty programs.",
                ]
          }
        />
      </NoteSection>
    </>
  );
}
