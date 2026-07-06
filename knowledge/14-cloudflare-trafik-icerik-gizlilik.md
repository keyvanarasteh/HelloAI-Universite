# Cloudflare: Trafik, Icerik ve Gizlilik

## Cloudflare Nedir?

- Cloudflare; CDN (Content Delivery Network), DDoS koruma, DNS ve WAF (Web Application Firewall) hizmetlerini bir arada sunan bir altyapi sirketidir.
- Bir site Cloudflare arkasina alindiginda, ziyaretcinin trafigi once Cloudflare'in sunucularina ugrar, oradan gercek sunucuya (origin) yonlendirilir.

## Neden Bu Kadar Yaygin?

- Turkiye'de ve dunyada pek cok kurumsal site, e-ticaret platformu ve bazi yapay zeka/LLM servisleri, DDoS koruma, hiz (CDN) ve DNS altyapisi icin Cloudflare benzeri servisleri tercih eder.
- Yayginlasma nedenleri: ucretsiz baslangic plani, sadece DNS degistirerek kolay entegrasyon, guclu ve otomatik DDoS koruma, global sunucu agi sayesinde hiz kazanci.

## Cloudflare Ne Gorur?

- **Trafik:** Site Cloudflare arkasindaysa, gelen tum HTTP(S) istekleri (ziyaretci IP'si, User-Agent, istek zamani, hangi sayfaya gidildigi) once Cloudflare'den gecer.
- **Icerik:** HTTPS baglantisi genelde Cloudflare uzerinde sonlandirilir (TLS termination); bu, sifrelenmis trafigin *cozulmus halinin* teknik olarak Cloudflare sunucularindan gectigi anlamina gelir.
- **Gizlilik:** Ziyaretcinin gercek IP adresi dogrudan site sahibine degil, once Cloudflare'e gorunur; site sahibi genelde Cloudflare'in kendisine ilettigi bilgiyi gorur.

## Artilari (Pros)

- Guclu, otomatik DDoS koruma ve kotu niyetli trafik filtreleme.
- CDN sayesinde icerik kullaniciya cografi olarak yakin sunuculardan sunulur, site hizlanir.
- Ucretsiz SSL/TLS sertifikasi ile kolay ve hizli HTTPS kurulumu.
- WAF katmani SQL injection, XSS gibi yaygin saldiri turlerine karsi ek koruma saglar.

## Eksileri (Cons)

- Merkezilesme riski: Cloudflare'de yasanan genis capli bir kesinti, arkasindaki cok sayida siteyi ayni anda etkileyebilir.
- Gizlilik tartismasi: Cloudflare, uzerinden gecen trafigin buyuk kismini teknik olarak gorebilecek konumdadir; bu durum gizlilik odakli kullanicilar/servisler icin bir tartisma konusudur.
- Yanlis yapilandirilirsa gercek sunucu (origin) IP'si tespit edilebilir; bu da Cloudflare korumasini etkisiz hale getirebilir (bkz. [Web Guvenligi: Kesif ve Analiz (WebQ)](26-web-guvenligi-webq.md) — "Cloudflare/CDN arkasindaki gercek IP'yi bulma").
- Ucretsiz planlarda bazi gelismis guvenlik/analiz ozellikleri kisitlidir.

## Iliskili Not

Bu konu, [Web Guvenligi: Kesif ve Analiz (WebQ)](26-web-guvenligi-webq.md) dosyasindaki Cloudflare/CDN analiz basligiyla dogrudan iliskilidir; orada bu bilgi pratik bir arac uzerinden ele alinacaktir.
