import { NoteCallout, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function Homework8HostVpsAudit({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Kendi domainin/sitenin (veya Odev 1'de yayinladigin sitenin) barindigi host/VPS hakkinda disaridan neler goruntulenebildigini kendin arastiracaksin — kendi 'attack surface'ini kendin denetleyeceksin."
            : "You'll research what's externally visible about the host/VPS behind your own domain/site (or the one from Homework 1) — auditing your own attack surface."}
        </p>
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim" : "Step by Step"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "whois ile domaininin IP'sinin sahiplik/ASN bilgisini sorgula: hangi hosting/cloud saglayicida barinıyor?",
                  "dig -x ile IP'nin reverse DNS (PTR) kaydini kontrol et.",
                  "viewdns.info Reverse IP Lookup ile ayni IP'de baska domain barinip barinmadigina bak (shared hosting isareti olabilir).",
                  "Eger site Cloudflare/benzeri bir CDN arkasindaysa, gecmis DNS kayitlarina (orn. crt.sh sertifika geçmişi, ya da hatirlarsan eski bir kayit) bakarak gercek origin IP ipucu bulmaya calis — bulamazsan bu da iyi bir isarettir (CDN dogru yapilandirilmis demektir).",
                  "Bulgularini bir liste halinde ozetle: hosting saglayicisi, IP, reverse DNS sonucu, ayni sunucudaki baska site var mi, origin IP gizli mi acik mi.",
                ]
              : [
                  "Use whois to check your domain's IP ownership/ASN info: which hosting/cloud provider is it on?",
                  "Use dig -x to check the IP's reverse DNS (PTR) record.",
                  "Use viewdns.info's Reverse IP Lookup to see if other domains share the same IP (a sign of shared hosting).",
                  "If your site sits behind Cloudflare or a similar CDN, try to find a hint of the real origin IP from historical DNS records (e.g. crt.sh's certificate history, or an old record you remember) — not finding one is actually a good sign (the CDN is configured correctly).",
                  "Summarize your findings in a list: hosting provider, IP, reverse DNS result, whether other sites share the server, whether the origin IP is exposed or hidden.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Ornek Komutlar" : "Example Commands"}>
        <TerminalBlock
          caption="whois / dig"
          lines={[
            { comment: true, text: tr ? "# Kendi domaininin IP'sini once ogren, sonra sorgula" : "# First find your domain's IP, then query it" },
            "whois your-server-ip",
            "dig -x your-server-ip",
          ]}
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Teslim: bulgu ozeti + kendi altyapinin disaridan ne kadar 'gorunur' oldugu hakkinda 2-3 cumlelik yorumun."
          : "Delivery: your findings summary plus 2-3 sentences on how 'visible' your own infrastructure is from the outside."}
      </NoteCallout>
    </>
  );
}
