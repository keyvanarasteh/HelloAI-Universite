import { useState } from "react";
import { Clipboard, Cookie, Eye, History, ShieldCheck, SquareStack } from "lucide-react";
import { NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

export function BrowserExtensionsRisksNote({ lang }) {
  const tr = lang === "tr";
  const [activePermission, setActivePermission] = useState("all");
  const permissions = {
    all: {
      icon: Eye,
      title: tr ? "Tum site verileri" : "All site data",
      canSee: tr ? "Ziyaret ettigin sayfalarin icerigini okuyup degistirebilir." : "Can read and change content on pages you visit.",
      decision: tr ? "Sadece cok guvendigin ve gercekten gereken eklentiye ver." : "Grant only to extensions you truly trust and need.",
    },
    tabs: {
      icon: SquareStack,
      title: "tabs",
      canSee: tr ? "Acik sekme URL ve basliklarini gorebilir." : "Can see open tab URLs and titles.",
      decision: tr ? "Sekme yonetimi disinda gerekiyorsa sorgula." : "Question it unless tab management needs it.",
    },
    cookies: {
      icon: Cookie,
      title: "cookies",
      canSee: tr ? "Oturum bilgilerine kadar uzanabilecek cookie verilerine erisebilir." : "Can access cookie data that may include session material.",
      decision: tr ? "Yuksek riskli izin; hassas profilde kacın." : "High-risk permission; avoid in sensitive profiles.",
    },
    clipboard: {
      icon: Clipboard,
      title: "clipboard",
      canSee: tr ? "Panoya kopyalanan veriyi okuyabilir veya degistirebilir." : "Can read or change copied clipboard data.",
      decision: tr ? "Parola/OTP kopyaliyorsan ozellikle dikkat et." : "Be especially careful if copying passwords or OTPs.",
    },
    history: {
      icon: History,
      title: "history",
      canSee: tr ? "Tarama gecmisinden ilgi, aliskanlik ve kurum bilgisi cikarabilir." : "Can infer interests, habits, and workplace info from browsing history.",
      decision: tr ? "Gerekmiyorsa verme; kullanmadigin eklentiyi kaldir." : "Do not grant unless needed; remove unused extensions.",
    },
  };
  const active = permissions[activePermission];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Izin Risk Denetleyicisi" : "Permission Risk Inspector"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-2">
            {Object.entries(permissions).map(([id, permission]) => {
              const Icon = permission.icon;
              const selected = id === activePermission;
              return (
                <button
                  key={id}
                  onClick={() => setActivePermission(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{permission.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Izin" : "Permission"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.canSee}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <ShieldCheck size={14} />
                {tr ? "Kurulum karari" : "Install decision"}
              </div>
              <p className="text-sm font-semibold">{active.decision}</p>
            </div>
          </div>
        </div>
      </NoteSection>

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
