import { NoteCallout, NoteList, NoteSection, NoteSteps } from "../components/NoteKit.jsx";

export function Homework5IncidentKillChain({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Gercek bir sizma/saldiri olayini secip, notta ogrendigin fazlara (exploit turu, payload/shell turu, post-exploitation teknikleri) gore analiz edecegin bir 'kill chain' raporu yazacaksin. Gercek saldiri kodu calistirmayacaksin — bu tamamen bir arastirma/analiz odevidir."
            : "You'll pick a real breach/attack incident and write a 'kill chain' analysis mapping it to the phases from the note (exploit type, payload/shell type, post-exploitation techniques). You will not run any real attack code — this is a research/analysis assignment."}
        </p>
      </NoteSection>

      <NoteSection title={tr ? "Secebilecegin Ornekler" : "Examples You Can Pick"}>
        <NoteList
          items={
            tr
              ? [
                  "WannaCry / EternalBlue (2017)",
                  "NotPetya (2017)",
                  "Log4Shell (2021)",
                  "SolarWinds / Sunburst (2020)",
                  "Maze fidye yazilimi (double extortion ornegi)",
                  "Veya kendi bulacagin, kamuya acik baska bir gercek olay (kaynak belirtmen sarti ile).",
                ]
              : [
                  "WannaCry / EternalBlue (2017)",
                  "NotPetya (2017)",
                  "Log4Shell (2021)",
                  "SolarWinds / Sunburst (2020)",
                  "The Maze ransomware (a double-extortion example)",
                  "Or another real, publicly documented incident you find yourself (cite your source).",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Raporunda Olmasi Gerekenler" : "What Your Report Must Include"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Olayin kisa ozeti: ne oldu, ne zaman, kimi/neyi etkiledi.",
                  "Hangi exploit turu kullanildi (buffer overflow, injection, RCE, privilege escalation, vb.)?",
                  "Kullanilan payload/shell turu neydi (biliniyorsa): reverse shell mi, web shell mi, baska bir yontem mi?",
                  "Post-exploitation asamasinda ne yapildi: yanal hareket, kalicilik, veri sizdirma, iz temizleme?",
                  "Bu olay yasanmadan once hangi savunma (yama, segmentasyon, EDR, vb.) onleyebilirdi?",
                  "Kaynaklarini (haber, guvenlik firmasi raporu, resmi aciklama) linkle.",
                ]
              : [
                  "A short summary: what happened, when, who/what was affected.",
                  "Which exploit type was used (buffer overflow, injection, RCE, privilege escalation, etc.)?",
                  "What payload/shell type was involved (if known): reverse shell, web shell, something else?",
                  "What happened during post-exploitation: lateral movement, persistence, exfiltration, covering tracks?",
                  "What defense (patching, segmentation, EDR, etc.) could have prevented it?",
                  "Cite your sources (news article, security vendor report, official statement).",
                ]
          }
        />
      </NoteSection>

      <NoteCallout tone="warning">
        {tr
          ? "Bu odev tamamen acik kaynak/kamuya acik bilgiye dayali bir arastirma ve analiz calismasidir. Herhangi bir sistemde gercek exploit/payload calistirmak veya bunu denemek bu odevin bir parcasi degildir ve yasaktir."
          : "This homework is entirely a research and analysis exercise based on open, public information. Running or attempting any real exploit/payload against any system is not part of this assignment and is not allowed."}
      </NoteCallout>
    </>
  );
}
