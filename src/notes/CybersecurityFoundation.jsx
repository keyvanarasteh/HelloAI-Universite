import { NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

export function CybersecurityFoundationNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Neden Algoritma ve Yazilim Mantigi?" : "Why Algorithm & Software Logic?"}>
        <NoteList
          items={
            tr
              ? [
                  "Bir sistemin normalde nasil davranmasi gerektigini bilmeden, sapmalari fark edemezsin.",
                  "Ornek: SQL injection'i anlamak icin once SQL sorgularinin nasil calistigini bilmek gerekir.",
                  "Bir bufer tasmasini anlamak icin bellek yonetimini ve dusuk seviye programlamayi bilmek gerekir.",
                ]
              : [
                  "You cannot spot deviations without knowing how a system is supposed to behave normally.",
                  "Example: understanding SQL injection requires first knowing how SQL queries work.",
                  "Understanding a buffer overflow requires knowing memory management and low-level programming.",
                ]
          }
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Siber guvenlik, sadece hazir araclari calistirmak degildir; araclarin arkasindaki mantigi anlamak gerekir. Once saglam bir programlama ve algoritma temeli kurulmali, guvenlik bilgisi bu temelin uzerine insa edilmelidir."
          : "Cybersecurity isn't just running ready-made tools — it's understanding the logic behind them. A solid programming and algorithm foundation should come first; security knowledge is built on top of it."}
      </NoteCallout>
    </>
  );
}
