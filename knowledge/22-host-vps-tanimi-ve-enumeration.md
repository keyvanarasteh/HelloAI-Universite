# Host, VPS Tanimi ve Enumeration Teknikleri

## Host Nedir?

- "Host", ag uzerinde bir IP adresi ve (genelde) bir hostname ile tanimlanan herhangi bir cihaz/sunucudur.
- Barindirma (hosting) turleri: **shared hosting** (bircok site ayni sunucuyu paylasir), **dedicated server** (tum fiziksel sunucu tek musteriye ait), **VPS**, **cloud/instance tabanli** (AWS EC2, Google Cloud, Azure).

## VPS Nedir?

- VPS (Virtual Private Server), fiziksel bir sunucunun sanallastirma teknolojisiyle (KVM, Xen, vb.) bagimsiz dilimlere bolunmesiyle olusan, kendi isletim sistemine ve kaynaklarina sahip sanal sunucudur.
- Yaygin VPS saglayicilari: **DigitalOcean, Linode, Hetzner, Vultr, AWS Lightsail/EC2**.
- Avantaji: dedicated sunucuya gore ucuz, shared hosting'e gore daha fazla kontrol ve izolasyon saglar.

## Host / IP Enumeration Teknikleri

- **Reverse DNS lookup (PTR):** bir IP adresinden, o IP'ye kayitli hostname'i bulma.
- **Reverse IP lookup:** ayni IP/sunucu uzerinde baska hangi domainlerin barindigini bulma (shared hosting ortamlarinda onemli — bir siteyi degil, ayni sunucudaki digerlerini de ortaya cikarabilir).
- **ASN / IP blok sorgusu:** bir sirketin sahip oldugu tum IP araligini (ASN uzerinden) bulma; BGP/whois araclariyla yapilir.
- **CDN arkasindaki gercek origin IP'yi bulma:**
  - Gecmis DNS kayitlarina bakma (SecurityTrails gibi araclarda, site Cloudflare'e gecmeden onceki IP hala kayitli olabilir).
  - Mail sunucusu (MX) kayitlari genelde CDN'in disinda, gercek altyapida kalir.
  - SSL sertifikasi veya favicon hash'i uzerinden Shodan/Censys'te ayni imzaya sahip baska bir IP arama.

## Gercek Dunya Ornegi

- Birçok guvenlik arastirmasinda, Cloudflare gibi bir CDN/WAF arkasina saklanan sitelerin gercek origin sunucu IP'sinin, **gecmis DNS kayitlari** veya **yanlis yapilandirilmis mail sunucusu** uzerinden bulundugu ve boylece CDN'in sagladigi DDoS/WAF korumasinin tamamen atlatilabildigi gosterilmistir. Bu, [Cloudflare notundaki](14-cloudflare-trafik-icerik-gizlilik.md) "yanlis yapilandirmada gercek sunucu IP'sinin bulunabilmesi" riskinin somut teknik karsiligidir.

## Araclar

| Arac | Amac |
| --- | --- |
| `whois` | IP/domain sahiplik ve ASN bilgisi |
| `dig -x <ip>` | Reverse DNS (PTR) sorgusu |
| viewdns.info (Reverse IP Lookup) | Ayni sunucudaki diger domainleri listeleme |
| Shodan / Censys | IP, favicon hash, sertifika imzasi uzerinden cihaz/sunucu arama |
| crt.sh, SecurityTrails | Sertifika ve gecmis DNS kayitlariyla origin IP ipucu arama |

### Ornek Komutlar

```
# Bir IP'nin sahiplik/ASN bilgisini sorgula
whois 93.184.216.34

# IP'den hostname'e ters cozumleme
dig -x 93.184.216.34
```

## Yasal Not

Pasif kaynaklardan (whois, crt.sh, Shodan aramasi) bilgi toplamak genelde yasaldir; ancak bulunan gercek origin IP'ye dogrudan istek/tarama yapmak, hedef sisteme aktif mudahale sayilir ve sadece kendi sisteminizde veya yazili izinli bir pentest kapsaminda yapilmalidir.
