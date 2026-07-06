# Wappalyzer Eklentisi ve Kullanimi

## Wappalyzer Nedir?

- Wappalyzer, bir web sitesinin arkasinda hangi teknolojilerin kullanildigini (CMS, JavaScript framework'u, analytics araci, CDN, e-ticaret altyapisi, sunucu yazilimi) tespit eden bir tarayici eklentisi ve web servisidir.
- Tamamen **pasif** calisir: hedefe ekstra bir istek gondermez, sadece tarayicinin zaten yukledigi sayfanin HTML/JS kaynak kodunu, HTTP header'larini ve cookie'lerini bilinen teknoloji imzalariyla (fingerprint) karsilastirir.

## Nasil Kullanilir?

1. Chrome/Firefox web magazasindan Wappalyzer eklentisini kur.
2. Herhangi bir siteyi ziyaret et.
3. Adres cubugundaki Wappalyzer ikonuna tikla.
4. Cikan listede tespit edilen teknolojileri incele: CMS (orn. WordPress, Shopify), JS framework (React, Vue), analytics (Google Analytics), CDN/WAF (Cloudflare), sunucu (Nginx, Apache) gibi kategoriler.

## Kullanim Alanlari

- **Pazarlama/rekabet analizi:** rakip sitelerin hangi altyapiyi kullandigini gorme.
- **Bug bounty / pentest kesif fazi:** hangi CMS/eklenti/versiyon kullanildigini ogrenip, o versiyona ait bilinen (public) CVE'leri arastirma.
- **Kendi sitenizi denetleme:** kullandiginiz teknolojilerin disaridan ne kadar goruntulenebilir oldugunu anlama.

## Gercek Dunya Ornegi

- Bug bounty avcilari sikca once Wappalyzer ile bir hedefin eski/guncellenmemis bir WordPress eklentisi kullandigini tespit eder, ardindan o eklentinin bilinen guvenlik acigini (CVE) arastirip zafiyeti dogrular. Bu, "pasif teknoloji tespiti -> bilinen zafiyet arama" akisinin klasik bir ornegidir.

## Benzer Araclar

- **BuiltWith** — benzer amacli, daha genis veritabanina sahip web servisi.
- **WhatCMS** — sadece CMS tespiti icin ozellesmis servis.
- **Nmap `http-generator` script'i** — HTTP meta etiketlerinden CMS tespiti yapan komut satiri alternatifi.

## Yasal Not

Wappalyzer tamamen pasif oldugu icin (tarayicinin zaten yukledigi veriyi okur), genel olarak zararsiz/yasal bir kesif teknigi sayilir; ancak tespit sonrasi bulunan bir zafiyeti gercekten test etmek (exploitation) icin ayrica izin gerekir.
