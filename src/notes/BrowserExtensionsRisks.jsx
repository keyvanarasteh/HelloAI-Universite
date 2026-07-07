import { useState } from "react";
import { Clipboard, Cookie, Eye, History, ShieldCheck, SquareStack } from "lucide-react";
import { NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

export function BrowserExtensionsRisksNote({ lang }) {
  const tr = lang === "tr";
  const [activePermission, setActivePermission] = useState("all");
  const permissions = {
    all: {
      icon: Eye,
      title: tr ? "Tüm site verileri" : "All site data",
      canSee: tr ? "Ziyaret ettiğin sayfaların içeriğini okuyup değiştirebilir." : "Can read and change content on pages you visit.",
      decision: tr ? "Yalnızca çok güvendiğin ve gerçekten gereken eklentiye ver." : "Grant only to extensions you truly trust and need.",
    },
    tabs: {
      icon: SquareStack,
      title: "tabs",
      canSee: tr ? "Açık sekme URL ve başlıklarını görebilir." : "Can see open tab URLs and titles.",
      decision: tr ? "Sekme yönetimi dışında gerekiyorsa sorgula." : "Question it unless tab management needs it.",
    },
    cookies: {
      icon: Cookie,
      title: "cookies",
      canSee: tr ? "Oturum bilgilerine kadar uzanabilecek cookie verilerine erişebilir." : "Can access cookie data that may include session material.",
      decision: tr ? "Yüksek riskli izin; hassas profilde kaçın." : "High-risk permission; avoid in sensitive profiles.",
    },
    clipboard: {
      icon: Clipboard,
      title: "clipboard",
      canSee: tr ? "Panoya kopyalanan veriyi okuyabilir veya değiştirebilir." : "Can read or change copied clipboard data.",
      decision: tr ? "Parola/OTP kopyalıyorsan özellikle dikkat et." : "Be especially careful if copying passwords or OTPs.",
    },
    history: {
      icon: History,
      title: "history",
      canSee: tr ? "Tarama geçmişinden ilgi, alışkanlık ve kurum bilgisi çıkarabilir." : "Can infer interests, habits, and workplace info from browsing history.",
      decision: tr ? "Gerekmiyorsa verme; kullanmadığın eklentiyi kaldır." : "Do not grant unless needed; remove unused extensions.",
    },
  };
  const active = permissions[activePermission];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "İzin Risk Denetleyicisi" : "Permission Risk Inspector"}>
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
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "İzin" : "Permission"}</p>
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
                {tr ? "Kurulum kararı" : "Install decision"}
              </div>
              <p className="text-sm font-semibold">{active.decision}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "Eklentiler Nasıl Çalışır?" : "How Extensions Work"}>
        <NoteList
          items={
            tr
              ? [
                  "Bir tarayıcı eklentisi, manifest.json dosyasında tanımlanan izinler (permissions) çerçevesinde tarayıcı API'lerine erişir.",
                  "Kurulum sırasında tarayıcı istenen izinleri gösterir; ancak çoğu kullanıcı bu listeyi okumadan kurar.",
                ]
              : [
                  "A browser extension accesses browser APIs within the permissions declared in its manifest.json.",
                  "The browser shows requested permissions at install time — but most users install without reading them.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Yaygın İzin Türleri" : "Common Permission Types"}>
        <NoteTable
          headers={tr ? ["İzin", "Ne anlama gelir"] : ["Permission", "What It Means"]}
          rows={[
            [
              tr ? "Tüm verilerinizi okuma/değiştirme" : "Read and change all your data on all websites",
              tr ? "Ziyaret edilen her sayfanın tüm içeriğini okuyabilir/değiştirebilir." : "Can read/modify the full content of every page you visit.",
            ],
            ["tabs", tr ? "Açık sekmelerin URL/başlıklarını görebilir." : "Can see the URLs/titles of your open tabs."],
            ["cookies", tr ? "Site cookie'lerine (bazen oturum cookie'leri dahil) erişebilir." : "Can access site cookies, sometimes including session cookies."],
            ["clipboard", tr ? "Panoya kopyalanan veriyi okuyabilir/değiştirebilir." : "Can read/write data copied to the clipboard."],
            ["history", tr ? "Tarama geçmişini okuyabilir." : "Can read your browsing history."],
          ]}
        />
      </NoteSection>

      <NoteSection title={tr ? "Gerçek Dünya Riskleri" : "Real-World Risks"}>
        <NoteCallout tone="warning">
          {tr
            ? "El değiştiren eklentiler: popüler bir eklenti başkasına satılıp, sahiplik değişikliğinden sonra sessizce zararlı kod (reklam enjeksiyonu, veri toplama) içerecek şekilde güncellenebilir. Gerçek dünya örneği: milyonlarca kullanıcısı olan 'The Great Suspender' Chrome eklentisi, 2021'de sahiplik değişikliği sonrası zararlı davranış tespit edilince Google tarafından Chrome Web Store'dan kaldırılmış ve kullanıcıların tarayıcılarından otomatik devre dışı bırakılmıştır."
            : "Extensions changing hands: a popular extension can be sold, then quietly updated with malicious code (ad injection, data harvesting) under new ownership. Real-world example: 'The Great Suspender' Chrome extension, with millions of users, was pulled from the Chrome Web Store and auto-disabled by Google in 2021 after malicious behavior was found following an ownership change."}
        </NoteCallout>
        <NoteList
          items={
            tr
              ? [
                  "Veri toplayan 'ücretsiz' eklentiler: bazı ücretsiz VPN/ekran görüntüsü eklentilerinin, geniş izinlerini kullanarak tarama geçmişi/form verisi toplayıp üçüncü taraflara sattığı araştırmalarla ortaya çıkmıştır.",
                  "Oturum/cookie hırsızlığı: geniş izinli kötü niyetli bir eklenti, oturum cookie'lerini okuyup dışarıya gönderebilir; bu da hesap ele geçirmeye kadar gidebilir.",
                ]
              : [
                  "Data-harvesting 'free' extensions: research has repeatedly found free VPN/screenshot extensions using their broad permissions to collect browsing history/form data and sell it to third parties.",
                  "Session/cookie theft: a malicious extension with broad permissions can read session cookies and send them out, potentially leading to account takeover.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Savunma Önerileri" : "Defensive Recommendations"}>
        <NoteList
          items={
            tr
              ? [
                  "Yalnızca gerçekten ihtiyaç duyduğun eklentileri kur, kurmadan önce izinleri oku.",
                  "Yayımcının itibarına, yorumlarına ve son güncelleme tarihine bak.",
                  "Kullanmadığın eklentileri düzenli olarak kaldır (chrome://extensions).",
                  "Kurumsal ortamda sadece onaylanan eklentilere izin veren bir politika (allowlist) uygula.",
                  "Hassas işlemlerde (bankacılık, kurumsal giriş) gereksiz eklentileri devre dışı bırak veya ayrı bir tarayıcı profili kullan.",
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
          ? "Bu bilgi kullanıcıların kendi güvenliğini koruması için savunma amaçlıdır; bir eklentiyi kötüye kullanacak şekilde geliştirmek veya başkalarının verisini izinsiz toplamak KVKK ve ilgili bilişim suçları mevzuatı kapsamında suçtur."
          : "This information is meant for defensive, personal-safety purposes; building an extension to abuse users or collecting others' data without consent is a crime under data-protection and computer-crime law."}
      </NoteCallout>
    </>
  );
}
