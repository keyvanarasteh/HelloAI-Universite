# Agent Ciktilarinin Denetlenmesi (Checkup & Audit)

Yapay zeka agent'lari (Claude Code, Codex vb.) kod yazdiginda, yazilan kodun dogrulugu insan tarafindan mutlaka denetlenmelidir.

## Neden Denetim Gerekli?

- Agent'lar hatali, eksik veya yaniltici kod uretebilir ("kendinden emin ama yanlis" cevaplar).
- Uretilen kodun gercekten calistigini ve istenen isi dogru yaptigini dogrulamak gelistiricinin sorumlulugundadir.

## Nasil Denetlenir?

- **Live test:** Uygulamayi gercekten calistirip, tarayicida/terminalde gozle gorup deneyerek dogrulama.
- **Logic test (mantik testi):** Kodun mantiginin, is kurallarina ve beklenen davranisa uygun olup olmadigini okuyarak/dusunerek kontrol etme.

## Unit Test vs Real Test

- **Unit test:** Kucuk, izole edilmis bir fonksiyonun/parcanin beklenen ciktiyi verip vermedigini otomatik olarak kontrol eden testler.
- **Real test (gercek kullanim testi):** Uygulamanin butun olarak, gercek bir kullanicinin yapacagi gibi uctan uca denenmesi (ornek: siteyi acip teste basla, sonuc sayfasina git, mobilde dene).
- Ikisi de gereklidir: unit testler kucuk hatalari erken yakalar, real testler butunun gercekten calistigini garanti eder. Sadece birine guvenmek yeterli degildir.
