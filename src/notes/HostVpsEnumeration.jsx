import { NoteCallout, NoteList, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function HostVpsEnumerationNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Host ve VPS Nedir?" : "What Are Host & VPS?"}>
        <NoteList
          items={
            tr
              ? [
                  "Host: ag uzerinde bir IP adresi ve genelde bir hostname ile tanimlanan herhangi bir cihaz/sunucu.",
                  "Barindirma turleri: shared hosting (bircok site ayni sunucuyu paylasir), dedicated server (tum sunucu tek musteriye ait), VPS, cloud/instance tabanli (AWS EC2, Google Cloud, Azure).",
                  "VPS (Virtual Private Server): fiziksel bir sunucunun sanallastirma (KVM, Xen, vb.) ile bagimsiz dilimlere bolunmesiyle olusan sanal sunucu; kendi isletim sistemine ve kaynaklarina sahiptir.",
                  "Yaygin VPS saglayicilari: DigitalOcean, Linode, Hetzner, Vultr, AWS Lightsail/EC2.",
                ]
              : [
                  "Host: any device/server identified by an IP address and usually a hostname on a network.",
                  "Hosting types: shared hosting (many sites share one server), dedicated server (the whole server belongs to one customer), VPS, cloud/instance-based (AWS EC2, Google Cloud, Azure).",
                  "VPS (Virtual Private Server): a virtual server carved from a physical machine via virtualization (KVM, Xen, etc.), with its own OS and resources.",
                  "Common VPS providers: DigitalOcean, Linode, Hetzner, Vultr, AWS Lightsail/EC2.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Host / IP Enumeration Teknikleri" : "Host / IP Enumeration Techniques"}>
        <NoteTable
          headers={tr ? ["Teknik", "Aciklama"] : ["Technique", "Description"]}
          rows={[
            [
              tr ? "Reverse DNS (PTR)" : "Reverse DNS (PTR)",
              tr ? "Bir IP'den o IP'ye kayitli hostname'i bulma." : "Finding the hostname registered to an IP address.",
            ],
            [
              tr ? "Reverse IP lookup" : "Reverse IP lookup",
              tr
                ? "Ayni IP/sunucu uzerinde baska hangi domainlerin barindigini bulma (shared hosting'de onemli)."
                : "Finding which other domains share the same IP/server (important on shared hosting).",
            ],
            [
              tr ? "ASN / IP blok sorgusu" : "ASN / IP range lookup",
              tr ? "Bir sirketin sahip oldugu tum IP araligini bulma (BGP/whois araclariyla)." : "Finding a company's entire owned IP range via BGP/whois tools.",
            ],
            [
              tr ? "CDN arkasindaki gercek IP" : "Real IP behind a CDN",
              tr
                ? "Gecmis DNS kayitlari, MX kayitlari, veya sertifika/favicon imzasi uzerinden Shodan/Censys'te eslesen IP arama."
                : "Historical DNS records, MX records, or matching a certificate/favicon signature on Shodan/Censys.",
            ],
          ]}
        />
        <NoteCallout tone="warning">
          {tr
            ? "Gercek dunya ornegi: bircok guvenlik arastirmasinda, Cloudflare gibi bir CDN/WAF arkasina saklanan sitelerin gercek origin IP'si gecmis DNS kayitlari veya yanlis yapilandirilmis mail sunucusu uzerinden bulunmus, boylece CDN'in DDoS/WAF korumasi tamamen atlatilabilmistir — Cloudflare notundaki 'yanlis yapilandirmada gercek IP bulunabilir' riskinin somut karsiligi budur."
            : "Real-world example: security research has repeatedly found a site's real origin IP behind a CDN/WAF like Cloudflare via historical DNS records or a misconfigured mail server — fully bypassing the CDN's DDoS/WAF protection. This is the concrete version of the 'a misconfigured origin IP can be uncovered' risk from the Cloudflare note."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Araclar ve Ornek Komutlar" : "Tools & Example Commands"}>
        <NoteTable
          headers={tr ? ["Arac", "Amac"] : ["Tool", "Purpose"]}
          rows={[
            ["whois", tr ? "IP/domain sahiplik ve ASN bilgisi." : "IP/domain ownership and ASN info."],
            ["dig -x <ip>", tr ? "Reverse DNS (PTR) sorgusu." : "Reverse DNS (PTR) lookup."],
            ["viewdns.info", tr ? "Ayni sunucudaki diger domainleri listeleme (Reverse IP Lookup)." : "Listing other domains on the same server (Reverse IP Lookup)."],
            ["Shodan / Censys", tr ? "IP, favicon hash, sertifika imzasi uzerinden arama." : "Search by IP, favicon hash, or certificate signature."],
          ]}
        />
        <TerminalBlock
          caption="whois / dig"
          lines={[
            { comment: true, text: tr ? "# IP'nin sahiplik/ASN bilgisini sorgula" : "# Query the IP's ownership/ASN info" },
            "whois 93.184.216.34",
            { comment: true, text: tr ? "# IP'den hostname'e ters cozumleme" : "# Reverse-resolve the IP to a hostname" },
            "dig -x 93.184.216.34",
          ]}
        />
      </NoteSection>

      <NoteCallout>
        {tr
          ? "Pasif kaynaklardan (whois, crt.sh, Shodan aramasi) bilgi toplamak genelde yasaldir; bulunan gercek origin IP'ye dogrudan tarama/istek yapmak aktif mudahale sayilir ve sadece kendi sisteminizde veya yazili izinli bir pentest kapsaminda yapilmalidir."
          : "Gathering info from passive sources (whois, crt.sh, Shodan search) is generally legal; actively scanning or connecting to the discovered real origin IP counts as active interference and should only happen on your own systems or under a written pentest agreement."}
      </NoteCallout>
    </>
  );
}
