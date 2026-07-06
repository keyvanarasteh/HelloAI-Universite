import { NoteCallout, NoteList, NoteSection, NoteSteps, NoteTable } from "../components/NoteKit.jsx";

export function Homework1StaticSite({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Bir yapay zeka araci yardimiyla (Codex, Claude Code, VS Code Chat) ya da kendi kodunla basit bir static web sitesi tasarla ve bunu farkli ekran boyutlarinda dogru calisacak sekilde responsive hale getir."
            : "Design a simple static website — with the help of an AI tool (Codex, Claude Code, VS Code Chat) or on your own — and make it responsive so it works correctly across screen sizes."}
        </p>
        <NoteList
          items={
            tr
              ? [
                  "Konu secimi serbest: kisisel tanitim sitesi, kucuk urun tanitimi, ders/portfolyo sitesi veya bir hobiyi anlatan tek sayfa site.",
                  "Site static olmali (backend gerekmez), en az 1 ana sayfa icermeli.",
                ]
              : [
                  "Topic is your choice: a personal intro site, a small product page, a course/portfolio site, or a single page about a hobby.",
                  "The site must be static (no backend needed) and include at least 1 main page.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Beklenenler" : "Requirements"}>
        <NoteList
          items={
            tr
              ? [
                  "Baslik, metin, buton, kart veya benzeri bilesenler icermeli.",
                  "Mobil, tablet ve masaustu gorunumlerinde duzgun calismali.",
                  "Tasarimda metinler tasmamali, elemanlar ust uste binmemeli.",
                  "Kullanici rahat gezinebilmeli.",
                ]
              : [
                  "Include a title, text, buttons, cards, or similar components.",
                  "Work correctly on mobile, tablet, and desktop views.",
                  "Text should never overflow its container, and elements should never overlap.",
                  "Navigation should feel comfortable for the user.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Yapim Adimlari" : "Build Steps"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Site konusunu sec.",
                  "Ana yerlesimi kur.",
                  "Baslik, icerik bolumu ve alt bolumleri ekle.",
                  "Kartlar, butonlar veya liste yapilari ile sayfayi zenginlestir.",
                  "CSS ile temel gorunumu duzenle.",
                  "Mobil gorunumu test edip duzelt.",
                  "Tablet gorunumu test edip duzelt.",
                  "Masaustu gorunumu test edip son halini ver.",
                ]
              : [
                  "Choose your site's topic.",
                  "Set up the main layout.",
                  "Add a header, content section, and footer.",
                  "Enrich the page with cards, buttons, or list structures.",
                  "Style the basic look with CSS.",
                  "Test and fix the mobile view.",
                  "Test and fix the tablet view.",
                  "Test and finalize the desktop view.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Responsive Kontrol Listesi" : "Responsive Checklist"}>
        <NoteList
          items={
            tr
              ? [
                  "Telefon ekraninda yatay kaydirma gerekiyor mu?",
                  "Metinler kartlardan veya kutulardan tasiyor mu?",
                  "Butonlar parmakla dokunulabilir kadar buyuk mu?",
                  "Resimler veya kutular ekran disina cikiyor mu?",
                  "Mobilde menu veya icerik okunakli mi?",
                  "Tablet gorunumunde bosluklar dengeli mi?",
                  "Masaustunde alanlar gereksiz sekilde cok genislemis mi?",
                  "Tarayici genisligini degistirince sayfa bozuluyor mu?",
                ]
              : [
                  "Does the phone view need horizontal scrolling?",
                  "Does text overflow cards or boxes?",
                  "Are buttons big enough to tap comfortably?",
                  "Do images or boxes spill outside the screen?",
                  "Is the mobile menu or content readable?",
                  "Are the tablet view's spacings balanced?",
                  "Do desktop sections stretch unnecessarily wide?",
                  "Does the page break when you resize the browser width?",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Test Yontemi" : "Test Method"}>
        <NoteTable
          headers={tr ? ["Genislik", "Neye Bak"] : ["Width", "What to Check"]}
          rows={[
            [
              "375 px",
              tr
                ? "Basliklar okunuyor mu, butonlar sigiyor mu, yatay kaydirma var mi?"
                : "Are headings readable, do buttons fit, is there horizontal scroll?",
            ],
            [
              "768 px",
              tr ? "Kartlar duzgun diziliyor mu, bosluklar dengeli mi?" : "Do cards line up well, are spacings balanced?",
            ],
            [
              "1024 px",
              tr ? "Icerik genislik icin dogru dagiliyor mu?" : "Does the content spread correctly for the width?",
            ],
            [
              "1440 px",
              tr ? "Alanlar gereksiz sekilde asiri genislemis mi?" : "Do sections stretch excessively wide?",
            ],
          ]}
        />
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Tarayicida gelistirici araclarini ac, farkli cihaz boyutlarini sec ve yukaridaki genisliklerde kontrol et."
            : "Open your browser's dev tools, pick different device sizes, and check the widths above."}
        </p>
      </NoteSection>

      <NoteCallout tone="info">
        {tr
          ? "Ek odev: Siteyi responsive yaptiktan sonra kisa bir rapor hazirla — hangi ekran boyutlarini denedin, hangi sorunlar cikti, bunlari nasil duzelttin, en zor kisim neydi ve sonuc olarak site mobilde calisiyor mu?"
          : "Extra task: after making the site responsive, write a short report — which screen sizes did you test, what problems came up, how did you fix them, what was the hardest part, and does the site work on mobile in the end?"}
      </NoteCallout>

      <NoteCallout tone="ok">
        {tr
          ? "Teslim kriteri: site calisiyor olmali, responsive gorunum duzeltilmis olmali, mobil/tablet/masaustu test edilmeli ve kisa bir aciklama veya rapor eklenmeli."
          : "Delivery criteria: the site must work, the responsive layout must be fixed, mobile/tablet/desktop must be tested, and a short explanation or report must be included."}
      </NoteCallout>

      <NoteCallout tone="warning">
        {tr
          ? "Mini not: yapay zeka araclari kodu hizlandirabilir ama son kontrol insanda olmali. Sayfa gercekten duzgun calisiyor mu diye tarayici icinde mutlaka bak."
          : "Mini note: AI tools can speed up the code, but the final check is on you. Always look in the browser to confirm the page truly works."}
      </NoteCallout>
    </>
  );
}
