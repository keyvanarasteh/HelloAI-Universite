# DNS Tanimi ve DNS Enumeration

## DNS Nedir?

- DNS (Domain Name System), alan adlarini (orn. `example.com`) IP adreslerine ceviren, internetin "telefon rehberi" olarak calisan sistemdir.
- Cozumleme hiyerarsik ilerler: **Root sunucular -> TLD sunuculari (.com, .org, .tr) -> Authoritative (yetkili) sunucu**.
- Yaygin kayit (record) turleri:

| Kayit Turu | Ne Ise Yarar |
| --- | --- |
| A | Domain'i bir IPv4 adresine baglar |
| AAAA | Domain'i bir IPv6 adresine baglar |
| CNAME | Bir domaini baska bir domain adina yonlendirir (alias) |
| MX | Domainin mail sunucusunu belirtir |
| TXT | Serbest metin (SPF/DKIM dogrulama, site sahiplik kaniti icin kullanilir) |
| NS | Domainin hangi isim sunucularinca yonetildigini belirtir |
| PTR | IP adresinden hostname'e ters cozumleme (reverse DNS) |

## DNS Enumeration

### Pasif Yontemler

- **crt.sh / Certificate Transparency loglari:** bir domain icin yayinlanmis tum SSL sertifikalarindan alt alan adlarini ortaya cikarma.
- **Passive DNS veritabanlari (orn. SecurityTrails):** gecmiste o domain icin gorulmus tum DNS kayitlarini (tarihsel IP'ler dahil) sorgulama.

### Aktif Yontemler

- **dig / nslookup ile dogrudan sorgu:** belirli bir kayit turunu (MX, TXT, NS) dogrudan sorma.
- **Zone transfer (AXFR) denemesi:** yanlis yapilandirilmis bir DNS sunucusundan tum alt alan listesini tek seferde cekmeye calisma.
- **Subdomain brute-force:** bilinen bir kelime listesiyle (`www`, `mail`, `dev`, `staging`, ...) olasi alt alan adlarini deneme.

## Gercek Dunya Ornegi

- **Subdomain takeover:** bircok bug bounty raporunda, bir sirketin artik kullanmadigi ama DNS'te hala duran bir CNAME kaydinin (orn. eski bir Heroku/GitHub Pages adresine isaret eden) bulunmasi ve bu adresin baskasi tarafindan sahiplenilerek o alt alan adinin ele gecirilmesi (subdomain takeover) yaygin bir DNS enumeration bulgusudur.

## Araclar

- `dig`, `nslookup` — temel DNS sorgulama.
- `dnsenum`, `dnsrecon` — otomatik DNS enumeration araclari.
- `Sublist3r`, `Amass` — pasif+aktif subdomain kesif araclari.
- `crt.sh`, `SecurityTrails` — sertifika/gecmis DNS kaydi tabanli pasif kesif.

### Ornek Komutlar

```
# Tum kayit turlerini sorgula
dig example.com ANY

# MX (mail sunucu) kaydini sorgula
dig mx example.com

# Zone transfer denemesi (yalnizca izinli/lab hedefte)
dig axfr @ns1.example.com example.com
```

## Yasal Not

DNS enumeration'in pasif kismi (WHOIS, crt.sh gibi herkese acik kaynaklar) genelde yasal kabul edilir; ancak aktif tarama ve zone transfer denemeleri, sadece kendi domaininizde veya yazili izinli bir pentest kapsaminda yapilmalidir.
