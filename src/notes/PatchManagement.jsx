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

  return (
    <>
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
