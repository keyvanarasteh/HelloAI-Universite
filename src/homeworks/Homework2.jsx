import { NoteCallout, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function Homework2FeedbackContribution({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Geri Bildirim sayfasi su an bos: henuz katilan kimse geri bildirim eklemedi. Bu odevde, bu atolye hakkindaki kendi geri bildirimini gercek bir Pull Request ile projeye ekleyeceksin — yani git/github ile ogrendigin katki surecini gercek hayatta uygulayacaksin."
            : "The Feedback page is currently empty: nobody has added feedback yet. In this homework you'll add your own feedback about this workshop through a real Pull Request — putting the git/github contribution flow you learned into real practice."}
        </p>
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim Katki Sureci" : "Step-by-Step Contribution Process"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Repo'yu kendi hesabina fork'la (veya dogrudan erisimin varsa clone'la).",
                  "Projeyi bilgisayarina clone'la ve bagimliliklari yukle.",
                  "Kendi adinla yeni bir dal (branch) ac, orn: feedback/adin-soyadin.",
                  "src/feedback.js dosyasini ac.",
                  "feedbackEntries dizisine, asagidaki sekle uyan yeni bir obje ekle.",
                  "Degisikligi kaydet, commit at ve dalini push'la.",
                  "GitHub'da bir Pull Request ac ve kisa bir aciklama yaz.",
                  "Inceleme (review) sonrasi PR birlestirilince geri bildirimin canli sitede gorunecek.",
                ]
              : [
                  "Fork the repo to your own account (or clone directly if you already have access).",
                  "Clone the project to your machine and install dependencies.",
                  "Create a new branch with your name, e.g. feedback/your-name.",
                  "Open src/feedback.js.",
                  "Add a new object to the feedbackEntries array matching the shape below.",
                  "Save, commit the change, and push your branch.",
                  "Open a Pull Request on GitHub with a short description.",
                  "Once reviewed and merged, your feedback will show up on the live site.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Git Komutlari" : "Git Commands"}>
        <TerminalBlock
          caption="terminal"
          lines={[
            { comment: true, text: tr ? "# 1. Depoyu klonla" : "# 1. Clone the repo" },
            "git clone https://github.com/<kullanici-adin>/HelloAI-Universite.git",
            "cd HelloAI-Universite",
            { comment: true, text: tr ? "# 2. Kendi dalini olustur" : "# 2. Create your own branch" },
            "git checkout -b feedback/adin-soyadin",
            { comment: true, text: tr ? "# 3. src/feedback.js dosyasini duzenledikten sonra" : "# 3. After editing src/feedback.js" },
            "git add src/feedback.js",
            'git commit -m "Add feedback: Adin Soyadin"',
            "git push origin feedback/adin-soyadin",
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Eklemen Gereken Veri Sekli" : "The Data Shape to Add"}>
        <TerminalBlock
          caption="src/feedback.js"
          lines={[
            "{",
            '  name: "Adin Soyadin",',
            '  program: "Bolumun (orn. Bilgisayar Programciligi)",',
            '  date: "2026-07-10",',
            '  lang: "tr",',
            '  message: "Atolye hakkinda gercek dusuncen buraya.",',
            "},",
          ]}
        />
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "lang alanina, mesajini hangi dilde yazdiysan onu gir (tr veya en). message alanini kendi cumlelerinle yaz; ceviri yapmana gerek yok."
            : "Set lang to whichever language you actually wrote your message in (tr or en). Write message in your own words; you don't need to translate it."}
        </p>
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "Diziye sadece yeni objeni ekle, mevcut kayitlari silme veya degistirme. Birden fazla kisi ayni anda katki yapabilir; bu yuzden dosyanin en sonuna eklemek merge conflict riskini azaltir."
          : "Only add your own new object to the array — don't delete or edit existing entries. Multiple people may contribute at the same time, so appending to the end of the file lowers the chance of a merge conflict."}
      </NoteCallout>
    </>
  );
}
