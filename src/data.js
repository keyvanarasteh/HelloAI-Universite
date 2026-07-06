export const fieldKeys = ["software", "security", "hardware", "electronics"];

export const fields = [
  {
    id: "software",
    tone: "software",
    title: { tr: "Yazilim", en: "Software" },
    short: {
      tr: "Web, mobil, veri, yapay zeka ve urun gelistirme tarafina acilan esnek yol.",
      en: "A flexible path into web, mobile, data, AI, and product development.",
    },
    description: {
      tr: "Yazilim, problemleri kodla modelleyip calisan urunlere cevirmektir. Hata ayiklama, mantik kurma, kullanici dusunme ve surekli ogrenme bu alanin merkezindedir.",
      en: "Software turns problems into working products through code. Debugging, logic, user thinking, and continuous learning sit at the center of the field.",
    },
    likes: {
      tr: ["Problem cozmek", "Kodla bir sey uretmek", "Hizli prototip cikarmak", "Kendi basina arastirmak"],
      en: ["Solving problems", "Building with code", "Rapid prototyping", "Independent research"],
    },
    struggles: {
      tr: ["Uzun hata ayiklama sureleri", "Soyut dusunme", "Surekli yeni arac ogrenme", "Ekran basinda calisma"],
      en: ["Long debugging sessions", "Abstract thinking", "Learning new tools often", "Working at a screen"],
    },
    departments: {
      tr: ["Bilgisayar Muhendisligi", "Yazilim Muhendisligi", "Yapay Zeka Muhendisligi", "Yonetim Bilisim Sistemleri"],
      en: ["Computer Engineering", "Software Engineering", "AI Engineering", "Management Information Systems"],
    },
    daily: {
      tr: "Kod yazma, test etme, hata bulma, ekip ile karar alma ve kullanici problemini sade cozumlere bolme.",
      en: "Writing code, testing, debugging, making decisions with a team, and breaking user problems into smaller solutions.",
    },
    project: {
      title: { tr: "Bolum Secim Mini Sitesi", en: "Major Choice Mini Site" },
      time: { tr: "3 gun", en: "3 days" },
      difficulty: { tr: "Baslangic", en: "Beginner" },
      output: {
        tr: "Ana sayfa, 5 soruluk quiz ve sonuc ekrani olan kucuk site.",
        en: "A small site with a home page, 5-question quiz, and result screen.",
      },
    },
    strengths: {
      tr: ["Urun cikarma hizli olur", "Portfolyo yapmak kolaydir", "Birden fazla alana gecebilir"],
      en: ["Fast product output", "Easy to build a portfolio", "Can branch into many areas"],
    },
    cautions: {
      tr: ["Sadece video izlemek yetmez", "Hata ayiklama sabri gerekir", "Temel matematik ve algoritma onemlidir"],
      en: ["Watching videos is not enough", "Debugging patience matters", "Math and algorithms are important"],
    },
  },
  {
    id: "security",
    tone: "security",
    title: { tr: "Siber Guvenlik", en: "Cybersecurity" },
    short: {
      tr: "Sistemleri anlamak, riskleri bulmak ve savunmayi guclendirmek isteyenler icin.",
      en: "For people who want to understand systems, find risks, and strengthen defenses.",
    },
    description: {
      tr: "Siber guvenlik, yazilim, ag, isletim sistemi ve insan hatalarini birlikte dusunur. Etik sinir, dokuman okuma ve detay dikkati bu alanda cok onemlidir.",
      en: "Cybersecurity combines software, networks, operating systems, and human mistakes. Ethics, documentation, and attention to detail matter deeply.",
    },
    likes: {
      tr: ["Sistem kurcalamak", "Ag mantigini anlamak", "Detay yakalamak", "Yasal lablarda pratik yapmak"],
      en: ["Exploring systems", "Understanding networks", "Catching details", "Practicing in legal labs"],
    },
    struggles: {
      tr: ["Belirsiz hatalar", "Cok dokuman okumak", "Etik sinirlara dikkat etmek", "Temel yazilim/ag bilgisi eksigi"],
      en: ["Ambiguous issues", "Reading lots of docs", "Respecting ethical boundaries", "Missing software/network basics"],
    },
    departments: {
      tr: ["Bilgisayar Muhendisligi", "Yazilim Muhendisligi", "Siber Guvenlik Programlari", "Elektrik-Elektronik"],
      en: ["Computer Engineering", "Software Engineering", "Cybersecurity Programs", "Electrical-Electronics"],
    },
    daily: {
      tr: "Log okuma, ag trafigi inceleme, zafiyet arastirma, raporlama ve sistemleri daha guvenli hale getirme.",
      en: "Reading logs, inspecting network traffic, researching vulnerabilities, reporting, and hardening systems.",
    },
    project: {
      title: { tr: "Yasal Lab ve Linux Gorevi", en: "Legal Lab and Linux Task" },
      time: { tr: "3 gun", en: "3 days" },
      difficulty: { tr: "Baslangic-Orta", en: "Beginner-Intermediate" },
      output: {
        tr: "Temel Linux komutlari, IP/port/DNS notlari ve 2 kolay CTF/lab cozumu.",
        en: "Basic Linux commands, IP/port/DNS notes, and 2 easy CTF/lab solves.",
      },
    },
    strengths: {
      tr: ["Sistem dusunmeyi guclendirir", "Savunma ve analiz becerisi kazandirir", "Merakli insan icin derindir"],
      en: ["Builds systems thinking", "Develops defense and analysis skills", "Deep field for curious people"],
    },
    cautions: {
      tr: ["Izinsiz deneme yasal degildir", "Temel ag bilgisi gerekir", "Raporlama becerisi de onemlidir"],
      en: ["Unauthorized testing is illegal", "Network basics are required", "Reporting skills matter too"],
    },
  },
  {
    id: "hardware",
    tone: "hardware",
    title: { tr: "Donanim / Gomulu", en: "Hardware / Embedded" },
    short: {
      tr: "Kodun fiziksel dunyada sonuc vermesini sevenler icin sensor, kart ve robotik yolu.",
      en: "For people who like seeing code affect the physical world through sensors, boards, and robotics.",
    },
    description: {
      tr: "Donanim ve gomulu sistemler, yazilimi kartlar, sensorler, motorlar ve cihazlarla bulusturur. Sabirli test, dusuk seviye dusunme ve fiziksel prototip onemlidir.",
      en: "Hardware and embedded systems connect software with boards, sensors, motors, and devices. Patient testing, low-level thinking, and physical prototypes matter.",
    },
    likes: {
      tr: ["Arduino/ESP32 denemek", "Sensor okumak", "Robotik", "Kodun fiziksel sonucunu gormek"],
      en: ["Trying Arduino/ESP32", "Reading sensors", "Robotics", "Seeing physical output from code"],
    },
    struggles: {
      tr: ["Kablo/devre hatalari", "C/C++ zorlugu", "Yavas deneme dongusu", "Elektronik temel eksigi"],
      en: ["Wiring/circuit issues", "C/C++ difficulty", "Slower testing loops", "Missing electronics basics"],
    },
    departments: {
      tr: ["Bilgisayar Muhendisligi", "Elektrik-Elektronik", "Mekatronik", "Kontrol ve Otomasyon"],
      en: ["Computer Engineering", "Electrical-Electronics", "Mechatronics", "Control and Automation"],
    },
    daily: {
      tr: "Kart programlama, sensor verisi okuma, devre kontrolu, test yapma ve fiziksel prototip iyilestirme.",
      en: "Programming boards, reading sensor data, checking circuits, testing, and improving physical prototypes.",
    },
    project: {
      title: { tr: "Sensorlu Mini Sistem", en: "Mini Sensor System" },
      time: { tr: "3 gun", en: "3 days" },
      difficulty: { tr: "Orta", en: "Intermediate" },
      output: {
        tr: "Arduino/ESP32 veya simulator ile sensor verisi okuyup ekrana/LED'e yansitma.",
        en: "Read sensor data with Arduino/ESP32 or a simulator and show it on screen/LED.",
      },
    },
    strengths: {
      tr: ["Fiziksel urun hissi verir", "Robotik ve IoT'ye acilir", "Yazilim + elektronik koprusu kurar"],
      en: ["Feels like building a physical product", "Opens into robotics and IoT", "Bridges software and electronics"],
    },
    cautions: {
      tr: ["Parca ve ekipman gerekebilir", "Hatalar bazen koddan degil devreden gelir", "Sabirli olman gerekir"],
      en: ["Parts and equipment may be needed", "Bugs may come from circuits, not code", "Patience is required"],
    },
  },
  {
    id: "electronics",
    tone: "electronics",
    title: { tr: "Elektronik", en: "Electronics" },
    short: {
      tr: "Devre, sinyal, fizik ve sistem temeliyle daha derin muhendislik isteyenler icin.",
      en: "For people who want deeper engineering through circuits, signals, physics, and systems.",
    },
    description: {
      tr: "Elektronik, devrelerin, sinyallerin, guc sistemlerinin ve haberlesmenin temelini anlamaya odaklanir. Matematik ve fizikle arasi iyi olanlar icin guclu bir yoldur.",
      en: "Electronics focuses on understanding circuits, signals, power systems, and communication. It is a strong path for people comfortable with math and physics.",
    },
    likes: {
      tr: ["Devre analizi", "Fizik ve matematik", "Sinyal/haberlesme", "Laboratuvar calismasi"],
      en: ["Circuit analysis", "Physics and math", "Signals/communication", "Lab work"],
    },
    struggles: {
      tr: ["Teorik ders yogunlugu", "Matematik agirligi", "Soyut sinyal kavramlari", "Laboratuvar disiplini"],
      en: ["Heavy theory", "Math intensity", "Abstract signal concepts", "Lab discipline"],
    },
    departments: {
      tr: ["Elektrik-Elektronik Muhendisligi", "Elektronik ve Haberlesme", "Mekatronik", "Kontrol ve Otomasyon"],
      en: ["Electrical-Electronics Engineering", "Electronics and Communication", "Mechatronics", "Control and Automation"],
    },
    daily: {
      tr: "Devre tasarlama, olcum yapma, simule etme, sinyal yorumlama ve teoriyi fiziksel sistemlerle birlestirme.",
      en: "Designing circuits, measuring, simulating, interpreting signals, and connecting theory to physical systems.",
    },
    project: {
      title: { tr: "Devre Simulatoru Deneyi", en: "Circuit Simulator Experiment" },
      time: { tr: "3 gun", en: "3 days" },
      difficulty: { tr: "Baslangic-Orta", en: "Beginner-Intermediate" },
      output: {
        tr: "Direnc, LED, kondansator ve transistorle basit devre kurup calisma notu cikarma.",
        en: "Build a basic circuit with resistor, LED, capacitor, transistor and write notes about how it works.",
      },
    },
    strengths: {
      tr: ["Guclu muhendislik temeli verir", "Donanim ve haberlesmeye acilir", "Gomulu sistemleri daha iyi anlamayi saglar"],
      en: ["Gives a strong engineering base", "Opens into hardware and communication", "Helps understand embedded systems better"],
    },
    cautions: {
      tr: ["Matematik/fizik emegi ister", "Sonuc bazen yavas gelir", "Lab ve olcum dikkat ister"],
      en: ["Requires math/physics effort", "Results may come slowly", "Lab and measurement require care"],
    },
  },
];

export const questions = [
  {
    id: "q1",
    text: {
      tr: "Bir fikri kodla calisan bir urune cevirmek beni heyecanlandirir.",
      en: "Turning an idea into a working product with code excites me.",
    },
    weights: { software: 3, security: 1, hardware: 1, electronics: 0 },
  },
  {
    id: "q2",
    text: {
      tr: "Bir sistemin neden guvensiz oldugunu anlamak ilgimi ceker.",
      en: "Understanding why a system is insecure interests me.",
    },
    weights: { software: 1, security: 3, hardware: 1, electronics: 0 },
  },
  {
    id: "q3",
    text: {
      tr: "Kodun bir sensor, LED, motor veya cihaz uzerinde sonuc vermesi hosuma gider.",
      en: "I like seeing code affect a sensor, LED, motor, or device.",
    },
    weights: { software: 1, security: 0, hardware: 3, electronics: 2 },
  },
  {
    id: "q4",
    text: {
      tr: "Devrelerin ve sinyallerin nasil calistigini merak ederim.",
      en: "I am curious about how circuits and signals work.",
    },
    weights: { software: 0, security: 0, hardware: 2, electronics: 3 },
  },
  {
    id: "q5",
    text: {
      tr: "Uzun sure hata ayiklamak beni hemen sogutmaz.",
      en: "Long debugging sessions do not discourage me quickly.",
    },
    weights: { software: 3, security: 2, hardware: 2, electronics: 1 },
  },
  {
    id: "q6",
    text: {
      tr: "Linux, ag, IP, port ve log gibi kavramlari ogrenmek isterim.",
      en: "I want to learn concepts like Linux, networks, IP, ports, and logs.",
    },
    weights: { software: 1, security: 3, hardware: 1, electronics: 0 },
  },
  {
    id: "q7",
    text: {
      tr: "Matematik ve fizik agirligi beni korkutmuyor.",
      en: "Math and physics intensity does not scare me.",
    },
    weights: { software: 1, security: 1, hardware: 2, electronics: 3 },
  },
  {
    id: "q8",
    text: {
      tr: "Kullaniciya faydali bir arayuz veya uygulama yapmak isterim.",
      en: "I want to build useful interfaces or apps for people.",
    },
    weights: { software: 3, security: 0, hardware: 0, electronics: 0 },
  },
  {
    id: "q9",
    text: {
      tr: "Detayli dokuman okuyup not almak bana uygun olabilir.",
      en: "Reading detailed documentation and taking notes may suit me.",
    },
    weights: { software: 2, security: 3, hardware: 1, electronics: 2 },
  },
  {
    id: "q10",
    text: {
      tr: "Kablo, kart, sensor ve fiziksel parcalarla ugrasmak isterim.",
      en: "I want to work with wires, boards, sensors, and physical parts.",
    },
    weights: { software: 0, security: 0, hardware: 3, electronics: 3 },
  },
  {
    id: "q11",
    text: {
      tr: "Bir problemi kucuk adimlara bolmek benim icin dogal.",
      en: "Breaking a problem into small steps feels natural to me.",
    },
    weights: { software: 3, security: 2, hardware: 2, electronics: 2 },
  },
  {
    id: "q12",
    text: {
      tr: "Etik sinirlara dikkat ederek guvenlik lablari cozmek isterim.",
      en: "I want to solve security labs while respecting ethical boundaries.",
    },
    weights: { software: 0, security: 3, hardware: 0, electronics: 0 },
  },
  {
    id: "q13",
    text: {
      tr: "Daha dusuk seviyeli C/C++ ve cihaz mantigi ilgimi ceker.",
      en: "Lower-level C/C++ and device logic interest me.",
    },
    weights: { software: 1, security: 1, hardware: 3, electronics: 2 },
  },
  {
    id: "q14",
    text: {
      tr: "Sinyal, haberlesme, elektrik ve olcum konulari bana yakin geliyor.",
      en: "Signals, communication, electricity, and measurement feel close to me.",
    },
    weights: { software: 0, security: 1, hardware: 1, electronics: 3 },
  },
  {
    id: "q15",
    text: {
      tr: "Portfolyo icin kendi projelerimi yayinlamak isterim.",
      en: "I want to publish my own projects for a portfolio.",
    },
    weights: { software: 3, security: 1, hardware: 1, electronics: 0 },
  },
  {
    id: "q16",
    text: {
      tr: "Bir zafiyeti bulup sade raporlamak ilgimi ceker.",
      en: "Finding a vulnerability and reporting it clearly interests me.",
    },
    weights: { software: 1, security: 3, hardware: 0, electronics: 0 },
  },
  {
    id: "q17",
    text: {
      tr: "Fiziksel prototipte deneme-yanilma yapmak bana keyifli gelir.",
      en: "Trial and error on a physical prototype sounds enjoyable.",
    },
    weights: { software: 0, security: 0, hardware: 3, electronics: 2 },
  },
  {
    id: "q18",
    text: {
      tr: "Teorik konulari sabirla calisip derin anlamaya istekliyim.",
      en: "I am willing to study theory patiently and understand it deeply.",
    },
    weights: { software: 1, security: 1, hardware: 2, electronics: 3 },
  },
  {
    id: "q19",
    text: {
      tr: "Takimla uygulama gelistirmek ve geri bildirim almak isterim.",
      en: "I want to build apps with a team and get feedback.",
    },
    weights: { software: 3, security: 1, hardware: 1, electronics: 0 },
  },
  {
    id: "q20",
    text: {
      tr: "Sistemleri hem yazilim hem donanim tarafiyla anlamak isterim.",
      en: "I want to understand systems from both software and hardware sides.",
    },
    weights: { software: 1, security: 1, hardware: 3, electronics: 2 },
  },
];

export const t = {
  tr: {
    appName: "Bolum Pusulasi",
    nav: {
      home: "Ana Sayfa",
      test: "Alan Testi",
      results: "Sonuc",
      guide: "Alan Rehberi",
      projects: "Mini Gorevler",
      compare: "Universite",
      shortlist: "Tercihler",
      journal: "Gunluk",
      resources: "Kaynaklar",
    },
    common: {
      startTest: "Teste Basla",
      inspectFields: "Alanlari Incele",
      compareUniversities: "Universite Karsilastir",
      save: "Kaydet",
      add: "Ekle",
      delete: "Sil",
      clear: "Temizle",
      reset: "Yeniden Basla",
      next: "Ileri",
      back: "Geri",
      finish: "Testi Bitir",
      empty: "Henuz veri yok.",
      themeLight: "Gunduz",
      themeDark: "Gece",
      language: "Dil",
      official: "Resmi kaynak",
      open: "Ac",
      yourData: "Verilerin bu tarayicida saklanir.",
    },
    home: {
      eyebrow: "Static karar araci",
      title: "Bolum secimi kafani karistirdiysa buradan basla.",
      subtitle:
        "Yazilim, siber guvenlik, donanim/gomulu sistem ve elektronik arasinda karar vermek icin test, mini gorev, gunluk ve tercih listesi bir arada.",
      quickStats: ["9 sayfa", "TR/EN", "Gece/gunduz", "Backend yok"],
      processTitle: "Karar sureci",
      process: ["Kisa testi coz", "Sonucunu incele", "Mini gorev dene", "Universiteleri karsilastir", "Karar cumleni yaz"],
      continueResult: "Kayitli sonuc var",
      noResult: "Henuz test sonucu yok",
    },
    test: {
      title: "Alan Testi",
      subtitle: "Her cumle icin sana ne kadar uydugunu sec. Sonuc kesin hukum degil; hangi alanlari denemen gerektigini gosterir.",
      scale: ["Hic uymuyor", "Az uyuyor", "Kararsizim", "Uyuyor", "Cok uyuyor"],
      answered: "cevaplandi",
      needAnswer: "Devam etmek icin bir secenek sec.",
    },
    results: {
      title: "Sonuc Analizi",
      subtitle: "Skorlar, ilgi ve deneme onceligini gosterir. En yuksek iki alani once denemen mantikli.",
      noResultTitle: "Sonuc icin once testi bitir.",
      topFields: "En yakin alanlar",
      strengths: "Guclu taraflar",
      cautions: "Dikkat noktalar",
      plan: "3 gunluk deneme plani",
      day1: "Gun 1: temel kavramlari ogren ve kucuk not al.",
      day2: "Gun 2: mini gorevin ilk calisan parcasini yap.",
      day3: "Gun 3: sonucu yaz, keyif/sabir/merak puani ver.",
    },
    guide: {
      title: "Alan Rehberi",
      subtitle: "Her alanin gunluk is tarzi, kimlere uygun oldugu ve hangi bolumlere baglandigi.",
      likes: "Kimler sever?",
      struggles: "Kimler zorlanir?",
      departments: "Ilgili bolumler",
      daily: "Gunluk is tarzi",
    },
    projects: {
      title: "Mini Proje Gorevleri",
      subtitle: "Ilgi alani dusunerek degil, kucuk deneylerle netlesir. Her alan icin 3 gunluk pratik gorev.",
      time: "Sure",
      difficulty: "Zorluk",
      output: "Beklenen cikti",
      ethics: "Guvenlik gorevlerinde sadece yasal egitim lablari kullan. Izinsiz deneme yapma.",
    },
    compare: {
      title: "Universite Karsilastirma",
      subtitle: "Aday bolumleri ayni kriterlerle yaz. Ilk surumda veriler tarayicinda localStorage ile tutulur.",
      university: "Universite",
      program: "Bolum",
      city: "Sehir",
      rank: "Basari sirasi",
      language: "Dil",
      curriculum: "Ders plani puani",
      labs: "Lab / kulup / staj notu",
      notes: "Notlar",
      addToShortlist: "Tercihe ekle",
      saved: "Kayitli karsilastirmalar",
    },
    shortlist: {
      title: "Tercih Listesi",
      subtitle: "En guclu aday bolumleri sirala, neden istedigini yaz ve listeyi sade tut.",
      university: "Universite",
      program: "Bolum",
      reason: "Neden listede?",
      priority: "Oncelik",
      saved: "Kisa liste",
      moveUp: "Yukari al",
      moveDown: "Asagi al",
    },
    journal: {
      title: "Karar Gunlugu",
      subtitle: "Kararini yazili hale getir. Belirsizlik azalir, hangi adimi atman gerektigi daha net olur.",
      current: "Su an hangi alana yakininim?",
      why: "Neden?",
      excited: "Beni en cok ne heyecanlandiriyor?",
      worried: "Beni en cok ne korkutuyor?",
      experiment: "Bu hafta hangi mini denemeyi yapacagim?",
      finalSentence: "Son karar cumlem",
      summary: "Okunabilir ozet",
    },
    resources: {
      title: "Kaynaklar",
      subtitle: "Tercih icin son kontrolu resmi kaynaklardan yap. Buradaki site karar surecini kolaylastirir, resmi kilavuz yerine gecmez.",
      officialTitle: "Resmi kaynaklar",
      checklistTitle: "Bolum arastirma kontrol listesi",
      talkTitle: "Ogrenci/mezun sorulari",
      safetyTitle: "Guvenli ogrenme notu",
      safety: "Siber guvenlik pratigi sadece izinli lablarda ve egitim ortamlarinda yapilmali.",
    },
  },
  en: {
    appName: "Path Compass",
    nav: {
      home: "Home",
      test: "Field Test",
      results: "Results",
      guide: "Field Guide",
      projects: "Mini Tasks",
      compare: "University",
      shortlist: "Shortlist",
      journal: "Journal",
      resources: "Resources",
    },
    common: {
      startTest: "Start Test",
      inspectFields: "Explore Fields",
      compareUniversities: "Compare Universities",
      save: "Save",
      add: "Add",
      delete: "Delete",
      clear: "Clear",
      reset: "Restart",
      next: "Next",
      back: "Back",
      finish: "Finish Test",
      empty: "No data yet.",
      themeLight: "Light",
      themeDark: "Dark",
      language: "Language",
      official: "Official source",
      open: "Open",
      yourData: "Your data stays in this browser.",
    },
    home: {
      eyebrow: "Static decision tool",
      title: "Not sure which university path fits you? Start here.",
      subtitle:
        "Use a test, mini tasks, a journal, and a shortlist to compare software, cybersecurity, hardware/embedded, and electronics.",
      quickStats: ["9 pages", "TR/EN", "Light/dark", "No backend"],
      processTitle: "Decision process",
      process: ["Take the short test", "Review your result", "Try a mini task", "Compare universities", "Write your decision sentence"],
      continueResult: "Saved result found",
      noResult: "No test result yet",
    },
    test: {
      title: "Field Test",
      subtitle: "Choose how much each sentence fits you. The result is not a final verdict; it shows which fields you should try first.",
      scale: ["Not at all", "A little", "Not sure", "Fits", "Fits strongly"],
      answered: "answered",
      needAnswer: "Pick an option to continue.",
    },
    results: {
      title: "Result Analysis",
      subtitle: "Scores show interest and experiment priority. Try the top two fields first.",
      noResultTitle: "Finish the test to see your result.",
      topFields: "Closest fields",
      strengths: "Strengths",
      cautions: "Watch points",
      plan: "3-day experiment plan",
      day1: "Day 1: learn the core concepts and take short notes.",
      day2: "Day 2: build the first working piece of the mini task.",
      day3: "Day 3: write what happened and score fun/patience/curiosity.",
    },
    guide: {
      title: "Field Guide",
      subtitle: "Daily work style, fit, difficulty, and related university majors for each field.",
      likes: "Who may like it?",
      struggles: "Who may struggle?",
      departments: "Related majors",
      daily: "Daily work style",
    },
    projects: {
      title: "Mini Project Tasks",
      subtitle: "You discover interest by trying, not only by thinking. Each field has a 3-day practical task.",
      time: "Time",
      difficulty: "Difficulty",
      output: "Expected output",
      ethics: "For security tasks, use only legal training labs. Do not test systems without permission.",
    },
    compare: {
      title: "University Comparison",
      subtitle: "Write candidate programs with the same criteria. In the first version, data is stored in your browser with localStorage.",
      university: "University",
      program: "Program",
      city: "City",
      rank: "Admission rank",
      language: "Language",
      curriculum: "Curriculum score",
      labs: "Lab / club / internship notes",
      notes: "Notes",
      addToShortlist: "Add to shortlist",
      saved: "Saved comparisons",
    },
    shortlist: {
      title: "Shortlist",
      subtitle: "Rank your strongest candidate programs, write why they matter, and keep the list focused.",
      university: "University",
      program: "Program",
      reason: "Why is it listed?",
      priority: "Priority",
      saved: "Shortlist",
      moveUp: "Move up",
      moveDown: "Move down",
    },
    journal: {
      title: "Decision Journal",
      subtitle: "Put your thinking into words. Uncertainty shrinks and the next step becomes clearer.",
      current: "Which field feels closest right now?",
      why: "Why?",
      excited: "What excites me most?",
      worried: "What worries me most?",
      experiment: "Which mini experiment will I try this week?",
      finalSentence: "Final decision sentence",
      summary: "Readable summary",
    },
    resources: {
      title: "Resources",
      subtitle: "Use official sources for the final check. This site helps your decision process; it does not replace official guides.",
      officialTitle: "Official sources",
      checklistTitle: "Program research checklist",
      talkTitle: "Questions for students/graduates",
      safetyTitle: "Safe learning note",
      safety: "Cybersecurity practice should only happen in permitted labs and training environments.",
    },
  },
};

export const resources = [
  {
    title: "YOK Atlas",
    href: "https://yokatlas.yok.gov.tr/",
    desc: {
      tr: "Program, basari sirasi, kontenjan ve universite arastirmasi icin resmi kaynak.",
      en: "Official source for program, ranking, quota, and university research.",
    },
  },
  {
    title: "OSYM",
    href: "https://www.osym.gov.tr/",
    desc: {
      tr: "Sinav, kilavuz, duyuru ve nihai tercih kosullari icin resmi kaynak.",
      en: "Official source for exams, guides, announcements, and final preference rules.",
    },
  },
  {
    title: "OSYM 2026-YKS Kilavuzu",
    href: "https://www.osym.gov.tr/TR%2C33851/2026-yuksekogretim-kurumlari-sinavi-yks-kilavuzu.html",
    desc: {
      tr: "2026 YKS sureci icin kilavuz ve ilgili dokumanlar.",
      en: "Guide and related documents for the 2026 YKS process.",
    },
  },
];

export const researchChecklist = {
  tr: [
    "Bolumun ders plani guclu mu?",
    "Hocalarin alanlari hedefinle uyumlu mu?",
    "Laboratuvar ve kulup imkanlari var mi?",
    "Staj ve sektor baglantisi nasil?",
    "Ingilizce egitim veya hazirlik var mi?",
    "Sehir ve yasam maliyeti sana uygun mu?",
  ],
  en: [
    "Is the curriculum strong?",
    "Do faculty interests match your goals?",
    "Are labs and student clubs active?",
    "How strong are internship and industry links?",
    "Is English education or prep available?",
    "Does the city and living cost fit you?",
  ],
};

export const talkQuestions = {
  tr: [
    "Bu bolumun en guzel tarafi ne?",
    "En zor tarafi ne?",
    "Ilk sene neye hazir olmak lazim?",
    "Staj bulmak nasil?",
    "Bugun tekrar tercih yapsan ayni bolumu secer miydin?",
  ],
  en: [
    "What is the best part of this major?",
    "What is the hardest part?",
    "What should I be ready for in the first year?",
    "How hard is it to find internships?",
    "Would you choose the same major again today?",
  ],
};
