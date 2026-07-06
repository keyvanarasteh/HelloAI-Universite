import { NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

export function BrowserExtensionsRisksNote({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Eklentiler Nasil Calisir?" : "How Extensions Work"}>
        <NoteList
          items={
            tr
              ? [
                  "Bir tarayici eklentisi, manifest.json dosyasinda tanimlanan izinler (permissions) cercevesinde tarayici API'lerine erisir.",
                  "Kurulum sirasinda tarayici istenen izinleri gosterir — ama cogu kullanici bu listeyi okumadan kurar.",
                ]
              : [
                  "A browser extension accesses browser APIs within the permissions declared in its manifest.json.",
                  "The browser shows requested permissions at install time — but most users install without reading them.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Yaygin Izin Turleri" : "Common Permission Types"}>
        <NoteTable
          headers={tr ? ["Izin", "Ne Anlama Gelir"] : ["Permission", "What It Means"]}
          rows={[
            [
              tr ? "Tum verilerinizi okuma/degistirme" : "Read and change all your data on all websites",
              tr ? "Ziyaret edilen her sayfanin tum icerigini okuyabilir/degistirebilir." : "Can read/modify the full content of every page you visit.",
            ],
            ["tabs", tr ? "Acik sekmelerin URL/basliklarini gorebilir." : "Can see the URLs/titles of your open tabs."],
            ["cookies", tr ? "Site cookie'lerine (bazen oturum cookie'leri dahil) erisebilir." : "Can access site cookies, sometimes including session cookies."],
            ["clipboard", tr ? "Panoya kopyalanan veriyi okuyabilir/degistirebilir." : "Can read/write data copied to the clipboard."],
            ["history", tr ? "Tarama gecmisini okuyabilir." : "Can read your browsing history."],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Gercek Dunya Riskleri" : "Real-World Risks"}>
        <NoteCallout tone="warning">
          {tr
            ? "El degistiren eklentiler: populer bir eklenti baskasina satilip, sahiplik degisikliginden sonra sessizce zararli kod (reklam enjeksiyonu, veri toplama) icerecek sekilde guncellenebilir. Gercek dunya ornegi: milyonlarca kullanicisi olan 'The Great Suspender' Chrome eklentisi, 2021'de sahiplik degisikligi sonrasi zararli davranis tespit edilince Google tarafindan Chrome Web Store'dan kaldirilmis ve kullanicilarin tarayicilarindan otomatik devre disi birakilmistir."
            : "Extensions changing hands: a popular extension can be sold, then quietly updated with malicious code (ad injection, data harvesting) under new ownership. Real-world example: 'The Great Suspender' Chrome extension, with millions of users, was pulled from the Chrome Web Store and auto-disabled by Google in 2021 after malicious behavior was found following an ownership change."}
        </NoteCallout>
        <NoteList
          items={
            tr
              ? [
                  "Veri toplayan 'ucretsiz' eklentiler: bazi ucretsiz VPN/ekran goruntusu eklentilerinin, genis izinlerini kullanarak tarama gecmisi/form verisi toplayip ucuncu taraflara sattigi arastirmalarla ortaya cikmistir.",
                  "Oturum/cookie hirsizligi: genis izinli kotu niyetli bir eklenti, oturum cookie'lerini okuyup disariya gonderebilir, bu da hesap ele gecirmeye kadar gidebilir.",
                ]
              : [
                  "Data-harvesting 'free' extensions: research has repeatedly found free VPN/screenshot extensions using their broad permissions to collect browsing history/form data and sell it to third parties.",
                  "Session/cookie theft: a malicious extension with broad permissions can read session cookies and send them out, potentially leading to account takeover.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Savunma Onerileri" : "Defensive Recommendations"}>
        <NoteList
          items={
            tr
              ? [
                  "Sadece gercekten ihtiyac duydugun eklentileri kur, kurulmadan once izinleri oku.",
                  "Yayimcinin itibarina, yorumlarina ve son guncelleme tarihine bak.",
                  "Kullanmadigin eklentileri duzenli olarak kaldir (chrome://extensions).",
                  "Kurumsal ortamda sadece onaylanan eklentilere izin veren bir politika (allowlist) uygula.",
                  "Hassas islemlerde (bankacilik, kurumsal giris) gereksiz eklentileri devre disi birak veya ayri bir tarayici profili kullan.",
                ]
              : [
                  "Only install extensions you actually need, and read the requested permissions first.",
                  "Check the publisher's reputation, reviews, and last update date.",
                  "Regularly remove extensions you no longer use (chrome://extensions).",
                  "In an organization, enforce an allowlist policy for approved extensions only.",
                  "For sensitive tasks (banking, corporate login), disable unnecessary extensions or use a separate browser profile.",
                ]
          }
        />
      </NoteSection>

      <NoteCallout>
        {tr
          ? "Bu bilgi kullanicilarin kendi guvenligini korumasi icin savunma amaclidir; bir eklentiyi kotuye kullanacak sekilde gelistirmek veya baskalarinin verisini izinsiz toplamak KVKK ve ilgili bilisim suclari mevzuati kapsaminda suctur."
          : "This information is meant for defensive, personal-safety purposes; building an extension to abuse users or collecting others' data without consent is a crime under data-protection and computer-crime law."}
      </NoteCallout>
    </>
  );
}
