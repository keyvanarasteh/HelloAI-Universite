import { NoteCallout, NoteList, NoteSection, NoteSteps } from "../components/NoteKit.jsx";

export function WappalyzerFingerprintingNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Wappalyzer Nedir?" : "What Is Wappalyzer?"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Wappalyzer, bir web sitesinin arkasinda hangi teknolojilerin (CMS, JS framework, analytics, CDN, e-ticaret altyapisi, sunucu yazilimi) kullanildigini tespit eden bir tarayici eklentisi ve web servisidir."
            : "Wappalyzer is a browser extension and web service that detects which technologies (CMS, JS framework, analytics, CDN, e-commerce platform, server software) power a website."}
        </p>
        <NoteCallout>
          {tr
            ? "Tamamen pasif calisir: hedefe ekstra istek gondermez, sadece tarayicinin zaten yukledigi HTML/JS kaynagini, HTTP header'larini ve cookie'lerini bilinen teknoloji imzalariyla karsilastirir."
            : "It's entirely passive: it sends no extra requests to the target, just matches the HTML/JS/headers/cookies the browser already loaded against a database of known technology signatures."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Nasil Kullanilir?" : "How to Use It"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Chrome/Firefox web magazasindan Wappalyzer eklentisini kur.",
                  "Herhangi bir siteyi ziyaret et.",
                  "Adres cubugundaki Wappalyzer ikonuna tikla.",
                  "Tespit edilen teknolojileri incele: CMS, JS framework, analytics, CDN/WAF, sunucu.",
                ]
              : [
                  "Install the Wappalyzer extension from the Chrome/Firefox web store.",
                  "Visit any website.",
                  "Click the Wappalyzer icon in the address bar.",
                  "Review the detected technologies: CMS, JS framework, analytics, CDN/WAF, server.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Kullanim Alanlari" : "Use Cases"}>
        <NoteList
          items={
            tr
              ? [
                  "Pazarlama/rekabet analizi: rakip sitelerin altyapisini gorme.",
                  "Bug bounty/pentest kesif fazi: hangi CMS/eklenti/versiyon kullanildigini ogrenip bilinen CVE'leri arastirma.",
                  "Kendi sitenizi denetleme: teknolojilerinizin disaridan ne kadar goruntulenebilir oldugunu anlama.",
                ]
              : [
                  "Marketing/competitive analysis: seeing what stack competitor sites run.",
                  "Bug bounty/pentest recon: identifying the CMS/plugin/version to research known CVEs.",
                  "Auditing your own site: understanding how visible your tech stack is from the outside.",
                ]
          }
        />
        <NoteCallout tone="warning">
          {tr
            ? "Gercek dunya ornegi: bug bounty avcilari sikca once Wappalyzer ile bir hedefin eski/guncellenmemis bir WordPress eklentisi kullandigini tespit eder, sonra o eklentinin bilinen CVE'sini arastirip zafiyeti dogrular."
            : "Real-world example: bug bounty hunters often use Wappalyzer to spot an outdated WordPress plugin on a target, then research that plugin's known CVE to confirm a vulnerability."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Benzer Araclar" : "Similar Tools"}>
        <NoteList
          items={
            tr
              ? [
                  "BuiltWith — benzer amacli, daha genis veritabanina sahip web servisi.",
                  "WhatCMS — sadece CMS tespitine ozellesmis servis.",
                  "Nmap http-generator script'i — HTTP meta etiketlerinden CMS tespiti yapan komut satiri alternatifi.",
                ]
              : [
                  "BuiltWith — a similar web service with a broader database.",
                  "WhatCMS — a service specialized purely in CMS detection.",
                  "Nmap's http-generator script — a command-line alternative that detects CMS from HTTP meta tags.",
                ]
          }
        />
      </NoteSection>
    </>
  );
}
