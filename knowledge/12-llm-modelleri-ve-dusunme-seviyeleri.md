# LLM Modelleri Arasindaki Farklar ve Dusunme Seviyeleri

## Egitim Verisi (Training Data) Temel Mantigi

- Bir LLM (Buyuk Dil Modeli), internetten ve baska kaynaklardan toplanan devasa miktarda metinle "egitilir".
- Model, bu veriden kelimeler/kavramlar arasindaki istatistiksel iliskileri ogrenir; ezber degil, oruntu (pattern) ogrenimi yapar.
- **Egitim verisinin kalitesi** modelin kalitesini dogrudan belirler: dogru, temiz ve iyi secilmis veriyle egitilen model daha tutarli ve dogru cevaplar verir.

## Insan Sinir Agi (Neural Network) Benzetmesi

- Yapay sinir aglari, insan beynindeki noronlarin birbirine baglanma ve sinyal iletme mantigindan esinlenerek tasarlanmistir.
- Gercek beyinle birebir ayni degildir; ama "girdi -> agirliklandirilmis baglantilar -> cikti" mantigi kabaca beyindeki noron-sinaps yapisina benzetilerek anlatilir.
- Model buyudukce (daha fazla katman/parametre) daha karmasik oruntuleri ogrenebilir hale gelir.

## Neden Bazi Modeller Zor Gorevlerde Daha Iyi?

- Bir modelin zor/karmasik gorevlerdeki basarisi, buyuk olcude **egitim verisinin kalitesine ve secimine** baglidir.
- Ornegin Claude gibi modellerin zor muhendislik/akil yurutme gorevlerinde guclu olmasinin bir nedeni, egitim surecinde kaliteli, dikkatlice secilmis veri ve ek egitim tekniklerinin kullanilmasidir.
- Sadece "daha buyuk model" degil, "daha iyi/temiz veriyle egitilmis model" daha guvenilir sonuc verir.

## Dusunme Seviyeleri (Thinking Levels) ve Model Turleri

Buyuk saglayicilar (OpenAI, Anthropic, Google/Gemini vb.) genelde ayni model ailesinde birden fazla "seviye" sunar:

- **Base / mini modeller:** Basit, hizli, dusuk maliyetli gorevler icin (kisa cevap, basit siniflandirma, format donusumu, net talimatli isler).
- **Full modeller:** Orta-yuksek karmasiklikta gorevler icin dengeli secim.
- **Extra thinking / reasoning modu:** Model, cevap vermeden once daha uzun ve derin "dusunme" adimlari yapar; karmasik, cok adimli, mantik gerektiren problemlerde (mimari karar, zor hata ayiklama, matematik/algoritma) kullanilir.

Pratik kural:
- Net, basit ve talimati belli isler icin **mini/base** model yeterlidir, hizli ve ucuzdur.
- Belirsiz, çok adimli, yuksek dogruluk gerektiren isler icin **extra thinking/reasoning** modu tercih edilir.
- Her ise en buyuk/en pahali modeli kullanmak gereksizdir; gorevin zorlugu ile model seviyesini eslestirmek onemlidir.

## Yeni Model Cikinca Ne Yapmali?

- Buyuk LLM saglayicilari (OpenAI, Anthropic, Google/Gemini vb.) yeni bir model duyurdugunda, genelde **ilk 1-2 ay** o model en guncel egitim/ayar ile en yuksek performansi gosterir.
- Bu donemde yeni modele gecmek, genelde daha dogru ve daha guncel sonuclar almak icin mantiklidir.
- Zamanla saglayicilar maliyet/hiz icin optimizasyon yapabilir; bu yuzden "en yeni model cikinca dene, fark varsa gec" yaklasimi pratikte faydali bir aliskanliktir.
- Yine de her zaman: kritik islerde ciktiyi denetlemeden (bkz. [Agent Ciktilarini Denetleme](05-agent-ciktilarini-denetleme.md)) hicbir modele korukorune guvenilmemelidir.
