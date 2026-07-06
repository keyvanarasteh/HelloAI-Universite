# Agent Kurallari, Modeller ve Araclar

## Kullanilan Agent Araclari

- **Codex** — OpenAI'in agentic kod asistani.
- **Claude Code** — Anthropic'in terminal/IDE tabanli agentic kod asistani.
- **VSCode Chat** — VSCode icine gomulu AI sohbet/asistan ozelligi.

## Proje Kurallari Dosyalari

Her agent, projeye ozel davranis kurallarini farkli bir dosyadan okur:

- `AGENTS.md` — genel/OpenAI Codex tabanli agent kurallari icin standart dosya.
- `GEMINI.md` — Google Gemini agent'lari icin proje kurallari.
- `CLAUDE.md` — Claude Code icin proje kurallari (kod stili, tercihler, kisitlamalar vb.).

Bu dosyalar sayesinde agent, proje ozelinde nasil davranmasi gerektigini (kod stili, hangi komutlarin calistirilabilecegi, hangi islemlerin onay gerektirdigi gibi) onceden bilir.

## Reasoning (Akil Yurutme) Kullanim Alanlari

- Karmasik, cok adimli problemlerde modelin daha derin/uzun dusunmesini saglayan mod.
- Mimari karar verme, hata ayiklama, karmasik refactor gibi islerde tercih edilir.

## Mini Modellerin Kullanim Alanlari

- Basit, hizli ve dusuk maliyetli islemler icin (ornek: kisa metin duzenleme, basit siniflandirma, format donusumu) daha kucuk/hizli modeller tercih edilir.
- Her is icin en buyuk modeli kullanmak gereksizdir; ise uygun boyutta model secmek onemlidir.

## Extra Thinking (Ekstra Dusunme) Kullanim Alanlari

- Zor problemlerde modele daha fazla "dusunme butcesi" tanimak, daha dogru ve tutarli sonuclar almayi saglar.
- Basit gorevlerde gereksiz gecikme ve maliyet yaratabilecegi icin her yerde kullanilmaz.

## Skills, Plugins, Tools

- **Tools (araclar):** Agent'in dosya okuma/yazma, komut calistirma, web arama gibi somut eylemleri gerceklestirmesini saglayan yetenekler.
- **Skills (beceriler):** Belirli bir gorev turu icin onceden tanimlanmis, tekrar kullanilabilir talimat/is akislari.
- **Plugins (eklentiler):** Agent'in yeteneklerini genisleten, disaridan eklenebilen paketler (ozel araclar, skill'ler, komutlar bir arada gelebilir).
