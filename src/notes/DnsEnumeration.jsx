import { Mermaid, NoteCallout, NoteList, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

const resolutionDiagram = (tr) => `sequenceDiagram
  participant C as ${tr ? "Istemci" : "Client"}
  participant R as ${tr ? "Cozumleyici" : "Resolver"}
  participant Root as Root
  participant TLD as TLD (.com)
  participant Auth as ${tr ? "Yetkili Sunucu" : "Authoritative"}
  C->>R: example.com?
  R->>Root: ${tr ? "kim biliyor?" : "who knows?"}
  Root->>R: ${tr ? ".com sunucusuna sor" : "ask .com server"}
  R->>TLD: example.com?
  TLD->>R: ${tr ? "yetkili sunucuya sor" : "ask authoritative server"}
  R->>Auth: example.com?
  Auth->>R: ${tr ? "IP adresi" : "IP address"}
  R->>C: ${tr ? "IP adresi" : "IP address"}
`;

export function DnsEnumerationNote({ lang, theme }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "DNS Nedir?" : "What Is DNS?"}>
        <NoteList
          items={
            tr
              ? [
                  "DNS, alan adlarini (orn. example.com) IP adreslerine ceviren, internetin 'telefon rehberi' gibi calisan sistemdir.",
                  "Cozumleme hiyerarsik ilerler: Root sunucular -> TLD sunuculari (.com, .org, .tr) -> yetkili (authoritative) sunucu.",
                ]
              : [
                  "DNS translates domain names (e.g. example.com) into IP addresses — the internet's 'phone book'.",
                  "Resolution happens hierarchically: root servers -> TLD servers (.com, .org, .tr) -> the authoritative server.",
                ]
          }
        />
        <Mermaid theme={theme} chart={resolutionDiagram(tr)} />
      </NoteSection>

      <NoteSection title={tr ? "Yaygin Kayit Turleri" : "Common Record Types"}>
        <NoteTable
          headers={tr ? ["Kayit", "Ne Ise Yarar"] : ["Record", "Purpose"]}
          rows={[
            ["A", tr ? "Domain'i bir IPv4 adresine baglar." : "Points a domain to an IPv4 address."],
            ["AAAA", tr ? "Domain'i bir IPv6 adresine baglar." : "Points a domain to an IPv6 address."],
            ["CNAME", tr ? "Bir domaini baska bir domain adina yonlendirir (alias)." : "Aliases a domain to another domain name."],
            ["MX", tr ? "Domainin mail sunucusunu belirtir." : "Specifies the domain's mail server."],
            ["TXT", tr ? "Serbest metin (SPF/DKIM dogrulama, site sahiplik kaniti)." : "Free text (SPF/DKIM verification, site-ownership proof)."],
            ["NS", tr ? "Domaini yoneten isim sunucularini belirtir." : "Specifies the name servers managing the domain."],
            ["PTR", tr ? "IP'den hostname'e ters cozumleme (reverse DNS)." : "Reverse-resolves an IP address to a hostname."],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "DNS Enumeration" : "DNS Enumeration"}>
        <NoteList
          items={
            tr
              ? [
                  "Pasif: crt.sh / Certificate Transparency loglarindan alt alan adlarini cikarma; SecurityTrails gibi gecmis (passive) DNS veritabanlarini sorgulama.",
                  "Aktif: dig/nslookup ile dogrudan kayit sorgulama, zone transfer (AXFR) denemesi, bilinen kelime listeleriyle subdomain brute-force.",
                ]
              : [
                  "Passive: pulling subdomains from crt.sh / Certificate Transparency logs; querying historical (passive) DNS databases like SecurityTrails.",
                  "Active: direct record queries with dig/nslookup, attempting a zone transfer (AXFR), brute-forcing subdomains with wordlists.",
                ]
          }
        />
        <NoteCallout tone="warning">
          {tr
            ? "Gercek dunya ornegi: bircok bug bounty raporunda, kullanilmayan bir CNAME kaydinin (orn. eski bir Heroku/GitHub Pages adresine isaret eden) baskasi tarafindan sahiplenilmesiyle olusan 'subdomain takeover' zafiyetleri DNS enumeration ile bulunur."
            : "Real-world example: many bug bounty reports find 'subdomain takeover' flaws via DNS enumeration — a stale CNAME record (e.g. pointing to an abandoned Heroku/GitHub Pages address) gets claimed by someone else."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Araclar ve Ornek Komutlar" : "Tools & Example Commands"}>
        <NoteTable
          headers={tr ? ["Arac", "Amac"] : ["Tool", "Purpose"]}
          rows={[
            ["dig / nslookup", tr ? "Temel DNS sorgulama." : "Basic DNS querying."],
            ["dnsenum / dnsrecon", tr ? "Otomatik DNS enumeration." : "Automated DNS enumeration."],
            ["Sublist3r / Amass", tr ? "Pasif + aktif subdomain kesfi." : "Passive + active subdomain discovery."],
            ["crt.sh / SecurityTrails", tr ? "Sertifika ve gecmis DNS kaydi tabanli pasif kesif." : "Certificate- and historical-DNS-based passive recon."],
          ]}
        />
        <TerminalBlock
          caption="dig"
          lines={[
            { comment: true, text: tr ? "# Tum kayit turlerini sorgula" : "# Query all record types" },
            "dig example.com ANY",
            { comment: true, text: tr ? "# Mail sunucu kaydini sorgula" : "# Query the mail server record" },
            "dig mx example.com",
            { comment: true, text: tr ? "# Zone transfer denemesi (yalnizca izinli/lab hedefte)" : "# Zone transfer attempt (authorized/lab target only)" },
            "dig axfr @ns1.example.com example.com",
          ]}
        />
      </NoteSection>

      <NoteCallout>
        {tr
          ? "DNS enumeration'in pasif kismi (WHOIS, crt.sh gibi herkese acik kaynaklar) genelde yasaldir; aktif tarama ve zone transfer denemeleri sadece kendi domaininizde veya yazili izinli bir pentest kapsaminda yapilmalidir."
          : "The passive side of DNS enumeration (public sources like WHOIS, crt.sh) is generally legal; active scanning and zone-transfer attempts should only happen on your own domain or under a written pentest agreement."}
      </NoteCallout>
    </>
  );
}
