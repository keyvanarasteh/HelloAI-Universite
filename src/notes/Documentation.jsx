import { NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

export function DocumentationNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Kullanim ve Format" : "Usage and Format"}>
        <NoteList
          items={
            tr
              ? [
                  "Onemli kararlar ve is akislari docs/*.md dosyalarinda Markdown ile yazilir.",
                  "Markdown basit, okunakli ve Github/Gitlab gibi platformlarda otomatik guzel gorunur.",
                  "Bu projede ayni mantikla README.md, ROADMAP.md, ADIMLAR.md, ODEV.md kullanildi.",
                ]
              : [
                  "Important decisions and workflows are written in docs/*.md files using Markdown.",
                  "Markdown is simple, readable, and renders nicely on Github/Gitlab automatically.",
                  "This project uses the same idea: README.md, ROADMAP.md, ADIMLAR.md, ODEV.md.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Neden Onemli?" : "Why It Matters"}>
        <div className="grid gap-3 sm:grid-cols-2">
          <NoteCallout>
            {tr
              ? "6 ay sonra hatirlama: bir kod tabanina donduğunde kararlarin nedenini dokumantasyon hatirlatir."
              : "Recall after 6 months: documentation reminds you why decisions were made when you return to the codebase."}
          </NoteCallout>
          <NoteCallout>
            {tr
              ? "Baskasinin kodunu anlama: +100.000 satir okumadan projenin mantigini kavrayabilirsin."
              : "Understanding someone else's code: you can grasp the project's logic without reading 100,000+ lines."}
          </NoteCallout>
          <NoteCallout>
            {tr
              ? "Onboarding hizi: iyi dokumante edilmis bir proje, yeni katkida bulunanlarin ise baslama suresini kisaltir."
              : "Onboarding speed: a well-documented project shortens the time it takes new contributors to get started."}
          </NoteCallout>
          <NoteCallout>
            {tr
              ? "Karar gecmisi: neden bu teknoloji/mimari secildi sorusunun cevabi dokumantasyonda saklanir."
              : "Decision history: the answer to \"why this tech/architecture\" lives in the docs, not in someone's memory."}
          </NoteCallout>
        </div>
      </NoteSection>
    </>
  );
}
