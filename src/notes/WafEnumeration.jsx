import { NoteCallout, NoteList, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function WafEnumerationNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "WAF Nedir?" : "What Is a WAF?"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "WAF (Web Application Firewall), bir web uygulamasina gelen HTTP istek/cevaplarini inceleyip SQL injection, XSS gibi bilinen saldiri kaliplarini engelleyen bir guvenlik katmanidir."
            : "A WAF (Web Application Firewall) inspects incoming/outgoing HTTP traffic for a web app and blocks known attack patterns like SQL injection and XSS."}
        </p>
        <NoteList
          items={
            tr
              ? ["Yaygin ornekler: Cloudflare WAF, AWS WAF, Akamai Kona, Imperva, F5 BIG-IP ASM.", "ModSecurity: kendi sunucunuza kurabileceginiz acik kaynak bir WAF."]
              : ["Common examples: Cloudflare WAF, AWS WAF, Akamai Kona, Imperva, F5 BIG-IP ASM.", "ModSecurity: an open-source WAF you can run on your own server."]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "WAF Tespit Teknikleri" : "WAF Fingerprinting Techniques"}>
        <NoteTable
          headers={tr ? ["Teknik", "Aciklama"] : ["Technique", "Description"]}
          rows={[
            [
              tr ? "HTTP header analizi" : "HTTP header analysis",
              tr ? "Bazi WAF'lar kendine ozgu header birakir (orn. Cloudflare'de cf-ray)." : "Some WAFs leave distinctive headers (e.g. Cloudflare's cf-ray).",
            ],
            [
              tr ? "Cookie parmak izi" : "Cookie fingerprinting",
              tr ? "Bazi WAF/load balancer'lar kendine ozgu cookie ekler (orn. AWSALB)." : "Some WAFs/load balancers add distinctive cookies (e.g. AWSALB).",
            ],
            [
              tr ? "Engelleme sayfasi analizi" : "Block-page analysis",
              tr ? "Vendor'a ozgu engelleme (block) sayfasinin gorunumune bakma." : "Looking at the vendor-specific look of the block page.",
            ],
            [
              tr ? "Zararsiz test payload'i" : "Harmless test payload",
              tr
                ? "Yalnizca izinli test ortaminda, tetikleyici zararsiz bir string gonderip cevabi karsilastirma."
                : "Only in an authorized test environment: sending a harmless trigger string and comparing the response.",
            ],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Araclar" : "Tools"}>
        <NoteTable
          headers={tr ? ["Arac", "Amac"] : ["Tool", "Purpose"]}
          rows={[
            ["wafw00f", tr ? "Acik kaynak, bir sitenin arkasindaki WAF'i tespit eden ozel arac." : "Open-source tool dedicated to fingerprinting a site's WAF."],
            [
              "Nmap http-waf-detect",
              tr ? "Nmap NSE script'i ile WAF varligini tarama." : "Nmap NSE script to scan for WAF presence.",
            ],
          ]}
        />
        <TerminalBlock
          caption="wafw00f"
          lines={[
            { comment: true, text: tr ? "# Bir sitenin arkasindaki WAF'i tespit etmeye calis" : "# Try to detect the WAF behind a site" },
            "wafw00f https://example.com",
          ]}
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "WAF bypass arastirmasi bug bounty dunyasinda bilinen bir alandir (encoding hileleri, vb.); bu notta bilerek somut bypass teknikleri verilmemistir — amac WAF'i atlatmayi ogretmek degil, ne oldugunu ve nasil tespit edildigini anlamaktir. WAF tespiti dahi aktif tarama sayilir; sadece kendi sisteminizde veya yazili izinli bir pentest kapsaminda yapilmalidir."
          : "WAF-bypass research is a known bug-bounty subfield (encoding tricks, etc.); this note deliberately omits concrete bypass techniques — the goal is understanding what a WAF is and how it's detected, not evading one. Even WAF detection counts as active scanning, so only do it on your own systems or under a written pentest agreement."}
      </NoteCallout>
    </>
  );
}
