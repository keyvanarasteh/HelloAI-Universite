// Each pending term has example: null and is awaiting a student contribution (see Homework 3).
export const glossaryCategories = [
  {
    id: "git-collaboration",
    title: { tr: "Git ve Isbirligi", en: "Git & Collaboration" },
    terms: [
      {
        term: "Repository (Repo)",
        description: {
          tr: "Bir projenin tum dosyalarini ve degisiklik gecmisini tutan klasor.",
          en: "A folder that holds a project's files and its full history of changes.",
        },
        example: {
          tr: "torvalds/linux deposu, Linux cekirdeginin tum kaynak kodunu ve on yillik commit gecmisini tutar.",
          en: "The torvalds/linux repository holds the entire Linux kernel source and a decade-plus of commit history.",
        },
      },
      {
        term: "Commit",
        description: {
          tr: "Kod uzerinde yapilan degisikliklerin, bir mesajla birlikte kaydedilmis anlik goruntusu.",
          en: "A saved snapshot of code changes, recorded together with a message.",
        },
        example: {
          tr: "Bir acik kaynak projesine 'fix: null pointer hatasi duzeltildi' mesajiyla atilan tek bir commit.",
          en: "A single commit to an open-source project with the message 'fix: resolved null pointer error'.",
        },
      },
      {
        term: "Branch",
        description: {
          tr: "Ana koddan ayrilan, uzerinde bagimsiz calisilabilen paralel bir gelistirme hatti.",
          en: "A parallel line of development that splits off from the main code so you can work independently.",
        },
        example: {
          tr: "Bir takimin 'main' dalini bozmadan yeni ozellik gelistirmek icin actigi 'feature/login' dali.",
          en: "A team opening a 'feature/login' branch to build a new feature without breaking 'main'.",
        },
      },
      {
        term: "Pull Request (PR)",
        description: {
          tr: "Bir daldaki degisikliklerin incelenip ana kodla birlestirilmesi icin acilan istek.",
          en: "A request to review changes from a branch and merge them into the main code.",
        },
        example: {
          tr: "React reposuna acilan ve maintainer'lar tarafindan onaylanip birlestirilen bir dokumantasyon duzeltmesi PR'i.",
          en: "A documentation-fix PR opened against the React repo, reviewed and merged by its maintainers.",
        },
      },
      {
        term: "Merge Conflict",
        description: {
          tr: "Iki farkli dalin ayni dosyanin ayni satirini degistirmesi sonucu ortaya cikan ve elle cozulmesi gereken celiski.",
          en: "A clash that happens when two branches edit the same lines of the same file, requiring manual resolution.",
        },
        example: {
          tr: "Iki gelistiricinin ayni README.md dosyasinin ayni bolumunu ayni anda farkli sekilde degistirmesi.",
          en: "Two developers editing the same section of README.md differently at the same time.",
        },
      },
      {
        term: "Fork",
        description: {
          tr: "Bir deponun, kendi hesabinda bagimsiz bir kopyasini olusturma islemi.",
          en: "Creating your own independent copy of someone else's repository.",
        },
        example: {
          tr: "Bir ogrencinin bir kutuphaneyi fork'layip kendi ozelligini eklemesi, sonra orijinaline PR acmasi.",
          en: "A student forking a library, adding their own feature, then opening a PR back to the original.",
        },
      },
      {
        term: "Acik Kaynak Lisansi (MIT / GPL / Apache-2.0)",
        description: {
          tr: "Bir yazilimin nasil kullanilabilecegini, degistirilebilecegini ve dagitilabilecegini belirleyen hukuki cerceve.",
          en: "The legal framework that defines how software can be used, modified, and redistributed.",
        },
        example: {
          tr: "React MIT lisansliyken, Linux cekirdegi GPLv2 lisansi ile dagitilir.",
          en: "React ships under the MIT license, while the Linux kernel is distributed under GPLv2.",
        },
      },
      {
        term: "En Cok Katki Alan Acik Kaynak Depolari (Trending Repos)",
        description: {
          tr: "Belirli bir zaman araliginda en fazla commit, PR ve yildiz alan acik kaynak projeleri.",
          en: "The open-source projects that receive the most commits, PRs, and stars in a given time window.",
        },
        example: null,
        pending: true,
      },
    ],
  },
  {
    id: "web-software",
    title: { tr: "Web ve Yazilim Mimarisi", en: "Web & Software Architecture" },
    terms: [
      {
        term: "Frontend",
        description: {
          tr: "Kullanicinin tarayicida gordugu ve etkilesime girdigi arayuz katmani.",
          en: "The interface layer users see and interact with in the browser.",
        },
        example: {
          tr: "Bu sitenin kendisi React ile yazilmis bir frontend uygulamasidir.",
          en: "This very site is a frontend application written with React.",
        },
      },
      {
        term: "Backend",
        description: {
          tr: "Verinin islendigi, saklandigi ve is kurallarinin calistigi sunucu tarafi katman.",
          en: "The server-side layer where data is processed, stored, and business rules run.",
        },
        example: {
          tr: "Bir e-ticaret sitesinde siparisleri veritabanina yazan API sunucusu.",
          en: "The API server on an e-commerce site that writes orders to a database.",
        },
      },
      {
        term: "API",
        description: {
          tr: "Iki yazilimin birbiriyle belirli kurallarla konusmasini saglayan arayuz.",
          en: "An interface that lets two pieces of software talk to each other under defined rules.",
        },
        example: {
          tr: "GitHub REST API, gelistiricilerin repo ve PR verilerine programatik erismesini saglar.",
          en: "The GitHub REST API lets developers programmatically access repo and PR data.",
        },
      },
      {
        term: "Veritabani (Database)",
        description: {
          tr: "Verinin duzenli, sorgulanabilir sekilde saklandigi sistem.",
          en: "A system that stores data in an organized, queryable way.",
        },
        example: {
          tr: "Instagram gibi platformlar, kullanici ve gonderi verisini PostgreSQL benzeri veritabanlarinda tutar.",
          en: "Platforms like Instagram keep user and post data in databases like PostgreSQL.",
        },
      },
      {
        term: "HTTP vs HTTPS",
        description: {
          tr: "HTTP verinin duz metin gittigi, HTTPS ise TLS ile sifrelenerek gittigi web protokolu.",
          en: "HTTP sends data in plain text; HTTPS encrypts it in transit with TLS.",
        },
        example: {
          tr: "Bankacilik siteleri hicbir zaman HTTP kullanmaz, her zaman HTTPS zorunlu kilar.",
          en: "Banking sites never use plain HTTP; they always enforce HTTPS.",
        },
      },
      {
        term: "Agentic AI vs Sohbet (Chat)",
        description: {
          tr: "Sohbet modeli tek tur cevap verir; agentic AI ise arac kullanarak coklu adimda gorev tamamlar.",
          en: "A chat model answers in a single turn; agentic AI completes multi-step tasks by using tools.",
        },
        example: {
          tr: "Claude Code, dosya okuma/yazma ve terminal komutlariyla bir ozelligi ucdan uca kodlayabilen agentic bir araçtir.",
          en: "Claude Code is an agentic tool that can code a feature end-to-end by reading/writing files and running terminal commands.",
        },
      },
    ],
  },
  {
    id: "ai-llm",
    title: { tr: "Yapay Zeka ve LLM", en: "AI & LLM" },
    terms: [
      {
        term: "LLM (Buyuk Dil Modeli)",
        description: {
          tr: "Devasa metin veri kumeleri uzerinde egitilmis, dogal dili anlayip uretebilen model.",
          en: "A model trained on massive text datasets that can understand and generate natural language.",
        },
        example: {
          tr: "GPT-4, Claude ve Gemini, gunumuzun en bilinen buyuk dil modelleri arasindadir.",
          en: "GPT-4, Claude, and Gemini are among today's best-known large language models.",
        },
      },
      {
        term: "Egitim Verisi (Training Data)",
        description: {
          tr: "Bir modelin ogrenmesi icin kullanilan metin, kod ve diger icerik kumesi.",
          en: "The set of text, code, and other content used to train a model.",
        },
        example: {
          tr: "Bir modelin kod yazma kalitesi, buyuk olcude egitiminde kullanilan gercek kod deposu miktari ve kalitesiyle iliskilidir.",
          en: "A model's code-writing quality is heavily tied to the volume and quality of real code repos in its training data.",
        },
      },
      {
        term: "Sinir Agi (Neural Network)",
        description: {
          tr: "Insan beynindeki noronlardan esinlenen, katmanli baglantilarla ogrenen matematiksel yapi.",
          en: "A layered mathematical structure inspired by neurons in the human brain that learns through connections.",
        },
        example: {
          tr: "Goruntudeki bir kediyi taniyan bir modelin altinda, piksel oruntulerini ogrenen bir sinir agi calisir.",
          en: "Under a model that recognizes a cat in an image runs a neural network that has learned pixel patterns.",
        },
      },
      {
        term: "Dusunme Seviyeleri (mini / full / extra thinking)",
        description: {
          tr: "Gorevin zorlugua gore modelin ayirdigi hesaplama/dusunme miktarinin kademeleri.",
          en: "Tiers of how much computation/reasoning a model allocates based on task difficulty.",
        },
        example: {
          tr: "Basit bir yazim duzeltmesi icin 'mini' yeterliyken, karmasik bir mimari karari icin 'extra thinking' tercih edilir.",
          en: "A simple typo fix only needs 'mini', while a complex architecture decision benefits from 'extra thinking'.",
        },
      },
      {
        term: "Halusinasyon (Hallucination)",
        description: {
          tr: "Bir modelin gercek olmayan bilgiyi kendinden emin bicimde uretmesi.",
          en: "A model confidently generating information that isn't actually true.",
        },
        example: {
          tr: "Bir modelin var olmayan bir kutuphane fonksiyonunu gercekmis gibi onerip kod ornegi yazmasi.",
          en: "A model recommending and writing example code for a library function that doesn't actually exist.",
        },
      },
    ],
  },
  {
    id: "cybersecurity",
    title: { tr: "Siber Guvenlik", en: "Cybersecurity" },
    terms: [
      {
        term: "0-Day Exploit",
        description: {
          tr: "Ureticinin henuz haberdar olmadigi veya yamalamadigi bir aciktan faydalanan saldiri kodu.",
          en: "Attack code that exploits a flaw the vendor doesn't yet know about or hasn't patched.",
        },
        example: null,
        pending: true,
      },
      {
        term: "Yama / N-Day",
        description: {
          tr: "Yama, bilinen bir acigi kapatan guncelleme; N-day ise yama yayinlandiktan sonra hala uygulanmamis olma riskini ifade eder.",
          en: "A patch closes a known flaw; N-day is the risk window after a patch ships but before it's applied.",
        },
        example: {
          tr: "WannaCry fidye yazilimi, Microsoft'un aylar once yayinladigi ama cogu kurumun uygulamadigi bir Windows yamasini (EternalBlue/MS17-010) hedef aldi.",
          en: "The WannaCry ransomware targeted a Windows flaw (EternalBlue/MS17-010) that Microsoft had patched months earlier but many organizations hadn't applied.",
        },
      },
      {
        term: "KVKK (Kisisel Verilerin Korunmasi Kanunu)",
        description: {
          tr: "Turkiye'de kisisel verilerin islenmesini ve korunmasini duzenleyen kanun.",
          en: "Turkey's law regulating the processing and protection of personal data.",
        },
        example: {
          tr: "TC kimlik numarasi veya telefon numarasi izinsiz toplanip saklanirsa KVKK kapsaminda ihlal sayilir.",
          en: "Collecting or storing a national ID number or phone number without consent is a violation under KVKK.",
        },
      },
      {
        term: "Misafir Ag Izolasyonu (VLAN)",
        description: {
          tr: "Misafir kablosuz agini, sanal bir alt agla (VLAN) kurumsal ic agdan ayirma yontemi.",
          en: "Separating a guest wifi network from the internal network using a virtual sub-network (VLAN).",
        },
        example: {
          tr: "Bircok kurumsal ofis, misafir wifi'yi sadece internete cikis izni olan ayri bir VLAN'a baglar.",
          en: "Many corporate offices place guest wifi on a separate VLAN that only allows internet access, nothing internal.",
        },
      },
      {
        term: "Sizma Testi (Penetration Testing)",
        description: {
          tr: "Bir sistemin acıklarini, yazili izinle ve kontrollu sekilde bulmak icin yapilan yetkili saldiri simulasyonu.",
          en: "An authorized, controlled attack simulation to find a system's weaknesses, done with written permission.",
        },
        example: {
          tr: "Bir sirketin, kendi web uygulamasini test etmesi icin bagimsiz bir guvenlik firmasiyla sozlesme yapmasi.",
          en: "A company contracting an independent security firm to test its own web application.",
        },
      },
      {
        term: "IDS / EDR",
        description: {
          tr: "Ag veya uc nokta uzerinde anormal davranisi tespit edip uyaran guvenlik sistemleri.",
          en: "Security systems that detect and alert on abnormal behavior on a network or endpoint.",
        },
        example: {
          tr: "Bir EDR aracinin, bir bilgisayarda beklenmedik sekilde calisan bir sifreleme surecini fidye yazilimi olarak isaretlemesi.",
          en: "An EDR tool flagging an unexpected encryption process on a machine as likely ransomware.",
        },
      },
    ],
  },
  {
    id: "os-open-source",
    title: { tr: "Isletim Sistemleri ve Acik Kaynak", en: "Operating Systems & Open Source" },
    terms: [
      {
        term: "Linux",
        description: {
          tr: "Acik kaynakli, ozellestirilebilir cekirdek uzerine kurulu isletim sistemi ailesi.",
          en: "A family of operating systems built on an open-source, customizable kernel.",
        },
        example: {
          tr: "Dunyadaki bulut sunucularinin buyuk cogunlugu Ubuntu Server veya benzeri bir Linux dagitimi calistirir.",
          en: "The vast majority of the world's cloud servers run Ubuntu Server or a similar Linux distribution.",
        },
      },
      {
        term: "Windows",
        description: {
          tr: "Microsoft tarafindan gelistirilen, masaustu kullaniminda en yaygin isletim sistemi.",
          en: "The operating system developed by Microsoft, most common on desktops.",
        },
        example: {
          tr: "Cogu kurumsal ofis bilgisayari ve oyun bilgisayari Windows calistirir.",
          en: "Most corporate office PCs and gaming PCs run Windows.",
        },
      },
      {
        term: "macOS",
        description: {
          tr: "Apple'in kendi donanimina ozel gelistirdigi Unix tabanli isletim sistemi.",
          en: "Apple's Unix-based operating system built for its own hardware.",
        },
        example: {
          tr: "Bircok yazilim gelistirici, MacBook'lar uzerinde macOS ile calisir.",
          en: "Many software developers work on macOS running on MacBooks.",
        },
      },
      {
        term: "Guvenlik Odakli Linux Dagitimi (Pentest Distro)",
        description: {
          tr: "Sizma testi ve guvenlik arastirmasi icin onceden yuklu araclarla gelen ozel Linux dagitimlari.",
          en: "Specialized Linux distributions that ship with pre-installed tools for penetration testing and security research.",
        },
        example: null,
        pending: true,
      },
      {
        term: "Acik Kaynak (Open Source)",
        description: {
          tr: "Kaynak kodu herkese acik olan, incelenebilen ve katki yapilabilen yazilim modeli.",
          en: "A software model where the source code is public, inspectable, and open to contribution.",
        },
        example: {
          tr: "Linux cekirdegine dunya genelinde binlerce farkli gelistirici katki yapar.",
          en: "Thousands of different developers worldwide contribute to the Linux kernel.",
        },
      },
    ],
  },
  {
    id: "infrastructure",
    title: { tr: "Altyapi ve Aglar", en: "Infrastructure & Networks" },
    terms: [
      {
        term: "CDN (Content Delivery Network)",
        description: {
          tr: "Icerigi kullaniciya cografi olarak en yakin sunucudan sunarak hizlandiran ag.",
          en: "A network that speeds up delivery by serving content from the server geographically closest to the user.",
        },
        example: {
          tr: "Cloudflare ve Akamai, dunyanin en cok kullanilan CDN saglayicilarindandir.",
          en: "Cloudflare and Akamai are among the world's most widely used CDN providers.",
        },
      },
      {
        term: "DDoS",
        description: {
          tr: "Bir hedefe cok sayida kaynaktan es zamanli sahte trafik gondererek hizmet disi birakma saldirisi.",
          en: "An attack that floods a target with fake traffic from many sources at once to knock it offline.",
        },
        example: {
          tr: "Buyuk oyun sunucularinin veya finans sirketlerinin zaman zaman DDoS saldirisiyla gecici sure erisilemez hale gelmesi.",
          en: "Large game servers or financial companies occasionally going temporarily unreachable due to a DDoS attack.",
        },
      },
      {
        term: "DNS",
        description: {
          tr: "Alan adlarini IP adreslerine ceviren internetin 'telefon rehberi'.",
          en: "The internet's 'phone book' that translates domain names into IP addresses.",
        },
        example: {
          tr: "Tarayiciya 'example.com' yazdiginda, DNS bu adi gercek sunucu IP'sine cevirir.",
          en: "When you type 'example.com' in a browser, DNS translates it to the real server IP.",
        },
      },
      {
        term: "WAF (Web Application Firewall)",
        description: {
          tr: "Web trafigini SQLi, XSS gibi bilinen saldiri kaliplarina karsi filtreleyen guvenlik katmani.",
          en: "A security layer that filters web traffic against known attack patterns like SQLi and XSS.",
        },
        example: {
          tr: "Bir WAF, formda gonderilen '\\' OR 1=1 --' gibi bir SQL enjeksiyon denemesini sunucuya ulasmadan engelleyebilir.",
          en: "A WAF can block a SQL-injection attempt like '\\' OR 1=1 --' submitted in a form before it ever reaches the server.",
        },
      },
      {
        term: "TLS Sonlandirma (Cloudflare Ornegi)",
        description: {
          tr: "Sifrelenmis HTTPS trafiginin, origin sunucuya ulasmadan once bir ara katmanda (orn. Cloudflare) cozulmesi.",
          en: "Decrypting encrypted HTTPS traffic at an intermediary layer (e.g. Cloudflare) before it reaches the origin server.",
        },
        example: {
          tr: "Cloudflare arkasindaki bir site icin ziyaretcinin HTTPS istegi once Cloudflare'de cozulur, sonra origin sunucuya iletilir.",
          en: "For a site behind Cloudflare, a visitor's HTTPS request is decrypted at Cloudflare first, then forwarded to the origin server.",
        },
      },
    ],
  },
];
