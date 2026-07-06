import { Mermaid, NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

const isolationDiagram = (tr) => `flowchart LR
  subgraph Insecure[${tr ? "Izole Edilmemis" : "Not Isolated"}]
    G1["${tr ? "Misafir Cihaz" : "Guest Device"}"] --> N1["${tr ? "Guest Wifi" : "Guest Wifi"}"]
    N1 --> I1["${tr ? "Kurumsal Ic Ag" : "Internal Network"}"]
  end
  subgraph Secure[${tr ? "VLAN ile Izole" : "VLAN-Isolated"}]
    G2["${tr ? "Misafir Cihaz" : "Guest Device"}"] --> N2["${tr ? "Guest Wifi (VLAN)" : "Guest Wifi (VLAN)"}"]
    N2 --> W2["${tr ? "Sadece Internet" : "Internet Only"}"]
  end
`;

export function WifiSecurityRisksNote({ lang, theme }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Guest Wifi Neden Riskli Olabilir?" : "Why Guest Wifi Can Be Risky"}>
        <NoteList
          items={
            tr
              ? [
                  "Misafir aglari genelde hizli kurulum icin basit yapilandirilir; bazen ana kurumsal agdan yeterince izole edilmez.",
                  "Ag savunmasiz kalirsa, sifrelenmemis (HTTP) trafik veya zayif giris ekranlari izlenebilir hale gelebilir.",
                  "Gorulebilecek hassas veri ornekleri: kimlik numarasi (TC kimlik no), telefon numarasi, SMS/e-posta dogrulama kodu (OTP).",
                ]
              : [
                  "Guest networks are often set up quickly with minimal configuration and may not be well isolated from the internal network.",
                  "If the network is left exposed, unencrypted (HTTP) traffic or weak login screens can become observable.",
                  "Examples of sensitive data that could be exposed: national ID numbers, phone numbers, SMS/email verification codes (OTP).",
                ]
          }
        />
        <Mermaid theme={theme} chart={isolationDiagram(tr)} />
      </NoteSection>

      <NoteSection title={tr ? "Sonuclari" : "Consequences"}>
        <NoteTable
          headers={tr ? ["Risk", "Aciklama"] : ["Risk", "Description"]}
          rows={[
            [
              tr ? "Kimlik hirsizligi" : "Identity theft",
              tr ? "Kimlik numarasi gibi bilgilerle sahte basvuru/islem yapilabilir." : "Stolen ID numbers can be used for fraudulent applications/transactions.",
            ],
            [
              tr ? "Hesap ele gecirme" : "Account takeover",
              tr ? "OTP/dogrulama kodu calinirsa oturum veya hesap devralinabilir." : "A stolen OTP/verification code can let an attacker hijack a session or account.",
            ],
            [
              tr ? "Kimlige burunme" : "Impersonation",
              tr
                ? "Ele gecirilen kimlikle mağdur, islemedigi bir sucla iliskilendirilebilir."
                : "Using a stolen identity, the victim can end up linked to a crime they didn't commit.",
            ],
          ]}
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "KVKK ve hukuki boyut: TC kimlik no ve iletisim bilgisi KVKK kapsaminda kisisel veridir. Yetkisiz ele gecirme, TCK'nin bilisim suclarina iliskin maddeleri kapsaminda suctur. Bu tur testler sadece yazili izinli, kapsami net pentest anlasmalari icinde ve izole lab ortamlarinda yapilabilir — gercek kullanicilarin verisi asla izinsiz hedef alinmamalidir."
          : "KVKK / legal angle: national ID numbers and contact info are personal data under Turkish law (KVKK), and unauthorized capture is a crime under the penal code's computer-crime articles. This kind of testing may only happen under a written, scoped pentest agreement in an isolated lab — never against real users' data without authorization."}
      </NoteCallout>

      <NoteSection title={tr ? "Savunma Onerileri" : "Defensive Recommendations"}>
        <NoteList
          items={
            tr
              ? [
                  "Guest agi ana agdan VLAN ile izole et.",
                  "Guest agda zorunlu HTTPS/HSTS kullan.",
                  "WPA2/3-Enterprise gibi guclu kimlik dogrulama tercih et.",
                  "Ag izleme ve anormal trafik tespiti (IDS) kullan.",
                ]
              : [
                  "Isolate the guest network from the internal network with a VLAN.",
                  "Enforce HTTPS/HSTS on the guest network.",
                  "Prefer strong authentication like WPA2/3-Enterprise.",
                  "Use network monitoring and anomaly detection (IDS).",
                ]
          }
        />
      </NoteSection>
    </>
  );
}
