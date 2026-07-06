# IDE Kavrami ve Kurulum Adimlari

## IDE Nedir?

- **IDE (Integrated Development Environment / Entegre Gelistirme Ortami):** Kod yazma, calistirma, hata ayiklama, versiyon kontrolu gibi islemleri tek bir uygulama icinde birlestiren yazilim.

## Neden VSCode?

- Ucretsiz ve acik kaynak.
- Neredeyse tum programlama dilleri ve framework'leri icin genis eklenti (extension) destegi.
- Git entegrasyonu, terminal, hata ayiklama araclari hazir gelir.
- Codex ve Claude Code gibi AI agent'lari icin resmi eklentileri mevcut.
- Buyuk bir topluluk ve surekli guncelleme sayesinde her turlu proje icin (web, mobil, gomulu sistem, veri bilimi) uygundur.

## Codex ve Claude Code Eklentilerini VSCode'a Kurma

1. VSCode'u ac, sol menuden **Extensions** (Eklentiler) sekmesine git.
2. Arama kutusuna `Codex` veya `Claude Code` yaz.
3. Ilgili resmi eklentiyi bul ve **Install** butonuna tikla.
4. Kurulum sonrasi istenirse hesap ile giris yap (OpenAI / Anthropic hesabi).
5. Komut paletinden (`Cmd/Ctrl+Shift+P`) agent'i acarak kullanmaya basla.

## Git ve VSCode Baglantisi, Global Ayarlar

Tum platformlarda (Windows, macOS, Linux) terminalde asagidaki adimlar izlenir:

1. Git kurulu mu kontrol et:
   ```bash
   git --version
   ```
2. Global kullanici adi ve e-posta ayarla (butun commit'lerde bu bilgi kullanilir):
   ```bash
   git config --global user.name "Adin Soyadin"
   git config --global user.email "eposta@ornek.com"
   ```
3. Ayarlarin dogru kaydedildigini kontrol et:
   ```bash
   git config --global --list
   ```
4. VSCode'da entegre terminali ac (`` Ctrl+` ``) ve ayni komutlarin calistigini dogrula.
5. VSCode'un sol tarafindaki **Source Control** sekmesinden repo durumunu (degisen dosyalar, commit gecmisi) takip et.
