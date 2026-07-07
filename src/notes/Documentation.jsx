import { useState } from "react";
import { BookOpen, ClipboardList, FileText, History, Route, Users } from "lucide-react";
import { NoteCallout, NoteList, NoteSection } from "../components/NoteKit.jsx";

export function DocumentationNote({ lang }) {
  const tr = lang === "tr";
  const [activeDoc, setActiveDoc] = useState("readme");
  const docs = {
    readme: {
      icon: BookOpen,
      file: "README.md",
      audience: tr ? "Yeni gelen herkes" : "Everyone new",
      job: tr ? "Projenin ne olduğunu, nasıl açıldığını ve nereden başlanacağını anlatır." : "Explains what the project is, how to run it, and where to start.",
      trigger: tr ? "Kurulum veya proje amacı değişince" : "When setup or project purpose changes",
    },
    roadmap: {
      icon: Route,
      file: "ROADMAP.md",
      audience: tr ? "Ürünü planlayan ekip" : "The team planning the product",
      job: tr ? "Fikirden çalışan ürüne giden ana yolu ve öncelikleri gösterir." : "Shows the main path and priorities from idea to working product.",
      trigger: tr ? "Yön veya kapsam değişince" : "When direction or scope changes",
    },
    steps: {
      icon: ClipboardList,
      file: "ADIMLAR.md",
      audience: tr ? "Uygulayan kişi" : "The person executing",
      job: tr ? "Yapılacakları işaretlenebilir ve takip edilebilir görevlere böler." : "Breaks work into checkable, trackable tasks.",
      trigger: tr ? "Yeni iş parçaları çıkınca" : "When new work items appear",
    },
    decisions: {
      icon: History,
      file: "docs/*.md",
      audience: tr ? "Gelecekteki ekip" : "The future team",
      job: tr ? "Neden bu karar verildi sorusunun cevabını hafızada değil dosyada tutar." : "Keeps the answer to why this decision was made in files, not memory.",
      trigger: tr ? "Teknik veya mimari karar alınca" : "When a technical or architecture decision is made",
    },
  };
  const active = docs[activeDoc];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Dokümantasyon Haritası" : "Documentation Map"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(docs).map(([id, doc]) => {
              const Icon = doc.icon;
              const selected = id === activeDoc;
              return (
                <button
                  key={id}
                  onClick={() => setActiveDoc(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="font-mono text-xs font-bold">{doc.file}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Dosyanın işi" : "File job"}</p>
                <h3 className="mt-2 font-mono text-xl font-bold">{active.file}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.job}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <Users size={14} />
                  {tr ? "Kim okur?" : "Who reads it?"}
                </div>
                <p className="text-sm font-semibold">{active.audience}</p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                  <FileText size={14} />
                  {tr ? "Ne zaman güncelle?" : "When to update?"}
                </div>
                <p className="text-sm font-semibold">{active.trigger}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Kullanım ve Format" : "Usage and Format"}>
        <NoteList
          items={
            tr
              ? [
                  "Önemli kararlar ve iş akışları docs/*.md dosyalarında Markdown ile yazılır.",
                  "Markdown basit, okunaklıdır ve GitHub/GitLab gibi platformlarda otomatik olarak düzgün görünür.",
                  "Bu projede aynı mantıkla README.md, ROADMAP.md, ADIMLAR.md ve ODEV.md kullanıldı.",
                ]
              : [
                  "Important decisions and workflows are written in docs/*.md files using Markdown.",
                  "Markdown is simple, readable, and renders nicely on Github/Gitlab automatically.",
                  "This project uses the same idea: README.md, ROADMAP.md, ADIMLAR.md, ODEV.md.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Neden Önemli?" : "Why It Matters"}>
        <div className="grid gap-3 sm:grid-cols-2">
          <NoteCallout>
            {tr
              ? "6 ay sonra hatırlama: bir kod tabanına döndüğünde kararların nedenini dokümantasyon hatırlatır."
              : "Recall after 6 months: documentation reminds you why decisions were made when you return to the codebase."}
          </NoteCallout>
          <NoteCallout>
            {tr
              ? "Başkasının kodunu anlama: +100.000 satır okumadan projenin mantığını kavrayabilirsin."
              : "Understanding someone else's code: you can grasp the project's logic without reading 100,000+ lines."}
          </NoteCallout>
          <NoteCallout>
            {tr
              ? "Onboarding hızı: iyi dokümante edilmiş bir proje, yeni katkıda bulunanların işe başlama süresini kısaltır."
              : "Onboarding speed: a well-documented project shortens the time it takes new contributors to get started."}
          </NoteCallout>
          <NoteCallout>
            {tr
              ? "Karar geçmişi: neden bu teknoloji/mimari seçildi sorusunun cevabı dokümantasyonda saklanır."
              : "Decision history: the answer to \"why this tech/architecture\" lives in the docs, not in someone's memory."}
          </NoteCallout>
        </div>
      </NoteSection>
    </>
  );
}
