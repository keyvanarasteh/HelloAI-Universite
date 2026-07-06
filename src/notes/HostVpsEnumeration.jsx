import { useState } from "react";
import { Boxes, Cloud, Database, Network, Server, ShieldCheck } from "lucide-react";
import { NoteCallout, NoteList, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function HostVpsEnumerationNote({ lang }) {
  const tr = lang === "tr";
  const [activeTopology, setActiveTopology] = useState("vps");
  const topologies = {
    shared: {
      icon: Boxes,
      title: tr ? "Shared hosting" : "Shared hosting",
      visible: tr ? "Ayni IP uzerinde cok sayida domain bulunabilir." : "Many domains can sit on the same IP.",
      defense: tr ? "Komşu domain riskini ve izolasyonu takip et." : "Track neighboring-domain risk and isolation.",
    },
    vps: {
      icon: Server,
      title: "VPS",
      visible: tr ? "Tek sanal sunucu, kendi OS'u ve servisleriyle gorunur." : "One virtual server appears with its own OS and services.",
      defense: tr ? "Gereksiz portlari kapat, guvenlik guncellemelerini izle." : "Close unnecessary ports and track security updates.",
    },
    cloud: {
      icon: Cloud,
      title: tr ? "Cloud instance" : "Cloud instance",
      visible: tr ? "Bulut IP bloklari, security group ve public servis izleri gorunebilir." : "Cloud IP ranges, security groups, and public service traces may be visible.",
      defense: tr ? "Security group ve public exposure kontrolu yap." : "Review security groups and public exposure.",
    },
    cdn: {
      icon: ShieldCheck,
      title: tr ? "CDN arkasinda origin" : "Origin behind CDN",
      visible: tr ? "Gecmis DNS veya yanlis mail kaydi origin'i aciga cikarabilir." : "Historical DNS or wrong mail records can expose the origin.",
      defense: tr ? "Origin'e sadece CDN'den gelen trafigi kabul ettir." : "Allow origin traffic only from the CDN.",
    },
    asn: {
      icon: Network,
      title: "ASN / IP range",
      visible: tr ? "Bir kurumun IP araliklari ve BGP iliskileri gorunur." : "An organization's IP ranges and BGP relationships are visible.",
      defense: tr ? "Varlik envanterini IP bloklariyla eslestir." : "Match asset inventory to IP ranges.",
    },
  };
  const active = topologies[activeTopology];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Hosting Topoloji Paneli" : "Hosting Topology Panel"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-2">
            {Object.entries(topologies).map(([id, topology]) => {
              const Icon = topology.icon;
              const selected = id === activeTopology;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTopology(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{topology.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Altyapi turu" : "Infrastructure type"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <Database size={14} />
                  {tr ? "Gorunurluk" : "Visibility"}
                </div>
                <p className="text-sm leading-6">{active.visible}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Savunma kontrolu" : "Defense check"}</p>
                <p className="mt-2 text-sm font-semibold">{active.defense}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

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
