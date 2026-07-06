import { useState } from "react";
import { Apple, Building2, Monitor, Server, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { NoteCallout, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function OsWindowsLinuxNote({ lang }) {
  const tr = lang === "tr";
  const [activeUse, setActiveUse] = useState("server");
  const uses = {
    desktop: {
      icon: Monitor,
      title: tr ? "Genel masaustu" : "General desktop",
      fit: "Windows",
      why: tr ? "Donanim, oyun ve kurumsal yazilim destegi genistir." : "Broad hardware, gaming, and enterprise software support.",
      tradeoff: tr ? "Kapali kaynak; sistemin icini degistirme ozgurlugu sinirlidir." : "Closed source; less freedom to change system internals.",
    },
    server: {
      icon: Server,
      title: tr ? "Sunucu / Docker" : "Server / Docker",
      fit: "Ubuntu Server / Linux",
      why: tr ? "Hafif, otomasyon dostu, paket yonetimi guclu ve sunucularda standarttir." : "Lightweight, automation-friendly, strong package management, standard on servers.",
      tradeoff: tr ? "Terminal bilgisi ve sistem yonetimi disiplini ister." : "Requires terminal skill and system administration discipline.",
    },
    security: {
      icon: ShieldCheck,
      title: tr ? "Guvenlik lab'i" : "Security lab",
      fit: "Kali Linux",
      why: tr ? "Pentest araclari hazir gelir; egitim ve izinli test icin pratiktir." : "Pentest tools come ready; practical for training and authorized testing.",
      tradeoff: tr ? "Gundelik ana isletim sistemi gibi kullanmak yerine lab amacli dusun." : "Think of it as a lab OS rather than a daily driver.",
    },
    apple: {
      icon: Apple,
      title: tr ? "Apple ekosistemi" : "Apple ecosystem",
      fit: "macOS",
      why: tr ? "GUI guclu, Unix tabanli terminal var, Apple donanim/yazilim akisi uyumludur." : "Strong GUI, Unix-based terminal, smooth Apple hardware/software workflow.",
      tradeoff: tr ? "Kapali ekosistem ve donanim maliyeti yuksek olabilir." : "Closed ecosystem and hardware cost can be high.",
    },
  };
  const active = uses[activeUse];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Isletim Sistemi Secim Paneli" : "Operating System Choice Panel"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(uses).map(([id, item]) => {
              const Icon = item.icon;
              const selected = id === activeUse;
              return (
                <button
                  key={id}
                  onClick={() => setActiveUse(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{item.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "En uygun rota" : "Best-fit route"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.fit}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.why}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <SlidersHorizontal size={14} />
                {tr ? "Takas" : "Tradeoff"}
              </div>
              <p className="text-sm font-semibold">{active.tradeoff}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Windows vs Linux vs macOS" : "Windows vs Linux vs macOS"}>
        <NoteTable
          headers={tr ? ["Sistem", "Lisans", "Tipik kullanim"] : ["System", "License", "Typical use"]}
          rows={[
            [
              "Windows",
              tr ? "Kapali kaynak" : "Closed source",
              tr ? "Genis donanim/oyun/kurumsal yazilim destegi." : "Broad hardware/gaming/enterprise software support.",
            ],
            [
              "Linux",
              tr ? "Acik kaynak (cekirdek)" : "Open source (kernel)",
              tr ? "Sunucular, gelistirici ortamlari, yuzlerce dagitim." : "Servers, dev environments, hundreds of distros.",
            ],
            [
              "macOS",
              tr ? "Kapali kaynak (Unix tabanli)" : "Closed source (Unix-based)",
              tr ? "Apple donanimi, guclu GUI + terminal." : "Apple hardware, strong GUI + terminal.",
            ],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Dagitimlar (Distro)" : "Distros"}>
        <NoteTable
          headers={tr ? ["Dagitim", "Kullanim alani"] : ["Distro", "Use case"]}
          rows={[
            [
              "Kali Linux",
              tr
                ? "Pentest/siber guvenlik arastirmasi icin guvenlik araclariyla gelir; sadece yasal, izinli testlerde."
                : "Comes preloaded with security tools for pentesting/research; only for legal, authorized testing.",
            ],
            [
              "Ubuntu Server",
              tr
                ? "Arayuzsuz sunucu OS'u; web/veritabani/Docker host'lari, apt ile yonetilir."
                : "Headless server OS; web/database/Docker hosts, managed with apt.",
            ],
            [
              "CentOS",
              tr
                ? "RHEL uyumlu kurumsal dagitim, yum/dnf kullanir; klasik surum bitti, yerini CentOS Stream aldi."
                : "RHEL-compatible enterprise distro using yum/dnf; the classic release ended, replaced by CentOS Stream.",
            ],
          ]}
        />
        <TerminalBlock
          caption={tr ? "Paket yonetimi ornekleri" : "Package manager examples"}
          lines={["sudo apt update && sudo apt install nginx", "sudo dnf install nginx"]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Acik Kaynak Neden Hizli Buyuyor?" : "Why Open Source Grows Fast"}>
        <div className="grid gap-3 sm:grid-cols-2">
          <NoteCallout tone="ok">
            {tr
              ? "Artilari: ucretsiz/dusuk maliyet, yuksek ozellestirilebilirlik, genis topluluk destegi, seffaflikla hizli hata duzeltme."
              : "Pros: free/low-cost, highly customizable, large community support, transparency speeds up bug fixes."}
          </NoteCallout>
          <NoteCallout tone="warning">
            {tr
              ? "Eksileri: garanti resmi destek yok, dokumantasyon kalitesi degisken, dagitim fazlaligi, bilinen aciklar yama oncesi herkese gorunur."
              : "Cons: no guaranteed official support, inconsistent documentation, too many variants, known flaws are visible before a patch ships."}
          </NoteCallout>
        </div>
      </NoteSection>
    </>
  );
}
