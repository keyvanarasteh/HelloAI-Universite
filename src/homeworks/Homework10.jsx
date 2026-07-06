import { NoteCallout, NoteSection, NoteSteps } from "../components/NoteKit.jsx";

export function Homework10ExtensionAudit({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Kendi tarayicinda kurulu olan tum eklentileri denetleyecek, izinlerini okuyacak ve gereksiz/riskli izinlere sahip olanlari tespit edeceksin."
            : "You'll audit every extension installed in your own browser, read their permissions, and flag any with unnecessary or risky access."}
        </p>
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim" : "Step by Step"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Tarayicinda chrome://extensions (veya Firefox'ta about:addons) sayfasini ac.",
                  "Kurulu her eklenti icin: adi, yayimcisi, ve 'Detaylar' altindaki izinleri not et.",
                  "Hangi eklentilerin 'tum sitelerdeki verilerinizi okuyup degistirebilir' gibi genis bir izne sahip oldugunu isaretle.",
                  "Her genis izinli eklenti icin kendine sor: bu eklentiyi gercekten bu kadar genis erisimle kullanmam gerekiyor mu?",
                  "Artik kullanmadigin veya guvenmedigin eklentileri kaldir; kalanlar icin neden guvendigini (yayimci itibari, kullanici sayisi, yorumlar) kisaca yaz.",
                ]
              : [
                  "Open chrome://extensions in your browser (or about:addons in Firefox).",
                  "For each installed extension, note its name, publisher, and the permissions listed under 'Details'.",
                  "Flag any extension with a broad permission like 'read and change your data on all websites'.",
                  "For each broadly-permissioned extension, ask yourself: do I actually need this much access?",
                  "Remove extensions you no longer use or don't trust; for the ones you keep, briefly note why you trust them (publisher reputation, user count, reviews).",
                ]
          }
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Teslim: kurulu eklentilerin ve izinlerinin tablosu, isaretledigin riskli olanlar, ve kaldirdigin/kaldirmaya karar verdigin eklentilerin kisa gerekcesi."
          : "Delivery: a table of your installed extensions and their permissions, the ones you flagged as risky, and a short justification for what you removed or decided to keep."}
      </NoteCallout>
    </>
  );
}
