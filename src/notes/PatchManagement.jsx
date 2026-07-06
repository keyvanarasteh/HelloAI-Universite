import { useState } from "react";
import { AlertTriangle, ArchiveX, Eye, FlaskConical, Rocket, ShieldCheck, Wrench } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const windowDiagram = (tr) => `flowchart LR
  A["${tr ? "Yama yayinlanir" : "Patch released"}"] --> B["${tr ? "Yama notlari/CVE kamuya acik olur" : "Patch notes/CVE become public"}"]
  B --> C["${tr ? "Saldirganlar tersine muhendislik yapar" : "Attackers reverse-engineer it"}"]
  C --> D{"${tr ? "Sistem guncellendi mi?" : "Was the system updated?"}"}
  D -->|${tr ? "evet" : "yes"}| E["${tr ? "Guvende" : "Safe"}"]
  D -->|${tr ? "hayir (N-day)" : "no (N-day)"}| F["${tr ? "Kolay hedef" : "Easy target"}"]
`;

export function PatchManagementNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeState, setActiveState] = useState("cve");
  const states = {
    cve: {
      icon: Eye,
      title: tr ? "CVE kamuya acik" : "CVE is public",
      risk: tr ? "Acigin varligi artik herkes tarafindan bilinir." : "The flaw's existence is now known by everyone.",
      action: tr ? "Etkilenen varliklari envanterde bul." : "Find affected assets in the inventory.",
    },
    reverse: {
      icon: AlertTriangle,
      title: tr ? "Tersine muhendislik" : "Reverse engineering",
      risk: tr ? "Saldirganlar yamadan exploit mantigini cikarabilir." : "Attackers can derive exploit logic from the patch.",
      action: tr ? "Riskli sistemlere oncelik ver." : "Prioritize risky systems.",
    },
    exposed: {
      icon: ShieldCheck,
      title: tr ? "Acik sistem" : "Exposed system",
      risk: tr ? "Internete acik ve yamalanmamis sistem kolay hedef olur." : "Internet-facing, unpatched systems become easy targets.",
      action: tr ? "Yamayi hizlandir veya gecici azaltici onlem al." : "Accelerate patching or add temporary mitigation.",
    },
    staging: {
      icon: FlaskConical,
      title: "Staging",
      risk: tr ? "Kontrolsuz yama uretim sistemini bozabilir." : "Uncontrolled patching may break production.",
      action: tr ? "Once test ortaminda calistir." : "Run it in a test environment first.",
    },
    rollout: {
      icon: Rocket,
      title: tr ? "Canli yayilim" : "Production rollout",
      risk: tr ? "Yayilim izlenmezse basarisiz makineler gozden kacar." : "Without monitoring, failed machines are missed.",
      action: tr ? "Yama durumunu raporla ve dogrula." : "Report and verify patch status.",
    },
    eol: {
      icon: ArchiveX,
      title: "End-of-Life",
      risk: tr ? "Destegi biten yazilim artik guvenlik yamasi almaz." : "End-of-life software no longer gets security patches.",
      action: tr ? "Planli gecis veya izolasyon yap." : "Plan migration or isolate it.",
    },
  };
  const active = states[activeState];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Yama Oncelik Panosu" : "Patch Priority Board"}>
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
                  "Uretici firmalar, bulunan guvenlik aciklarini duzelten guncellemeleri yama (patch) olarak yayinlar.",
                  "Yama yayinlandigi an, acigin varligi da (changelog/CVE notlariyla) kamuya acik hale gelir.",
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
            ? "Gercek dunya ornegi: WannaCry fidye yazilimi, Microsoft'un aylar once yayinladigi ama pek cok kurumun uygulamadigi bir Windows aciğini (EternalBlue/MS17-010) kullanarak dunya capinda hizla yayilmisti."
            : "Real-world example: the WannaCry ransomware spread rapidly worldwide by exploiting a Windows flaw (EternalBlue/MS17-010) that Microsoft had patched months earlier — but many organizations hadn't applied it."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Iyi Pratikler" : "Good Practices"}>
        <NoteList
          items={
            tr
              ? [
                  "Otomatik guncellemeleri acik tut (ozellikle isletim sistemi ve tarayici).",
                  "Guvenlik siniflandirmali yamalari once, digerlerini test ettikten sonra uygula.",
                  "Uretimde once test/staging ortaminda dene, sonra canliya al.",
                  "Destegi biten (End-of-Life) yazilimlardan hizla gecis yap — bu sistemler artik hic yama almaz.",
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
