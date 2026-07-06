import { NoteCallout, NoteSection, NoteTable } from "../components/NoteKit.jsx";

export function AgentRulesToolsNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Ajan Araclari ve Proje Kural Dosyalari" : "Agent Tools & Project Rule Files"}>
        <NoteTable
          headers={tr ? ["Arac", "Kural dosyasi"] : ["Tool", "Rule file"]}
          rows={[
            ["Codex", "AGENTS.md"],
            ["Claude Code", "CLAUDE.md"],
            ["Gemini", "GEMINI.md"],
            ["VSCode Chat", tr ? "— (editor ayarlari)" : "— (editor settings)"],
          ]}
        />
        <NoteCallout>
          {tr
            ? "Bu dosyalar sayesinde agent, proje ozelinde nasil davranmasi gerektigini (kod stili, hangi komutlarin calistirilabilecegi, hangi islemlerin onay gerektirdigi) onceden bilir."
            : "These files let an agent know in advance how it should behave in a given project — code style, which commands it may run, which actions need approval."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Kullanim Alanlari" : "Use Cases"}>
        <NoteTable
          headers={tr ? ["Mod", "Ne zaman kullanilir"] : ["Mode", "When to use it"]}
          rows={[
            [
              tr ? "Reasoning" : "Reasoning",
              tr ? "Karmasik, cok adimli problemlerde daha derin dusunme modu." : "A deeper-thinking mode for complex, multi-step problems.",
            ],
            [
              tr ? "Mini modeller" : "Mini models",
              tr ? "Basit, hizli ve dusuk maliyetli islemler icin." : "For simple, fast, low-cost tasks.",
            ],
            [
              tr ? "Extra thinking" : "Extra thinking",
              tr ? "Zor problemlerde modele daha fazla dusunme butcesi tanimak." : "Giving the model more thinking budget on hard problems.",
            ],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Skills, Plugins, Tools" : "Skills, Plugins, Tools"}>
        <NoteTable
          headers={tr ? ["Kavram", "Aciklama"] : ["Concept", "Description"]}
          rows={[
            [
              "Tools",
              tr
                ? "Agent'in dosya okuma/yazma, komut calistirma, web arama gibi somut eylemleri gerceklestirmesini saglayan yetenekler."
                : "Concrete capabilities letting an agent act — read/write files, run commands, search the web.",
            ],
            [
              "Skills",
              tr
                ? "Belirli bir gorev turu icin onceden tanimlanmis, tekrar kullanilabilir talimat/is akislari."
                : "Predefined, reusable instructions/workflows for a specific kind of task.",
            ],
            [
              "Plugins",
              tr
                ? "Agent'in yeteneklerini genisleten, disaridan eklenebilen paketler."
                : "Externally added packages that extend an agent's capabilities.",
            ],
          ]}
        />
      </NoteSection>
    </>
  );
}
