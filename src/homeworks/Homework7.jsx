import { NoteCallout, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function Homework7WafFingerprint({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "wafw00f araciyla WAF tespiti pratigi yapacaksin. Bunu sadece kendi sitende (orn. Odev 1'de yayinladigin site) veya acikca izin veren bir hedefte calistiracaksin."
            : "You'll practice WAF fingerprinting with wafw00f. You'll only run it against your own site (e.g. the one you published in Homework 1) or a target that explicitly allows this."}
        </p>
        <NoteCallout tone="warning">
          {tr
            ? "Rastgele ucuncu taraf sitelere karsi wafw00f veya benzeri tarama araclari calistirma; cogu sitenin kullanim sartlari izinsiz taramayi yasaklar. Sadece kendi sitende veya acik bug bounty kapsaminda 'pasif/hafif recon'a izin veren bir hedefte dene."
            : "Don't run wafw00f or similar scanning tools against random third-party sites; most sites' terms of service prohibit unauthorized scanning. Only try it on your own site, or a target whose bug bounty policy explicitly allows light/passive recon."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim" : "Step by Step"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "wafw00f'u kur (pip install wafw00f).",
                  "Kendi siteni (veya izinli hedefi) tarayarak bir WAF olup olmadigini tespit et.",
                  "Sonucla birlikte, tarayicinin gelistirici araclarindan (Network tab) manuel olarak da response header'larina bak; wafw00f'un bulgusuyla karsilastir.",
                  "WAF bulundu ise (veya Cloudflare/benzeri kullaniyorsan), hangi header/cookie ipucunun bunu ele verdigini yaz.",
                  "WAF bulunamadiysa, bunun ne anlama gelebilecegini (WAF yok, veya iyi gizlenmis) tartis.",
                ]
              : [
                  "Install wafw00f (pip install wafw00f).",
                  "Scan your own site (or an authorized target) to detect whether a WAF is present.",
                  "Also manually check the response headers in your browser's dev tools (Network tab) and compare with wafw00f's result.",
                  "If a WAF was found (or you know you use Cloudflare/similar), write down which header/cookie gave it away.",
                  "If no WAF was found, discuss what that might mean (no WAF, or well-hidden).",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Ornek Komut" : "Example Command"}>
        <TerminalBlock
          caption="wafw00f"
          lines={[
            { comment: true, text: tr ? "# Kendi sitenle degistir" : "# Replace with your own site" },
            "wafw00f https://your-site.com",
          ]}
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Teslim: wafw00f ciktisi, manuel header incelemesi bulgularin, ve WAF varsa/yoksa ne anlama geldigine dair kisa yorumun."
          : "Delivery: your wafw00f output, your manual header-inspection findings, and a short comment on what the presence/absence of a WAF means."}
      </NoteCallout>
    </>
  );
}
