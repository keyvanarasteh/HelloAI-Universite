# WAF Tanimi ve WAF Tespit (Enumeration) Teknikleri

## WAF Nedir?

- WAF (Web Application Firewall), bir web uygulamasina gelen HTTP istek/cevaplarini inceleyip SQL injection, XSS gibi bilinen saldiri kaliplarini engelleyen bir guvenlik katmanidir.
- Yaygin WAF ornekleri: **Cloudflare WAF**, **AWS WAF**, **Akamai Kona**, **Imperva**, **F5 BIG-IP ASM**, **ModSecurity** (acik kaynak, kendi sunucunuza kurulabilir).

## WAF Tespit Teknikleri

- **HTTP header analizi:** bazi WAF'lar kendine ozgu header birakir (orn. Cloudflare'de `cf-ray`, Sucuri'de `x-sucuri-id`).
- **Cookie parmak izi:** bazi WAF/load balancer'lar kendine ozgu cookie ekler (orn. Incapsula'da `incap_ses_...`, AWS'de `AWSALB`).
- **Engelleme sayfasi (block page) analizi:** bir WAF bir istegi engelledi mi diye, farkli vendor'lara ozgu hata sayfalarinin gorunumune bakma.
- **Zararsiz test payload'i gonderme:** yalnizca kendi/izinli test ortaminizda, tetikleyici olabilecek zararsiz bir string (orn. tirnak isareti) gonderip donen cevabin normal mi yoksa WAF'a ozgu bir engelleme cevabi mi oldugunu karsilastirma.

## Gercek Dunya Baglami

- WAF bypass arastirmasi, bug bounty dunyasinin bilinen bir alanidir: saldirganlar/arastirmacilar encoding hileleri (cifte URL encode, harf buyuk/kucuk degisimi gibi) kullanarak WAF kurallarini atlatmaya calisir. Bu notta somut bypass teknikleri **bilerek** verilmemistir; amac WAF'in ne oldugunu ve nasil tespit edildigini anlamaktir, bir WAF'i atlatmayi ogretmek degildir.
- Bir WAF'in varligi tek basina guvenlik garantisi degildir — arkasindaki uygulama hala yamasiz/zafiyetli olabilir; WAF sadece ek bir savunma katmanidir (defense-in-depth).

## Araclar

| Arac | Amac |
| --- | --- |
| `wafw00f` | Acik kaynak, bir sitenin arkasinda hangi WAF'in oldugunu tespit eden ozel arac |
| Nmap `http-waf-detect` (NSE script) | Nmap uzerinden WAF varligini tarama |
| Tarayici gelistirici araclari (Network tab) | Header/cookie tabanli manuel WAF ipucu arama |

### Ornek Komut

```
# Bir sitenin arkasindaki WAF'i tespit etmeye calis
wafw00f https://example.com
```

## Yasal Not

WAF tespiti dahi olsa aktif tarama sayilir; sadece kendi sisteminizde veya yazili izinli bir pentest kapsaminda yapilmalidir.
