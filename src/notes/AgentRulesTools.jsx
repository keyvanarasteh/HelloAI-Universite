import { useState } from "react";
import { Bot, Brain, Cpu, FileCog, Gauge, Package, PlugZap, Settings2, Wrench } from "lucide-react";
import { NoteCallout, NoteSection, NoteTable } from "../components/NoteKit.jsx";

export function AgentRulesToolsNote({ lang }) {
  const tr = lang === "tr";
  const [activeTool, setActiveTool] = useState("codex");
  const [activeCapability, setActiveCapability] = useState("tools");
  const tools = {
    codex: {
      icon: Bot,
      name: "Codex",
      file: "AGENTS.md",
      behavior: tr ? "Repo kurallarini, komut tercihlerini ve kod stili sinirlarini takip eder." : "Follows repo rules, command preferences, and code style boundaries.",
    },
    claude: {
      icon: Brain,
      name: "Claude Code",
      file: "CLAUDE.md",
      behavior: tr ? "Claude'a ozel proje talimatlarini ve calisma beklentilerini tasir." : "Carries Claude-specific project instructions and working expectations.",
    },
    gemini: {
      icon: Cpu,
      name: "Gemini",
      file: "GEMINI.md",
      behavior: tr ? "Gemini tabanli araclara ayni proje baglamini verir." : "Gives Gemini-based tools the same project context.",
    },
    vscode: {
      icon: Settings2,
      name: "VSCode Chat",
      file: tr ? "Editor ayarlari" : "Editor settings",
      behavior: tr ? "IDE icindeki sohbet ve tamamlama davranisini ayarlarla yonlendirir." : "Steers IDE chat and completion behavior through settings.",
    },
  };
  const capabilities = {
    tools: {
      icon: Wrench,
      title: "Tools",
      when: tr ? "Somut eylem gerektiğinde: dosya oku/yaz, komut calistir, web ara." : "When concrete action is needed: read/write files, run commands, search the web.",
    },
    skills: {
      icon: PlugZap,
      title: "Skills",
      when: tr ? "Tekrar eden bir is akisini ayni kaliteyle uygulamak istediginde." : "When you want to repeat a workflow with consistent quality.",
    },
    plugins: {
      icon: Package,
      title: "Plugins",
      when: tr ? "Agent'in yetenek setine yeni bir paket veya entegrasyon eklemek istediginde." : "When you want to add a package or integration to the agent's capability set.",
    },
    thinking: {
      icon: Gauge,
      title: tr ? "Reasoning / Mini / Extra" : "Reasoning / Mini / Extra",
      when: tr ? "Isin zorlugu ve maliyet/hiz ihtiyacina gore model dusunme butcesini ayarladiginda." : "When you tune model thinking budget based on task difficulty and speed/cost needs.",
    },
  };
  const selectedTool = tools[activeTool];
  const SelectedToolIcon = selectedTool.icon;
  const selectedCapability = capabilities[activeCapability];
  const CapabilityIcon = selectedCapability.icon;

  return (
    <>
      <NoteSection title={tr ? "Agent Kontrol Paneli" : "Agent Control Panel"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 xl:grid-cols-2">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="mb-3 text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Araci sec" : "Choose tool"}</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(tools).map(([id, tool]) => {
                const Icon = tool.icon;
                const selected = id === activeTool;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTool(id)}
                    className={[
                      "rounded-lg border p-3 text-left transition",
                      selected
                        ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                        : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                    ].join(" ")}
                  >
                    <Icon size={19} />
                    <span className="mt-2 block text-sm font-bold">{tool.name}</span>
                    <span className="mt-1 block font-mono text-xs text-[var(--muted)]">{tool.file}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                  <SelectedToolIcon size={20} />
                </span>
                <div>
                  <h3 className="font-bold">{selectedTool.name}</h3>
                  <p className="font-mono text-xs text-[var(--muted)]">{selectedTool.file}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{selectedTool.behavior}</p>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
            <p className="mb-3 text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Yetenek modunu sec" : "Choose capability mode"}</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(capabilities).map(([id, capability]) => {
                const Icon = capability.icon;
                const selected = id === activeCapability;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveCapability(id)}
                    className={[
                      "rounded-lg border p-3 text-left transition",
                      selected
                        ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                        : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                    ].join(" ")}
                  >
                    <Icon size={19} />
                    <span className="mt-2 block text-sm font-bold">{capability.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <FileCog size={14} />
                {tr ? "Ne zaman?" : "When?"}
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                  <CapabilityIcon size={20} />
                </span>
                <p className="text-sm leading-6 text-[var(--muted)]">{selectedCapability.when}</p>
              </div>
            </div>
          </div>
        </div>
      </NoteSection>

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
