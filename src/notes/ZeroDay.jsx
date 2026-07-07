import { useState } from "react";
import { Bug, EyeOff, HandCoins, Megaphone, ShieldCheck, Wrench } from "lucide-react";
import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const timelineDiagram = (tr) => `flowchart TD
  V["${tr ? "Zafiyet var (bilinmiyor)" : "Vulnerability exists (unknown)"}"] --> F["${tr ? "Bir araştırmacı/saldırgan bulur" : "A researcher/attacker discovers it"}"]
  F --> R{"${tr ? "Ne yapılır?" : "What happens next?"}"}
  R -->|${tr ? "sorumlu bildirim" : "responsible disclosure"}| B["${tr ? "Bug bounty / ureticiye bildirim" : "Bug bounty / vendor notified"}"]
  R -->|${tr ? "kara/gri pazar" : "black/gray market"}| S["${tr ? "En yüksek teklife satılır" : "Sold to the highest bidder"}"]
  B --> P["${tr ? "Yama yayınlanır" : "Patch released"}"]
  S --> E["${tr ? "Sessizce/hedefli kullanılır" : "Used quietly / in targeted attacks"}"]
  E -.->|${tr ? "sonunda fark edilir" : "eventually discovered"}| P
`;

export function ZeroDayNote({ lang, theme }) {
  const tr = lang === "tr";
  const [activeStage, setActiveStage] = useState("unknown");
  const stages = {
    unknown: {
      icon: EyeOff,
      title: tr ? "Bilinmeyen açık" : "Unknown flaw",
      meaning: tr ? "Üretici ve savunma sistemleri açıktan habersizdir." : "The vendor and defense systems do not know about the flaw.",
      defense: tr ? "Saldırı yüzeyini küçült, az yetki ilkesini uygula." : "Reduce attack surface and apply least privilege.",
    },
    discover: {
      icon: Bug,
      title: tr ? "Keşif" : "Discovery",
      meaning: tr ? "Araştırmacı veya saldırgan hatayı bulur." : "A researcher or attacker finds the bug.",
      defense: tr ? "Bug bounty ve güvenli bildirim kanalı kur." : "Maintain bug bounty and safe reporting channels.",
    },
    disclose: {
      icon: Megaphone,
      title: tr ? "Sorumlu bildirim" : "Responsible disclosure",
      meaning: tr ? "Açık üreticiye bildirilir, yama için zaman tanınır." : "The flaw is reported to the vendor, giving time to patch.",
      defense: tr ? "Bildirim sürecini hızlı ve saygılı yönet." : "Run the reporting process quickly and respectfully.",
    },
    market: {
      icon: HandCoins,
      title: tr ? "Kara/gri pazar" : "Black/gray market",
      meaning: tr ? "Açık gizlice satılır veya hedefli saldırılar için saklanır." : "The flaw is sold quietly or kept for targeted attacks.",
      defense: tr ? "EDR, segmentasyon ve anomali izleme ile hasarı sınırla." : "Limit damage with EDR, segmentation, and anomaly monitoring.",
    },
    patch: {
      icon: Wrench,
      title: tr ? "Yama" : "Patch",
      meaning: tr ? "Üretici düzeltme yayınlar; artık hızlı dağıtım kritiktir." : "The vendor releases a fix; fast deployment becomes critical.",
      defense: tr ? "Yama yönetimi ve varlık envanterini hazır tut." : "Keep patch management and asset inventory ready.",
    },
  };
  const active = stages[activeStage];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "0-Day Yaşam Döngüsü" : "0-Day Lifecycle"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-2">
            {Object.entries(stages).map(([id, stage]) => {
              const Icon = stage.icon;
              const selected = id === activeStage;
              return (
                <button
                  key={id}
                  onClick={() => setActiveStage(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{stage.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Aşama" : "Stage"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.meaning}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <ShieldCheck size={14} />
                {tr ? "Savunma refleksi" : "Defense reflex"}
              </div>
              <p className="text-sm font-semibold">{active.defense}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Tanım" : "Definition"}>
        <NoteList
          items={
            tr
              ? [
                  "0-day: üreticinin henüz haberdar olmadığı veya henüz yama yayınlamadığı güvenlik açığı.",
                  "İsim buradan gelir: üretici açığı öğrendiğinde yamayı çıkarmak için '0 günü' vardır; açık zaten aktif kullanımda olabilir.",
                  "0-day exploit: bu açıktan faydalanan, henüz savunması olmayan saldırı kodu veya tekniği.",
                ]
              : [
                  "0-day: a security flaw the vendor doesn't yet know about, or hasn't patched yet.",
                  "The name comes from the vendor having '0 days' to fix it once discovered — it may already be actively exploited.",
                  "0-day exploit: attack code/technique that takes advantage of the flaw before any defense exists.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Keşiften Yamaya Giden Yol" : "From Discovery to Patch"}>
        <Mermaid theme={theme} chart={timelineDiagram(tr)} />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "Neden tehlikeli: henüz imza veya yama olmadığı için klasik antivirus/IDS tarafından yakalanması zordur; kritik sistemlerde (kamu, sağlık, enerji, bankacılık) kullanılırsa büyük hasar verebilir; APT grupları hedefli saldırılarda sessizce saklayabilir."
          : "Why it's dangerous: with no signature or patch yet, classic antivirus/IDS struggle to catch it; used against critical systems (government, health, energy, banking) it can cause major damage; APT groups stockpile them quietly for targeted attacks."}
      </NoteCallout>

      <NoteSection title={tr ? "Savunma Yaklaşımları" : "Defensive Approaches"}>
        <NoteList
          items={
            tr
              ? [
                  "Düzenli ve hızlı yama yönetimi.",
                  "Katmanlı güvenlik (defense-in-depth).",
                  "Davranışsal/anomali tabanlı tespit (EDR).",
                  "Az yetki ilkesi (least privilege).",
                  "Kurumsal bug bounty programlarına destek.",
                ]
              : [
                  "Regular, fast patch management.",
                  "Defense-in-depth (layered security).",
                  "Behavioral/anomaly-based detection (EDR).",
                  "Least privilege principle.",
                  "Supporting corporate bug bounty programs.",
                ]
          }
        />
      </NoteSection>
    </>
  );
}
