import { Mermaid, NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

const httpDiagram = (tr) => `sequenceDiagram
  participant B as ${tr ? "Tarayici" : "Browser"}
  participant E as ${tr ? "Ag Dinleyen" : "Network Eavesdropper"}
  participant S as ${tr ? "Sunucu" : "Server"}
  B->>S: HTTP ${tr ? "istek (duz metin)" : "request (plain text)"}
  Note over E: ${tr ? "Trafigi okuyabilir" : "Can read the traffic"}
  S->>B: HTTP ${tr ? "cevap (duz metin)" : "response (plain text)"}
`;

const httpsDiagram = (tr) => `sequenceDiagram
  participant B as ${tr ? "Tarayici" : "Browser"}
  participant E as ${tr ? "Ag Dinleyen" : "Network Eavesdropper"}
  participant S as ${tr ? "Sunucu" : "Server"}
  B->>S: HTTPS ${tr ? "istek (TLS ile sifreli)" : "request (TLS-encrypted)"}
  Note over E: ${tr ? "Sadece sifreli veri gorur" : "Only sees encrypted data"}
  S->>B: HTTPS ${tr ? "cevap (TLS ile sifreli)" : "response (TLS-encrypted)"}
`;

export function WebSecurityBasicsNote({ lang, theme }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "HTML/CSS/JS ve HTTPS" : "HTML/CSS/JS & HTTPS"}>
        <NoteList
          items={
            tr
              ? [
                  "Her website, tarayiciya gonderilen HTML (yapi), CSS (gorunum), JS (davranis) dosyalarindan olusur.",
                  "Adres cubugundaki kilit simgesi HTTPS kullanildigini gosterir.",
                ]
              : [
                  "Every website is made of HTML (structure), CSS (look), and JS (behavior) sent to the browser.",
                  "The padlock icon in the address bar confirms HTTPS is being used.",
                ]
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-bold text-[var(--danger)]">HTTP</p>
            <Mermaid theme={theme} chart={httpDiagram(tr)} />
          </div>
          <div>
            <p className="mb-2 text-sm font-bold text-[var(--ok)]">HTTPS</p>
            <Mermaid theme={theme} chart={httpsDiagram(tr)} />
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Guest Wifi Guvenligi" : "Guest Wifi Security"}>
        <NoteList
          items={
            tr
              ? [
                  "Kafe/okul gibi guest aglarda trafik sifreli olmayabilir.",
                  "HTTPS siteler yine sifreli kalir; ama hangi siteye baglanildigi (DNS/SNI) gorulebilir.",
                  "Ag saglayicisi genelde baglanti loglarini (kim, ne zaman, hangi IP) tutar.",
                ]
              : [
                  "On guest networks like cafes/schools, traffic may not be encrypted.",
                  "HTTPS sites stay encrypted, but which site you connect to (DNS/SNI) can still be visible.",
                  "The network provider usually keeps connection logs (who, when, which IP).",
                ]
          }
        />
        <NoteCallout tone="warning">
          {tr
            ? "Pratik oneri: hassas islemleri (banka, sifre girisi) bilinmeyen/guvensiz aglarda yapmaktan kacin, mumkunse HTTPS'e ve gerekiyorsa VPN'e guven."
            : "Practical tip: avoid sensitive actions (banking, entering passwords) on unknown/untrusted networks; rely on HTTPS and a VPN when needed."}
        </NoteCallout>
      </NoteSection>
    </>
  );
}
