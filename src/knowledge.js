import { FrontendBackendAgenticNote } from "./notes/FrontendBackendAgentic.jsx";
import { AgentOutputAuditNote } from "./notes/AgentOutputAudit.jsx";
import { DocumentationNote } from "./notes/Documentation.jsx";
import { AgentRulesToolsNote } from "./notes/AgentRulesTools.jsx";
import { CybersecurityFoundationNote } from "./notes/CybersecurityFoundation.jsx";
import { CloudflareNote } from "./notes/Cloudflare.jsx";
import { GitGithubNote } from "./notes/GitGithub.jsx";
import { PatchManagementNote } from "./notes/PatchManagement.jsx";
import { ZeroDayNote } from "./notes/ZeroDay.jsx";
import { WifiSecurityRisksNote } from "./notes/WifiSecurityRisks.jsx";
import { OsWindowsLinuxNote } from "./notes/OsWindowsLinux.jsx";
import { LlmModelsThinkingLevelsNote } from "./notes/LlmModelsThinkingLevels.jsx";
import { WebSecurityBasicsNote } from "./notes/WebSecurityBasics.jsx";
import { RepoBasicsNote } from "./notes/RepoBasics.jsx";
import { IdeSetupNote } from "./notes/IdeSetup.jsx";
import { OpenSourceContributionNote } from "./notes/OpenSourceContribution.jsx";
import { ProblemSolvingNote } from "./notes/ProblemSolving.jsx";
import { PentestEnumerationNote } from "./notes/PentestEnumeration.jsx";
import { ExploitationPostExploitationNote } from "./notes/ExploitationPostExploitation.jsx";
import { DnsEnumerationNote } from "./notes/DnsEnumeration.jsx";
import { WafEnumerationNote } from "./notes/WafEnumeration.jsx";
import { HostVpsEnumerationNote } from "./notes/HostVpsEnumeration.jsx";
import { WappalyzerFingerprintingNote } from "./notes/WappalyzerFingerprinting.jsx";
import { BrowserExtensionsRisksNote } from "./notes/BrowserExtensionsRisks.jsx";
import { ReverseEngineeringFridaNote } from "./notes/ReverseEngineeringFrida.jsx";
import { WebQSecurityNote } from "./notes/WebQSecurity.jsx";

export const instructor = {
  name: "Keyvan Arasteh",
  affiliation: "Istinye Universitesi - Meslek Yuksekokulu",
  links: {
    academicProfile: "https://www.istinye.edu.tr/tr/myo/akademik-kadro/keyvan-arasteh",
    github: "https://github.com/keyvanarasteh",
    linkedin: "https://www.linkedin.com/in/keyvanarasteh/",
  },
  internshipUrl: "https://aday.istinye.edu.tr/yaz-arastirma-staji",
};

export class KnowledgeTopic {
  constructor({ id, tone, title, tagline, day = 1, Component = null, sections = [], toc = [], repo = null, placeholder = false }) {
    this.id = id;
    this.tone = tone;
    this.Component = Component;
    this.title = title;
    this.tagline = tagline;
    this.day = day;
    this.sections = sections;
    this.toc = toc;
    this.repo = repo;
    this.placeholder = placeholder;
  }

  hasContent() {
    return !this.placeholder && this.sections.length > 0;
  }
}

export const knowledgeTopics = [
  {
    id: "git-github",
    day: 1,
    tone: "software",
    Component: GitGithubNote,
    title: { tr: "GitHub ve Git", en: "GitHub & Git" },
    tagline: {
      tr: "Kodla çalışırken düzenli, izlenebilir ve güvenilir bir geçmiş bırakmayı öğren.",
      en: "Learn to leave an organized, traceable, trustworthy history while working with code.",
    },
    sections: [
      {
        heading: { tr: "Temel Kavramlar", en: "Core Concepts" },
        items: [
          { tr: "GitHub hesabın, yazılım alanındaki görünür portfolyon gibi çalışır.", en: "Your GitHub account works like your software portfolio." },
          { tr: "Branch: ana koddan ayrılan ve üzerinde bağımsız çalışılan dal.", en: "Branch: an independent line of work split off from the main code." },
          { tr: "Changelog: commit mesajlarının değişiklikleri anlaşılır biçimde özetlemesi.", en: "Changelog: commit messages that clearly summarize what changed." },
          { tr: "Teamwork: birden fazla kişinin aynı projede çakışmadan çalışabilmesi.", en: "Teamwork: multiple people work on the same project without stepping on each other." },
        ],
      },
      {
        heading: { tr: "Kırmızı Çizgi", en: "The Red Line" },
        items: [
          { tr: "Sahte commit üretmek teknik olarak mümkündür ama çoğu zaman anlaşılır.", en: "Faking commits is technically possible, but it is detectable." },
          { tr: "Sahte katkı geçmişi oluşturulmamalıdır; fark edildiğinde ciddi güven kaybına yol açar.", en: "Never fake your contribution history; it destroys trust when discovered." },
        ],
      },
    ],
  },
  {
    id: "frontend-backend-agentic",
    day: 1,
    tone: "electronics",
    Component: FrontendBackendAgenticNote,
    title: { tr: "FrontEnd vs BackEnd, LLM Chat vs Agentic AI", en: "FrontEnd vs BackEnd, LLM Chat vs Agentic AI" },
    tagline: {
      tr: "Bir web uygulamasının katmanlarını ve yapay zekâ araçlarının türlerini ayırt et.",
      en: "Tell apart the layers of a web app and the different kinds of AI tools.",
    },
    sections: [
      {
        heading: { tr: "Mimari", en: "Architecture" },
        items: [
          { tr: "FrontEnd: kullanıcının tarayıcıda gördüğü bölüm (HTML, CSS, JS, React).", en: "FrontEnd: what the user sees in the browser (HTML, CSS, JS, React)." },
          { tr: "BackEnd: verinin işlendiği, saklandığı ve iş mantığının çalıştığı sunucu tarafı.", en: "BackEnd: the server side where data is processed, stored, and business logic runs." },
          { tr: "Bu proje yalnızca FrontEnd'dir; backend ve veritabanı içermez.", en: "This project is FrontEnd only; there is no backend or database." },
        ],
      },
      {
        heading: { tr: "AI Türleri", en: "Types of AI" },
        items: [
          { tr: "LLM Chat: soru sorulur, model metinle cevap verir.", en: "LLM Chat: you ask a question, the model replies with text." },
          { tr: "Agentic AI: model, araç kullanarak dosya okuma/yazma ve komut çalıştırma gibi eylemleri zincirler (Claude Code, Codex).", en: "Agentic AI: the model chains actions using tools — reading/writing files, running commands (Claude Code, Codex)." },
          { tr: "Fark: chat modeli çoğunlukla \"söyler\", agent ise aracı kullanarak \"yapar\".", en: "The difference: a chat model mostly \"tells\", while an agent uses tools and \"does\"." },
        ],
      },
    ],
  },
  {
    id: "problem-solving",
    day: 1,
    tone: "software",
    Component: ProblemSolvingNote,
    title: { tr: "Problem Çözme Süreci (0-100)", en: "Problem-Solving Process (0-100)" },
    tagline: {
      tr: "Bir fikri planlı, izlenebilir adımlarla çalışan bir ürüne dönüştür.",
      en: "Turn an idea into a working product through planned, trackable steps.",
    },
    sections: [
      {
        heading: { tr: "7 Adım", en: "7 Steps" },
        items: [
          { tr: "1. Problemi tanımla (örnek: idea.txt).", en: "1. Define the problem (e.g. idea.txt)." },
          { tr: "2. Olası çözüm yollarını listele.", en: "2. List possible solutions." },
          { tr: "3. Çözümleri karşılaştır.", en: "3. Compare the solutions." },
          { tr: "4. En iyi çözümü seç.", en: "4. Choose the best solution." },
          { tr: "5. Seçilen çözüm için 0-100 uygulama planı çıkar.", en: "5. Build a 0-100 implementation plan for it." },
          { tr: "6. Planı doğrula ve STEPS.md içinde kontrol listesine dönüştür.", en: "6. Verify the plan and turn it into a STEPS.md checklist." },
          { tr: "7. Adımları işaretleyerek ilerle; stabil noktalarda branch/commit/push yap.", en: "7. Progress by checking off steps; branch, commit, and push at stable points." },
        ],
      },
    ],
  },
  {
    id: "open-source-contribution",
    day: 1,
    tone: "security",
    Component: OpenSourceContributionNote,
    title: { tr: "Açık Kaynağa Katkı Süreci", en: "Contributing to Open Source" },
    tagline: {
      tr: "Bir açık kaynak projeye nasıl PR gönderilir ve katkı nasıl merge edilir?",
      en: "How do you send and merge a PR into an open-source project?",
    },
    sections: [
      {
        heading: { tr: "Terimler", en: "Terms" },
        items: [
          { tr: "Fork: bir reponun kendi hesabına kopyasını oluşturma.", en: "Fork: creating a copy of someone else's repo under your own account." },
          { tr: "PR (Pull Request): yaptığın değişikliği orijinal projeye önerme.", en: "PR (Pull Request): proposing your change to the original project." },
          { tr: "Merge: onaylanan değişikliğin ana koda birleştirilmesi.", en: "Merge: integrating an approved change into the main code." },
        ],
      },
      {
        heading: { tr: "Adımlar", en: "Steps" },
        items: [
          { tr: "Repoyu fork'la, kendi bilgisayarına clone'la.", en: "Fork the repo, clone it to your machine." },
          { tr: "Yeni bir branch aç, değişikliği yap ve test et.", en: "Open a new branch, make and test your change." },
          { tr: "Fork'una push et, orijinal repoya PR aç.", en: "Push to your fork, open a PR on the original repo." },
          { tr: "Geri bildirimlere göre düzenle; onaylanırsa katkı merge edilir.", en: "Address feedback; once approved, the contribution gets merged." },
        ],
      },
    ],
  },
  {
    id: "agent-output-audit",
    day: 1,
    tone: "hardware",
    Component: AgentOutputAuditNote,
    title: { tr: "Agent Çıktılarını Denetleme", en: "Auditing Agent Output" },
    tagline: {
      tr: "AI agent'ların yazdığı kodu körü körüne kabul etme; mutlaka doğrula.",
      en: "Verify code written by AI agents instead of trusting it blindly.",
    },
    sections: [
      {
        heading: { tr: "Nasıl Denetlenir?", en: "How to Audit" },
        items: [
          { tr: "Live test: uygulamayı gerçekten çalıştırıp gözlemleyerek doğrulama.", en: "Live test: actually run the app and verify it by trying it out." },
          { tr: "Logic test: kodun mantığının iş kurallarına uygun olup olmadığını okuyarak kontrol etme.", en: "Logic test: reading the code to check it matches the intended business rules." },
        ],
      },
      {
        heading: { tr: "Unit Test vs Real Test", en: "Unit Test vs Real Test" },
        items: [
          { tr: "Unit test: küçük ve izole bir fonksiyonun beklenen çıktıyı verip vermediğini otomatik kontrol eder.", en: "Unit test: automatically checks whether a small, isolated function gives the expected output." },
          { tr: "Real test: uygulamanın gerçek bir kullanıcı gibi uçtan uca denenmesidir.", en: "Real test: trying the whole app end-to-end like a real user would." },
          { tr: "İkisi de gereklidir; yalnızca birine güvenmek yeterli değildir.", en: "Both are needed; relying on only one is not enough." },
        ],
      },
    ],
  },
  {
    id: "documentation",
    day: 1,
    tone: "electronics",
    Component: DocumentationNote,
    title: { tr: "Dokümantasyon", en: "Documentation" },
    tagline: {
      tr: "İyi yazılmış dokümantasyon, gelecekteki sana ve yeni katkı vereceklere zaman kazandırır.",
      en: "Good docs save time for future-you and for new contributors.",
    },
    sections: [
      {
        heading: { tr: "Kullanım ve Format", en: "Usage and Format" },
        items: [
          { tr: "Önemli kararlar ve iş akışları docs/*.md dosyalarında Markdown ile yazılır.", en: "Important decisions and workflows are written in docs/*.md files using Markdown." },
          { tr: "Markdown basit ve okunaklıdır; GitHub/GitLab gibi platformlarda otomatik olarak düzgün görünür.", en: "Markdown is simple, readable, and renders nicely on GitHub/GitLab automatically." },
        ],
      },
      {
        heading: { tr: "Neden Önemli?", en: "Why It Matters" },
        items: [
          { tr: "Aylar sonra kod tabanına döndüğünde kararların nedenini hatırlatır.", en: "It reminds you why decisions were made when you return to the codebase months later." },
          { tr: "Başka biri, yüz binlerce satır kod okumadan projenin mantığını kavrayabilir.", en: "Others can grasp the project's logic without reading huge amounts of code." },
          { tr: "Yeni katkı verecek kişilerin işe başlama süresini kısaltır.", en: "It shortens onboarding time for new contributors." },
        ],
      },
    ],
  },
  {
    id: "agent-rules-tools",
    day: 1,
    tone: "software",
    Component: AgentRulesToolsNote,
    title: { tr: "Agent Kuralları, Modeller ve Araçlar", en: "Agent Rules, Models & Tools" },
    tagline: {
      tr: "Codex, Claude Code ve VSCode Chat'i proje kurallarıyla nasıl yönlendirirsin?",
      en: "How do you steer Codex, Claude Code, and VSCode Chat with project rules?",
    },
    sections: [
      {
        heading: { tr: "Proje Kural Dosyaları", en: "Project Rule Files" },
        items: [
          { tr: "AGENTS.md — genel/Codex tabanlı agent kuralları.", en: "AGENTS.md — general/Codex-based agent rules." },
          { tr: "GEMINI.md — Google Gemini agent'ları için kurallar.", en: "GEMINI.md — rules for Google Gemini agents." },
          { tr: "CLAUDE.md — Claude Code için proje kuralları.", en: "CLAUDE.md — project rules for Claude Code." },
        ],
      },
      {
        heading: { tr: "Kullanım Alanları", en: "Use Cases" },
        items: [
          { tr: "Reasoning: karmaşık ve çok adımlı problemlerde daha derin düşünme modu.", en: "Reasoning: a deeper-thinking mode for complex, multi-step problems." },
          { tr: "Mini modeller: basit, hızlı ve düşük maliyetli işlemler için.", en: "Mini models: for simple, fast, low-cost tasks." },
          { tr: "Extra thinking: zor problemlerde modele daha fazla düşünme bütçesi tanımak.", en: "Extra thinking: giving the model more thinking budget on hard problems." },
          { tr: "Skills/Plugins/Tools: tekrar kullanılabilir iş akışları, eklenti paketleri ve somut eylem yetenekleri.", en: "Skills/Plugins/Tools: reusable workflows, extension packages, and concrete action capabilities." },
        ],
      },
    ],
  },
  {
    id: "ide-setup",
    day: 1,
    tone: "hardware",
    Component: IdeSetupNote,
    title: { tr: "IDE ve Kurulum", en: "IDE & Setup" },
    tagline: {
      tr: "VSCode'u AI agent eklentileri ve doğru Git ayarlarıyla hazırla.",
      en: "Set up VSCode with AI agent extensions and the right Git configuration.",
    },
    sections: [
      {
        heading: { tr: "Neden VSCode?", en: "Why VSCode?" },
        items: [
          { tr: "Ücretsizdir, açık kaynaktır ve geniş eklenti desteği sunar.", en: "It is free, open source, and has broad extension support." },
          { tr: "Git entegrasyonu ve terminal desteği hazır gelir.", en: "Git integration and terminal support come built in." },
          { tr: "Codex ve Claude Code için resmi eklentileri vardır.", en: "It has official extensions for Codex and Claude Code." },
        ],
      },
      {
        heading: { tr: "Global Git Ayarları", en: "Global Git Config" },
        items: [
          { tr: "git config --global user.name \"Adın Soyadın\"", en: "git config --global user.name \"Your Name\"" },
          { tr: "git config --global user.email \"eposta@ornek.com\"", en: "git config --global user.email \"email@example.com\"" },
          { tr: "git config --global --list ile ayarlarını doğrula.", en: "Verify settings with git config --global --list." },
        ],
      },
    ],
  },
  {
    id: "repo-basics",
    day: 1,
    tone: "security",
    Component: RepoBasicsNote,
    title: { tr: "Git Repo Temelleri: README, Badge, Lisans", en: "Repo Basics: README, Badges, Licenses" },
    tagline: {
      tr: "Bir reponun ilk izlenimini oluşturan üç temel öğe.",
      en: "The three basics that shape a repo's first impression.",
    },
    sections: [
      {
        heading: { tr: "README ve Badge", en: "README & Badges" },
        items: [
          { tr: "README, projenin ne yaptığını, nasıl kurulduğunu, özelliklerini ve katkı yöntemini anlatır.", en: "README: explains what the project does, how to install it, its features, and how to contribute." },
          { tr: "Badge'ler; build durumu, sürüm ve lisans gibi bilgileri gösteren küçük görsel etiketlerdir (örnek: shields.io).", en: "Badges are small visual labels showing build status, version, license, and similar metadata (for example, shields.io)." },
        ],
      },
      {
        heading: { tr: "Lisanslar", en: "Licenses" },
        items: [
          { tr: "MIT: çok esnek, neredeyse serbest kullanım sağlar.", en: "MIT: very permissive, nearly unrestricted use." },
          { tr: "Apache 2.0: MIT'e benzer, ek olarak patent koruma maddeleri.", en: "Apache 2.0: similar to MIT, plus patent protection clauses." },
          { tr: "GPL: türev projelerin de açık kaynak kalmasını zorunlu kılar.", en: "GPL: requires derivative projects to also stay open source." },
          { tr: "Lisansı belirtilmemiş proje varsayılan olarak 'tüm hakları saklı' kabul edilir.", en: "A project with no license is treated as 'all rights reserved' by default." },
        ],
      },
    ],
  },
  {
    id: "web-security-basics",
    day: 1,
    tone: "electronics",
    Component: WebSecurityBasicsNote,
    title: { tr: "Web Temelleri ve Güvenlik", en: "Web Basics & Security" },
    tagline: {
      tr: "Tarayıcıdaki bir site nasıl çalışır, HTTPS neyi korur ve guest Wi-Fi'de neler görünebilir?",
      en: "How a site works in the browser, what HTTPS protects, and what may be visible on guest Wi-Fi.",
    },
    sections: [
      {
        heading: { tr: "HTML/CSS/JS ve HTTPS", en: "HTML/CSS/JS & HTTPS" },
        items: [
          { tr: "Her web sitesi, tarayıcıya gönderilen HTML (yapı), CSS (görünüm) ve JS (davranış) dosyalarından oluşur.", en: "Every website is made of HTML (structure), CSS (look), and JS (behavior) sent to the browser." },
          { tr: "HTTP'de veri şifrelenmeden gönderilir; ağı dinleyen biri bu veriyi okuyabilir.", en: "With HTTP, data travels unencrypted; anyone sniffing the network can read it." },
          { tr: "HTTPS'te iletişim TLS/SSL ile şifrelenir; adres çubuğundaki kilit bunu gösterir.", en: "With HTTPS, the connection is encrypted with TLS/SSL; the padlock icon confirms it." },
        ],
      },
      {
        heading: { tr: "Guest Wi-Fi Güvenliği", en: "Guest Wi-Fi Security" },
        items: [
          { tr: "Kafe veya okul gibi guest ağlarda trafik her zaman güvenli olmayabilir.", en: "On guest networks like cafes or schools, traffic may not always be secure." },
          { tr: "HTTPS siteler şifreli kalır; ancak hangi siteye bağlanıldığına dair DNS/SNI bilgileri görülebilir.", en: "HTTPS sites stay encrypted, but DNS/SNI details about which site you connect to can still be visible." },
          { tr: "Ağ sağlayıcısı genellikle bağlantı loglarını (kim, ne zaman, hangi IP) tutar.", en: "The network provider usually keeps connection logs (who, when, which IP)." },
        ],
      },
    ],
  },
  {
    id: "llm-models-thinking-levels",
    day: 1,
    tone: "software",
    Component: LlmModelsThinkingLevelsNote,
    title: { tr: "LLM Modelleri ve Düşünme Seviyeleri", en: "LLM Models & Thinking Levels" },
    tagline: {
      tr: "Eğitim verisi, sinir ağı mantığı ve işe göre doğru model/düşünme seviyesini seçme.",
      en: "Training data, the neural-network idea, and picking the right model/thinking level for the job.",
    },
    sections: [
      {
        heading: { tr: "Eğitim Verisi ve Sinir Ağı", en: "Training Data & Neural Networks" },
        items: [
          { tr: "Model, devasa metin verilerinden kelimeler arasındaki örüntüleri öğrenir; yaptığı şey ezber değil, örüntü öğrenimidir.", en: "A model learns patterns between words from huge amounts of text; it is pattern learning, not memorization." },
          { tr: "Eğitim verisinin kalitesi, modelin kalitesini doğrudan belirler.", en: "The quality of the training data directly determines the quality of the model." },
          { tr: "Sinir ağları, insan beynindeki nöron-sinaps mantığından esinlenir; ancak birebir aynı değildir.", en: "Neural networks are inspired by the brain's neuron-synapse logic, but are not identical to it." },
          { tr: "Claude gibi modellerin zor görevlerdeki gücü, büyük ölçüde kaliteli ve iyi seçilmiş eğitim verilerinden gelir.", en: "Models like Claude perform well on hard tasks largely because of high-quality, carefully selected training data." },
        ],
      },
      {
        heading: { tr: "Düşünme Seviyeleri ve Model Seçimi", en: "Thinking Levels & Model Choice" },
        items: [
          { tr: "Base/mini modeller: basit, hızlı ve net talimatlı işler için uygundur.", en: "Base/mini models are best for simple, fast, clearly instructed tasks." },
          { tr: "Full modeller: orta ve yüksek karmaşıklıktaki işlerde dengeli bir seçimdir.", en: "Full models are a balanced choice for medium-to-high complexity work." },
          { tr: "Extra thinking/reasoning: karmaşık, çok adımlı ve mantık gerektiren işlerde daha derin düşünme sağlar.", en: "Extra thinking/reasoning provides deeper thinking for complex, multi-step, logic-heavy work." },
          { tr: "Yeni bir model çıktığında ilk 1-2 ay genellikle en yüksek performansı verir; güncel modele geçmek çoğu zaman mantıklıdır.", en: "A newly released model usually performs best in its first 1-2 months; switching to it early is often worthwhile." },
        ],
      },
    ],
  },
  {
    id: "os-windows-linux-opensource",
    day: 1,
    tone: "hardware",
    Component: OsWindowsLinuxNote,
    title: { tr: "İşletim Sistemleri: Windows vs Linux ve Açık Kaynak", en: "Operating Systems: Windows vs Linux & Open Source" },
    tagline: {
      tr: "Windows/Linux farkı, Kali/Ubuntu Server/CentOS/macOS kullanım alanları ve açık kaynağın hızlı büyüme mantığı.",
      en: "Windows vs Linux, where Kali/Ubuntu Server/CentOS/macOS fit, and why open source grows so fast.",
    },
    sections: [
      {
        heading: { tr: "Windows vs Linux", en: "Windows vs Linux" },
        items: [
          { tr: "İşletim sistemi, donanım ile uygulamalar arasındaki köprüdür; bellek, dosya sistemi, sürücü ve process yönetimini yapar.", en: "An OS bridges hardware and applications: it manages memory, the filesystem, drivers, and processes." },
          { tr: "Windows: kapalı kaynaklıdır; geniş donanım, oyun ve kurumsal yazılım desteği ile kullanıcı dostu bir arayüz sunar.", en: "Windows: closed source, with broad hardware, gaming, and enterprise software support plus a user-friendly UI." },
          { tr: "Linux: açık kaynaklı bir çekirdek üzerine kurulur; yüzlerce dağıtımı vardır, sunucularda ve geliştirici ortamlarında yaygındır.", en: "Linux: built on an open-source kernel, available in hundreds of distros, and common on servers and developer environments." },
        ],
      },
      {
        heading: { tr: "Dağıtımlar (Distro) ve Kullanım Alanları", en: "Distros & Use Cases" },
        items: [
          { tr: "Kali Linux: pentest ve siber güvenlik araştırmaları için güvenlik araçlarıyla gelen dağıtımdır; yalnızca yasal, izinli testlerde kullanılır.", en: "Kali Linux: a distro preloaded with security tools for pentesting and research; only for legal, authorized testing." },
          { tr: "Ubuntu Server: arayüzsüz, sunucu odaklı Ubuntu sürümüdür; web, veritabanı ve Docker host'ları için yaygındır, apt ile yönetilir.", en: "Ubuntu Server: a headless, server-focused Ubuntu release; common for web, database, and Docker hosts, managed with apt." },
          { tr: "CentOS: RHEL uyumlu kurumsal dağıtımdır, yum/dnf kullanır; klasik sürüm sona ermiş, yerini CentOS Stream almıştır.", en: "CentOS: a RHEL-compatible enterprise distro using yum/dnf; the classic release has ended and was replaced by CentOS Stream." },
          { tr: "macOS: Unix tabanlıdır (Darwin), Apple donanımına özeldir; hem grafik arayüz hem de güçlü terminal sunar.", en: "macOS: Unix-based (Darwin), specific to Apple hardware, and offers both a GUI and a strong terminal." },
        ],
      },
      {
        heading: { tr: "Açık Kaynak Neden Hızlı Büyüyor?", en: "Why Open Source Grows Fast" },
        items: [
          { tr: "Artıları: ücretsiz veya düşük maliyetli olması, yüksek özelleştirilebilirlik, geniş topluluk desteği ve şeffaflık sayesinde hızlı hata düzeltme.", en: "Pros: free or low-cost usage, high customizability, broad community support, and faster bug fixes through transparency." },
          { tr: "Eksileri: garanti edilmiş resmi destek yoktur; dokümantasyon kalitesi değişebilir, dağıtım fazlalığı karmaşa yaratabilir ve bilinen açıklar yama öncesi herkes tarafından görülebilir.", en: "Cons: no guaranteed official support; documentation quality can vary, distro fragmentation can add complexity, and known flaws are visible to everyone before a patch ships." },
        ],
      },
    ],
  },
  {
    id: "wifi-security-risks",
    day: 1,
    tone: "electronics",
    Component: WifiSecurityRisksNote,
    title: { tr: "Kablosuz Ağ Güvenliği: Guest Wi-Fi Riskleri ve KVKK", en: "Wireless Security: Guest Wi-Fi Risks & KVKK" },
    tagline: {
      tr: "Guest Wi-Fi'da neler açığa çıkabilir, KVKK/TCK açısından risk nedir ve yasal test sınırı nerede başlar?",
      en: "What can be exposed on guest Wi-Fi, what the legal risk is under Turkish law, and where the legal testing line begins.",
    },
    sections: [
      {
        heading: { tr: "Risk ve Sonuçları", en: "Risk & Consequences" },
        items: [
          { tr: "İyi izole edilmemiş guest ağlarda şifrelenmemiş trafik ve zayıf giriş ekranları izlenebilir hale gelebilir.", en: "On poorly isolated guest networks, unencrypted traffic and weak login screens can become observable." },
          { tr: "Kimlik numarası, telefon veya OTP gibi bilgilerin açığa çıkması kimlik hırsızlığına ve hesap ele geçirmeye yol açabilir.", en: "Exposed ID numbers, phone numbers, or OTPs can enable identity theft and account takeover." },
        ],
      },
      {
        heading: { tr: "Yasal Sınır ve Savunma", en: "Legal Line & Defense" },
        items: [
          { tr: "Bu tür testler yalnızca yazılı izinli pentest anlaşmaları kapsamında veya izole lab ortamlarında yapılabilir; izinsiz veri yakalama KVKK/TCK kapsamında suçtur.", en: "Such testing may only happen under a written pentest agreement or in an isolated lab; unauthorized capture is a crime under Turkish law." },
          { tr: "Savunma: VLAN izolasyonu, zorunlu HTTPS, güçlü kimlik doğrulama ve ağ izleme.", en: "Defense: VLAN isolation, enforced HTTPS, strong authentication, and network monitoring." },
        ],
      },
    ],
  },
  {
    id: "zero-day",
    day: 1,
    tone: "security",
    Component: ZeroDayNote,
    title: { tr: "0-Day Zafiyetler Nedir?", en: "What Is a 0-Day Vulnerability?" },
    tagline: {
      tr: "0-day tanımı, neden tehlikeli olduğu, sorumlu bildirim ve kara pazar ayrımı.",
      en: "What a 0-day is, why it's dangerous, and responsible disclosure vs the black market.",
    },
    sections: [
      {
        heading: { tr: "Tanım ve Tehlike", en: "Definition & Danger" },
        items: [
          { tr: "Üreticinin henüz haberdar olmadığı veya henüz yama yayınlamadığı güvenlik açığıdır.", en: "A flaw the vendor does not know about yet, or has not patched yet." },
          { tr: "Henüz imza veya yama olmadığı için klasik savunma araçlarının yakalaması zordur.", en: "With no signature or patch yet, classic defenses struggle to catch it." },
        ],
      },
      {
        heading: { tr: "Sorumlu Bildirim vs Kara Pazar", en: "Responsible Disclosure vs Black Market" },
        items: [
          { tr: "Bug bounty: araştırmacı açığı üreticiye bildirir ve ödül alır; yasal ve teşvik edilen yol budur.", en: "Bug bounty: the researcher reports the flaw to the vendor and gets rewarded; this is the legal, encouraged path." },
          { tr: "Kara/gri pazar: açık en yüksek teklife satılır; alıcılar arasında siber suç grupları da olabilir.", en: "Black/gray market: the flaw is sold to the highest bidder, sometimes including cybercriminal groups." },
        ],
      },
    ],
  },
  {
    id: "patch-management",
    day: 1,
    tone: "hardware",
    Component: PatchManagementNote,
    title: { tr: "Güncel Kalmanın Önemi: Yama Yönetimi", en: "Why Staying Updated Matters: Patch Management" },
    tagline: {
      tr: "N-day riski, WannaCry/EternalBlue örneği ve iyi yama yönetimi pratikleri.",
      en: "The N-day risk window, the WannaCry/EternalBlue example, and good patch-management practice.",
    },
    sections: [
      {
        heading: { tr: "N-Day Riski", en: "The N-Day Risk" },
        items: [
          { tr: "Yama yayınlandığında açığın varlığı kamuya açık hale gelir; güncellenmemiş sistemler kolay hedef olur.", en: "Once a patch ships, the flaw becomes public; unpatched systems become easy targets." },
          { tr: "WannaCry, aylar önce yayınlanmış fakat uygulanmamış bir Windows yamasının kapattığı açığı kullanarak dünya çapında yayıldı.", en: "WannaCry spread worldwide by exploiting a Windows flaw that had been patched months earlier but left unapplied." },
        ],
      },
      {
        heading: { tr: "İyi Pratikler", en: "Good Practices" },
        items: [
          { tr: "Otomatik güncellemeleri açık tut, kritik yamaları önce uygula.", en: "Keep auto-updates on, apply critical patches first." },
          { tr: "Desteği biten (EOL) yazılımlardan hızla geçiş yap.", en: "Migrate off End-of-Life software quickly." },
        ],
      },
    ],
  },
  {
    id: "cloudflare-traffic-privacy",
    day: 1,
    tone: "security",
    Component: CloudflareNote,
    title: { tr: "Cloudflare: Trafik, İçerik ve Gizlilik", en: "Cloudflare: Traffic, Content & Privacy" },
    tagline: {
      tr: "Cloudflare neden bu kadar yaygın, ne görebilir ve artıları/eksileri nelerdir?",
      en: "Why Cloudflare is everywhere, what it can see, and its pros and cons.",
    },
    sections: [
      {
        heading: { tr: "Cloudflare Nedir ve Neden Yaygın?", en: "What Is Cloudflare & Why So Common?" },
        items: [
          { tr: "CDN, DDoS koruması, DNS ve WAF hizmetlerini bir arada sunan bir altyapı şirketidir.", en: "An infrastructure provider bundling CDN, DDoS protection, DNS, and WAF." },
          { tr: "Bir site Cloudflare arkasındaysa trafik önce Cloudflare'e, ardından gerçek sunucuya (origin) gider.", en: "If a site sits behind Cloudflare, traffic hits Cloudflare first, then the real (origin) server." },
          { tr: "Ücretsiz plan, kolay DNS entegrasyonu ve güçlü DDoS koruması sayesinde birçok kurumsal site ve bazı AI/LLM servisleri tarafından tercih edilir.", en: "A free tier, easy DNS setup, and strong DDoS protection make it a common choice for enterprise sites and some AI/LLM services." },
        ],
      },
      {
        heading: { tr: "Ne Görür? Artıları ve Eksileri", en: "What It Sees, Pros & Cons" },
        items: [
          { tr: "Trafik: gelen her isteğin IP, User-Agent, zaman ve hedef sayfa bilgisi önce Cloudflare'den geçer.", en: "Traffic: every request's IP, User-Agent, timing, and target page passes through Cloudflare first." },
          { tr: "İçerik: HTTPS genellikle Cloudflare'de sonlandırılır; yani şifresi çözülmüş veri teknik olarak oradan geçer.", en: "Content: HTTPS is usually terminated at Cloudflare, so decrypted data technically passes through it." },
          { tr: "Artıları: DDoS koruması, CDN hızı, ücretsiz SSL ve WAF ile SQLi/XSS'e karşı ek güvenlik katmanı.", en: "Pros: DDoS protection, CDN speed, free SSL, and an extra WAF layer against SQLi/XSS." },
          { tr: "Eksileri: merkezileşme riski, gizlilik tartışmaları ve yanlış yapılandırmada gerçek sunucu IP'sinin bulunabilmesi.", en: "Cons: centralization risk, privacy debate, and a misconfigured origin IP can be uncovered." },
        ],
      },
    ],
  },
  {
    id: "cybersecurity-foundation",
    day: 1,
    tone: "security",
    Component: CybersecurityFoundationNote,
    title: { tr: "Siber Güvenlik İçin Temel Bilgi", en: "The Foundation Cybersecurity Needs" },
    tagline: {
      tr: "Bir sistemi kırmayı anlamadan önce, o sistemin nasıl çalıştığını anlamak gerekir.",
      en: "Before you can understand how to break a system, you must understand how it works.",
    },
    sections: [
      {
        heading: { tr: "Neden Algoritma ve Yazılım Mantığı?", en: "Why Algorithm & Software Logic?" },
        items: [
          { tr: "Bir sistemin normalde nasıl davranması gerektiğini bilmeden, sapmaları fark edemezsin.", en: "You cannot spot deviations without knowing how a system is supposed to behave normally." },
          { tr: "Örnek: SQL injection'ı anlamak için önce SQL sorgularının nasıl çalıştığını bilmek gerekir.", en: "Example: understanding SQL injection requires first knowing how SQL queries work." },
          { tr: "Siber güvenlik, yalnızca hazır araçları çalıştırmak değil; bu araçların arkasındaki mantığı anlamaktır.", en: "Cybersecurity is not just running ready-made tools; it is understanding the logic behind them." },
        ],
      },
    ],
  },
  {
    id: "pentest-methodology-enumeration",
    day: 2,
    tone: "security",
    Component: PentestEnumerationNote,
    title: { tr: "Sızma Testi Metodolojisi: Enumeration ve Keşif", en: "Pentest Methodology: Enumeration & Recon" },
    tagline: {
      tr: "Sızma testi adımları, pasif/aktif enumeration türleri ve nmap/aircrack-ng gibi araçlar.",
      en: "Hacking steps, passive/active enumeration types, and tools like nmap/aircrack-ng.",
    },
    sections: [
      {
        heading: { tr: "Sızma Testi Adımları", en: "Pentest Steps" },
        items: [
          { tr: "Enumeration -> Exploitation -> Post-Exploitation -> Raporlama.", en: "Enumeration -> Exploitation -> Post-Exploitation -> Reporting." },
        ],
      },
    ],
  },
  {
    id: "exploitation-post-exploitation",
    day: 2,
    tone: "security",
    Component: ExploitationPostExploitationNote,
    title: { tr: "Exploitation ve Post-Exploitation: Exploit, Payload ve Shell Türleri", en: "Exploitation & Post-Exploitation: Exploit, Payload & Shell Types" },
    tagline: {
      tr: "Exploit türleri, reverse/bind shell, staged/stageless payload ve gerçek dünya post-exploitation örnekleri.",
      en: "Exploit types, reverse/bind shells, staged/stageless payloads, and real-world post-exploitation examples.",
    },
    sections: [
      {
        heading: { tr: "Fazlar", en: "Phases" },
        items: [
          { tr: "Exploit seçimi, payload/shell türleri ve post-exploitation teknikleri.", en: "Exploit selection, payload/shell types, and post-exploitation techniques." },
        ],
      },
    ],
  },
  {
    id: "dns-definition-enumeration",
    day: 2,
    tone: "security",
    Component: DnsEnumerationNote,
    title: { tr: "DNS Tanımı ve DNS Enumeration", en: "DNS Definition & DNS Enumeration" },
    tagline: {
      tr: "DNS kayıt türleri, pasif/aktif DNS enumeration ve gerçek dünya subdomain takeover örneği.",
      en: "DNS record types, passive/active DNS enumeration, and a real-world subdomain takeover example.",
    },
    sections: [
      {
        heading: { tr: "DNS Enumeration", en: "DNS Enumeration" },
        items: [
          { tr: "Pasif (crt.sh, SecurityTrails) ve aktif (dig, zone transfer, brute-force) yöntemler.", en: "Passive (crt.sh, SecurityTrails) and active (dig, zone transfer, brute-force) methods." },
        ],
      },
    ],
  },
  {
    id: "waf-definition-enumeration",
    day: 2,
    tone: "security",
    Component: WafEnumerationNote,
    title: { tr: "WAF Tanımı ve WAF Tespiti", en: "WAF Definition & Fingerprinting" },
    tagline: {
      tr: "WAF nedir, header/cookie/block-page tabanlı tespit teknikleri ve wafw00f aracı.",
      en: "What a WAF is, header/cookie/block-page fingerprinting techniques, and the wafw00f tool.",
    },
    sections: [
      {
        heading: { tr: "WAF Tespiti", en: "WAF Fingerprinting" },
        items: [
          { tr: "Header, cookie ve engelleme sayfası analiziyle WAF tespiti.", en: "Detecting a WAF via header, cookie, and block-page analysis." },
        ],
      },
    ],
  },
  {
    id: "host-vps-enumeration",
    day: 2,
    tone: "security",
    Component: HostVpsEnumerationNote,
    title: { tr: "Host, VPS Tanımı ve Enumeration Teknikleri", en: "Host & VPS Definitions & Enumeration Techniques" },
    tagline: {
      tr: "Host/VPS tanımları, reverse DNS/IP, ASN sorgusu ve CDN arkasındaki gerçek IP'yi bulma.",
      en: "Host/VPS definitions, reverse DNS/IP, ASN lookups, and uncovering the real IP behind a CDN.",
    },
    sections: [
      {
        heading: { tr: "Enumeration Teknikleri", en: "Enumeration Techniques" },
        items: [
          { tr: "Reverse DNS/IP, ASN sorgusu ve CDN arkasındaki gerçek origin IP'yi bulma.", en: "Reverse DNS/IP, ASN lookups, and finding the real origin IP behind a CDN." },
        ],
      },
    ],
  },
  {
    id: "wappalyzer-tech-fingerprinting",
    day: 2,
    tone: "security",
    Component: WappalyzerFingerprintingNote,
    title: { tr: "Wappalyzer Eklentisi ve Kullanımı", en: "The Wappalyzer Extension & How to Use It" },
    tagline: {
      tr: "Pasif teknoloji parmak izi çıkarma ve bug bounty keşif akışında kullanımı.",
      en: "Passive technology fingerprinting and its use in the bug bounty recon flow.",
    },
    sections: [
      {
        heading: { tr: "Kullanım", en: "Usage" },
        items: [
          { tr: "CMS, framework ve CDN tespiti için kullanılan pasif bir tarayıcı eklentisidir.", en: "A passive browser extension for detecting CMS, frameworks, and CDNs." },
        ],
      },
    ],
  },
  {
    id: "browser-extensions-permissions-risks",
    day: 2,
    tone: "security",
    Component: BrowserExtensionsRisksNote,
    title: { tr: "Tarayıcı Eklentileri: İzinler, Riskler ve Erişilen Veriler", en: "Browser Extensions: Permissions, Risks & Data Access" },
    tagline: {
      tr: "Eklenti izin türleri, gerçek dünya veri toplama/ele geçirme vakaları ve savunma önerileri.",
      en: "Extension permission types, real-world data-harvesting/hijack cases, and defensive recommendations.",
    },
    sections: [
      {
        heading: { tr: "Riskler", en: "Risks" },
        items: [
          { tr: "Geniş izinli eklentiler veri toplayabilir veya ele geçirilebilir (ör. The Great Suspender).", en: "Broadly permissioned extensions can harvest data or get hijacked (for example, The Great Suspender)." },
        ],
      },
    ],
  },
  new KnowledgeTopic({
    id: "reverse-engineering-frida",
    tone: "hardware",
    day: 2,
    Component: ReverseEngineeringFridaNote,
    title: { tr: "Tersine Mühendislik ve Frida", en: "Reverse Engineering & Frida" },
    tagline: {
      tr: "Android uygulamalarını ADB ve Frida ile analiz etme ve dinamik enstrümantasyon.",
      en: "Analyzing Android apps with ADB and Frida, dynamic instrumentation.",
    },
    repo: { label: "sahelfarid/reverse-engineering", url: "https://github.com/sahelfarid/reverse-engineering" },
    sections: [
      {
        heading: { tr: "Lab Rotası", en: "Lab Route" },
        items: [
          { tr: "ADB ile cihaz bağlantısı, paket inceleme, logcat ve Frida enstrümantasyonu yalnızca yetkili lablarda çalışılır.", en: "ADB device connection, package inspection, logcat, and Frida instrumentation are practiced only in authorized labs." },
        ],
      },
    ],
    toc: [
      { tr: "ADB temelleri: cihaz bağlama, yetkilendirme ve shell erişimi.", en: "ADB basics: connecting devices, authorization, and shell access." },
      { tr: "Cihaz ve paket yönetimi: APK kurma/kaldırma, izinler ve App Inspector.", en: "Device and package management: installing/removing APKs, permissions, and App Inspector." },
      { tr: "Dosya sistemi erişimi ve yedekleme (backup/pull/push).", en: "Filesystem access and backup (pull/push)." },
      { tr: "Logcat ile canlı log izleme ve filtreleme.", en: "Live log monitoring and filtering with Logcat." },
      { tr: "Ekran araçları ve input otomasyonu (tap/swipe/macro).", en: "Screen tools and input automation (tap/swipe/macros)." },
      { tr: "Root tespiti ve rootlu cihazlarda çalışma.", en: "Root detection and working with rooted devices." },
      { tr: "Frida ile dinamik enstrümantasyon: frida-server, process attach/spawn.", en: "Dynamic instrumentation with Frida: frida-server, process attach/spawn." },
      { tr: "Frida script yazma: JavaScript hook'ları ve fonksiyon yakalama.", en: "Writing Frida scripts: JavaScript hooks and function hooking." },
      { tr: "Güvenlik modeli: yetkili test, login/CSRF/audit log önemi.", en: "Security model: authorized testing, and the importance of login, CSRF, and audit logs." },
      { tr: "Yasal ve etik sınırlar: yalnızca kendi cihazın/uygulaman veya yazılı izinli ortamlar üzerinde test.", en: "Legal and ethical boundaries: only test your own devices/apps or environments with written authorization." },
    ],
  }),
  new KnowledgeTopic({
    id: "web-security-webq",
    tone: "security",
    day: 2,
    Component: WebQSecurityNote,
    title: { tr: "Web Güvenliği: Keşif ve Analiz (WebQ)", en: "Web Security: Recon & Analysis (WebQ)" },
    tagline: {
      tr: "Domain keşfi, altyapı analizi ve zafiyet tarama araçlarının mantığı.",
      en: "The logic behind domain recon, infrastructure analysis, and vulnerability scanning tools.",
    },
    repo: { label: "keyvanarasteh/WebQ", url: "https://github.com/keyvanarasteh/WebQ" },
    sections: [
      {
        heading: { tr: "Analiz Rotası", en: "Analysis Route" },
        items: [
          { tr: "Domain, DNS, teknoloji parmak izi, subdomain, secret ve güvenlik skoru yalnızca izinli hedeflerde incelenir.", en: "Domain, DNS, tech fingerprinting, subdomain, secrets, and security scoring are reviewed only on authorized targets." },
        ],
      },
    ],
    toc: [
      { tr: "Domain Insight: WHOIS, SSL zinciri, DNS haritalama ve port taraması.", en: "Domain Insight: WHOIS, SSL chain checks, DNS mapping, and port scanning." },
      { tr: "SEO ve teknoloji parmak izi: CMS/framework/CDN tespiti.", en: "SEO & tech fingerprinting: detecting CMS/frameworks/CDNs." },
      { tr: "Toplu domain doğrulama (bulk domain validation).", en: "Bulk domain validation." },
      { tr: "Subdomain keşfi ve canlı/ölü subdomain filtreleme.", en: "Subdomain discovery and live/dead subdomain filtering." },
      { tr: "Contact spidering: BFS ile e-posta ve sosyal veri toplama.", en: "Contact spidering: BFS crawling for emails and social data." },
      { tr: "Secret scanner: /config, /env gibi noktalardaki sızıntılar.", en: "Secret scanner: leaked credentials in /config and /env endpoints." },
      { tr: "Subdomain takeover analizi: savunmasız CNAME kayıtları.", en: "Subdomain takeover analysis: vulnerable CNAME records." },
      { tr: "Cloudflare/CDN arkasındaki gerçek IP'yi bulma.", en: "Uncovering the real IP behind Cloudflare/CDN." },
      { tr: "Nmap çıktısını CVE veritabanlarıyla eşleştirme.", en: "Correlating Nmap output with CVE databases." },
      { tr: "Güvenlik puanlama modeli: WAF, CORS ve header analiziyle A+ - F derecelendirme.", en: "Security grading model: A+ to F scoring via WAF, CORS, and header analysis." },
    ],
  }),
];
