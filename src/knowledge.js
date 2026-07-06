import { FrontendBackendAgenticNote } from "./notes/FrontendBackendAgentic.jsx";
import { AgentOutputAuditNote } from "./notes/AgentOutputAudit.jsx";
import { DocumentationNote } from "./notes/Documentation.jsx";
import { GitGithubNote } from "./notes/GitGithub.jsx";
import { OpenSourceContributionNote } from "./notes/OpenSourceContribution.jsx";
import { ProblemSolvingNote } from "./notes/ProblemSolving.jsx";

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
  constructor({ id, tone, title, tagline, day = 1, sections = [], toc = [], repo = null, placeholder = false }) {
    this.id = id;
    this.tone = tone;
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
    tone: "software",
    Component: GitGithubNote,
    title: { tr: "Github ve Git", en: "Github & Git" },
    tagline: {
      tr: "Kod ile calisirken duzenli, izlenebilir ve guvenilir bir gecmis birakmayi ogren.",
      en: "Learn to leave an organized, traceable, trustworthy history while working with code.",
    },
    sections: [
      {
        heading: { tr: "Temel Kavramlar", en: "Core Concepts" },
        items: [
          { tr: "Github hesabin, senin yazilim CV'in gibi calisir.", en: "Your Github account works like your software CV." },
          { tr: "Branch: ana koddan ayrilan, uzerinde bagimsiz calisilan bir dal.", en: "Branch: an independent line of work split off from the main code." },
          { tr: "Changelog: commit mesajlarinin degisiklikleri anlasilir sekilde ozetlemesi.", en: "Changelog: commit messages that clearly summarize what changed." },
          { tr: "Teamwork: birden fazla kisi ayni projede coakisma yasamadan calisir.", en: "Teamwork: multiple people work on the same project without stepping on each other." },
        ],
      },
      {
        heading: { tr: "Kirmizi Cizgi", en: "The Red Line" },
        items: [
          { tr: "Fake commit atmak teknik olarak mumkundur ama algilanabilir.", en: "Faking commits is technically possible, but it is detectable." },
          { tr: "Sahte katki gecmisi asla yapilmamali; fark edildiginde guven kaybina yol acar.", en: "Never fake your contribution history — it destroys trust when discovered." },
        ],
      },
    ],
  },
  {
    id: "frontend-backend-agentic",
    tone: "electronics",
    Component: FrontendBackendAgenticNote,
    title: { tr: "FrontEnd vs BackEnd, LLM Chat vs Agentic AI", en: "FrontEnd vs BackEnd, LLM Chat vs Agentic AI" },
    tagline: {
      tr: "Bir web uygulamasinin katmanlarini ve yapay zeka araclarinin turlerini ayirt et.",
      en: "Tell apart the layers of a web app and the different kinds of AI tools.",
    },
    sections: [
      {
        heading: { tr: "Mimari", en: "Architecture" },
        items: [
          { tr: "FrontEnd: kullanicinin tarayicida gordugu kisim (HTML, CSS, JS, React).", en: "FrontEnd: what the user sees in the browser (HTML, CSS, JS, React)." },
          { tr: "BackEnd: verinin islendigi, saklandigi, is mantiginin calistigi sunucu tarafi.", en: "BackEnd: the server side where data is processed, stored, and business logic runs." },
          { tr: "Bu proje sadece FrontEnd'dir; backend ve veritabani yoktur.", en: "This project is FrontEnd only; there is no backend or database." },
        ],
      },
      {
        heading: { tr: "AI Turleri", en: "Types of AI" },
        items: [
          { tr: "LLM Chat: soru sorulur, model metinle cevap verir.", en: "LLM Chat: you ask a question, the model replies with text." },
          { tr: "Agentic AI: model arac kullanarak dosya okuma/yazma, komut calistirma gibi eylemleri zincirler (Claude Code, Codex).", en: "Agentic AI: the model chains actions using tools — reading/writing files, running commands (Claude Code, Codex)." },
          { tr: "Fark: chat modeli \"soyler\", agent \"yapar\".", en: "The difference: a chat model \"tells\", an agent \"does\"." },
        ],
      },
    ],
  },
  {
    id: "problem-solving",
    tone: "software",
    Component: ProblemSolvingNote,
    title: { tr: "Problem Cozme Sureci (0-100)", en: "Problem-Solving Process (0-100)" },
    tagline: {
      tr: "Bir fikri, planlanmis ve izlenebilir adimlarla calisan bir urune donustur.",
      en: "Turn an idea into a working product through planned, trackable steps.",
    },
    sections: [
      {
        heading: { tr: "7 Adim", en: "7 Steps" },
        items: [
          { tr: "1. Problemi tanimla (ornek: idea.txt).", en: "1. Define the problem (e.g. idea.txt)." },
          { tr: "2. Olasi cozum yollarini listele.", en: "2. List possible solutions." },
          { tr: "3. Cozumleri karsilastir.", en: "3. Compare the solutions." },
          { tr: "4. En iyi cozumu sec.", en: "4. Choose the best solution." },
          { tr: "5. Secilen cozum icin 0-100 uygulama plani cikar.", en: "5. Build a 0-100 implementation plan for it." },
          { tr: "6. Plani dogrula, checklist olarak STEPS.md yaz.", en: "6. Verify the plan and turn it into a STEPS.md checklist." },
          { tr: "7. Adimlari isaretleyerek ilerle; stabil noktalarda branch/commit/push yap.", en: "7. Progress by checking off steps; branch, commit, and push at stable points." },
        ],
      },
    ],
  },
  {
    id: "open-source-contribution",
    tone: "security",
    Component: OpenSourceContributionNote,
    title: { tr: "Open Source'a Katki Sureci", en: "Contributing to Open Source" },
    tagline: {
      tr: "Bir acik kaynak projeye nasil PR gonderilir ve merge edilir?",
      en: "How do you send and merge a PR into an open-source project?",
    },
    sections: [
      {
        heading: { tr: "Terimler", en: "Terms" },
        items: [
          { tr: "Fork: bir reponun kendi hesabina kopyasini olusturma.", en: "Fork: creating a copy of someone else's repo under your own account." },
          { tr: "PR (Pull Request): degisikligini orijinal projeye onerme.", en: "PR (Pull Request): proposing your change to the original project." },
          { tr: "Merge: onaylanan degisikligin ana koda birlestirilmesi.", en: "Merge: integrating an approved change into the main code." },
        ],
      },
      {
        heading: { tr: "Adimlar", en: "Steps" },
        items: [
          { tr: "Repoyu fork'la, kendi bilgisayarina clone'la.", en: "Fork the repo, clone it to your machine." },
          { tr: "Yeni bir branch ac, degisikligi yap ve test et.", en: "Open a new branch, make and test your change." },
          { tr: "Fork'una push et, orijinal repoya PR ac.", en: "Push to your fork, open a PR on the original repo." },
          { tr: "Geri bildirimlere gore duzenle; onaylanirsa merge edilir.", en: "Address feedback; once approved, it gets merged." },
        ],
      },
    ],
  },
  {
    id: "agent-output-audit",
    tone: "hardware",
    Component: AgentOutputAuditNote,
    title: { tr: "Agent Ciktilarini Denetleme", en: "Auditing Agent Output" },
    tagline: {
      tr: "AI agent'larin yazdigi kodu korukorune guvenmeden dogrula.",
      en: "Verify code written by AI agents instead of trusting it blindly.",
    },
    sections: [
      {
        heading: { tr: "Nasil Denetlenir?", en: "How to Audit" },
        items: [
          { tr: "Live test: uygulamayi gercekten calistirip gozle/deneyerek dogrulama.", en: "Live test: actually run the app and verify it by trying it out." },
          { tr: "Logic test: kodun mantiginin is kurallarina uygun olup olmadigini okuyarak kontrol etme.", en: "Logic test: reading the code to check it matches the intended business rules." },
        ],
      },
      {
        heading: { tr: "Unit Test vs Real Test", en: "Unit Test vs Real Test" },
        items: [
          { tr: "Unit test: kucuk, izole bir fonksiyonun beklenen ciktiyi verip vermedigini otomatik kontrol eder.", en: "Unit test: automatically checks whether a small, isolated function gives the expected output." },
          { tr: "Real test: uygulamanin butun olarak, gercek bir kullanici gibi uctan uca denenmesi.", en: "Real test: trying the whole app end-to-end like a real user would." },
          { tr: "Ikisi de gereklidir; sadece birine guvenmek yeterli degildir.", en: "Both are needed; relying on only one is not enough." },
        ],
      },
    ],
  },
  {
    id: "documentation",
    tone: "electronics",
    Component: DocumentationNote,
    title: { tr: "Dokumantasyon", en: "Documentation" },
    tagline: {
      tr: "Iyi yazilmis docs, 6 ay sonraki senin ve yeni katkida bulunanlar icin zaman kazandirir.",
      en: "Good docs save time for future-you and for new contributors.",
    },
    sections: [
      {
        heading: { tr: "Kullanim ve Format", en: "Usage and Format" },
        items: [
          { tr: "Onemli kararlar ve is akislari docs/*.md dosyalarinda Markdown ile yazilir.", en: "Important decisions and workflows are written in docs/*.md files using Markdown." },
          { tr: "Markdown basit, okunakli ve Github/Gitlab gibi platformlarda otomatik guzel gorunur.", en: "Markdown is simple, readable, and renders nicely on Github/Gitlab automatically." },
        ],
      },
      {
        heading: { tr: "Neden Onemli?", en: "Why It Matters" },
        items: [
          { tr: "6 ay sonra kod tabanina donduğunde kararlarin nedenini hatirlatir.", en: "It reminds you why decisions were made when you return to the codebase months later." },
          { tr: "Baskasi +100.000 satir kod okumadan projenin mantigini kavrayabilir.", en: "Others can grasp the project's logic without reading 100,000+ lines of code." },
          { tr: "Yeni katkida bulunanlarin ise baslama suresini kisaltir.", en: "It shortens onboarding time for new contributors." },
        ],
      },
    ],
  },
  {
    id: "agent-rules-tools",
    tone: "software",
    title: { tr: "Agent Kurallari, Modeller ve Araclar", en: "Agent Rules, Models & Tools" },
    tagline: {
      tr: "Codex, Claude Code ve VSCode Chat'i proje kurallariyla nasil yonlendirirsin?",
      en: "How do you steer Codex, Claude Code, and VSCode Chat with project rules?",
    },
    sections: [
      {
        heading: { tr: "Proje Kural Dosyalari", en: "Project Rule Files" },
        items: [
          { tr: "AGENTS.md — genel/Codex tabanli agent kurallari.", en: "AGENTS.md — general/Codex-based agent rules." },
          { tr: "GEMINI.md — Google Gemini agent'lari icin kurallar.", en: "GEMINI.md — rules for Google Gemini agents." },
          { tr: "CLAUDE.md — Claude Code icin proje kurallari.", en: "CLAUDE.md — project rules for Claude Code." },
        ],
      },
      {
        heading: { tr: "Kullanim Alanlari", en: "Use Cases" },
        items: [
          { tr: "Reasoning: karmasik, cok adimli problemlerde daha derin dusunme modu.", en: "Reasoning: a deeper-thinking mode for complex, multi-step problems." },
          { tr: "Mini modeller: basit, hizli ve dusuk maliyetli islemler icin.", en: "Mini models: for simple, fast, low-cost tasks." },
          { tr: "Extra thinking: zor problemlerde modele daha fazla dusunme butcesi tanimak.", en: "Extra thinking: giving the model more thinking budget on hard problems." },
          { tr: "Skills/Plugins/Tools: tekrar kullanilabilir is akislari, eklenti paketleri ve somut eylem yetenekleri.", en: "Skills/Plugins/Tools: reusable workflows, extension packages, and concrete action capabilities." },
        ],
      },
    ],
  },
  {
    id: "ide-setup",
    tone: "hardware",
    title: { tr: "IDE ve Kurulum", en: "IDE & Setup" },
    tagline: {
      tr: "VSCode'u AI agent eklentileriyle ve dogru git ayarlariyla kur.",
      en: "Set up VSCode with AI agent extensions and correct git configuration.",
    },
    sections: [
      {
        heading: { tr: "Neden VSCode?", en: "Why VSCode?" },
        items: [
          { tr: "Ucretsiz, acik kaynak, genis eklenti destegi.", en: "Free, open source, wide extension support." },
          { tr: "Git entegrasyonu ve terminal hazir gelir.", en: "Git integration and terminal come built in." },
          { tr: "Codex ve Claude Code icin resmi eklentileri var.", en: "It has official extensions for Codex and Claude Code." },
        ],
      },
      {
        heading: { tr: "Global Git Ayarlari", en: "Global Git Config" },
        items: [
          { tr: "git config --global user.name \"Adin Soyadin\"", en: "git config --global user.name \"Your Name\"" },
          { tr: "git config --global user.email \"eposta@ornek.com\"", en: "git config --global user.email \"email@example.com\"" },
          { tr: "git config --global --list ile ayarlari dogrula.", en: "Verify settings with git config --global --list." },
        ],
      },
    ],
  },
  {
    id: "repo-basics",
    tone: "security",
    title: { tr: "Git Repo Temelleri: README, Badge, Lisans", en: "Repo Basics: README, Badges, Licenses" },
    tagline: {
      tr: "Bir reponun ilk izlenimini olusturan uc temel oge.",
      en: "The three basics that shape a repo's first impression.",
    },
    sections: [
      {
        heading: { tr: "README ve Badge", en: "README & Badges" },
        items: [
          { tr: "README: projenin ne oldugu, kurulumu, ozellikleri ve katki yontemini anlatir.", en: "README: explains what the project is, how to install it, its features, and how to contribute." },
          { tr: "Badge: build durumu, versiyon, lisans gibi bilgileri gosteren kucuk gorsel etiketler (ornek: shields.io).", en: "Badges: small visual labels showing build status, version, license, etc. (e.g. shields.io)." },
        ],
      },
      {
        heading: { tr: "Lisanslar", en: "Licenses" },
        items: [
          { tr: "MIT: cok esnek, neredeyse serbest kullanim.", en: "MIT: very permissive, nearly unrestricted use." },
          { tr: "Apache 2.0: MIT'e benzer, ek olarak patent koruma maddeleri.", en: "Apache 2.0: similar to MIT, plus patent protection clauses." },
          { tr: "GPL: turev projelerin de acik kaynak kalmasini zorunlu kilar.", en: "GPL: requires derivative projects to also stay open source." },
          { tr: "Lisans belirtilmemis proje varsayilan olarak 'tum haklari sakli' kabul edilir.", en: "A project with no license is treated as 'all rights reserved' by default." },
        ],
      },
    ],
  },
  {
    id: "web-security-basics",
    tone: "electronics",
    title: { tr: "Web Temelleri ve Guvenlik", en: "Web Basics & Security" },
    tagline: {
      tr: "Tarayicidaki her site nasil calisir, HTTPS neyi korur, guest wifi'de neler gorulur?",
      en: "How every site in the browser works, what HTTPS protects, what's visible on guest wifi.",
    },
    sections: [
      {
        heading: { tr: "HTML/CSS/JS ve HTTPS", en: "HTML/CSS/JS & HTTPS" },
        items: [
          { tr: "Her website, tarayiciya gonderilen HTML (yapi), CSS (gorunum), JS (davranis) dosyalarindan olusur.", en: "Every website is made of HTML (structure), CSS (look), and JS (behavior) sent to the browser." },
          { tr: "HTTP: veri sifrelenmeden gonderilir, agi dinleyen okuyabilir.", en: "HTTP: data travels unencrypted; anyone sniffing the network can read it." },
          { tr: "HTTPS: iletisim TLS/SSL ile sifrelenir; adres cubugundaki kilit bunu gosterir.", en: "HTTPS: the connection is encrypted with TLS/SSL; the padlock icon confirms it." },
        ],
      },
      {
        heading: { tr: "Guest Wifi Guvenligi", en: "Guest Wifi Security" },
        items: [
          { tr: "Kafe/okul gibi guest aglarda trafik sifreli olmayabilir.", en: "On guest networks like cafes/schools, traffic may not be encrypted." },
          { tr: "HTTPS siteler yine sifreli kalir; ama hangi siteye baglanildigi (DNS/SNI) gorulebilir.", en: "HTTPS sites stay encrypted, but which site you connect to (DNS/SNI) can still be visible." },
          { tr: "Ag saglayicisi genelde baglanti loglarini (kim, ne zaman, hangi IP) tutar.", en: "The network provider usually keeps connection logs (who, when, which IP)." },
        ],
      },
    ],
  },
  {
    id: "llm-models-thinking-levels",
    tone: "software",
    title: { tr: "LLM Modelleri ve Dusunme Seviyeleri", en: "LLM Models & Thinking Levels" },
    tagline: {
      tr: "Egitim verisi, sinir agi mantigi ve ise gore dogru model/dusunme seviyesini secme.",
      en: "Training data, the neural-network idea, and picking the right model/thinking level for the job.",
    },
    sections: [
      {
        heading: { tr: "Egitim Verisi ve Sinir Agi", en: "Training Data & Neural Networks" },
        items: [
          { tr: "Model, devasa metin verisinden kelimeler arasi oruntuleri ogrenir; ezber degil, oruntu ogrenimi yapar.", en: "A model learns patterns between words from huge amounts of text; it's pattern learning, not memorization." },
          { tr: "Egitim verisinin kalitesi, modelin kalitesini dogrudan belirler.", en: "The quality of the training data directly determines the quality of the model." },
          { tr: "Sinir aglari, insan beynindeki noron-sinaps mantigindan esinlenir ama birebir ayni degildir.", en: "Neural networks are inspired by the brain's neuron-synapse logic, but are not identical to it." },
          { tr: "Claude gibi modellerin zor gorevlerdeki gucu, buyuk olcude kaliteli/secilmis egitim verisinden gelir.", en: "Models like Claude perform well on hard tasks largely due to high-quality, carefully selected training data." },
        ],
      },
      {
        heading: { tr: "Dusunme Seviyeleri ve Model Secimi", en: "Thinking Levels & Model Choice" },
        items: [
          { tr: "Base/mini modeller: basit, hizli, net talimatli isler icin.", en: "Base/mini models: for simple, fast, clearly instructed tasks." },
          { tr: "Full modeller: orta-yuksek karmasiklikta dengeli secim.", en: "Full models: a balanced choice for medium-to-high complexity." },
          { tr: "Extra thinking/reasoning: karmasik, cok adimli, mantik gerektiren islerde daha derin dusunme.", en: "Extra thinking/reasoning: deeper thinking for complex, multi-step, logic-heavy work." },
          { tr: "Yeni bir model cikinca ilk 1-2 ay genelde en yuksek performansi verir; guncel modele gecmek mantiklidir.", en: "A newly released model usually performs best in its first 1-2 months; switching to it early is often worthwhile." },
        ],
      },
    ],
  },
  {
    id: "os-windows-linux-opensource",
    tone: "hardware",
    title: { tr: "Isletim Sistemleri: Windows vs Linux ve Acik Kaynak", en: "Operating Systems: Windows vs Linux & Open Source" },
    tagline: {
      tr: "Windows/Linux farki, Kali/Ubuntu Server/CentOS/macOS kullanim alanlari ve acik kaynagin hizli buyume mantigi.",
      en: "Windows vs Linux, where Kali/Ubuntu Server/CentOS/macOS fit, and why open source grows so fast.",
    },
    sections: [
      {
        heading: { tr: "Windows vs Linux", en: "Windows vs Linux" },
        items: [
          { tr: "Isletim sistemi, donanim ile uygulamalar arasindaki koprudur: bellek, dosya sistemi, surucu ve process yonetimi yapar.", en: "An OS bridges hardware and applications: it manages memory, the filesystem, drivers, and processes." },
          { tr: "Windows: kapali kaynak, genis donanim/oyun/kurumsal yazilim destegi, kullanici dostu arayuz.", en: "Windows: closed source, broad hardware/gaming/enterprise software support, user-friendly UI." },
          { tr: "Linux: acik kaynak cekirdek, yuzlerce dagitim (distro), sunucularda ve gelistirici ortamlarinda yaygin, terminal agirlikli.", en: "Linux: open-source kernel, hundreds of distros, common on servers and dev environments, terminal-heavy." },
        ],
      },
      {
        heading: { tr: "Dagitimlar (Distro) ve Kullanim Alanlari", en: "Distros & Use Cases" },
        items: [
          { tr: "Kali Linux: pentest/siber guvenlik arastirmasi icin guvenlik araclariyla gelen dagitim; sadece yasal, izinli testlerde kullanilir.", en: "Kali Linux: a distro preloaded with security tools for pentesting/research; only for legal, authorized testing." },
          { tr: "Ubuntu Server: arayuzsuz, sunucu odakli Ubuntu; web/veritabani/Docker host'lari icin yaygin, apt ile yonetilir.", en: "Ubuntu Server: headless, server-focused Ubuntu; common for web/database/Docker hosts, managed with apt." },
          { tr: "CentOS: RHEL uyumlu kurumsal dagitim, yum/dnf kullanir; klasik surum bitti, yerini CentOS Stream aldi.", en: "CentOS: RHEL-compatible enterprise distro using yum/dnf; the classic release ended, replaced by CentOS Stream." },
          { tr: "macOS: Unix tabanli (Darwin), Apple donanimina ozel, hem grafik arayuz hem guclu terminal sunar.", en: "macOS: Unix-based (Darwin), Apple-hardware-only, offers both a GUI and a strong terminal." },
        ],
      },
      {
        heading: { tr: "Acik Kaynak Neden Hizli Buyuyor?", en: "Why Open Source Grows Fast" },
        items: [
          { tr: "Artilari: ucretsiz/dusuk maliyet, yuksek ozellestirilebilirlik, genis topluluk destegi, seffaflikla hizli hata duzeltme.", en: "Pros: free/low-cost, highly customizable, large community support, transparency speeds up bug fixes." },
          { tr: "Eksileri: garanti resmi destek yok, dokumantasyon kalitesi degisken, dagitim/varyant fazlaligi (fragmantasyon), bilinen aciklar yama oncesi herkese gorunur.", en: "Cons: no guaranteed official support, inconsistent documentation, fragmentation across variants, known flaws are visible to everyone before a patch ships." },
        ],
      },
    ],
  },
  {
    id: "cloudflare-traffic-privacy",
    tone: "security",
    title: { tr: "Cloudflare: Trafik, Icerik ve Gizlilik", en: "Cloudflare: Traffic, Content & Privacy" },
    tagline: {
      tr: "Cloudflare neden bu kadar yaygin, ne gorur ve artilari/eksileri neler?",
      en: "Why Cloudflare is everywhere, what it can see, and its pros and cons.",
    },
    sections: [
      {
        heading: { tr: "Cloudflare Nedir ve Neden Yaygin?", en: "What Is Cloudflare & Why So Common?" },
        items: [
          { tr: "CDN + DDoS koruma + DNS + WAF hizmetlerini bir arada sunan bir altyapi sirketi.", en: "An infrastructure provider bundling CDN, DDoS protection, DNS, and WAF." },
          { tr: "Site Cloudflare arkasindaysa trafik once Cloudflare'e, oradan gercek sunucuya (origin) gider.", en: "If a site sits behind Cloudflare, traffic hits Cloudflare first, then the real (origin) server." },
          { tr: "Ucretsiz plan, kolay DNS entegrasyonu ve guclu DDoS korumasi sayesinde bircok kurumsal site ve bazi AI/LLM servisleri tarafindan tercih edilir.", en: "A free tier, easy DNS setup, and strong DDoS protection make it a common choice for enterprise sites and some AI/LLM services." },
        ],
      },
      {
        heading: { tr: "Ne Gorur? Artilari/Eksileri", en: "What It Sees, Pros & Cons" },
        items: [
          { tr: "Trafik: gelen her istegin IP, User-Agent, zaman ve hedef sayfa bilgisi once Cloudflare'den gecer.", en: "Traffic: every request's IP, User-Agent, timing, and target page passes through Cloudflare first." },
          { tr: "Icerik: HTTPS genelde Cloudflare'de sonlandirilir, yani sifresi cozulmus veri teknik olarak oradan gecer.", en: "Content: HTTPS is usually terminated at Cloudflare, so the decrypted data technically passes through it." },
          { tr: "Artilari: DDoS koruma, CDN hizi, ucretsiz SSL, WAF ile SQLi/XSS'e karsi ek katman.", en: "Pros: DDoS protection, CDN speed, free SSL, a WAF layer against SQLi/XSS." },
          { tr: "Eksileri: merkezilesme riski, gizlilik tartismasi, yanlis yapilandirmada gercek sunucu IP'sinin bulunabilmesi.", en: "Cons: centralization risk, privacy debate, and a misconfigured origin IP can be uncovered." },
        ],
      },
    ],
  },
  {
    id: "cybersecurity-foundation",
    tone: "security",
    title: { tr: "Siber Guvenlik Icin Temel Bilgi", en: "The Foundation Cybersecurity Needs" },
    tagline: {
      tr: "Bir sistemi kirmayi anlamadan once, onun nasil calistigini anlamak gerekir.",
      en: "Before you can understand how to break a system, you must understand how it works.",
    },
    sections: [
      {
        heading: { tr: "Neden Algoritma ve Yazilim Mantigi?", en: "Why Algorithm & Software Logic?" },
        items: [
          { tr: "Bir sistemin normalde nasil davranmasi gerektigini bilmeden, sapmalari fark edemezsin.", en: "You cannot spot deviations without knowing how a system is supposed to behave normally." },
          { tr: "Ornek: SQL injection'i anlamak icin once SQL sorgularinin nasil calistigini bilmek gerekir.", en: "Example: understanding SQL injection requires first knowing how SQL queries work." },
          { tr: "Siber guvenlik, sadece hazir araclari calistirmak degil, arkasindaki mantigi anlamaktir.", en: "Cybersecurity isn't just running ready-made tools — it's understanding the logic behind them." },
        ],
      },
    ],
  },
  new KnowledgeTopic({
    id: "reverse-engineering-frida",
    tone: "hardware",
    day: 2,
    placeholder: true,
    title: { tr: "Tersine Muhendislik ve Frida", en: "Reverse Engineering & Frida" },
    tagline: {
      tr: "Android uygulamalarini ADB ve Frida ile analiz etmek, dinamik enstrumantasyon.",
      en: "Analyzing Android apps with ADB and Frida, dynamic instrumentation.",
    },
    repo: { label: "sahelfarid/reverse-engineering", url: "https://github.com/sahelfarid/reverse-engineering" },
    toc: [
      { tr: "ADB temelleri: cihaz baglama, yetkilendirme, shell erisimi.", en: "ADB basics: connecting devices, authorization, shell access." },
      { tr: "Cihaz ve paket yonetimi: APK kurma/kaldirma, izinler, App Inspector.", en: "Device & package management: installing/removing APKs, permissions, App Inspector." },
      { tr: "Dosya sistemi erisimi ve yedekleme (backup/pull/push).", en: "Filesystem access and backup (pull/push)." },
      { tr: "Logcat ile canli log izleme ve filtreleme.", en: "Live log monitoring and filtering with Logcat." },
      { tr: "Ekran araclari ve input otomasyonu (tap/swipe/macro).", en: "Screen tools and input automation (tap/swipe/macros)." },
      { tr: "Root tespiti ve rootlu cihazlarda calisma.", en: "Root detection and working with rooted devices." },
      { tr: "Frida ile dinamik enstrumantasyon: frida-server, process attach/spawn.", en: "Dynamic instrumentation with Frida: frida-server, process attach/spawn." },
      { tr: "Frida script yazma: JavaScript hook'lari, fonksiyon ele gecirme.", en: "Writing Frida scripts: JavaScript hooks, function hooking." },
      { tr: "Guvenlik modeli: yetkili test, login/CSRF/audit log onemi.", en: "Security model: authorized testing, importance of login/CSRF/audit logging." },
      { tr: "Yasal ve etik sinirlar: sadece kendi cihaz/uygulamaniz uzerinde test.", en: "Legal & ethical boundaries: only test your own devices/apps." },
    ],
  }),
  new KnowledgeTopic({
    id: "web-security-webq",
    tone: "security",
    day: 2,
    placeholder: true,
    title: { tr: "Web Guvenligi: Kesif ve Analiz (WebQ)", en: "Web Security: Recon & Analysis (WebQ)" },
    tagline: {
      tr: "Domain kesfi, altyapi analizi ve zafiyet tarama araclarinin mantigi.",
      en: "The logic behind domain recon, infrastructure analysis, and vulnerability scanning tools.",
    },
    repo: { label: "keyvanarasteh/WebQ", url: "https://github.com/keyvanarasteh/WebQ" },
    toc: [
      { tr: "Domain Insight: WHOIS, SSL zinciri, DNS haritalama, port taramasi.", en: "Domain Insight: WHOIS, SSL chain checks, DNS mapping, port scanning." },
      { tr: "SEO ve teknoloji parmak izi: CMS/framework/CDN tespiti.", en: "SEO & tech fingerprinting: detecting CMS/frameworks/CDNs." },
      { tr: "Toplu domain dogrulama (bulk domain validation).", en: "Bulk domain validation." },
      { tr: "Subdomain kesfi ve canli/olu subdomain filtreleme.", en: "Subdomain discovery and live/dead subdomain filtering." },
      { tr: "Contact spidering: BFS ile e-posta ve sosyal veri toplama.", en: "Contact spidering: BFS crawling for emails and social data." },
      { tr: "Secret scanner: /config, /env gibi noktalardaki sizintilar.", en: "Secret scanner: leaked credentials in /config, /env endpoints." },
      { tr: "Subdomain takeover analizi: savunmasiz CNAME kayitlari.", en: "Subdomain takeover analysis: vulnerable CNAME records." },
      { tr: "Cloudflare/CDN arkasindaki gercek IP'yi bulma.", en: "Uncovering the real IP behind Cloudflare/CDN." },
      { tr: "Nmap ciktisini CVE veritabanlariyla eslestirme.", en: "Correlating Nmap output with CVE databases." },
      { tr: "Guvenlik puanlama modeli: WAF, CORS, header analiziyle A+ - F derecelendirme.", en: "Security grading model: A+ to F scoring via WAF, CORS, header analysis." },
    ],
  }),
];
