import { useState } from "react";
import { BadgeCheck, FileSearch, Globe2, KeyRound, Network, Radar, ShieldCheck } from "lucide-react";
import { NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

export function WebQSecurityNote({ lang }) {
  const tr = lang === "tr";
  const [activeModule, setActiveModule] = useState("domain");
  const modules = {
    domain: {
      icon: Globe2,
      title: "Domain Insight",
      signal: tr ? "WHOIS, SSL zinciri, DNS haritası ve port görünürlüğü birlikte okunur." : "WHOIS, SSL chain, DNS map, and port visibility are read together.",
      output: tr ? "Domain risk özeti" : "Domain risk summary",
    },
    tech: {
      icon: FileSearch,
      title: tr ? "Teknoloji parmak izi" : "Tech fingerprinting",
      signal: tr ? "CMS, framework, CDN ve header izleri pasif olarak yorumlanır." : "CMS, framework, CDN, and header traces are interpreted passively.",
      output: tr ? "Teknoloji envanteri" : "Technology inventory",
    },
    subdomain: {
      icon: Network,
      title: tr ? "Subdomain keşfi" : "Subdomain discovery",
      signal: tr ? "Canlı/ölü alt alanlar ayrılır, takeover riski not edilir." : "Live/dead subdomains are separated and takeover risk is noted.",
      output: tr ? "Alt alan haritası" : "Subdomain map",
    },
    secrets: {
      icon: KeyRound,
      title: tr ? "Secret kontrolü" : "Secret checks",
      signal: tr ? "Config/env gibi yanlış açılmış noktalarda sızıntı belirtisi aranır." : "Leak signs are checked in misexposed places like config/env paths.",
      output: tr ? "Sızıntı bulgusu veya temiz sonuç" : "Leak finding or clean result",
    },
    score: {
      icon: BadgeCheck,
      title: tr ? "Güvenlik skoru" : "Security score",
      signal: tr ? "WAF, CORS, header ve TLS bulguları A+ - F modeline dönüşür." : "WAF, CORS, header, and TLS findings become an A+ to F model.",
      output: tr ? "Öncelikli düzeltme listesi" : "Prioritized fix list",
    },
  };
  const active = modules[activeModule];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "WebQ Analiz Modülleri" : "WebQ Analysis Modules"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-2">
            {Object.entries(modules).map(([id, module]) => {
              const Icon = module.icon;
              const selected = id === activeModule;
              return (
                <button
                  key={id}
                  onClick={() => setActiveModule(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{module.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Analiz modülü" : "Analysis module"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.signal}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <Radar size={14} />
                {tr ? "Çıktı" : "Output"}
              </div>
              <p className="text-sm font-semibold">{active.output}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Workshop Başlıkları" : "Workshop Topics"}>
        <NoteList
          items={
            tr
              ? [
                  "Domain insight: WHOIS, SSL zinciri, DNS haritalama ve port görünürlüğü.",
                  "Subdomain keşfi, contact spidering ve toplu domain doğrulama.",
                  "Secret scanner, subdomain takeover analizi ve CVE korelasyonu.",
                  "WAF, CORS ve güvenlik header'ları üzerinden skor modeli.",
                ]
              : [
                  "Domain insight: WHOIS, SSL chain, DNS mapping, port visibility.",
                  "Subdomain discovery, contact spidering, and bulk domain validation.",
                  "Secret scanner, subdomain takeover analysis, and CVE correlation.",
                  "Score model based on WAF, CORS, and security headers.",
                ]
          }
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "WebQ benzeri analizler yalnızca kendi domainlerinizde, izinli bug bounty kapsamında veya yazılı pentest sözleşmesiyle uygulanmalıdır."
          : "WebQ-like analysis should only be used on your own domains, permitted bug-bounty scope, or under a written pentest agreement."}
      </NoteCallout>

      <NoteCallout tone="ok">
        <span className="inline-flex items-center gap-2">
          <ShieldCheck size={16} />
          {tr ? "Amaç: keşif bulgusunu savunma iyileştirmesine dönüştürmek." : "Goal: turn recon findings into defensive improvement."}
        </span>
      </NoteCallout>
    </>
  );
}
