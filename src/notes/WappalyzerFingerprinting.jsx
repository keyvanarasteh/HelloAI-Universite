import { useState } from "react";
import { Braces, Cookie, FileCode2, Globe2, ScrollText, ShieldCheck } from "lucide-react";
import { NoteCallout, NoteList, NoteSection, NoteSteps } from "../components/NoteKit.jsx";

export function WappalyzerFingerprintingNote({ lang }) {
  const tr = lang === "tr";
  const [activeHint, setActiveHint] = useState("html");
  const hints = {
    html: {
      icon: FileCode2,
      title: "HTML",
      reveals: tr ? "Meta etiketleri, generator izleri ve asset yolları CMS ipucu verebilir." : "Meta tags, generator traces, and asset paths can hint at a CMS.",
      audit: tr ? "Kendi sitende gereksiz generator bilgisini azalt." : "Reduce unnecessary generator information on your own site.",
    },
    js: {
      icon: Braces,
      title: "JavaScript",
      reveals: tr ? "React, Vue, analytics veya tag manager izleri gorunebilir." : "React, Vue, analytics, or tag-manager traces may appear.",
      audit: tr ? "Ucuncu taraf script envanterini temiz tut." : "Keep third-party script inventory clean.",
    },
    headers: {
      icon: ScrollText,
      title: tr ? "Header" : "Headers",
      reveals: tr ? "Server, CDN/WAF ve cache katmani hakkinda ipucu verir." : "Hints at server, CDN/WAF, and cache layers.",
      audit: tr ? "Gereksiz banner/header bilgilerini sinirla." : "Limit unnecessary banner/header information.",
    },
    cookies: {
      icon: Cookie,
      title: "Cookies",
      reveals: tr ? "Framework, load balancer veya analytics cookie'leri stack'i gosterebilir." : "Framework, load-balancer, or analytics cookies can reveal stack details.",
      audit: tr ? "Cookie adlarini ve gereksiz izlemeyi gozden gecir." : "Review cookie names and unnecessary tracking.",
    },
    cdn: {
      icon: Globe2,
      title: "CDN",
      reveals: tr ? "Cloudflare, Akamai, AWS gibi altyapi izleri gorunebilir." : "Infrastructure traces like Cloudflare, Akamai, or AWS may be visible.",
      audit: tr ? "CDN ve origin yapilandirmasini tutarli yap." : "Keep CDN and origin configuration consistent.",
    },
  };
  const active = hints[activeHint];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Pasif Parmak Izi Mercegi" : "Passive Fingerprinting Lens"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-2">
            {Object.entries(hints).map(([id, hint]) => {
              const Icon = hint.icon;
              const selected = id === activeHint;
              return (
                <button
                  key={id}
                  onClick={() => setActiveHint(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{hint.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Imza kaynagi" : "Signature source"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.reveals}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <ShieldCheck size={14} />
                {tr ? "Kendi sitende kontrol" : "Check on your own site"}
              </div>
              <p className="text-sm font-semibold">{active.audit}</p>
            </div>
          </div>
        </div>
      </NoteSection>

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
