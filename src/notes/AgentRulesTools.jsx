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
      behavior: tr ? "Repo kurallarını, komut tercihlerini ve kod stili sınırlarını takip eder." : "Follows repo rules, command preferences, and code style boundaries.",
    },
    claude: {
      icon: Brain,
      name: "Claude Code",
      file: "CLAUDE.md",
      behavior: tr ? "Claude'a özel proje talimatlarını ve çalışma beklentilerini taşır." : "Carries Claude-specific project instructions and working expectations.",
    },
    gemini: {
      icon: Cpu,
      name: "Gemini",
      file: "GEMINI.md",
      behavior: tr ? "Gemini tabanlı araçlara aynı proje bağlamını verir." : "Gives Gemini-based tools the same project context.",
    },
    vscode: {
      icon: Settings2,
      name: "VSCode Chat",
      file: tr ? "Editör ayarları" : "Editor settings",
      behavior: tr ? "IDE içindeki sohbet ve tamamlama davranışını ayarlarla yönlendirir." : "Steers IDE chat and completion behavior through settings.",
    },
  };
  const capabilities = {
    tools: {
      icon: Wrench,
      title: "Tools",
      when: tr ? "Somut eylem gerektiğinde: dosya oku/yaz, komut çalıştır, web ara." : "When concrete action is needed: read/write files, run commands, search the web.",
    },
    skills: {
      icon: PlugZap,
      title: "Skills",
      when: tr ? "Tekrar eden bir iş akışını aynı kaliteyle uygulamak istediğinde." : "When you want to repeat a workflow with consistent quality.",
    },
    plugins: {
      icon: Package,
      title: "Plugins",
      when: tr ? "Agent'in yetenek setine yeni bir paket veya entegrasyon eklemek istediğinde." : "When you want to add a package or integration to the agent's capability set.",
    },
    thinking: {
      icon: Gauge,
      title: tr ? "Reasoning / Mini / Extra" : "Reasoning / Mini / Extra",
      when: tr ? "İşin zorluğu ve maliyet/hız ihtiyacına göre model düşünme bütçesini ayarladığında." : "When you tune model thinking budget based on task difficulty and speed/cost needs.",
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
            <p className="mb-3 text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Aracı seç" : "Choose tool"}</p>
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
            <p className="mb-3 text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Yetenek modunu seç" : "Choose capability mode"}</p>
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

      <NoteSection title={tr ? "Agent Araçları ve Proje Kural Dosyaları" : "Agent Tools & Project Rule Files"}>
        <NoteTable
          headers={tr ? ["Araç", "Kural dosyası"] : ["Tool", "Rule file"]}
          rows={[
            ["Codex", "AGENTS.md"],
            ["Claude Code", "CLAUDE.md"],
            ["Gemini", "GEMINI.md"],
            ["VSCode Chat", tr ? "- (editör ayarları)" : "- (editor settings)"],
          ]}
        />
        <NoteCallout>
          {tr
            ? "Bu dosyalar sayesinde agent, proje özelinde nasıl davranması gerektiğini (kod stili, hangi komutların çalıştırılabileceği, hangi işlemlerin onay gerektirdiği) önceden bilir."
            : "These files let an agent know in advance how it should behave in a given project — code style, which commands it may run, which actions need approval."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Kullanım Alanları" : "Use Cases"}>
        <NoteTable
          headers={tr ? ["Mod", "Ne zaman kullanılır"] : ["Mode", "When to use it"]}
          rows={[
            [
              tr ? "Reasoning" : "Reasoning",
              tr ? "Karmaşık, çok adımlı problemlerde daha derin düşünme modu." : "A deeper-thinking mode for complex, multi-step problems.",
            ],
            [
              tr ? "Mini modeller" : "Mini models",
              tr ? "Basit, hızlı ve düşük maliyetli işlemler için." : "For simple, fast, low-cost tasks.",
            ],
            [
              tr ? "Extra thinking" : "Extra thinking",
              tr ? "Zor problemlerde modele daha fazla düşünme bütçesi tanımak." : "Giving the model more thinking budget on hard problems.",
            ],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Skills, Plugins, Tools" : "Skills, Plugins, Tools"}>
        <NoteTable
          headers={tr ? ["Kavram", "Açıklama"] : ["Concept", "Description"]}
          rows={[
            [
              "Tools",
              tr
                ? "Agent'in dosya okuma/yazma, komut çalıştırma ve web arama gibi somut eylemleri gerçekleştirmesini sağlayan yetenekler."
                : "Concrete capabilities letting an agent act — read/write files, run commands, search the web.",
            ],
            [
              "Skills",
              tr
                ? "Belirli bir görev türü için önceden tanımlanmış, tekrar kullanılabilir talimat ve iş akışları."
                : "Predefined, reusable instructions/workflows for a specific kind of task.",
            ],
            [
              "Plugins",
              tr
                ? "Agent'in yeteneklerini genişleten, dışarıdan eklenebilen paketler."
                : "Externally added packages that extend an agent's capabilities.",
            ],
          ]}
        />
      </NoteSection>
    </>
  );
}
