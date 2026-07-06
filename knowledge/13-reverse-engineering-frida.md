# Tersine Muhendislik (Reverse Engineering) ve Frida — 2. Gun

> Bu dosya bir **yer tutucudur (placeholder)**. Icerik, atolyenin 2. gununde canli anlatimla doldurulacaktir. Asagidaki liste, o oturumda islenecek konularin taslak sirasidir.

Referans proje: [`sahelfarid/reverse-engineering`](https://github.com/sahelfarid/reverse-engineering) — ADB ve Frida uzerine kurulu bir Android inceleme/otomasyon paneli.

## Islenecek Konu Basliklari (TOC)

1. ADB (Android Debug Bridge) temelleri: cihaz baglama, yetkilendirme, shell erisimi.
2. Cihaz ve paket yonetimi: APK kurma/kaldirma, izinler, uygulama incelemesi (App Inspector).
3. Dosya sistemi erisimi ve yedekleme (backup / pull / push).
4. Logcat ile canli log izleme ve filtreleme.
5. Ekran araclari ve input otomasyonu (tap / swipe / macro kayit-oynatma).
6. Root tespiti (root detection) ve rootlu cihazlarda calisma farklari.
7. Frida ile dinamik enstrumantasyon: `frida-server` kurulumu, process attach/spawn.
8. Frida script yazma: JavaScript hook'lari, fonksiyon ele gecirme (hooking) mantigi.
9. Guvenlik modeli: yetkili test kavrami, login/CSRF/audit log neden onemli.
10. Yasal ve etik sinirlar: sadece kendi cihaz/uygulamaniz uzerinde, izinli ortamlarda test.

## Katkiya Davet

Bu konuyu dinledikten sonra ogrenciler asagidaki adimlarla projeye katki yapmaya tesvik edilir:

1. Repoyu fork'la: [github.com/sahelfarid/reverse-engineering](https://github.com/sahelfarid/reverse-engineering)
2. `docs/todo-*.md` dosyalarindaki acik gorevlerden birini sec (ornek: `todo-frida.md`, `todo-root.md`, `todo-apktool.md`).
3. Kucuk, test edilebilir bir iyilestirme yap ve PR ac.
4. [Open Source Katki Sureci](04-open-source-katki-sureci.md) dosyasindaki adimlari izle.
