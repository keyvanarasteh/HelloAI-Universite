import { NoteCallout, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function Homework6DnsEnumeration({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Sahip oldugun (veya Odev 1'de yayinladigin) bir domain uzerinde DNS enumeration pratigi yapacak ve olasi bir 'dangling CNAME' (subdomain takeover riski) olup olmadigini kontrol edeceksin."
            : "You'll practice DNS enumeration on a domain you own (or the one you published in Homework 1) and check whether it has a 'dangling CNAME' (subdomain takeover risk)."}
        </p>
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim" : "Step by Step"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "crt.sh uzerinden domaininin sertifika gecmisinden alt alan adlarini cikar (pasif enumeration).",
                  "dig ile domaininin A, MX, TXT ve NS kayitlarini sorgula (aktif enumeration).",
                  "Bulunan her alt alan adinin hala aktif/kullanilan bir hedefe mi, yoksa bos/kullanilmayan bir hedefe mi isaret ettigini kontrol et.",
                  "Bir CNAME kaydi artik var olmayan bir servise (orn. silinmis bir Heroku/GitHub Pages) isaret ediyorsa, bunu 'potansiyel subdomain takeover riski' olarak not et (sakin sahiplenmeye calisma, sadece tespit et).",
                  "Bulgularini bir tabloya dok: kayit turu, deger, aktif mi degil mi.",
                ]
              : [
                  "Pull subdomains from your domain's certificate history via crt.sh (passive enumeration).",
                  "Query your domain's A, MX, TXT, and NS records with dig (active enumeration).",
                  "Check whether each discovered subdomain still points to something active, or to something empty/unused.",
                  "If a CNAME points to a service that no longer exists (e.g. a deleted Heroku/GitHub Pages target), flag it as a 'potential subdomain takeover risk' (don't try to claim it, just identify it).",
                  "Put your findings into a table: record type, value, active or not.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Ornek Komutlar" : "Example Commands"}>
        <TerminalBlock
          caption="dig"
          lines={[
            { comment: true, text: tr ? "# Kendi domaininin kayitlarini sorgula" : "# Query your own domain's records" },
            "dig your-domain.com A",
            "dig your-domain.com MX",
            "dig your-domain.com TXT",
            "dig your-domain.com NS",
          ]}
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Teslim: kayit tablosu + varsa tespit ettigin dangling CNAME/takeover riskleri + bunlari nasil duzeltecegini aciklayan 2-3 cumle."
          : "Delivery: your record table, any dangling CNAME/takeover risks you found, and 2-3 sentences on how you'd fix them."}
      </NoteCallout>
    </>
  );
}
