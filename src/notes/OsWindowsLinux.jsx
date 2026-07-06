import { NoteCallout, NoteSection, NoteTable, TerminalBlock } from "../components/NoteKit.jsx";

export function OsWindowsLinuxNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
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
