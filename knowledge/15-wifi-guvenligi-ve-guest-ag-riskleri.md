# Kablosuz Ag Guvenligi: Guest Wifi Riskleri ve KVKK

## Guest Wifi Neden Riskli Olabilir?

- Misafir (guest) wifi aglari genelde hizli kurulum icin basit yapilandirilir; bazen ana kurumsal agdan yeterince izole edilmez.
- Ag "ortadaki adam" (MITM/man-in-the-middle) pozisyonuna gecebilecek biri icin savunmasiz kalirsa, sifrelenmemis (HTTP) trafik veya zayif yapilandirilmis giris ekranlari izlenebilir hale gelebilir.
- Boyle bir aci gerceklestiginde gorulebilecek hassas veri kategorilerine ornekler: kimlik numarasi (TC kimlik no), telefon numarasi, SMS/e-posta dogrulama kodu (OTP) gibi kimlik dogrulama bilgileri.

## Bu Bilgiler Ele Gecirilirse Ne Olur?

- **Kimlik hirsizligi:** TC kimlik no gibi bilgilerle sahte basvuru/islem yapilabilir.
- **Hesap ele gecirme (account takeover):** OTP/dogrulama kodu calinirsa, oturum veya hesap devralinabilir (session hijacking).
- **Suc isleme / kimlige burunme (impersonation):** Ele gecirilen kimlikle, hedeflenen kisi adina islem yapilip mağdur, islemedigi bir sucla iliskilendirilebilir.

## KVKK ve Hukuki Boyut

- TC kimlik no ve iletisim bilgisi, ozel nitelikli olmasa da **KVKK (Kisisel Verilerin Korunmasi Kanunu)** kapsaminda "kisisel veri" sayilir.
- Yetkisiz sekilde ele gecirme, saklama veya kullanma; KVKK ve Turk Ceza Kanunu'nun bilisim suclarina iliskin maddeleri (ornek: TCK m.243-244, kisisel verilerin hukuka aykiri ele gecirilmesi/kaydedilmesi) kapsaminda **suctur** ve agir hukuki/cezai sonuclar doğurur.

## Bu Konuyu Ogrenmenin Dogru Yolu

- Boyle testler **sadece** yazili, acik izin alinmis (network sahibi/kurum onayli), kapsami net tanimlanmis bir sizma testi (pentest) sozlesmesi icinde ve **izole test ortamlarinda** yapilabilir.
- Gercek, canli bir agda, gercek kullanicilarin verisini izinsiz gormek/kaydetmek — bu bir sinif demosu olsa bile — yasal degildir.
- Pratik yapmak icin: kendi kurdugun izole bir lab agi (kendi router'in, sanal makineler) kullan; gercek insanlarin kisisel verisini asla hedef alma.

## Savunma (Defensive) Onerileri

- Guest agi ana kurumsal/ogrenci agindan **VLAN ile izole** et.
- Guest agda zorunlu HTTPS/HSTS kullan; mumkunse ag icinde bir VPN katmani sun.
- WPA2/3-Enterprise gibi guclu kimlik dogrulama yontemlerini tercih et.
- Ag izleme ve anormal trafik tespiti (IDS) kullan.
- Kullanicilara guest wifi'de bankacilik/hassas islem yapmamalari konusunda uyari goster.

## Iliskili Not

Bu konu [Web Temelleri ve Guvenlik](10-web-temelleri-ve-guvenlik.md) dosyasindaki guest wifi bolumunu ve [Siber Guvenlik Icin Temel Bilgi](11-siber-guvenlik-icin-temel-bilgi.md) dosyasindaki etik/yasal sinirlari tamamlar.
