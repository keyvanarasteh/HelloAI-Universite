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
      visible: tr ? "Aynı IP üzerinde çok sayıda domain bulunabilir." : "Many domains can sit on the same IP.",
      defense: tr ? "Komşu domain riskini ve izolasyonu takip et." : "Track neighboring-domain risk and isolation.",
    },
    vps: {
      icon: Server,
      title: "VPS",
      visible: tr ? "Tek sanal sunucu, kendi OS'u ve servisleriyle görünür." : "One virtual server appears with its own OS and services.",
      defense: tr ? "Gereksiz portları kapat, güvenlik güncellemelerini izle." : "Close unnecessary ports and track security updates.",
    },
    cloud: {
      icon: Cloud,
      title: tr ? "Cloud instance" : "Cloud instance",
      visible: tr ? "Bulut IP blokları, security group ve public servis izleri görünebilir." : "Cloud IP ranges, security groups, and public service traces may be visible.",
      defense: tr ? "Security group ve public exposure kontrolü yap." : "Review security groups and public exposure.",
    },
    cdn: {
      icon: ShieldCheck,
      title: tr ? "CDN arkasında origin" : "Origin behind CDN",
      visible: tr ? "Geçmiş DNS veya yanlış mail kaydı origin'i açığa çıkarabilir." : "Historical DNS or wrong mail records can expose the origin.",
      defense: tr ? "Origin'e yalnızca CDN'den gelen trafiği kabul ettir." : "Allow origin traffic only from the CDN.",
    },
    asn: {
      icon: Network,
      title: "ASN / IP range",
      visible: tr ? "Bir kurumun IP aralıkları ve BGP ilişkileri görünür." : "An organization's IP ranges and BGP relationships are visible.",
      defense: tr ? "Varlık envanterini IP bloklarıyla eşleştir." : "Match asset inventory to IP ranges.",
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Altyapı türü" : "Infrastructure type"}</p>
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
                  {tr ? "Görünürlük" : "Visibility"}
                </div>
                <p className="text-sm leading-6">{active.visible}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Savunma kontrolü" : "Defense check"}</p>
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
                  "Host: ağ üzerinde bir IP adresi ve genellikle bir hostname ile tanımlanan herhangi bir cihaz veya sunucu.",
                  "Barındırma türleri: shared hosting (birçok site aynı sunucuyu paylaşır), dedicated server (tüm sunucu tek müşteriye ait), VPS, cloud/instance tabanlı servisler (AWS EC2, Google Cloud, Azure).",
                  "VPS (Virtual Private Server): fiziksel bir sunucunun sanallaştırma (KVM, Xen vb.) ile bağımsız dilimlere bölünmesiyle oluşan sanal sunucu; kendi işletim sistemine ve kaynaklarına sahiptir.",
                  "Yaygın VPS sağlayıcıları: DigitalOcean, Linode, Hetzner, Vultr, AWS Lightsail/EC2.",
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
          headers={tr ? ["Teknik", "Açıklama"] : ["Technique", "Description"]}
          rows={[
            [
              tr ? "Reverse DNS (PTR)" : "Reverse DNS (PTR)",
              tr ? "Bir IP'den o IP'ye kayıtlı hostname'i bulma." : "Finding the hostname registered to an IP address.",
            ],
            [
              tr ? "Reverse IP lookup" : "Reverse IP lookup",
              tr
                ? "Aynı IP/sunucu üzerinde başka hangi domainlerin barındığını bulma (shared hosting'de önemli)."
                : "Finding which other domains share the same IP/server (important on shared hosting).",
            ],
            [
              tr ? "ASN / IP blok sorgusu" : "ASN / IP range lookup",
              tr ? "Bir şirketin sahip olduğu tüm IP aralığını bulma (BGP/whois araçlarıyla)." : "Finding a company's entire owned IP range via BGP/whois tools.",
            ],
            [
              tr ? "CDN arkasındaki gerçek IP" : "Real IP behind a CDN",
              tr
                ? "Geçmiş DNS kayıtları, MX kayıtları veya sertifika/favicon imzası üzerinden Shodan/Censys'te eşleşen IP arama."
                : "Historical DNS records, MX records, or matching a certificate/favicon signature on Shodan/Censys.",
            ],
          ]}
        />
        <NoteCallout tone="warning">
          {tr
            ? "Gerçek dünya örneği: birçok güvenlik araştırmasında, Cloudflare gibi bir CDN/WAF arkasına saklanan sitelerin gerçek origin IP'si geçmiş DNS kayıtları veya yanlış yapılandırılmış mail sunucusu üzerinden bulunmuş, böylece CDN'in DDoS/WAF koruması tamamen atlatılmıştır. Bu, Cloudflare notundaki 'yanlış yapılandırmada gerçek IP bulunabilir' riskinin somut karşılığıdır."
            : "Real-world example: security research has repeatedly found a site's real origin IP behind a CDN/WAF like Cloudflare via historical DNS records or a misconfigured mail server — fully bypassing the CDN's DDoS/WAF protection. This is the concrete version of the 'a misconfigured origin IP can be uncovered' risk from the Cloudflare note."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Araçlar ve Örnek Komutlar" : "Tools & Example Commands"}>
        <NoteTable
          headers={tr ? ["Araç", "Amaç"] : ["Tool", "Purpose"]}
          rows={[
            ["whois", tr ? "IP/domain sahiplik ve ASN bilgisi." : "IP/domain ownership and ASN info."],
            ["dig -x <ip>", tr ? "Reverse DNS (PTR) sorgusu." : "Reverse DNS (PTR) lookup."],
            ["viewdns.info", tr ? "Aynı sunucudaki diğer domainleri listeleme (Reverse IP Lookup)." : "Listing other domains on the same server (Reverse IP Lookup)."],
            ["Shodan / Censys", tr ? "IP, favicon hash veya sertifika imzası üzerinden arama." : "Search by IP, favicon hash, or certificate signature."],
          ]}
        />
        <TerminalBlock
          caption="whois / dig"
          lines={[
            { comment: true, text: tr ? "# IP'nin sahiplik/ASN bilgisini sorgula" : "# Query the IP's ownership/ASN info" },
            "whois 93.184.216.34",
            { comment: true, text: tr ? "# IP'den hostname'e ters çözümleme" : "# Reverse-resolve the IP to a hostname" },
            "dig -x 93.184.216.34",
          ]}
        />
      </NoteSection>

      <NoteCallout>
        {tr
          ? "Pasif kaynaklardan (whois, crt.sh, Shodan araması) bilgi toplamak genellikle yasaldır; bulunan gerçek origin IP'ye doğrudan tarama/istek yapmak aktif müdahale sayılır ve yalnızca kendi sisteminizde veya yazılı izinli bir pentest kapsamında yapılmalıdır."
          : "Gathering info from passive sources (whois, crt.sh, Shodan search) is generally legal; actively scanning or connecting to the discovered real origin IP counts as active interference and should only happen on your own systems or under a written pentest agreement."}
      </NoteCallout>
    </>
  );
}
