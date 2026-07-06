# Website Karari

Proje fikri: ROADMAP.md'deki universite bolum karari yol haritasini, arkadaslarinin da kullanabilecegi guzel, ciddi ve kullanisli bir web sitesine cevirmek.

Calisma adi secenekleri:
- Bolum Pusulasi
- Tercih Rotasi
- Alanini Bul

## Guncel Karar

Secilen yol: **Secenek 3**

Ama su degisikliklerle:
- Kontrol paneli / dashboard simdilik olmayacak.
- Backend simdilik olmayacak.
- Site static frontend olarak calisacak.
- Site cift dilli olacak: TR ve EN.
- Gece/gunduz modu olacak.
- Telefon, tablet ve bilgisayarda duzgun calisacak.
- Ilk acilan ekran reklam sayfasi gibi degil, direkt kullanilabilir bir karar araci gibi olacak.

## Sayfa Sayisi

Baslangic icin onerilen sayfa sayisi: **9 sayfa**

Kontrol paneli, profil, admin paneli, backend, veritabani ve hesap sistemi simdilik yok. Bunlar daha sonra eklenebilir.

## Sayfalar

### 1. Ana Sayfa

Amac:
- Kullanici siteye girince direkt ne yapabilecegini anlasin.
- Teste baslama, alanlari inceleme ve universite karsilastirma aksiyonlari net olsun.

Icerik:
- Kisa ve guclu baslik
- Yazilim, siber guvenlik, donanim/gomulu sistem, elektronik kartlari
- "Teste Basla" butonu
- "Alanlari Incele" butonu
- "Universite Karsilastir" butonu

### 2. Alan Testi

Amac:
- Kullanici sorulara cevap vererek hangi alana daha yakin oldugunu gorsun.

Icerik:
- 20-30 soru
- 1-5 arasi cevap sistemi
- Ilerleme cubugu
- Geri/ileri butonlari
- Testi bitir butonu

### 3. Sonuc Analizi

Amac:
- Kullanici test sonucunu sadece tek kelime olarak degil, anlasilir bir analiz olarak gorsun.

Icerik:
- Yazilim skoru
- Siber guvenlik skoru
- Donanim/gomulu sistem skoru
- Elektronik skoru
- En yakin 2 alan
- Guclu yonler
- Dikkat etmesi gereken noktalar
- Onerilen 3 gunluk deneme plani

### 4. Alan Rehberi

Amac:
- Her alanin gercekte ne oldugunu sade anlatmak.

Icerik:
- Yazilim nedir?
- Siber guvenlik nedir?
- Donanim/gomulu sistem nedir?
- Elektronik nedir?
- Hangi bolumlere gider?
- Kimler sever?
- Kimler zorlanir?
- Gunluk is tarzi nasildir?

### 5. Mini Proje Gorevleri

Amac:
- Kullanici sadece test sonucuna bakmasin, alanlari deneyerek karar versin.

Icerik:
- Yazilim icin mini web sitesi gorevi
- Siber guvenlik icin yasal lab/Linux gorevi
- Donanim/gomulu sistem icin Arduino/ESP32 veya simulator gorevi
- Elektronik icin devre simulatoru gorevi
- Her gorev icin sure, zorluk ve beklenen cikti

### 6. Universite Karsilastirma

Amac:
- Kullanici bolumleri ve universiteleri mantikli sekilde karsilastirsin.

Icerik:
- Universite adi
- Bolum adi
- Sehir
- Basari sirasi
- Ders plani
- Laboratuvar imkani
- Kulup/staj imkani
- Dil
- Notlar

Ilk surumda veriler kullanici tarafindan manuel girilebilir ve tarayicida saklanabilir. Daha sonra backend eklemek istersek veritabani veya hazir veri kaynagi baglanabilir.

### 7. Tercih Listesi

Amac:
- Kullanici begendigi bolumleri kendi kisa listesine eklesin.

Icerik:
- Tercih listesine ekle/kaldir
- Listeyi siralama
- Not yazma
- En guclu 10-20 aday bolumu gorme

Ilk surumda localStorage yeterli. Hesap sistemi backend eklenirse daha sonra dusunulur.

### 8. Karar Gunlugu

Amac:
- Kullanici karar surecini yazili hale getirsin.

Icerik:
- "Su an hangi alana yakininim?"
- "Neden?"
- "Beni en cok ne heyecanlandiriyor?"
- "Beni en cok ne korkutuyor?"
- "Bu hafta hangi mini denemeyi yapacagim?"
- "Son karar cumlem ne?"

### 9. Kaynaklar

Amac:
- Kullanici resmi ve guvenilir kaynaklara kolay ulassin.

Icerik:
- YOK Atlas
- OSYM
- Bolum arastirma kontrol listesi
- Konusulacak ogrenci/mezun sorulari
- Guvenli ve yasal ogrenme kaynaklari

## Cift Dil: TR / EN

Site iki dilde calisacak:
- TR: Turkce
- EN: English

Dil ozellikleri:
- Ust menude TR/EN dil degistirme butonu olacak.
- Kullanici hangi dili secerse localStorage ile saklanacak.
- Kullanici tekrar gelince son sectigi dil acilacak.
- Ilk surumda varsayilan dil TR olabilir.
- Tum butonlar, basliklar, test sorulari, sonuc metinleri ve sayfa icerikleri iki dilde hazirlanacak.

Teknik yaklasim:
- Static frontend icinde `translations` objesi veya JSON dosyalari ile TR/EN metinleri tutmak.
- Dil secimini localStorage ile saklamak.
- URL yapisi ilk surumda basit kalabilir: tek site, ust menuden TR/EN degisimi.

Benim onerim:
- Ilk surumda TR/EN metin dosyalari ile baslayalim.
- Site buyurse `/tr` ve `/en` route yapisina gecilebilir.

## Gece / Gunduz Modu

Olmasi gerekenler:
- Ust menude tema degistirme butonu.
- Gunes ikonu: gunduz modu.
- Ay ikonu: gece modu.
- Kullanici secimi localStorage ile saklansin.
- Kullanici tekrar gelince son sectigi tema acilsin.
- Sistem temasi karanliksa ilk acilista gece modu otomatik gelebilir.

Renk hissi:
- Gunduz modu: temiz, ferah, beyaz agirlikli.
- Gece modu: koyu ama bogucu olmayan, okunakli.
- Tek renkli sikici tasarimdan kacinalim.
- Yazilim, guvenlik, donanim ve elektronik alanlari renklerle ayrilsin ama site daginik durmasin.

## Responsive Tasarim

Telefon:
- Tek kolon.
- Buyuk dokunulabilir butonlar.
- Test sorulari rahat okunur.
- Karsilastirma tablosu kart formatina donusur.
- Ust menu sade olur.

Tablet:
- 2 kolonlu alan kartlari.
- Test ve sonuc ekranlari daha genis gorunur.
- Universite karsilastirma daha rahat okunur.

Bilgisayar:
- Ust navigasyon.
- 3-4 kolonlu kartlar.
- Sonuc analizi daha detayli gosterilir.
- Karsilastirma tablosu genis ekrani iyi kullanir.

## Teknoloji Secimi

Benim onerim:
- React
- Vite
- Tailwind CSS
- localStorage
- TR/EN translation dosyalari
- Gece/gunduz modu icin tema state'i
- Static build

Neden React + Vite?
- Tamamen static frontend olarak calisir.
- Backend gerektirmez.
- Hizli kurulur ve hizli acilir.
- Sayfalari component mantigiyla duzenli tutar.
- TR/EN, gece/gunduz modu ve localStorage icin yeterince gucludur.
- GitHub Pages, Netlify veya Vercel gibi yerlere kolay deploy edilir.

Ilk surumda kullanmayalim:
- Backend
- API
- Dashboard
- Admin paneli
- Kullanici hesabi
- Veritabani
- Odeme sistemi

Sonra eklenebilir:
- Backend/API
- Hesap acma
- Sonuclari bulutta saklama
- Arkadaslarla sonuc paylasma
- Admin paneli
- Universite verilerini merkezi yonetme

## Dil / Uslup

Site genclere uygun ama temiz ve guven veren bir dille yazilsin.

TR ornekleri:
- "Bolum secimi kafani karistirdiysa buradan basla."
- "Yazilim mi, guvenlik mi, donanim mi, elektronik mi?"
- "Once deneyelim, sonra karar verelim."

EN ornekleri:
- "Not sure which path fits you? Start here."
- "Software, security, hardware, or electronics?"
- "Try first, decide smarter."

## Son Karar

Baslangic karari:
- Site tipi: Static responsive web app
- Secilen seviye: Secenek 3
- Sayfa sayisi: 9
- Kontrol paneli: Yok
- Backend: Yok
- Dil: TR ve EN
- Tema: Gece/gunduz modu
- Teknoloji: React + Vite + Tailwind CSS
- Veri saklama: Ilk basta localStorage
- Ilk hedef: Calisan, guzel, mobil uyumlu, cift dilli MVP

Net MVP:
1. Ana Sayfa
2. Alan Testi
3. Sonuc Analizi
4. Alan Rehberi
5. Mini Proje Gorevleri
6. Universite Karsilastirma
7. Tercih Listesi
8. Karar Gunlugu
9. Kaynaklar
