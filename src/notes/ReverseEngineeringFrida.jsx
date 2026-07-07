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
      lesson: tr ? "Cihaz bağlama, yetkilendirme ve shell erişimi lab'in kapısını açar." : "Device connection, authorization, and shell access open the lab workflow.",
      output: tr ? "Yetkili cihaz bağlantısı" : "Authorized device connection",
    },
    package: {
      icon: FileSearch,
      title: tr ? "Paket inceleme" : "Package inspection",
      lesson: tr ? "APK, izinler, aktiviteler ve uygulama metadatası davranış ipucu verir." : "APK, permissions, activities, and app metadata reveal behavior hints.",
      output: tr ? "Uygulama envanteri" : "App inventory",
    },
    logs: {
      icon: ListTree,
      title: "Logcat",
      lesson: tr ? "Canlı log akışı hata, API, auth ve veri akışı izlerini gösterir." : "Live logs show error, API, auth, and data-flow traces.",
      output: tr ? "Filtrelenmiş log notu" : "Filtered log note",
    },
    frida: {
      icon: Workflow,
      title: "Frida",
      lesson: tr ? "Dinamik enstrümantasyon, çalışan uygulamanın davranışını lab ortamında gözlemlemeyi sağlar." : "Dynamic instrumentation helps observe runtime behavior in a lab environment.",
      output: tr ? "Hook hipotezi" : "Hook hypothesis",
    },
    ethics: {
      icon: Gavel,
      title: tr ? "Etik sınır" : "Ethical boundary",
      lesson: tr ? "Yalnızca kendi cihazında, kendi uygulamanda veya yazılı izinli labda çalışılmalıdır." : "Work only on your own device/app or in a written authorized lab.",
      output: tr ? "Kapsam kanıtı" : "Scope proof",
    },
  };
  const active = stages[activeStage];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Android Analiz Rotası" : "Android Analysis Route"}>
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Lab aşaması" : "Lab stage"}</p>
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
                  "ADB ile cihaz bağlama, shell erişimi, paket kurma/kaldırma.",
                  "Logcat, dosya sistemi, yedekleme ve input otomasyonu.",
                  "Frida ile process attach/spawn ve JavaScript hook mantığı.",
                  "Login, CSRF, audit log ve yazılı izin sınırları.",
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
          { comment: true, text: tr ? "# Önce cihaz ve kapsam doğrulanır" : "# Device and scope are verified first" },
          "adb devices",
          { comment: true, text: tr ? "# Canlı log akışı labda filtrelenir" : "# Live logs are filtered in the lab" },
          "adb logcat",
        ]}
      />

      <NoteCallout tone="warning">
        {tr
          ? "Tersine mühendislik ve dinamik enstrümantasyon yalnızca kendi cihaz/uygulamanızda veya yazılı izinli eğitim ortamında yapılmalıdır."
          : "Reverse engineering and dynamic instrumentation should only be done on your own device/app or in a written authorized training environment."}
      </NoteCallout>
    </>
  );
}
