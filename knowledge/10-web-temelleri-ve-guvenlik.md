# Web Temelleri ve Guvenlik

## Odev: Basit Static Website Yapimi

- Odev finalinde verilen gorev: Yapay zeka araclariyla (Codex, Claude Code, VSCode Chat) veya kendi kodunla basit bir static web sitesi yapmak.
- Detayli odev tanimi icin: [ODEV.md](/Users/Q/Documents/HelloAI-Universite/ODEV.md)
- Anlatilan temel gercek: Tarayicida gordugumuz her website, aslinda tarayiciya gonderilen **HTML (yapi), CSS (gorunum) ve JS (davranis)** dosyalarindan olusur. Karmasik gorunen siteler bile sonunda bu ucune indirgenir.

## HTTPS vs HTTP

- **HTTP:** Tarayici ile sunucu arasindaki veri sifrelenmeden gonderilir; aradaki agi dinleyen biri veriyi okuyabilir.
- **HTTPS:** Ayni iletisim TLS/SSL ile sifrelenir; araya giren biri veriyi okuyamaz veya degistiremez.
- Adres cubugundaki kilit simgesi HTTPS kullanildigini gosterir; sifre, kredi karti gibi hassas bilgi giren sitelerde HTTPS olmasi kritik onemdedir.

## Guest Wifi Guvenligi (Starbucks, Okul Ornegi)

- Halka acik "Guest" wifi aglarinda (kafe, okul, havaalani vb.) genelde kullanici adi/sifre istenmeden veya basit bir onay ekraniyla baglanilir.
- Bu tarz aglarda:
  - Ag trafigi sifreli olmayabilir; ayni aga bagli baska biri (teorik olarak) trafigi izleyebilir.
  - Ziyaret edilen HTTPS siteler yine de sifreli kalir (icerik korunur) ama hangi siteye baglanildigi (DNS/SNI seviyesinde) agi yoneten tarafindan gorulebilir.
  - Ag saglayicisi (okul, kafe) genelde baglanti loglarini (kim, ne zaman, hangi cihaz, hangi IP) tutar; bu yasal ve guvenlik amaciyla yapilir.
- Pratik oneri: Hassas islemleri (banka, sifre girisi) bilinmeyen/guvensiz aglarda yapmaktan kacinmak, mumkunse HTTPS'e ve gerekiyorsa VPN'e guvenmek.
