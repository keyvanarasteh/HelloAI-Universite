# 0-Day (Sifir Gun) Zafiyetler Nedir?

## Tanim

- **0-day zafiyeti:** Yazilim/donanim ureticisinin henuz haberdar olmadigi veya henuz bir yama (patch) yayinlamadigi guvenlik acigidir.
- Isim buradan gelir: uretici, acigi ogrendiginde yamayi cikarmak icin "0 gunu" vardir — yani acik zaten aktif sekilde bilinir/kullanilir durumdadir.
- **0-day exploit:** Bu aciktan faydalanan, henuz savunmasi (yama/imza) olmayan saldiri kodu veya teknigi.

## Neden Bu Kadar Tehlikeli?

- Savunma tarafinda henuz bir imza veya yama olmadigi icin klasik antivirus/IDS sistemleri tarafindan yakalanmasi zordur.
- Kritik sistemlerde (kamu, saglik, enerji, bankacilik) kullanilirsa buyuk capli hasara yol acabilir.
- APT (Advanced Persistent Threat) gruplari ve devlet destekli saldirganlar tarafindan, hedefli ve uzun sureli saldirilarda sessizce saklanip kullanilir.

## Nasil Ortaya Cikar ve "Satilir"?

- **Sorumlu bildirim (responsible disclosure) / Bug Bounty:** Etik bir arastirmaci acigi bulup dogrudan ureticiye bildirir, karsiliginda odul (bounty) alabilir. Bu, tesvik edilen ve yasal yoldur.
- **Gri/kara pazar:** Bazi arastirmacilar veya gruplar, acigi ureticiye bildirmek yerine en yuksek teklifi verene satar. Aliciler arasinda siber suc orgutleri, bazen de savunma/istihbarat amacli calisan kurumlar olabilir. Hedef platforma gore fiyatlar (kamuya acik haberlere gore) yuz binlerce, hatta milyonlarca dolara ulasabilir.
- Bu pazarin varligi, guvenlik arastirmacilarinin neden "sorumlu bildirim" yapmaya tesvik edildigini ve bug bounty programlarinin neden onemli oldugunu gosterir.

## Savunma Yaklasimlari

- Duzenli ve hizli yama yonetimi (bkz. [Guncelleme ve Yama Yonetimi](17-guncelleme-ve-yama-yonetimi.md)).
- Katmanli guvenlik (defense-in-depth): tek bir onlemle degil, birden fazla savunma katmaniyla korunma.
- Davranissal/anomali tabanli tespit (EDR/behavioral IDS) — bilinen imza olmasa bile supheli davranisi yakalamaya calisir.
- Az yetki ilkesi (least privilege): bir 0-day basarili olsa bile verebilecegi zarari sinirlamak.
- Kurumsal bug bounty programlarina katilim/destek.
