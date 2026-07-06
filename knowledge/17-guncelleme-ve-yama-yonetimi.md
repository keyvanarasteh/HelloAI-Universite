# Guncel Kalmanin Onemi: Yama (Patch) Yonetimi

## Yama Nedir?

- Uretici firmalar, bulunan guvenlik aciklarini duzelten yazilim guncellemelerini "yama" (patch) olarak yayinlar.
- Yama yayinlandigi an, aslinda acigin varligi da (changelog/CVE notlariyla) kamuya acik hale gelir.

## Guncellemeyi Geciktirmenin Riski: "N-day" Penceresi

- Bir yama yayinlandiktan sonra, saldirganlar yama notlarini inceleyip hangi acigin kapatildigini anlayabilir ve bunu **henuz guncellenmemis** sistemlere karsi tersine muhendislikle (reverse engineering) exploit'e cevirebilir.
- Yama cikmis ama uygulanmamis bir acik, "0-day" olmaktan cikip **"N-day"** (yamasi cikmis ama kapatilmamis) acik haline gelir — ve bu, saldirganlar icin cok daha kolay bir hedeftir cunku exploit gelistirmek icin ipucu (yamanin kendisi) ellerindedir.
- **Gercek dunya ornegi:** WannaCry fidye yazilimi saldirisi, Microsoft'un aylar once yayinladigi ama pek cok kurumun uygulamadigi bir Windows aciğini (EternalBlue/MS17-010) kullanarak dunya capinda hizla yayilmisti. Bu, gec/yapilmayan yamalarin somut sonucunu gosteren iyi bilinen bir ornektir.

## "Kritik Yamayi Gec de Olsa Yaparim" Yaklasimi Neden Yanlis?

- Yama cikip da uygulanmadigi her gun, saldirganlarin o acigi kullanarak sizabilecegi sistem sayisi artar.
- Saldirganlar, internete acik ve hala savunmasiz sistemleri Shodan gibi arama motorlariyla kolayca tarayip bulabilir.
- Kritik/guvenlik siniflandirmali yamalar icin gecikme, dogrudan saldiri yuzeyini (attack surface) genisletir.

## Iyi Pratikler

- Otomatik guncellemeleri acik tutmak (ozellikle isletim sistemi ve tarayici icin).
- Guvenlik siniflandirmali (critical/security) yamalari once, diger yamalari test ettikten sonra uygulamak.
- Uretim (production) sistemlerinde once test/staging ortaminda deneyip sonra canliya almak.
- Destegi biten (End-of-Life) isletim sistemi/yazilimlardan (ornek: destek suresi dolan Windows surumleri veya CentOS klasik surumu) mumkun oldugunca hizli gecis yapmak — cunku bu sistemler icin artik hicbir yama yayinlanmaz.
