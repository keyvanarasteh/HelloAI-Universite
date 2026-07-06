# 0-100 Website Yapim Adimlari

Durum isaretleri:
- `[x]` tamamlandi
- `[ ]` bekliyor
- `[~]` devam ediyor

## 0. Proje Karari

- [x] 0.1 Fikri netlestir: universite bolum karari yardim sitesi.
- [x] 0.2 Secilen seviye: Secenek 3.
- [x] 0.3 Kontrol paneli / dashboard simdilik olmayacak.
- [x] 0.4 Backend simdilik olmayacak.
- [x] 0.5 Site static frontend olacak.
- [x] 0.6 Dil destegi TR/EN olacak.
- [x] 0.7 Gece/gunduz modu olacak.
- [x] 0.8 Telefon, tablet ve bilgisayar uyumlu olacak.
- [x] 0.9 Veri saklama ilk surumda localStorage ile olacak.

## 1. Teknik Kurulum

- [x] 1.1 `package.json` olustur.
- [x] 1.2 Vite + React ayarlarini ekle.
- [x] 1.3 Tailwind CSS ayarlarini ekle.
- [x] 1.4 `index.html` olustur.
- [x] 1.5 `src` klasor yapisini olustur.
- [x] 1.6 Ana React giris dosyasini ekle.
- [x] 1.7 Global CSS ve tema degiskenlerini ekle.
- [x] 1.8 Build scriptlerini ekle.
- [x] 1.9 Projeyi npm paketleriyle kur.
- [x] 1.10 Ilk build kontrolunu yap.

## 2. Tasarim Sistemi

- [x] 2.1 Renk paletini belirle.
- [x] 2.2 Gunduz modu renklerini tanimla.
- [x] 2.3 Gece modu renklerini tanimla.
- [x] 2.4 Alan renklerini tanimla: yazilim, guvenlik, donanim, elektronik.
- [x] 2.5 Tipografi ve font boyutlarini ayarla.
- [x] 2.6 Buton stillerini olustur.
- [x] 2.7 Kart stillerini olustur.
- [x] 2.8 Form alanlari stillerini olustur.
- [x] 2.9 Responsive bosluk ve grid kurallarini ayarla.
- [x] 2.10 Erisilebilir renk kontrastini kontrol et.

## 3. Uygulama Iskeleti

- [x] 3.1 Sayfa state yapisini kur.
- [x] 3.2 Ana layout yapisini kur.
- [x] 3.3 Ust navigasyonu ekle.
- [x] 3.4 Mobil navigasyon davranisini ekle.
- [x] 3.5 Sayfa gecislerini state ile calistir.
- [x] 3.6 Aktif sayfa vurgusunu ekle.
- [x] 3.7 Footer alanini ekle.
- [x] 3.8 Bos/ilk veri durumlarini dusun.
- [x] 3.9 Hata olusturmayan basit route mantigini kur.
- [x] 3.10 Tum sayfalar icin ortak container yapisini ekle.

## 4. Cift Dil: TR / EN

- [x] 4.1 TR metinlerini hazirla.
- [x] 4.2 EN metinlerini hazirla.
- [x] 4.3 Translation veri yapisini kur.
- [x] 4.4 Dil degistirme butonunu ekle.
- [x] 4.5 Secilen dili localStorage ile sakla.
- [x] 4.6 Ilk acilista kayitli dili oku.
- [x] 4.7 Varsayilan dili TR yap.
- [x] 4.8 Tum navigasyon metinlerini cift dilli yap.
- [x] 4.9 Tum sayfa basliklarini cift dilli yap.
- [x] 4.10 Test sorularini cift dilli yap.

## 5. Gece / Gunduz Modu

- [x] 5.1 Tema state yapisini kur.
- [x] 5.2 Tema degistirme butonunu ekle.
- [x] 5.3 Tema tercihini localStorage ile sakla.
- [x] 5.4 Ilk acilista kayitli temayi oku.
- [x] 5.5 Kayitli tema yoksa sistem temasini dikkate al.
- [x] 5.6 HTML `data-theme` yapisini uygula.
- [x] 5.7 Gunduz modunu test et.
- [x] 5.8 Gece modunu test et.
- [x] 5.9 Tema degisiminde layout kaymasini engelle.
- [x] 5.10 Ikon ve metinlerin tema ile uyumunu kontrol et.

## 6. Ana Sayfa

- [x] 6.1 Ana sayfa hero alanini olustur.
- [x] 6.2 Ana aksiyon butonlarini ekle.
- [x] 6.3 4 alan kartini ekle.
- [x] 6.4 Kisa karar sureci ozetini ekle.
- [x] 6.5 Mobil tek kolon gorunumu duzenle.
- [x] 6.6 Tablet iki kolon gorunumu duzenle.
- [x] 6.7 Desktop cok kolon gorunumu duzenle.
- [x] 6.8 Ana sayfadan teste gecis ekle.
- [x] 6.9 Ana sayfadan rehbere gecis ekle.
- [x] 6.10 Ana sayfadan universite karsilastirmaya gecis ekle.

## 7. Alan Testi

- [x] 7.1 Test soru listesini olustur.
- [x] 7.2 Her soruya alan agirliklari ver.
- [x] 7.3 1-5 cevap sistemi kur.
- [x] 7.4 Ilerleme cubugu ekle.
- [x] 7.5 Geri butonu ekle.
- [x] 7.6 Ileri butonu ekle.
- [x] 7.7 Cevap secilmeden ilerlemeyi engelle.
- [x] 7.8 Test sonucunu hesapla.
- [x] 7.9 Sonucu localStorage ile sakla.
- [x] 7.10 Test bitince sonuc sayfasina gec.

## 8. Sonuc Analizi

- [x] 8.1 Skor kartlarini olustur.
- [x] 8.2 En yakin 2 alani hesapla.
- [x] 8.3 Guclu yonleri goster.
- [x] 8.4 Dikkat edilmesi gerekenleri goster.
- [x] 8.5 3 gunluk deneme plani goster.
- [x] 8.6 Test yoksa teste yonlendirme ekle.
- [x] 8.7 Sonucu tekrar hesaplama butonu ekle.
- [x] 8.8 Sonucu temizleme butonu ekle.
- [x] 8.9 Mobil skor kartlarini duzenle.
- [x] 8.10 Desktop analiz gorunumunu duzenle.

## 9. Alan Rehberi

- [x] 9.1 Yazilim rehberini ekle.
- [x] 9.2 Siber guvenlik rehberini ekle.
- [x] 9.3 Donanim/gomulu sistem rehberini ekle.
- [x] 9.4 Elektronik rehberini ekle.
- [x] 9.5 Her alan icin "kimler sever" bolumu ekle.
- [x] 9.6 Her alan icin "kimler zorlanir" bolumu ekle.
- [x] 9.7 Her alan icin ilgili bolumleri ekle.
- [x] 9.8 Her alan icin gunluk is tarzi ekle.
- [x] 9.9 Rehber kartlarini responsive yap.
- [x] 9.10 Rehberden mini projelere gecis ekle.

## 10. Mini Proje Gorevleri

- [x] 10.1 Yazilim mini gorevini ekle.
- [x] 10.2 Guvenlik mini gorevini ekle.
- [x] 10.3 Donanim/gomulu sistem mini gorevini ekle.
- [x] 10.4 Elektronik mini gorevini ekle.
- [x] 10.5 Sure bilgisi ekle.
- [x] 10.6 Zorluk bilgisi ekle.
- [x] 10.7 Beklenen cikti bilgisi ekle.
- [x] 10.8 Yasal/etik guvenlik notunu ekle.
- [x] 10.9 Gorevleri alan rengine gore ayir.
- [x] 10.10 Mobil gorev kartlarini duzenle.

## 11. Universite Karsilastirma

- [x] 11.1 Universite formunu olustur.
- [x] 11.2 Bolum adi alanini ekle.
- [x] 11.3 Sehir alanini ekle.
- [x] 11.4 Basari sirasi alanini ekle.
- [x] 11.5 Ders plani puanini ekle.
- [x] 11.6 Lab/kulup/staj notlarini ekle.
- [x] 11.7 Kaydi localStorage ile sakla.
- [x] 11.8 Kayitlari listele.
- [x] 11.9 Kayit silme butonu ekle.
- [x] 11.10 Mobilde tabloyu kartlara cevir.

## 12. Tercih Listesi

- [x] 12.1 Tercih ekleme formunu olustur.
- [x] 12.2 Tercih listesi state yapisini kur.
- [x] 12.3 Tercihleri localStorage ile sakla.
- [x] 12.4 Tercih siralama mantigini ekle.
- [x] 12.5 Tercih notu ekleme alanini ekle.
- [x] 12.6 Tercih silme butonu ekle.
- [x] 12.7 En guclu adaylari vurgula.
- [x] 12.8 Bos liste durumunu tasarla.
- [x] 12.9 Mobil tercih kartlarini duzenle.
- [x] 12.10 Karsilastirmadan tercih listesine gecis ekle.

## 13. Karar Gunlugu

- [x] 13.1 Gunluk formunu olustur.
- [x] 13.2 Alan yakinligi sorusunu ekle.
- [x] 13.3 "Neden?" alanini ekle.
- [x] 13.4 Heyecanlandiran sey alanini ekle.
- [x] 13.5 Korkutan sey alanini ekle.
- [x] 13.6 Haftalik mini deneme alanini ekle.
- [x] 13.7 Son karar cumlesi alanini ekle.
- [x] 13.8 Gunlugu localStorage ile sakla.
- [x] 13.9 Gunlugu temizleme butonu ekle.
- [x] 13.10 Yazilanlari okunabilir ozet olarak goster.

## 14. Kaynaklar

- [x] 14.1 YOK Atlas linkini ekle.
- [x] 14.2 OSYM linkini ekle.
- [x] 14.3 Bolum arastirma kontrol listesini ekle.
- [x] 14.4 Mezun/ogrenci konusma sorularini ekle.
- [x] 14.5 Guvenli ogrenme notlarini ekle.
- [x] 14.6 Linkleri yeni sekmede ac.
- [x] 14.7 Kaynaklari TR/EN yap.
- [x] 14.8 Kaynak kartlarini responsive yap.
- [x] 14.9 Resmi kaynak uyarisi ekle.
- [x] 14.10 Kaynaklardan ilgili sayfalara gecis ekle.

## 15. Responsive ve Kalite Kontrol

- [x] 15.1 Telefon genisligini kontrol et.
- [x] 15.2 Tablet genisligini kontrol et.
- [x] 15.3 Desktop genisligini kontrol et.
- [x] 15.4 Metin tasmalarini kontrol et.
- [x] 15.5 Buton dokunma alanlarini kontrol et.
- [x] 15.6 Tema degisimini kontrol et.
- [x] 15.7 Dil degisimini kontrol et.
- [x] 15.8 localStorage akisini kontrol et.
- [x] 15.9 `npm run build` calistir.
- [x] 15.10 Dev server ile son gorunum kontrolu yap.

## 16. Teslim ve Sonraki Adimlar

- [x] 16.1 Tamamlanan adimlari isaretle.
- [x] 16.2 Bilinen eksikleri not et.
- [x] 16.3 Calistirma komutlarini yaz.
- [x] 16.4 Dev server adresini paylas.
- [x] 16.5 Sonraki gelistirme fikirlerini not et.

## 17. Calistirma

Kurulum:

```bash
npm install
```

Gelistirme sunucusu:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Aktif dev server:

```text
http://localhost:5173/
```

## 18. Bilinen Sinirlar

- Backend yok; tum veriler localStorage ile sadece kullanicinin tarayicisinda saklanir.
- Gercek universite verileri otomatik cekilmiyor; ilk surumda kullanici manuel girer.
- Kullanici hesabi, admin paneli ve veritabani sonraki surum konularidir.
- Sayfa gecisleri static frontend state ile calisir; backend route yok.

## 19. Sonraki Gelistirme Fikirleri

- Universite verilerini JSON dosyasindan beslemek.
- Test sorularini daha bilimsel bir agirlik sistemiyle iyilestirmek.
- Sonuc paylasma linki uretmek.
- PDF/print cikti eklemek.
- Daha sonra istenirse backend, hesap sistemi ve admin paneli eklemek.
