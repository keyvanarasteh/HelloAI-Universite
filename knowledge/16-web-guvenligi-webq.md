# Web Guvenligi: Kesif ve Analiz (WebQ) — 2. Gun

> Bu dosya bir **yer tutucudur (placeholder)**. Icerik, atolyenin 2. gununde canli anlatimla doldurulacaktir. Asagidaki liste, o oturumda islenecek konularin taslak sirasidir.

Referans proje: [`keyvanarasteh/WebQ`](https://github.com/keyvanarasteh/WebQ) — web kesif/OSINT ve guvenlik analiz motoru uzerine kurulu bir masaustu uygulamasi.

## Islenecek Konu Basliklari (TOC)

1. Domain Insight: WHOIS sorgulama, SSL zinciri kontrolu, DNS haritalama, port taramasi.
2. SEO ve teknoloji parmak izi (tech fingerprinting): CMS/framework/CDN tespiti.
3. Toplu domain dogrulama (bulk domain validation) ve es zamanli tarama mantigi.
4. Subdomain kesfi ve canli/olu subdomain filtreleme.
5. Iletisim/contact spidering: BFS ile e-posta ve sosyal veri toplama.
6. Acik sifre/anahtar tarayici (secret scanner): `/config`, `/env` gibi noktalardaki sizintilar.
7. Subdomain takeover analizi: savunmasiz CNAME kayitlarinin tespiti.
8. Cloudflare/CDN arkasindaki gercek sunucu IP'sini bulma (guvenlik arastirmasi amacli).
9. Nmap ciktisini CVE veritabanlariyla eslestirme (zero-day/known-vuln korelasyonu).
10. Guvenlik puanlama modeli: WAF, CORS, guvenlik header'lari uzerinden A+ - F derecelendirme.

## Katkiya Davet

Bu konuyu dinledikten sonra ogrenciler asagidaki adimlarla projeye katki yapmaya tesvik edilir:

1. Repoyu fork'la: [github.com/keyvanarasteh/WebQ](https://github.com/keyvanarasteh/WebQ)
2. `docs/ideas/*.md` altindaki acik istek (request) listesinden birini sec, ya da `REQUEST.md` dosyasina bak.
3. Kucuk, test edilebilir bir iyilestirme yap ve PR ac.
4. [Open Source Katki Sureci](04-open-source-katki-sureci.md) dosyasindaki adimlari izle.

## Guvenlik ve Etik Notu

Bu araclar sadece **kendi sahip oldugunuz veya izinli test ortami saglayan** domain/sistemlerde kullanilmalidir. Izinsiz taramalar yasal degildir; bkz. [Siber Guvenlik Icin Temel Bilgi](11-siber-guvenlik-icin-temel-bilgi.md).
