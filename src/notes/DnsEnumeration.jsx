import { useState } from "react";
import { AtSign, FileText, Globe2, Mail, Network, Route, ShieldCheck } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

const resolutionDiagram = (tr) => `sequenceDiagram
  participant C as ${tr ? "İstemci" : "Client"}
  participant R as ${tr ? "Çözümleyici" : "Resolver"}
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
  const [activeRecord, setActiveRecord] = useState("A");
  const records = {
    A: {
      icon: Globe2,
      purpose: tr ? "Domain'i IPv4 adresine bağlar." : "Points a domain to an IPv4 address.",
      reveals: tr ? "Web veya servis altyapısının nereye gittiğini gösterir." : "Shows where web or service infrastructure points.",
      defense: tr ? "Eski veya doğrudan origin IP gösteren kayıtları temizle." : "Clean stale records or records exposing origin IPs.",
    },
    CNAME: {
      icon: Route,
      purpose: tr ? "Bir adı başka bir ada alias yapar." : "Aliases one name to another name.",
      reveals: tr ? "Üçüncü taraf servis bağlantılarını ve takeover riskini gösterir." : "Shows third-party service links and takeover risk.",
      defense: tr ? "Terk edilmiş servis hedeflerini periyodik kontrol et." : "Periodically check abandoned service targets.",
    },
    MX: {
      icon: Mail,
      purpose: tr ? "Mail sunucularını belirtir." : "Specifies mail servers.",
      reveals: tr ? "E-posta altyapısı ve tedarikçi bilgisi verir." : "Reveals email infrastructure and providers.",
      defense: tr ? "SPF/DKIM/DMARC ile mail güvenliğini tamamla." : "Complete mail security with SPF/DKIM/DMARC.",
    },
    TXT: {
      icon: FileText,
      purpose: tr ? "Doğrulama ve politika metinleri taşır." : "Carries verification and policy text.",
      reveals: tr ? "Sahiplik, mail politikası ve kullanılan servis izlerini gösterebilir." : "Can show ownership, mail policy, and service traces.",
      defense: tr ? "Gereksiz doğrulama tokenlarını kaldır." : "Remove unnecessary verification tokens.",
    },
    NS: {
      icon: Network,
      purpose: tr ? "Yetkili isim sunucularını belirtir." : "Specifies authoritative name servers.",
      reveals: tr ? "Domain'i kimin yönettiğini ve DNS sağlayıcısını gösterir." : "Shows who manages the domain and DNS provider.",
      defense: tr ? "Yetkili sunucu ve zone transfer ayarlarını denetle." : "Audit authoritative server and zone-transfer settings.",
    },
  };
  const active = records[activeRecord];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "DNS Kayıt Keşif Paneli" : "DNS Record Discovery Panel"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-2">
            {Object.entries(records).map(([id, record]) => {
              const Icon = record.icon;
              const selected = id === activeRecord;
              return (
                <button
                  key={id}
                  onClick={() => setActiveRecord(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="font-mono text-sm font-bold">{id}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Kayıt türü" : "Record type"}</p>
                <h3 className="mt-2 font-mono text-xl font-bold">{activeRecord}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.purpose}</p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <AtSign size={14} />
                  {tr ? "Neyi açığa çıkarır?" : "What it reveals"}
                </div>
                <p className="text-sm leading-6">{active.reveals}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <ShieldCheck size={14} />
                  {tr ? "Savunma kontrolü" : "Defense check"}
                </div>
                <p className="text-sm font-semibold">{active.defense}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "DNS Nedir?" : "What Is DNS?"}>
        <NoteList
          items={
            tr
              ? [
                  "DNS, alan adlarını (örn. example.com) IP adreslerine çeviren, internetin 'telefon rehberi' gibi çalışan sistemdir.",
                  "Çözümleme hiyerarşik ilerler: Root sunucular -> TLD sunucuları (.com, .org, .tr) -> yetkili (authoritative) sunucu.",
                ]
              : [
                  "DNS translates domain names (e.g. example.com) into IP addresses — the internet's 'phone book'.",
                  "Resolution happens hierarchically: root servers -> TLD servers (.com, .org, .tr) -> the authoritative server.",
                ]
          }
        />
        <Mermaid theme={theme} chart={resolutionDiagram(tr)} />
      </NoteSection>

      <NoteSection title={tr ? "Yaygın Kayıt Türleri" : "Common Record Types"}>
        <NoteTable
          headers={tr ? ["Kayıt", "Ne işe yarar"] : ["Record", "Purpose"]}
          rows={[
            ["A", tr ? "Domain'i bir IPv4 adresine bağlar." : "Points a domain to an IPv4 address."],
            ["AAAA", tr ? "Domain'i bir IPv6 adresine bağlar." : "Points a domain to an IPv6 address."],
            ["CNAME", tr ? "Bir domaini başka bir domain adına yönlendirir (alias)." : "Aliases a domain to another domain name."],
            ["MX", tr ? "Domainin mail sunucusunu belirtir." : "Specifies the domain's mail server."],
            ["TXT", tr ? "Serbest metin (SPF/DKIM doğrulama, site sahiplik kanıtı)." : "Free text (SPF/DKIM verification, site-ownership proof)."],
            ["NS", tr ? "Domaini yöneten isim sunucularını belirtir." : "Specifies the name servers managing the domain."],
            ["PTR", tr ? "IP'den hostname'e ters çözümleme (reverse DNS)." : "Reverse-resolves an IP address to a hostname."],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "DNS Enumeration" : "DNS Enumeration"}>
        <NoteList
          items={
            tr
              ? [
                  "Pasif: crt.sh / Certificate Transparency loglarından alt alan adlarını çıkarma; SecurityTrails gibi geçmiş (passive) DNS veritabanlarını sorgulama.",
                  "Aktif: dig/nslookup ile doğrudan kayıt sorgulama, zone transfer (AXFR) denemesi, bilinen kelime listeleriyle subdomain brute-force.",
                ]
              : [
                  "Passive: pulling subdomains from crt.sh / Certificate Transparency logs; querying historical (passive) DNS databases like SecurityTrails.",
                  "Active: direct record queries with dig/nslookup, attempting a zone transfer (AXFR), brute-forcing subdomains with wordlists.",
                ]
          }
        />
        <NoteCallout tone="warning">
          {tr
            ? "Gerçek dünya örneği: birçok bug bounty raporunda, kullanılmayan bir CNAME kaydının (örn. eski bir Heroku/GitHub Pages adresine işaret eden) başkası tarafından sahiplenilmesiyle oluşan 'subdomain takeover' zafiyetleri DNS enumeration ile bulunur."
            : "Real-world example: many bug bounty reports find 'subdomain takeover' flaws via DNS enumeration — a stale CNAME record (e.g. pointing to an abandoned Heroku/GitHub Pages address) gets claimed by someone else."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Araçlar ve Örnek Komutlar" : "Tools & Example Commands"}>
        <NoteTable
          headers={tr ? ["Araç", "Amaç"] : ["Tool", "Purpose"]}
          rows={[
            ["dig / nslookup", tr ? "Temel DNS sorgulama." : "Basic DNS querying."],
            ["dnsenum / dnsrecon", tr ? "Otomatik DNS enumeration." : "Automated DNS enumeration."],
            ["Sublist3r / Amass", tr ? "Pasif + aktif subdomain keşfi." : "Passive + active subdomain discovery."],
            ["crt.sh / SecurityTrails", tr ? "Sertifika ve geçmiş DNS kaydı tabanlı pasif keşif." : "Certificate- and historical-DNS-based passive recon."],
          ]}
        />
        <TerminalBlock
          caption="dig"
          lines={[
            { comment: true, text: tr ? "# Tüm kayıt türlerini sorgula" : "# Query all record types" },
            "dig example.com ANY",
            { comment: true, text: tr ? "# Mail sunucu kaydını sorgula" : "# Query the mail server record" },
            "dig mx example.com",
            { comment: true, text: tr ? "# Zone transfer denemesi (yalnızca izinli/lab hedefte)" : "# Zone transfer attempt (authorized/lab target only)" },
            "dig axfr @ns1.example.com example.com",
          ]}
        />
      </NoteSection>

      <NoteCallout>
        {tr
          ? "DNS enumeration'ın pasif kısmı (WHOIS, crt.sh gibi herkese açık kaynaklar) genellikle yasaldır; aktif tarama ve zone transfer denemeleri yalnızca kendi domaininizde veya yazılı izinli bir pentest kapsamında yapılmalıdır."
          : "The passive side of DNS enumeration (public sources like WHOIS, crt.sh) is generally legal; active scanning and zone-transfer attempts should only happen on your own domain or under a written pentest agreement."}
      </NoteCallout>
    </>
  );
}
