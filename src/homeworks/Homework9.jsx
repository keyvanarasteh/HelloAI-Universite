import { NoteCallout, NoteSection, NoteSteps } from "../components/NoteKit.jsx";

export function Homework9WappalyzerAudit({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Wappalyzer eklentisini kurup gunluk kullandigin veya ilgini ceken 5 siteyi tarayacak, tespit edilen teknoloji yiginini not edecek ve bir tanesi icin gercek bir CVE arastirmasi yapacaksin (yalnizca arastirma, sisteme dokunma yok)."
            : "You'll install Wappalyzer, scan 5 sites you use daily or find interesting, note the detected tech stack, and research a real CVE for one of the detected technologies (research only, no touching the target system)."}
        </p>
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim" : "Step by Step"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Wappalyzer eklentisini tarayicina kur.",
                  "5 farkli site sec (orn. sik kullandigin bir e-ticaret sitesi, kendi Odev 1 siten, universitenin sitesi, favori bir blog).",
                  "Her biri icin Wappalyzer'in tespit ettigi CMS, framework, analytics, CDN ve sunucu bilgisini bir tabloya kaydet.",
                  "Tespit edilen teknolojilerden birini sec (versiyon bilgisi gorunuyorsa daha iyi) ve o teknoloji icin herkese acik bir CVE veritabaninda (orn. NVD, CVE Details) bilinen bir aciklik arastir.",
                  "Bulgunu kisa bir cumlede ozetle: 'X sitesi Y teknolojisini kullaniyor, bu teknolojinin bilinen Z zafiyeti su sekilde calisiyor (sadece aciklama, exploit denemesi yok)'.",
                ]
              : [
                  "Install the Wappalyzer extension in your browser.",
                  "Pick 5 different sites (e.g. an e-commerce site you use, your own Homework 1 site, your university's site, a favorite blog).",
                  "For each one, record the CMS, framework, analytics, CDN, and server info that Wappalyzer detects in a table.",
                  "Pick one detected technology (better if a version number is visible) and research a known vulnerability for it in a public CVE database (e.g. NVD, CVE Details).",
                  "Summarize your finding in one sentence: 'Site X uses technology Y, which has a known vulnerability Z that works like this (description only, no exploit attempt)'.",
                ]
          }
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "Bu odev sadece pasif tespit ve kamuya acik CVE arastirmasidir. Bulunan bir zafiyeti gercekten test etmeye (exploitation) calismak bu odevin bir parcasi degildir ve izinsiz yapilirsa suctur."
          : "This homework is limited to passive detection and public CVE research. Actually trying to exploit a found vulnerability is not part of this assignment and is a crime if done without authorization."}
      </NoteCallout>
    </>
  );
}
