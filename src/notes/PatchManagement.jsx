import { useState } from "react";
import { AlertTriangle, ArchiveX, Eye, FlaskConical, Rocket, ShieldCheck, Wrench } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const windowDiagram = (tr) => `flowchart LR
  A["${tr ? "Yama yayınlanır" : "Patch released"}"] --> B["${tr ? "Yama notları/CVE kamuya açık olur" : "Patch notes/CVE become public"}"]
  B --> C["${tr ? "Saldırganlar tersine mühendislik yapar" : "Attackers reverse-engineer it"}"]
  C --> D{"${tr ? "Sistem güncellendi mi?" : "Was the system updated?"}"}
  D -->|${tr ? "evet" : "yes"}| E["${tr ? "Güvende" : "Safe"}"]
  D -->|${tr ? "hayır (N-day)" : "no (N-day)"}| F["${tr ? "Kolay hedef" : "Easy target"}"]
`;

export function PatchManagementNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeState, setActiveState] = useState("cve");
  const states = {
    cve: {
      icon: Eye,
      title: tr ? "CVE kamuya açık" : "CVE is public",
      risk: tr ? "Açığın varlığı artık herkes tarafından bilinir." : "The flaw's existence is now known by everyone.",
      action: tr ? "Etkilenen varlıkları envanterde bul." : "Find affected assets in the inventory.",
    },
    reverse: {
      icon: AlertTriangle,
      title: tr ? "Tersine mühendislik" : "Reverse engineering",
      risk: tr ? "Saldırganlar yamadan exploit mantığını çıkarabilir." : "Attackers can derive exploit logic from the patch.",
      action: tr ? "Riskli sistemlere öncelik ver." : "Prioritize risky systems.",
    },
    exposed: {
      icon: ShieldCheck,
      title: tr ? "Açık sistem" : "Exposed system",
      risk: tr ? "İnternete açık ve yamalanmamış sistem kolay hedef olur." : "Internet-facing, unpatched systems become easy targets.",
      action: tr ? "Yamayı hızlandır veya geçici azaltıcı önlem al." : "Accelerate patching or add temporary mitigation.",
    },
    staging: {
      icon: FlaskConical,
      title: "Staging",
      risk: tr ? "Kontrolsüz yama üretim sistemini bozabilir." : "Uncontrolled patching may break production.",
      action: tr ? "Önce test ortamında çalıştır." : "Run it in a test environment first.",
    },
    rollout: {
      icon: Rocket,
      title: tr ? "Canlı yayılım" : "Production rollout",
      risk: tr ? "Yayılım izlenmezse başarısız makineler gözden kaçar." : "Without monitoring, failed machines are missed.",
      action: tr ? "Yama durumunu raporla ve doğrula." : "Report and verify patch status.",
    },
    eol: {
      icon: ArchiveX,
      title: "End-of-Life",
      risk: tr ? "Desteği biten yazılım artık güvenlik yaması almaz." : "End-of-life software no longer gets security patches.",
      action: tr ? "Planlı geçiş veya izolasyon yap." : "Plan migration or isolate it.",
    },
  };
  const active = states[activeState];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Yama Öncelik Panosu" : "Patch Priority Board"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {Object.entries(states).map(([id, state]) => {
              const Icon = state.icon;
              const selected = id === activeState;
              return (
                <button
                  key={id}
                  onClick={() => setActiveState(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{state.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Yama durumu" : "Patch state"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-[var(--danger)]/40 bg-[var(--danger-soft)] p-4">
                <p className="text-xs font-bold uppercase text-[var(--danger)]">{tr ? "Risk" : "Risk"}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text)]">{active.risk}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <Wrench size={14} />
                  {tr ? "Sonraki eylem" : "Next action"}
                </div>
                <p className="text-sm font-semibold">{active.action}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Yama Nedir?" : "What Is a Patch?"}>
        <NoteList
          items={
            tr
              ? [
                  "Üretici firmalar, bulunan güvenlik açıklarını düzelten güncellemeleri yama (patch) olarak yayınlar.",
                  "Yama yayınlandığı an, açığın varlığı da changelog/CVE notlarıyla kamuya açık hale gelir.",
                ]
              : [
                  "Vendors release updates that fix known security flaws as patches.",
                  "The moment a patch ships, the flaw's existence becomes public knowledge (via changelogs/CVE notes).",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "N-Day Penceresi" : "The N-Day Window"}>
        <Mermaid theme={theme} chart={windowDiagram(tr)} />
        <NoteCallout tone="warning">
          {tr
            ? "Gerçek dünya örneği: WannaCry fidye yazılımı, Microsoft'un aylar önce yayınladığı fakat pek çok kurumun uygulamadığı bir Windows açığını (EternalBlue/MS17-010) kullanarak dünya çapında hızla yayılmıştı."
            : "Real-world example: the WannaCry ransomware spread rapidly worldwide by exploiting a Windows flaw (EternalBlue/MS17-010) that Microsoft had patched months earlier — but many organizations hadn't applied it."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "İyi Pratikler" : "Good Practices"}>
        <NoteList
          items={
            tr
              ? [
                  "Otomatik güncellemeleri açık tut (özellikle işletim sistemi ve tarayıcı).",
                  "Güvenlik sınıflandırmalı yamaları önce, diğerlerini test ettikten sonra uygula.",
                  "Üretimde önce test/staging ortamında dene, sonra canlıya al.",
                  "Desteği biten (End-of-Life) yazılımlardan hızla geçiş yap; bu sistemler artık hiç yama almaz.",
                ]
              : [
                  "Keep automatic updates on (especially OS and browser).",
                  "Apply security-classified patches first, others after testing.",
                  "Test in staging before rolling out to production.",
                  "Migrate off End-of-Life software quickly — it no longer receives any patches at all.",
                ]
          }
        />
      </NoteSection>
    </>
  );
}
