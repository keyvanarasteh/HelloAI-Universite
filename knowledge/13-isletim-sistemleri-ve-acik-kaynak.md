# Isletim Sistemleri: Windows vs Linux ve Acik Kaynagin Hizli Buyumesi

## Isletim Sistemi Nedir?

- Isletim sistemi (OS), donanim ile uygulamalar arasinda koprü kuran temel yazilimdir: bellek yonetimi, dosya sistemi, surucu (driver) yonetimi ve process/is parcaciklarini yonetir.
- Her program aslinda isletim sistemi uzerinden donanima erisir; dogrudan donanimla konusmaz.

## Windows vs Linux

- **Windows:** Kapali kaynak, Microsoft tarafindan gelistirilir, genis donanim/oyun/kurumsal yazilim destegi, kullanici dostu arayuz.
- **Linux:** Acik kaynak cekirdek (kernel), yuzlerce farkli "dagitim" (distro) uzerine kurulur, sunucularda ve gelistirici ortamlarinda yaygin, terminal/komut satiri agirlikli kullanim sunar.
- Ikisi de gorev yonetimi, dosya sistemi, ag yigini gibi ayni temel isletim sistemi kavramlarina sahiptir; fark lisans modeli, ozellestirilebilirlik ve hedef kullanim alanindadir.

## Linux Dagitimlari (Distro) ve Kullanim Alanlari

- **Kali Linux:** Sizma testi (pentest) ve siber guvenlik arastirmasi icin onceden yuklu guvenlik araclariyla gelen bir Debian tabanli dagitim. Sadece yasal, izinli test ortamlarinda kullanilmalidir; gunluk kullanim icin tasarlanmamistir.
- **Ubuntu Server:** Ubuntu'nun arayuzsuz (headless), sunucu odakli surumu. Web sunuculari, veritabani sunuculari, Docker/konteyner host'lari gibi is yuklerinde yaygin kullanilir; `apt` paket yoneticisiyle yonetilir.
- **CentOS:** Red Hat Enterprise Linux (RHEL) ile uyumlu, kurumsal ortamlarda tercih edilen bir dagitimdi; `yum`/`dnf` paket yoneticisini kullanir. CentOS'un klasik (stable) surumu sona erdi ve yerini CentOS Stream aldi; bu degisiklik kurumsal kullanicilar icin onemli bir donum noktasi oldu.
- **macOS:** Apple'in Unix tabanli (Darwin cekirdegi) isletim sistemi; Apple donanimina ozel, gelistiriciler arasinda populer, hem grafik arayuz hem guclu bir terminal/Unix altyapisi sunar.

## Acik Kaynak Neden Bu Kadar Hizli Buyuyor?

- **Topluluk katkisi:** Dunyanin her yerinden gelistirici ayni projeye PR gonderebilir; gelisim tek bir sirkete bagli kalmaz.
- **Seffaflik:** Kod herkese acik oldugu icin hatalar ve guvenlik aciklari daha hizli fark edilip duzeltilebilir ("cok goz ilkesi").
- **Fork edilebilirlik:** Bir proje istenen yone gitmezse, herkes onu fork'layip kendi vizyonuyla devam ettirebilir; bu da rekabeti ve hizli yeniligi tetikler.
- **Dusuk giris engeli:** Ucretsiz kullanim ve acik kod, kucuk ekiplerin ve ogrencilerin bile katkida bulunmasini kolaylastirir.

### Artilari (Pros)

- Ucretsiz veya dusuk maliyetli kullanim.
- Yuksek ozellestirilebilirlik; kod dogrudan degistirilebilir.
- Genis topluluk destegi ve hizli hata duzeltme.
- Guvenlik aciklarinin herkese acik incelenebilmesi uzun vadede daha saglam yazilima yol acabilir.

### Eksileri (Cons)

- Resmi/kurumsal destek her zaman garanti degildir; bazi projeler topluluk destegine bagimlidir.
- Dokumantasyon kalitesi projeden projeye buyuk fark gosterebilir.
- Cok fazla dagitim/varyant secenegi (fragmantasyon) yeni baslayanlari yorabilir.
- Acik kaynak kodundaki bilinen bir zafiyet, yama uygulanana kadar kotu niyetli kisiler tarafindan da gorulebilir.
