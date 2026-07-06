import { NoteCallout, NoteSection, NoteSteps, TerminalBlock } from "../components/NoteKit.jsx";

export function Homework4EnumerationLab({ lang }) {
  const tr = lang === "tr";

  return (
    <>
      <NoteSection title={tr ? "Odev Konusu" : "Assignment"}>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {tr
            ? "Bu odevde, pasif ve aktif enumeration'i gercek ama tamamen yasal bir hedefte pratik yapacaksin: Nmap projesinin kendi izniyle tarama yapilmasina acik test sunucusu scanme.nmap.org."
            : "In this homework you'll practice passive and active enumeration against a real but fully legal target: scanme.nmap.org, the Nmap project's own scanning-permitted test server."}
        </p>
        <NoteCallout tone="warning">
          {tr
            ? "Onemli: SADECE scanme.nmap.org uzerinde aktif tarama yap. Nmap'in kendi kullanim politikasi bu sunucuyu ogrenme amacli taramaya acikca izin verir; baska hicbir domain/IP'de izinsiz aktif tarama yapma."
            : "Important: only run active scans against scanme.nmap.org. Nmap's own usage policy explicitly allows scanning this host for learning; never run active scans against any other domain/IP without authorization."}
        </NoteCallout>
      </NoteSection>

      <NoteSection title={tr ? "Adim Adim" : "Step by Step"}>
        <NoteSteps
          steps={
            tr
              ? [
                  "Kendi secdigin (veya Odev 1'de yayinladigin) bir domain uzerinde pasif enumeration yap: crt.sh veya theHarvester ile alt alan adi/ e-posta bilgisi topla.",
                  "scanme.nmap.org uzerinde aktif enumeration yap: nmap ile port ve servis taramasi calistir.",
                  "Bulgularini iki grupta listele: 'pasif enumeration ile bulunanlar' ve 'aktif enumeration ile bulunanlar'.",
                  "Her bulgu icin, notta anlatilan hangi enumeration turune ait oldugunu (OSINT, port tarama, banner grabbing, vb.) belirt.",
                  "Kisa bir 'recon raporu' yaz: ne buldun, hangi araci kullandin, sonuc ne anlama geliyor.",
                ]
              : [
                  "Do passive enumeration on a domain of your choice (or the one you published in Homework 1): gather subdomains/emails with crt.sh or theHarvester.",
                  "Do active enumeration against scanme.nmap.org: run an nmap port and service scan.",
                  "List your findings in two groups: 'found via passive enumeration' and 'found via active enumeration'.",
                  "For each finding, note which enumeration technique it came from (OSINT, port scanning, banner grabbing, etc.).",
                  "Write a short recon report: what you found, which tool you used, and what the result means.",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Ornek Komut" : "Example Command"}>
        <TerminalBlock
          caption="nmap (scanme.nmap.org)"
          lines={[
            { comment: true, text: tr ? "# Yalnizca scanme.nmap.org uzerinde calistir" : "# Only run this against scanme.nmap.org" },
            "nmap -sV -sC scanme.nmap.org",
          ]}
        />
      </NoteSection>

      <NoteCallout tone="ok">
        {tr
          ? "Teslim: iki gruba ayrilmis bulgu listesi + kisa recon raporu. Raporu dersin belirledigi sekilde (odev klasoru, e-posta, ders platformu) teslim et."
          : "Delivery: your findings split into the two groups, plus a short recon report. Submit it the way your instructor specifies (assignment folder, email, course platform)."}
      </NoteCallout>
    </>
  );
}
