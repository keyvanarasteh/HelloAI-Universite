import { useState } from "react";
import { FileSearch, Gavel, ListTree, MonitorSmartphone, ShieldCheck, TerminalSquare, Workflow } from "lucide-react";
import { NoteCallout, NoteList, NoteSection, TerminalBlock } from "../components/NoteKit.jsx";

export function ReverseEngineeringFridaNote({ lang }) {
  const tr = lang === "tr";
  const [activeStage, setActiveStage] = useState("adb");
  const stages = {
    adb: {
      icon: TerminalSquare,
      title: "ADB",
      lesson: tr ? "Cihaz baglama, yetkilendirme ve shell erisimi lab'in kapisini acar." : "Device connection, authorization, and shell access open the lab workflow.",
      output: tr ? "Yetkili cihaz baglantisi" : "Authorized device connection",
    },
    package: {
      icon: FileSearch,
      title: tr ? "Paket inceleme" : "Package inspection",
      lesson: tr ? "APK, izinler, aktiviteler ve uygulama metadatasi davranis ipucu verir." : "APK, permissions, activities, and app metadata reveal behavior hints.",
      output: tr ? "Uygulama envanteri" : "App inventory",
    },
    logs: {
      icon: ListTree,
      title: "Logcat",
      lesson: tr ? "Canli log akisi hata, API, auth ve veri akisi izlerini gosterir." : "Live logs show error, API, auth, and data-flow traces.",
      output: tr ? "Filtrelenmis log notu" : "Filtered log note",
    },
    frida: {
      icon: Workflow,
      title: "Frida",
      lesson: tr ? "Dinamik enstrumantasyon, calisan uygulamanin davranisini lab ortaminda gozlemlemeyi saglar." : "Dynamic instrumentation helps observe runtime behavior in a lab environment.",
      output: tr ? "Hook hipotezi" : "Hook hypothesis",
    },
    ethics: {
      icon: Gavel,
      title: tr ? "Etik sinir" : "Ethical boundary",
      lesson: tr ? "Sadece kendi cihazinda, kendi uygulamanda veya yazili izinli labda calisilmalidir." : "Work only on your own device/app or in a written authorized lab.",
      output: tr ? "Kapsam kaniti" : "Scope proof",
    },
  };
  const active = stages[activeStage];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Android Analiz Rotasi" : "Android Analysis Route"}>
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Lab asamasi" : "Lab stage"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.lesson}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <ShieldCheck size={14} />
                {tr ? "Cikti" : "Output"}
              </div>
              <p className="text-sm font-semibold">{active.output}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Workshop Basliklari" : "Workshop Topics"}>
        <NoteList
          items={
            tr
              ? [
                  "ADB ile cihaz baglama, shell erisimi, paket kurma/kaldirma.",
                  "Logcat, dosya sistemi, yedekleme ve input otomasyonu.",
                  "Frida ile process attach/spawn ve JavaScript hook mantigi.",
                  "Login, CSRF, audit log ve yazili izin sinirlari.",
                ]
              : [
                  "ADB device connection, shell access, package install/remove.",
                  "Logcat, filesystem, backup, and input automation.",
                  "Frida process attach/spawn and JavaScript hook logic.",
                  "Login, CSRF, audit logs, and written authorization boundaries.",
                ]
          }
        />
      </NoteSection>

      <TerminalBlock
        caption={tr ? "Lab refleksi" : "Lab reflex"}
        lines={[
          { comment: true, text: tr ? "# Once cihaz ve kapsam dogrulanir" : "# Device and scope are verified first" },
          "adb devices",
          { comment: true, text: tr ? "# Canli log akisi labda filtrelenir" : "# Live logs are filtered in the lab" },
          "adb logcat",
        ]}
      />

      <NoteCallout tone="warning">
        {tr
          ? "Tersine muhendislik ve dinamik enstrumantasyon yalnizca kendi cihaz/uygulamanizda veya yazili izinli egitim ortaminda yapilmalidir."
          : "Reverse engineering and dynamic instrumentation should only be done on your own device/app or in a written authorized training environment."}
      </NoteCallout>
    </>
  );
}
