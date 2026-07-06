# Tarayici Eklentileri: Izinler, Riskler ve Erisilen Veriler

## Eklentiler Nasil Calisir?

- Bir tarayici eklentisi, `manifest.json` dosyasinda tanimlanan izinler (permissions) cercevesinde tarayici API'lerine erisir.
- Kurulum sirasinda tarayici, eklentinin istedigi izinleri kullaniciya gosterir — ama cogu kullanici bu listeyi okumadan "Ekle" der.

## Yaygin Izin Turleri ve Anlami

| Izin | Ne Anlama Gelir |
| --- | --- |
| "Read and change all your data on all websites" | Ziyaret edilen her sayfanin tum icerigini okuyabilir/degistirebilir |
| `tabs` | Acik sekmelerin URL/basliklarini gorebilir |
| `cookies` | Site cookie'lerine (bazen oturum cookie'leri dahil) erisebilir |
| `clipboard` | Panoya kopyalanan veriyi okuyabilir/degistirebilir |
| `history` | Tarama gecmisini okuyabilir |

## Gercek Dunya Riskleri

- **El degistiren eklentiler:** populer, guvenilir bir eklenti baska birine satilip, sahiplik degisikliginden sonra sessizce zararli kod (reklam enjeksiyonu, veri toplama) icerecek sekilde guncellenebilir. **Gercek dunya ornegi:** milyonlarca kullanicisi olan "The Great Suspender" Chrome eklentisi, 2021'de sahiplik degisikligi sonrasi zararli davranis tespit edilince Google tarafindan Chrome Web Store'dan kaldirilmis ve kullanicilarin tarayicilarindan otomatik devre disi birakilmistir.
- **Veri toplayan "ucretsiz" eklentiler:** bazi ucretsiz VPN, ekran goruntusu alma veya "sayfa cevirici" eklentilerinin, genis izinlerini kullanarak kullanicilarin tarama gecmisini/form verilerini topladigi ve ucuncu taraflara sattigi arastirmalarla ortaya cikmistir.
- **Oturum/cookie hirsizligi:** "tum verilerinizi okuyup degistirebilir" izni olan kotu niyetli bir eklenti, oturum cookie'lerini okuyup kendi sunucusuna gonderebilir, bu da hesap ele gecirmeye kadar gidebilir.

## Savunma Onerileri

- Sadece gercekten ihtiyac duydugun eklentileri kur, kurulmadan once istenen izinleri oku.
- Yayimcinin itibarina, yorumlarina ve son guncelleme tarihine bak.
- Kullanmadigin eklentileri duzenli olarak kaldir (`chrome://extensions`).
- Kurumsal ortamlarda, sadece onaylanan eklentilerin kurulmasina izin veren bir politika (allowlist) uygula.
- Hassas islemler (bankacilik, kurumsal giris) yaparken mumkunse gereksiz eklentileri devre disi birak veya ayri bir tarayici profili kullan.

## Yasal/Etik Not

Bu bilgi, kullanicilarin kendi guvenligini korumasi icin savunma amaclidir; bir eklentiyi kotuye kullanacak sekilde gelistirmek veya baskalarinin verisini izinsiz toplamak, KVKK ve ilgili bilisim suclari mevzuati kapsaminda suctur.
