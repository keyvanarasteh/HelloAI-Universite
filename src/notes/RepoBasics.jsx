import { NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

export function RepoBasicsNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "README ve Badge" : "README & Badges"}>
        <NoteList
          items={
            tr
              ? [
                  "README: projenin ne oldugu, kurulumu, ozellikleri ve katki yontemini anlatir.",
                  "Badge: build durumu, versiyon, lisans gibi bilgileri gosteren kucuk gorsel etiketler (ornek: shields.io).",
                ]
              : [
                  "README: explains what the project is, how to install it, its features, and how to contribute.",
                  "Badges: small visual labels showing build status, version, license, etc. (e.g. shields.io).",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Lisans Karsilastirmasi" : "License Comparison"}>
        <NoteTable
          headers={tr ? ["Lisans", "Ozellik"] : ["License", "Trait"]}
          rows={[
            ["MIT", tr ? "Cok esnek, neredeyse serbest kullanim." : "Very permissive, nearly unrestricted use."],
            ["Apache 2.0", tr ? "MIT'e benzer, ek olarak patent koruma maddeleri." : "Similar to MIT, plus patent protection clauses."],
            ["GPL", tr ? "Turev projelerin de acik kaynak kalmasini zorunlu kilar." : "Requires derivative projects to also stay open source."],
          ]}
        />
        <NoteCallout tone="warning">
          {tr
            ? "Lisans belirtilmemis bir proje varsayilan olarak 'tum haklari sakli' kabul edilir; baskalari izinsiz kullanmamalidir."
            : "A project with no license is treated as 'all rights reserved' by default — others should not use it without permission."}
        </NoteCallout>
      </NoteSection>
    </>
  );
}
