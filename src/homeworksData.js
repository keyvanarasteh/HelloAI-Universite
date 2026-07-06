import { Homework1StaticSite } from "./homeworks/Homework1.jsx";
import { Homework2FeedbackContribution } from "./homeworks/Homework2.jsx";
import { Homework3GlossaryExamples } from "./homeworks/Homework3.jsx";

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
];
