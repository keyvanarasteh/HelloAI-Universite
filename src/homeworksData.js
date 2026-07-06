import { Homework1StaticSite } from "./homeworks/Homework1.jsx";
import { Homework2FeedbackContribution } from "./homeworks/Homework2.jsx";
import { Homework3GlossaryExamples } from "./homeworks/Homework3.jsx";
import { Homework4EnumerationLab } from "./homeworks/Homework4.jsx";
import { Homework5IncidentKillChain } from "./homeworks/Homework5.jsx";
import { Homework6DnsEnumeration } from "./homeworks/Homework6.jsx";
import { Homework7WafFingerprint } from "./homeworks/Homework7.jsx";
import { Homework8HostVpsAudit } from "./homeworks/Homework8.jsx";
import { Homework9WappalyzerAudit } from "./homeworks/Homework9.jsx";
import { Homework10ExtensionAudit } from "./homeworks/Homework10.jsx";

export const homeworks = [
  {
    id: "static-site",
    number: 1,
    title: {
      tr: "Basit Static Web Sitesi ve Responsive Tasarim",
      en: "Simple Static Website & Responsive Design",
    },
    tagline: {
      tr: "AI araciyla veya kendi kodunla static bir site kur, mobil/tablet/masaustunde duzgun calistir.",
      en: "Build a static site with an AI tool or your own code, and make it work well on mobile/tablet/desktop.",
    },
    Component: Homework1StaticSite,
  },
  {
    id: "feedback-contribution",
    number: 2,
    title: {
      tr: "Geri Bildirim Sayfasina Katki",
      en: "Contribute to the Feedback Page",
    },
    tagline: {
      tr: "Fork, branch, commit, push, PR: kendi geri bildirimini gercek bir Pull Request ile ekle.",
      en: "Fork, branch, commit, push, PR: add your own feedback with a real Pull Request.",
    },
    Component: Homework2FeedbackContribution,
  },
  {
    id: "glossary-examples",
    number: 3,
    title: {
      tr: "Terimler Sozlugune Gercek Dunya Ornekleri Ekle",
      en: "Add Real-World Examples to the Glossary",
    },
    tagline: {
      tr: "0-day, guvenlik odakli Linux dagitimlari ve trend acik kaynak depolari icin arastir ve katki yap.",
      en: "Research and contribute examples for 0-days, security-focused Linux distros, and trending open-source repos.",
    },
    Component: Homework3GlossaryExamples,
  },
  {
    id: "enumeration-lab",
    number: 4,
    title: {
      tr: "Enumeration Lab: scanme.nmap.org",
      en: "Enumeration Lab: scanme.nmap.org",
    },
    tagline: {
      tr: "Pasif ve aktif enumeration'i gercek ama yasal bir hedefte pratik yap, bulgularini raporla.",
      en: "Practice passive and active enumeration on a real but legal target, and report your findings.",
    },
    Component: Homework4EnumerationLab,
  },
  {
    id: "incident-kill-chain",
    number: 5,
    title: {
      tr: "Gercek Bir Saldiriyi Kill Chain Olarak Analiz Et",
      en: "Analyze a Real Attack as a Kill Chain",
    },
    tagline: {
      tr: "WannaCry, Log4Shell, SolarWinds gibi gercek bir olayi exploit/payload/post-exploitation fazlarina gore incele.",
      en: "Break down a real incident like WannaCry, Log4Shell, or SolarWinds by exploit/payload/post-exploitation phase.",
    },
    Component: Homework5IncidentKillChain,
  },
  {
    id: "dns-enumeration-practice",
    number: 6,
    title: {
      tr: "DNS Enumeration Pratigi",
      en: "DNS Enumeration Practice",
    },
    tagline: {
      tr: "Kendi domaininde pasif/aktif DNS enumeration yap ve olasi subdomain takeover riskini kontrol et.",
      en: "Run passive/active DNS enumeration on your own domain and check for a possible subdomain takeover risk.",
    },
    Component: Homework6DnsEnumeration,
  },
  {
    id: "waf-fingerprint-practice",
    number: 7,
    title: {
      tr: "WAF Tespiti Pratigi",
      en: "WAF Fingerprinting Practice",
    },
    tagline: {
      tr: "wafw00f ve manuel header incelemesiyle kendi sitende (veya izinli hedefte) WAF tespiti yap.",
      en: "Use wafw00f and manual header inspection to fingerprint a WAF on your own site (or an authorized target).",
    },
    Component: Homework7WafFingerprint,
  },
  {
    id: "host-vps-audit",
    number: 8,
    title: {
      tr: "Kendi Host/VPS Attack Surface'ini Denetle",
      en: "Audit Your Own Host/VPS Attack Surface",
    },
    tagline: {
      tr: "whois, reverse DNS ve reverse IP ile kendi altyapinin disaridan ne kadar gorunur oldugunu bul.",
      en: "Use whois, reverse DNS, and reverse IP lookups to see how visible your own infrastructure is from the outside.",
    },
    Component: Homework8HostVpsAudit,
  },
  {
    id: "wappalyzer-audit",
    number: 9,
    title: {
      tr: "Wappalyzer ile Teknoloji Denetimi",
      en: "Technology Audit with Wappalyzer",
    },
    tagline: {
      tr: "5 siteyi Wappalyzer ile tara, tespit edilen bir teknoloji icin gercek bir CVE arastir.",
      en: "Scan 5 sites with Wappalyzer and research a real CVE for one of the detected technologies.",
    },
    Component: Homework9WappalyzerAudit,
  },
  {
    id: "extension-permission-audit",
    number: 10,
    title: {
      tr: "Tarayici Eklentisi Izin Denetimi",
      en: "Browser Extension Permission Audit",
    },
    tagline: {
      tr: "Kurulu eklentilerini ve izinlerini denetle, gereksiz/riskli olanlari tespit et.",
      en: "Audit your installed extensions and their permissions, and flag the unnecessary or risky ones.",
    },
    Component: Homework10ExtensionAudit,
  },
];
