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

export const knowledgeTopics = [
  {
    id: "git-github",
    tone: "software",
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
];
