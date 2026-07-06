import { NoteCallout, NoteList, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function Homework3GlossaryExamples({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Terimler Sozlugu sayfasinda bazi terimlerin 'gercek dunya ornegi' henuz eklenmemis (katki bekliyor rozetiyle isaretli). Bu odevde arastirma yapip bu terimler icin gercek, dogrulanabilir 1-3 ornek bulup projeye PR ile ekleyeceksin."
            : "On the Glossary page, a few terms are still missing a real-world example (marked with an awaiting-contribution badge). In this homework you'll research and add 1-3 real, verifiable examples for these terms via a PR."}
        </p>
      </NoteSection>

      <NoteSection title={tr ? "Bulman Gereken Terimler" : "Terms to Research"}>
        <NoteList
          items={
            tr
              ? [
                  "1) 0-day exploit: geçmiste yasanmis, kamuya bilinen 1-3 gercek 0-day ornegi (hangi yazilim/sistemi etkiledi, ne zaman, nasil sonuclandi).",
                  "2) Guvenlik odakli Linux dagitimlari: 1-3 gercek pentest/guvenlik dagitimi (ne ise yaradiklari, kimler kullanir).",
                  "3) Son 6 ayin en cok katki alan 1-5 acik kaynak deposu: arastirma yaptigin tarihte gercekten trend olan depolar (repo adi, ne ise yaradigi, yaklasik katkici/commit sayisi).",
                  "4) Serbest secim: sozlukte 'katki bekliyor' rozeti olmayan ama senin ilginc buldugun baska bir terime kendi bulduğun ek bir gercek dunya ornegi ekle.",
                  "5) Serbest secim: yukaridaki gibi, sozluge kendi onerdigin ve kisa aciklama + ornekle desteklenen tamamen yeni bir terim ekle.",
                ]
              : [
                  "1) 0-day exploit: find 1-3 real, publicly known 0-day examples from the past (which system it hit, when, and how it played out).",
                  "2) Security-focused Linux distributions: find 1-3 real pentest/security distros (what they're for, who uses them).",
                  "3) Top 1-5 most-contributed open-source repos in the last 6 months: repos that are genuinely trending as of your research date (repo name, what it does, roughly how many contributors/commits).",
                  "4) Free choice: pick another term in the glossary that has no pending badge but that you find interesting, and add an additional real-world example you found yourself.",
                  "5) Free choice: like above, propose and add a brand-new term to the glossary with a short description and a supporting example.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Kaynak Onerileri" : "Where to Look"}>
        <NoteList
          items={
            tr
              ? [
                  "0-day icin: guvenlik haber siteleri, CVE veritabanlari, buyuk teknoloji sirketlerinin guvenlik blog yazilari.",
                  "Linux dagitimlari icin: distrowatch.com, dagitimin kendi resmi sitesi.",
                  "Trend depolar icin: github.com/trending (zaman araligini 'son 6 ay' gibi ayarlayarak yaklasik bir gozlem yap).",
                  "Her ornek icin kaynaginin adini kisaca not et (URL zorunlu degil, ama nereden dogruladigini bilmelisin).",
                ]
              : [
                  "For 0-days: security news sites, CVE databases, major tech companies' security blog posts.",
                  "For Linux distros: distrowatch.com, the distro's own official site.",
                  "For trending repos: github.com/trending (approximate a 'last 6 months' view by how you filter/sort).",
                  "For each example, briefly note where you verified it (a URL isn't mandatory, but you should know how you confirmed it).",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim Katki Sureci" : "Step-by-Step Contribution Process"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Repo'yu fork'la, clone'la ve kendi adinla bir dal ac: glossary/adin-soyadin.",
                  "src/glossary.js dosyasini ac ve pending: true olan ilgili terimi bul.",
                  "example alanini null yerine { tr, en } seklinde, arastirdigin gercek ornekle doldur.",
                  "O terimdeki pending: true satirini sil (artik katkin eklendigi icin gerek kalmadi).",
                  "Degisikligi kaydet, commit at, dalini push'la ve bir Pull Request ac.",
                  "PR aciklamana hangi terime, hangi kaynaktan dogruladigin ornegi ekledigini kisaca yaz.",
                ]
              : [
                  "Fork the repo, clone it, and create a branch with your name: glossary/your-name.",
                  "Open src/glossary.js and find the relevant term marked pending: true.",
                  "Fill the example field with { tr, en } text containing the real example you researched, instead of null.",
                  "Remove that term's pending: true line (it's no longer needed once your example is added).",
                  "Save, commit, push your branch, and open a Pull Request.",
                  "In your PR description, briefly note which term you filled in and where you verified the example.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Ornek Duzenleme" : "Example Edit"}>
        <TerminalBlock
          caption="src/glossary.js"
          lines={[
            "{",
            '  term: "0-Day Exploit",',
            "  description: { tr: \"...\", en: \"...\" },",
            "  example: {",
            '    tr: "Log4Shell (2021), Log4j kutuphanesindeki bir 0-day acigiydi ve dunya capinda binlerce sunucuyu etkiledi.",',
            '    en: "Log4Shell (2021) was a 0-day flaw in the Log4j library that affected thousands of servers worldwide.",',
            "  },",
            "},",
          ]}
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "Sadece dogrulayabildigin, gercek ve kamuya acik bilgi ekle. Uydurma orneklerden, dogrulanamayan iddialardan ve zarar verici teknik detaylardan (orn. gercek exploit kodu) kacin — amac farkindalik, saldiri rehberi degil."
          : "Only add information you can actually verify and that's already public. Avoid invented examples, unverifiable claims, and harmful technical detail (e.g. real exploit code) — the goal is awareness, not an attack how-to."}
      </NoteCallout>
    </>
  );
}
