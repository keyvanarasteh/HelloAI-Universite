import { useState } from "react";
import { Cookie, FileWarning, Fingerprint, ScrollText, ShieldCheck } from "lucide-react";
import { NoteCallout, NoteList, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function WafEnumerationNote({ lang }) {
  const tr = lang === "tr";
  const [activeSignal, setActiveSignal] = useState("headers");
  const signals = {
    headers: {
      icon: ScrollText,
      title: tr ? "Header sinyali" : "Header signal",
      clue: tr ? "cf-ray, server, via gibi izler vendor hakkinda ipucu verebilir." : "cf-ray, server, via, and similar traces can hint at a vendor.",
      report: tr ? "Header adini ve ilgili cevabi kanit olarak not et." : "Record the header name and related response as evidence.",
    },
    cookies: {
      icon: Cookie,
      title: tr ? "Cookie sinyali" : "Cookie signal",
      clue: tr ? "AWSALB gibi cookie'ler load balancer/WAF zincirini gosterebilir." : "Cookies like AWSALB can reveal load-balancer/WAF chains.",
      report: tr ? "Cookie adini, domain/path degerini ve baglami yaz." : "Write the cookie name, domain/path values, and context.",
    },
    block: {
      icon: FileWarning,
      title: tr ? "Blok sayfasi" : "Block page",
      clue: tr ? "Hata kodu, sayfa tasarimi veya metin vendor'a ozgu olabilir." : "Status code, page design, or text can be vendor-specific.",
      report: tr ? "Ekran goruntusu ve HTTP durum kodunu ekle." : "Include screenshot and HTTP status code.",
    },
    harmless: {
      icon: Fingerprint,
      title: tr ? "Zararsiz test" : "Harmless test",
      clue: tr ? "Sadece izinli ortamda zararsiz tetikleyiciyle farkli cevabi gozlersin." : "Only in authorized environments, observe response changes with harmless triggers.",
      report: tr ? "Rules of Engagement kapsaminda oldugunu belirt." : "State that it is within Rules of Engagement scope.",
    },
  };
  const active = signals[activeSignal];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "WAF Tespit Sinyal Paneli" : "WAF Detection Signal Panel"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(signals).map(([id, signal]) => {
              const Icon = signal.icon;
              const selected = id === activeSignal;
              return (
                <button
                  key={id}
                  onClick={() => setActiveSignal(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{signal.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Tespit sinyali" : "Detection signal"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.clue}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <ShieldCheck size={14} />
                {tr ? "Raporlama refleksi" : "Reporting reflex"}
              </div>
              <p className="text-sm font-semibold">{active.report}</p>
            </div>
          </div>
        </div>
      </NoteSection>

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
