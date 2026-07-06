import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Code2,
  Compass,
  Cpu,
  ExternalLink,
  FlaskConical,
  Github,
  GitCommit,
  GraduationCap,
  Home,
  Languages,
  Linkedin,
  ListChecks,
  Menu,
  Moon,
  NotebookPen,
  Plus,
  RotateCcw,
  Rocket,
  Save,
  ShieldCheck,
  Shuffle,
  Sun,
  Trash2,
  University,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import {
  fieldKeys,
  fields,
  featuredUniversities,
  questions,
  researchChecklist,
  resources,
  t,
  talkQuestions,
} from "./data.js";
import { instructor, knowledgeTopics } from "./knowledge.js";
import { buildInProgress, buildTimeline } from "./buildProcess.js";

const primaryNav = [
  { id: "landing", icon: Home },
  { id: "knowledge", icon: GraduationCap },
];

const pusulaPages = [
  { id: "home", icon: Compass },
  { id: "test", icon: ClipboardCheck },
  { id: "results", icon: BarChart3 },
  { id: "guide", icon: BookOpen },
  { id: "projects", icon: FlaskConical },
  { id: "compare", icon: University },
  { id: "shortlist", icon: ListChecks },
  { id: "journal", icon: NotebookPen },
  { id: "resources", icon: ExternalLink },
];

const secondaryNav = [
  { id: "buildProcess", icon: GitCommit },
  { id: "instructor", icon: UserRound },
];

const fieldIcons = {
  software: Code2,
  security: ShieldCheck,
  hardware: Cpu,
  electronics: Zap,
};

const emptyComparison = {
  university: "",
  program: "",
  city: "",
  rank: "",
  language: "",
  curriculum: "",
  labs: "",
  notes: "",
};

const emptyShortlistItem = {
  university: "",
  program: "",
  reason: "",
};

const emptyJournal = {
  current: "",
  why: "",
  excited: "",
  worried: "",
  experiment: "",
  finalSentence: "",
};

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function useStoredState(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    return safeParse(window.localStorage.getItem(key), initialValue);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("bp_theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function calculateScores(answers) {
  const raw = Object.fromEntries(fieldKeys.map((key) => [key, 0]));
  const max = Object.fromEntries(fieldKeys.map((key) => [key, 0]));

  questions.forEach((question) => {
    fieldKeys.forEach((key) => {
      max[key] += Math.max(0, question.weights[key]) * 5;
      raw[key] += (Number(answers[question.id]) || 0) * question.weights[key];
    });
  });

  const scores = Object.fromEntries(
    fieldKeys.map((key) => [key, max[key] ? Math.round((raw[key] / max[key]) * 100) : 0])
  );

  const sorted = [...fields].sort((a, b) => scores[b.id] - scores[a.id]);

  return {
    scores,
    top: sorted.slice(0, 2).map((field) => field.id),
    completedAt: new Date().toISOString(),
  };
}

function App() {
  const [lang, setLang] = useStoredState("bp_lang", "tr");
  const [theme, setTheme] = useState(getInitialTheme);
  const [page, setPage] = useStoredState("bp_page", "landing");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [answers, setAnswers] = useStoredState("bp_answers", {});
  const [result, setResult] = useStoredState("bp_result", null);
  const [comparisons, setComparisons] = useStoredState("bp_comparisons", []);
  const [shortlist, setShortlist] = useStoredState("bp_shortlist", []);
  const [journal, setJournal] = useStoredState("bp_journal", emptyJournal);
  const [pendingKnowledgeTopic, setPendingKnowledgeTopic] = useState(null);

  const copy = t[lang] || t.tr;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("bp_theme", theme);
  }, [theme]);

  const navigate = (nextPage) => {
    setPage(nextPage);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openKnowledgeTopic = (topicId) => {
    setPendingKnowledgeTopic(topicId);
    navigate("knowledge");
  };

  const toggleLanguage = () => setLang((current) => (current === "tr" ? "en" : "tr"));
  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  const shared = {
    lang,
    theme,
    copy,
    navigate,
    openKnowledgeTopic,
    answers,
    setAnswers,
    result,
    setResult,
    comparisons,
    setComparisons,
    shortlist,
    setShortlist,
    journal,
    setJournal,
    pendingKnowledgeTopic,
    setPendingKnowledgeTopic,
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header
        copy={copy}
        page={page}
        navigate={navigate}
        lang={lang}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="mx-auto max-w-7xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        {page === "landing" && <WorkshopLandingPage {...shared} />}
        {page === "home" && <HomePage {...shared} />}
        {page === "test" && <TestPage {...shared} />}
        {page === "results" && <ResultsPage {...shared} />}
        {page === "guide" && <GuidePage {...shared} />}
        {page === "projects" && <ProjectsPage {...shared} />}
        {page === "compare" && <ComparePage {...shared} />}
        {page === "shortlist" && <ShortlistPage {...shared} />}
        {page === "journal" && <JournalPage {...shared} />}
        {page === "resources" && <ResourcesPage {...shared} />}
        {page === "knowledge" && <KnowledgePage {...shared} />}
        {page === "buildProcess" && <BuildProcessPage {...shared} />}
        {page === "instructor" && <InstructorPage {...shared} />}
      </main>

      <footer className="border-t border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--muted)]">
        <p>{copy.common.yourData}</p>
      </footer>
    </div>
  );
}

function Header({
  copy,
  page,
  navigate,
  lang,
  toggleLanguage,
  theme,
  toggleTheme,
  mobileOpen,
  setMobileOpen,
}) {
  const pusulaActive = pusulaPages.some((item) => item.id === page);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface-glass)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="flex shrink-0 items-center gap-2 rounded-md px-2 py-2 text-left font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
          onClick={() => navigate("landing")}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
            <Compass size={20} />
          </span>
          <span className="hidden shrink-0 xl:inline">{copy.appName}</span>
        </button>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={page === item.id}
              label={copy.nav[item.id]}
              onClick={() => navigate(item.id)}
            />
          ))}
          <PusulaDropdown copy={copy} page={page} navigate={navigate} active={pusulaActive} />
          {secondaryNav.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={page === item.id}
              label={copy.nav[item.id]}
              onClick={() => navigate(item.id)}
            />
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <IconTextButton
            icon={Languages}
            label={lang.toUpperCase()}
            ariaLabel={copy.common.language}
            onClick={toggleLanguage}
          />
          <IconTextButton
            icon={theme === "light" ? Sun : Moon}
            label={theme === "light" ? copy.common.themeLight : copy.common.themeDark}
            ariaLabel={theme === "light" ? copy.common.themeLight : copy.common.themeDark}
            onClick={toggleTheme}
          />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="grid gap-2 border-t border-[var(--border)] bg-[var(--surface)] px-4 py-3 lg:hidden">
          {primaryNav.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={page === item.id}
              label={copy.nav[item.id]}
              onClick={() => navigate(item.id)}
              mobile
            />
          ))}
          <p className="mt-2 px-3 text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
            {copy.nav.pusula}
          </p>
          {pusulaPages.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={page === item.id}
              label={copy.nav[item.id]}
              onClick={() => navigate(item.id)}
              mobile
              indent
            />
          ))}
          {secondaryNav.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={page === item.id}
              label={copy.nav[item.id]}
              onClick={() => navigate(item.id)}
              mobile
            />
          ))}
        </nav>
      )}
    </header>
  );
}

function PusulaDropdown({ copy, page, navigate, active }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const select = (id) => {
    navigate(id);
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen((value) => !value)}
        title={copy.nav.pusula}
        className={[
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
          active || open
            ? "bg-[var(--brand-soft)] text-[var(--brand)]"
            : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
        ].join(" ")}
      >
        <Compass size={17} />
        <span className="hidden xl:inline">{copy.nav.pusula}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-40 mt-2 grid w-56 -translate-x-1/2 gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2 shadow-soft">
          {pusulaPages.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={page === item.id}
              label={copy.nav[item.id]}
              onClick={() => select(item.id)}
              mobile
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NavButton({ item, label, active, onClick, mobile = false, indent = false }) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      title={label}
      className={[
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
        mobile ? "justify-start" : "justify-center",
        indent ? "ml-3" : "",
        active
          ? "bg-[var(--brand-soft)] text-[var(--brand)]"
          : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
      ].join(" ")}
    >
      <Icon size={17} />
      <span className={mobile ? "" : "hidden xl:inline"}>{label}</span>
    </button>
  );
}

function IconTextButton({ icon: Icon, label, ariaLabel, onClick }) {
  return (
    <button
      className="flex min-h-10 items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
      onClick={onClick}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <Icon size={17} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function WorkshopLandingPage({ lang, copy, navigate, openKnowledgeTopic }) {
  return (
    <div className="space-y-10 py-6">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="min-w-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft sm:p-8 lg:flex lg:min-h-[380px] lg:flex-col lg:justify-center">
          <p className="text-sm font-semibold uppercase text-[var(--brand)]">{copy.landing.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl break-words text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {copy.landing.title}
          </h1>
          <p className="mt-5 max-w-2xl break-words text-base leading-7 text-[var(--muted)] sm:text-lg">
            {copy.landing.subtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton icon={GraduationCap} onClick={() => navigate("knowledge")}>
              {copy.landing.ctaNotes}
            </PrimaryButton>
            <SecondaryButton icon={Compass} onClick={() => navigate("home")}>
              {copy.landing.ctaPusula}
            </SecondaryButton>
            <SecondaryButton icon={GitCommit} onClick={() => navigate("buildProcess")}>
              {copy.landing.ctaProcess}
            </SecondaryButton>
          </div>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <UserRound size={22} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[var(--muted)]">{copy.nav.instructor}</p>
                <h2 className="truncate text-lg font-bold">{instructor.name}</h2>
              </div>
            </div>
            <button
              className="mt-5 flex w-full items-center justify-center rounded-md border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
              onClick={() => navigate("instructor")}
            >
              {copy.landing.ctaInstructor}
            </button>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-lg font-bold">{copy.landing.pusulaTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy.landing.pusulaSubtitle}</p>
            <button
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-4 py-3 text-sm font-bold text-white transition hover:opacity-90"
              onClick={() => navigate("home")}
            >
              <ExternalLink size={16} />
              {copy.landing.pusulaCta}
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">{copy.landing.notesTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy.landing.notesSubtitle}</p>
          </div>
          <SecondaryButton icon={GraduationCap} onClick={() => navigate("knowledge")}>
            {copy.landing.notesSeeAll}
          </SecondaryButton>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {knowledgeTopics.map((topicItem) => (
            <button
              key={topicItem.id}
              onClick={() => openKnowledgeTopic(topicItem.id)}
              className="field-card min-h-[188px] rounded-lg border border-[var(--border)] p-5 text-left transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`field-icon field-${topicItem.tone}`}>
                  <GraduationCap size={20} />
                </span>
                <span className="rounded-md bg-[var(--surface-2)] px-2 py-1 text-[10px] font-bold uppercase text-[var(--muted)]">
                  {topicItem.day === 2 ? copy.knowledge.day2 : copy.knowledge.day1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug">{topicItem.title[lang]}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--muted)]">{topicItem.tagline[lang]}</p>
              {topicItem.placeholder && (
                <span className="mt-3 inline-block rounded-md bg-[var(--surface-2)] px-2 py-1 text-[10px] font-bold uppercase text-[var(--muted)]">
                  {copy.knowledge.placeholderBadge}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">{copy.landing.processTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy.landing.processSubtitle}</p>
          </div>
          <PrimaryButton icon={GitCommit} onClick={() => navigate("buildProcess")}>
            {copy.landing.processCta}
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}

function HomePage({ lang, copy, navigate, result }) {
  const topResult = result?.top?.[0];
  const topField = fields.find((field) => field.id === topResult);

  return (
    <div className="space-y-8">
      <section className="grid gap-6 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="min-w-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft sm:p-8 lg:flex lg:min-h-[420px] lg:flex-col lg:justify-center">
          <p className="text-sm font-semibold uppercase text-[var(--brand)]">{copy.home.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl break-words text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {copy.home.title}
          </h1>
          <p className="mt-5 max-w-2xl break-words text-base leading-7 text-[var(--muted)] sm:text-lg">
            {copy.home.subtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton icon={ClipboardCheck} onClick={() => navigate("test")}>
              {copy.common.startTest}
            </PrimaryButton>
            <SecondaryButton icon={BookOpen} onClick={() => navigate("guide")}>
              {copy.common.inspectFields}
            </SecondaryButton>
            <SecondaryButton icon={University} onClick={() => navigate("compare")}>
              {copy.common.compareUniversities}
            </SecondaryButton>
          </div>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[var(--muted)]">
                  {topField ? copy.home.continueResult : copy.home.noResult}
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  {topField ? topField.title[lang] : copy.common.startTest}
                </h2>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <BarChart3 size={22} />
              </span>
            </div>
            <button
              className="mt-5 flex w-full items-center justify-center rounded-md border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
              onClick={() => navigate(topField ? "results" : "test")}
            >
              {topField ? copy.nav.results : copy.common.startTest}
            </button>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-lg font-bold">{copy.home.processTitle}</h2>
            <ol className="mt-4 grid gap-3">
              {copy.home.process.map((item, index) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--surface-2)] font-bold text-[var(--text)]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {copy.home.quickStats.map((item) => (
              <div key={item} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {fields.map((field) => (
          <FieldCard key={field.id} field={field} lang={lang} onClick={() => navigate("guide")} />
        ))}
      </section>
    </div>
  );
}

function TestPage({ lang, copy, answers, setAnswers, setResult, navigate }) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const firstUnanswered = questions.findIndex((question) => !answers[question.id]);
    return firstUnanswered >= 0 ? firstUnanswered : 0;
  });
  const [warning, setWarning] = useState(false);
  const question = questions[currentIndex];
  const selected = answers[question.id];
  const answeredCount = questions.filter((item) => answers[item.id]).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  const chooseAnswer = (value) => {
    setWarning(false);
    setAnswers({ ...answers, [question.id]: value });
  };

  const goNext = () => {
    if (!answers[question.id]) {
      setWarning(true);
      return;
    }
    setCurrentIndex((index) => Math.min(index + 1, questions.length - 1));
  };

  const finish = () => {
    if (!questions.every((item) => answers[item.id])) {
      setWarning(true);
      return;
    }
    setResult(calculateScores(answers));
    navigate("results");
  };

  return (
    <PageFrame title={copy.test.title} subtitle={copy.test.subtitle}>
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex items-center justify-between gap-3 text-sm text-[var(--muted)]">
            <span>
              {answeredCount}/{questions.length} {copy.test.answered}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-[var(--surface-2)]">
            <div className="h-full rounded-full bg-[var(--brand)] transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-2">
            {questions.map((item, index) => (
              <button
                key={item.id}
                className={[
                  "h-10 rounded-md border text-sm font-semibold transition",
                  index === currentIndex
                    ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                    : answers[item.id]
                      ? "border-[var(--ok)] bg-[var(--ok-soft)] text-[var(--ok)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-2)]",
                ].join(" ")}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
          <p className="text-sm font-semibold text-[var(--brand)]">
            {currentIndex + 1} / {questions.length}
          </p>
          <h2 className="mt-3 min-h-[84px] text-2xl font-bold leading-snug">{question.text[lang]}</h2>
          <div className="mt-6 grid gap-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={[
                  "flex min-h-12 items-center justify-between rounded-md border px-4 py-3 text-left transition",
                  selected === value
                    ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                    : "border-[var(--border)] hover:bg-[var(--surface-2)]",
                ].join(" ")}
                onClick={() => chooseAnswer(value)}
              >
                <span className="font-semibold">{copy.test.scale[value - 1]}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--surface-2)] text-sm font-bold">
                  {value}
                </span>
              </button>
            ))}
          </div>

          {warning && <p className="mt-4 text-sm font-semibold text-[var(--danger)]">{copy.test.needAnswer}</p>}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <SecondaryButton
              icon={ArrowLeft}
              onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
              disabled={currentIndex === 0}
            >
              {copy.common.back}
            </SecondaryButton>
            {currentIndex === questions.length - 1 ? (
              <PrimaryButton icon={CheckCircle2} onClick={finish}>
                {copy.common.finish}
              </PrimaryButton>
            ) : (
              <PrimaryButton icon={ArrowRight} onClick={goNext}>
                {copy.common.next}
              </PrimaryButton>
            )}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

function ResultsPage({ lang, copy, result, setAnswers, setResult, navigate }) {
  const sortedFields = useMemo(() => {
    if (!result) return [];
    return [...fields].sort((a, b) => result.scores[b.id] - result.scores[a.id]);
  }, [result]);

  if (!result) {
    return (
      <PageFrame title={copy.results.title} subtitle={copy.results.subtitle}>
        <EmptyState
          icon={BarChart3}
          title={copy.results.noResultTitle}
          actionLabel={copy.common.startTest}
          onAction={() => navigate("test")}
        />
      </PageFrame>
    );
  }

  const reset = () => {
    setAnswers({});
    setResult(null);
    navigate("test");
  };

  return (
    <PageFrame title={copy.results.title} subtitle={copy.results.subtitle}>
      <section className="grid gap-4 lg:grid-cols-4">
        {sortedFields.map((field) => (
          <ScoreCard key={field.id} field={field} score={result.scores[field.id]} lang={lang} />
        ))}
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="text-xl font-bold">{copy.results.topFields}</h2>
          <div className="mt-4 grid gap-3">
            {sortedFields.slice(0, 2).map((field, index) => (
              <div key={field.id} className="flex items-center gap-3 rounded-lg border border-[var(--border)] p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--surface-2)] font-bold">
                  {index + 1}
                </span>
                <div>
                  <p className="font-bold">{field.title[lang]}</p>
                  <p className="text-sm text-[var(--muted)]">{field.short[lang]}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-[var(--border)] px-4 py-3 text-sm font-semibold hover:bg-[var(--surface-2)]"
            onClick={reset}
          >
            <RotateCcw size={17} />
            {copy.common.reset}
          </button>
        </div>

        <div className="grid gap-4">
          {sortedFields.slice(0, 2).map((field) => (
            <div key={field.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <h3 className="text-lg font-bold">{field.title[lang]}</h3>
              <TwoColumnList
                leftTitle={copy.results.strengths}
                leftItems={field.strengths[lang]}
                rightTitle={copy.results.cautions}
                rightItems={field.cautions[lang]}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
        <h2 className="text-xl font-bold">{copy.results.plan}</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[copy.results.day1, copy.results.day2, copy.results.day3].map((day, index) => (
            <div key={day} className="rounded-lg border border-[var(--border)] p-4">
              <p className="text-sm font-semibold text-[var(--brand)]">0{index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{day}</p>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

function GuidePage({ lang, copy, navigate }) {
  return (
    <PageFrame title={copy.guide.title} subtitle={copy.guide.subtitle}>
      <section className="grid gap-5 lg:grid-cols-2">
        {fields.map((field) => {
          const Icon = fieldIcons[field.id];
          return (
            <article key={field.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="flex items-start gap-4">
                <span className={`field-icon field-${field.tone}`}>
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="text-2xl font-bold">{field.title[lang]}</h2>
                  <p className="mt-2 leading-7 text-[var(--muted)]">{field.description[lang]}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <InfoList title={copy.guide.likes} items={field.likes[lang]} />
                <InfoList title={copy.guide.struggles} items={field.struggles[lang]} />
                <InfoList title={copy.guide.departments} items={field.departments[lang]} />
                <div>
                  <h3 className="font-bold">{copy.guide.daily}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{field.daily[lang]}</p>
                </div>
              </div>
              <div className="mt-5">
                <SecondaryButton icon={FlaskConical} onClick={() => navigate("projects")}>
                  {copy.nav.projects}
                </SecondaryButton>
              </div>
            </article>
          );
        })}
      </section>
    </PageFrame>
  );
}

function ProjectsPage({ lang, copy }) {
  return (
    <PageFrame title={copy.projects.title} subtitle={copy.projects.subtitle}>
      <section className="grid gap-5 lg:grid-cols-2">
        {fields.map((field) => {
          const Icon = fieldIcons[field.id];
          return (
            <article key={field.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="flex items-start gap-4">
                <span className={`field-icon field-${field.tone}`}>
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--muted)]">{field.title[lang]}</p>
                  <h2 className="mt-1 text-2xl font-bold">{field.project.title[lang]}</h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <Metric label={copy.projects.time} value={field.project.time[lang]} />
                <Metric label={copy.projects.difficulty} value={field.project.difficulty[lang]} />
                <Metric label={copy.projects.output} value={field.project.output[lang]} wide />
              </div>
            </article>
          );
        })}
      </section>
      <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-6 text-[var(--muted)]">
        <strong className="text-[var(--text)]">{copy.resources.safetyTitle}: </strong>
        {copy.projects.ethics}
      </div>
    </PageFrame>
  );
}

function ComparePage({ lang, copy, comparisons, setComparisons, setShortlist, shortlist, navigate }) {
  const [draft, setDraft] = useState(emptyComparison);

  const update = (key, value) => setDraft((current) => ({ ...current, [key]: value }));
  const canAdd = draft.university.trim() && draft.program.trim();

  const addComparison = () => {
    if (!canAdd) return;
    setComparisons([{ ...draft, id: Date.now().toString() }, ...comparisons]);
    setDraft(emptyComparison);
  };

  const removeComparison = (id) => setComparisons(comparisons.filter((item) => item.id !== id));

  const addVerifiedComparison = (profile) => {
    const exists = comparisons.some(
      (item) => item.university === profile.compare.university && item.program === profile.compare.program
    );
    if (exists) return;

    setComparisons([
      {
        ...profile.compare,
        id: `${profile.id}-${Date.now()}`,
      },
      ...comparisons,
    ]);
    setDraft({
      university: profile.compare.university,
      program: profile.compare.program,
      city: profile.compare.city,
      rank: profile.compare.rank,
      language: profile.compare.language,
      curriculum: profile.compare.curriculum,
      labs: profile.compare.labs,
      notes: profile.compare.notes,
    });
  };

  const addToShortlist = (item) => {
    setShortlist([
      ...shortlist,
      {
        id: Date.now().toString(),
        university: item.university,
        program: item.program,
        reason: item.notes || item.labs || "",
      },
    ]);
    navigate("shortlist");
  };

  return (
    <PageFrame title={copy.compare.title} subtitle={copy.compare.subtitle}>
      <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold">{copy.compare.featuredTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy.compare.featuredSubtitle}</p>
          </div>
          <span className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs font-semibold uppercase text-[var(--muted)]">
            {copy.compare.profileBadge}
          </span>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {featuredUniversities.map((profile) => (
            <article key={profile.id} className="rounded-lg border border-[var(--border)] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="break-words text-lg font-bold">{profile.university}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{profile.program}</p>
                </div>
                <span className="shrink-0 rounded-md bg-[var(--brand-soft)] px-2 py-1 text-xs font-semibold text-[var(--brand)]">
                  {profile.type}
                </span>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                <p>
                  <strong className="text-[var(--text)]">{copy.compare.city}:</strong> {profile.city}
                </p>
                <p>
                  <strong className="text-[var(--text)]">{copy.compare.campus}:</strong> {profile.campus}
                </p>
                <p>
                  <strong className="text-[var(--text)]">{copy.compare.founded}:</strong> {profile.founded}
                </p>
                <p>
                  <strong className="text-[var(--text)]">{copy.compare.language}:</strong> {profile.language}
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{profile.focus}</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {profile.sources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
                    >
                      <ExternalLink size={14} />
                      {source.label}
                    </a>
                  ))}
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--surface-2)]"
                  onClick={() => addVerifiedComparison(profile)}
                >
                  <Plus size={16} />
                  {copy.compare.featuredAction}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <FormPanel>
          <Input label={copy.compare.university} value={draft.university} onChange={(value) => update("university", value)} />
          <Input label={copy.compare.program} value={draft.program} onChange={(value) => update("program", value)} />
          <div className="grid gap-3 sm:grid-cols-3">
            <Input label={copy.compare.city} value={draft.city} onChange={(value) => update("city", value)} />
            <Input label={copy.compare.rank} value={draft.rank} onChange={(value) => update("rank", value)} />
            <Input label={copy.compare.language} value={draft.language} onChange={(value) => update("language", value)} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Input label={copy.compare.curriculum} type="number" value={draft.curriculum} onChange={(value) => update("curriculum", value)} />
            <Input label={copy.compare.labs} value={draft.labs} onChange={(value) => update("labs", value)} />
          </div>
          <TextArea label={copy.compare.notes} value={draft.notes} onChange={(value) => update("notes", value)} />
          <PrimaryButton icon={Plus} onClick={addComparison} disabled={!canAdd}>
            {copy.common.add}
          </PrimaryButton>
        </FormPanel>

        <section>
          <h2 className="mb-3 text-xl font-bold">{copy.compare.saved}</h2>
          {comparisons.length === 0 ? (
            <InlineEmpty copy={copy} />
          ) : (
            <>
              <div className="grid gap-3 md:hidden">
                {comparisons.map((item) => (
                  <ComparisonCard
                    key={item.id}
                    item={item}
                    copy={copy}
                    onDelete={() => removeComparison(item.id)}
                    onShortlist={() => addToShortlist(item)}
                  />
                ))}
              </div>
              <div className="hidden overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] md:block">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-[var(--surface-2)] text-[var(--muted)]">
                    <tr>
                      <th className="px-4 py-3">{copy.compare.university}</th>
                      <th className="px-4 py-3">{copy.compare.program}</th>
                      <th className="px-4 py-3">{copy.compare.city}</th>
                      <th className="px-4 py-3">{copy.compare.rank}</th>
                      <th className="px-4 py-3">{copy.compare.curriculum}</th>
                      <th className="px-4 py-3">{copy.compare.labs}</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((item) => (
                      <tr key={item.id} className="border-t border-[var(--border)]">
                        <td className="px-4 py-3 font-semibold">{item.university}</td>
                        <td className="px-4 py-3">{item.program}</td>
                        <td className="px-4 py-3">{item.city}</td>
                        <td className="px-4 py-3">{item.rank}</td>
                        <td className="px-4 py-3">{item.curriculum}</td>
                        <td className="px-4 py-3">{item.labs}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button className="icon-action" onClick={() => addToShortlist(item)} title={copy.compare.addToShortlist}>
                              <Plus size={16} />
                            </button>
                            <button className="icon-action danger" onClick={() => removeComparison(item.id)} title={copy.common.delete}>
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>
      </section>
    </PageFrame>
  );
}

function ShortlistPage({ copy, shortlist, setShortlist }) {
  const [draft, setDraft] = useState(emptyShortlistItem);
  const update = (key, value) => setDraft((current) => ({ ...current, [key]: value }));
  const canAdd = draft.university.trim() && draft.program.trim();

  const addItem = () => {
    if (!canAdd) return;
    setShortlist([...shortlist, { ...draft, id: Date.now().toString() }]);
    setDraft(emptyShortlistItem);
  };

  const removeItem = (id) => setShortlist(shortlist.filter((item) => item.id !== id));
  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= shortlist.length) return;
    const next = [...shortlist];
    [next[index], next[target]] = [next[target], next[index]];
    setShortlist(next);
  };

  return (
    <PageFrame title={copy.shortlist.title} subtitle={copy.shortlist.subtitle}>
      <section className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <FormPanel>
          <Input label={copy.shortlist.university} value={draft.university} onChange={(value) => update("university", value)} />
          <Input label={copy.shortlist.program} value={draft.program} onChange={(value) => update("program", value)} />
          <TextArea label={copy.shortlist.reason} value={draft.reason} onChange={(value) => update("reason", value)} />
          <PrimaryButton icon={Plus} onClick={addItem} disabled={!canAdd}>
            {copy.common.add}
          </PrimaryButton>
        </FormPanel>

        <section>
          <h2 className="mb-3 text-xl font-bold">{copy.shortlist.saved}</h2>
          {shortlist.length === 0 ? (
            <InlineEmpty copy={copy} />
          ) : (
            <div className="grid gap-3">
              {shortlist.map((item, index) => (
                <article key={item.id} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] font-bold text-[var(--brand)]">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-lg font-bold">{item.program}</h3>
                      <p className="break-words text-sm text-[var(--muted)]">{item.university}</p>
                      {item.reason && <p className="mt-3 break-words text-sm leading-6 text-[var(--muted)]">{item.reason}</p>}
                    </div>
                    <div className="flex shrink-0 flex-col gap-2">
                      <button className="icon-action" onClick={() => moveItem(index, -1)} title={copy.shortlist.moveUp}>
                        <ArrowUp size={16} />
                      </button>
                      <button className="icon-action" onClick={() => moveItem(index, 1)} title={copy.shortlist.moveDown}>
                        <ArrowDown size={16} />
                      </button>
                      <button className="icon-action danger" onClick={() => removeItem(item.id)} title={copy.common.delete}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </section>
    </PageFrame>
  );
}

function JournalPage({ copy, journal, setJournal }) {
  const update = (key, value) => setJournal({ ...journal, [key]: value });
  const clear = () => setJournal(emptyJournal);

  return (
    <PageFrame title={copy.journal.title} subtitle={copy.journal.subtitle}>
      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <FormPanel>
          <Input label={copy.journal.current} value={journal.current} onChange={(value) => update("current", value)} />
          <TextArea label={copy.journal.why} value={journal.why} onChange={(value) => update("why", value)} />
          <TextArea label={copy.journal.excited} value={journal.excited} onChange={(value) => update("excited", value)} />
          <TextArea label={copy.journal.worried} value={journal.worried} onChange={(value) => update("worried", value)} />
          <TextArea label={copy.journal.experiment} value={journal.experiment} onChange={(value) => update("experiment", value)} />
          <TextArea label={copy.journal.finalSentence} value={journal.finalSentence} onChange={(value) => update("finalSentence", value)} />
          <SecondaryButton icon={Trash2} onClick={clear}>
            {copy.common.clear}
          </SecondaryButton>
        </FormPanel>

        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
              <Save size={19} />
            </span>
            <h2 className="text-xl font-bold">{copy.journal.summary}</h2>
          </div>
          <div className="mt-5 grid gap-4">
            {Object.entries({
              [copy.journal.current]: journal.current,
              [copy.journal.why]: journal.why,
              [copy.journal.excited]: journal.excited,
              [copy.journal.worried]: journal.worried,
              [copy.journal.experiment]: journal.experiment,
              [copy.journal.finalSentence]: journal.finalSentence,
            }).map(([label, value]) => (
              <div key={label} className="rounded-lg border border-[var(--border)] p-4">
                <p className="text-sm font-semibold text-[var(--muted)]">{label}</p>
                <p className="mt-2 break-words leading-6">{value || copy.common.empty}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </PageFrame>
  );
}

function ResourcesPage({ lang, copy, navigate }) {
  return (
    <PageFrame title={copy.resources.title} subtitle={copy.resources.subtitle}>
      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="text-xl font-bold">{copy.resources.officialTitle}</h2>
          <div className="mt-4 grid gap-3">
            {resources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[var(--border)] p-4 transition hover:bg-[var(--surface-2)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold">{resource.title}</h3>
                  <ExternalLink size={17} />
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{resource.desc[lang]}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <ResourceList title={copy.resources.checklistTitle} items={researchChecklist[lang]} />
          <ResourceList title={copy.resources.talkTitle} items={talkQuestions[lang]} />
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-xl font-bold">{copy.resources.safetyTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy.resources.safety}</p>
            <div className="mt-4">
              <SecondaryButton icon={ShieldCheck} onClick={() => navigate("projects")}>
                {copy.nav.projects}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function KnowledgePage({ lang, theme, copy, pendingKnowledgeTopic, setPendingKnowledgeTopic }) {
  const [progress, setProgress] = useStoredState("bp_knowledge_progress", {});
  const [dayFilter, setDayFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(knowledgeTopics[0].id);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (pendingKnowledgeTopic) {
      setSelectedId(pendingKnowledgeTopic);
      setFlipped(true);
      setPendingKnowledgeTopic(null);
    }
  }, [pendingKnowledgeTopic, setPendingKnowledgeTopic]);

  const total = knowledgeTopics.length;
  const visibleTopics =
    dayFilter === "all" ? knowledgeTopics : knowledgeTopics.filter((item) => item.day === dayFilter);
  const selectedIndex = Math.max(
    0,
    knowledgeTopics.findIndex((item) => item.id === selectedId)
  );
  const topic = knowledgeTopics[selectedIndex];
  const learnableTopics = knowledgeTopics.filter((item) => !item.placeholder);
  const doneCount = learnableTopics.filter((item) => progress[item.id]).length;
  const percent = learnableTopics.length ? Math.round((doneCount / learnableTopics.length) * 100) : 0;

  const selectTopic = (id) => {
    setSelectedId(id);
    setFlipped(false);
  };

  const goRelative = (delta) => {
    const nextIndex = (selectedIndex + delta + total) % total;
    selectTopic(knowledgeTopics[nextIndex].id);
  };

  const toggleLearned = () => setProgress({ ...progress, [topic.id]: !progress[topic.id] });

  const randomReview = () => {
    const notLearned = learnableTopics.filter((item) => !progress[item.id]);
    const pool = notLearned.length > 0 ? notLearned : learnableTopics;
    const random = pool[Math.floor(Math.random() * pool.length)];
    selectTopic(random.id);
  };

  const dayTabs = [
    { id: "all", label: copy.knowledge.dayAll },
    { id: 1, label: copy.knowledge.day1 },
    { id: 2, label: copy.knowledge.day2 },
  ];

  return (
    <PageFrame title={copy.knowledge.title} subtitle={copy.knowledge.subtitle}>
      <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)]">
          <span>
            {copy.knowledge.progressLabel}: {doneCount}/{learnableTopics.length} {copy.knowledge.topicsLabel}
          </span>
          <span>{percent}%</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-[var(--surface-2)]">
          <div className="h-full rounded-full bg-[var(--brand)] transition-all" style={{ width: `${percent}%` }} />
        </div>
        {doneCount === learnableTopics.length && (
          <p className="mt-3 text-sm font-semibold text-[var(--ok)]">{copy.knowledge.allDone}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          <SecondaryButton icon={Shuffle} onClick={randomReview}>
            {copy.knowledge.randomReview}
          </SecondaryButton>
          <SecondaryButton icon={RotateCcw} onClick={() => setProgress({})}>
            {copy.knowledge.resetProgress}
          </SecondaryButton>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {dayTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setDayFilter(tab.id)}
            className={[
              "rounded-md border px-3 py-2 text-sm font-semibold transition",
              dayFilter === tab.id
                ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-2)]",
            ].join(" ")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="grid content-start gap-2">
          {visibleTopics.map((item) => {
            const index = knowledgeTopics.indexOf(item);
            const isActive = item.id === selectedId;
            const isLearned = !!progress[item.id];
            return (
              <button
                key={item.id}
                onClick={() => selectTopic(item.id)}
                className={[
                  "flex items-center gap-3 rounded-lg border p-3 text-left transition",
                  isActive
                    ? "border-[var(--brand)] bg-[var(--brand-soft)]"
                    : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-bold",
                    isLearned ? "bg-[var(--ok-soft)] text-[var(--ok)]" : "bg-[var(--surface-2)] text-[var(--text)]",
                  ].join(" ")}
                >
                  {isLearned ? <CheckCircle2 size={18} /> : index + 1}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-bold">{item.title[lang]}</span>
                {item.placeholder && (
                  <span className="shrink-0 rounded-md bg-[var(--surface-2)] px-2 py-1 text-[10px] font-bold uppercase text-[var(--muted)]">
                    {copy.knowledge.placeholderBadge}
                  </span>
                )}
              </button>
            );
          })}
        </section>

        <section
          className="cursor-pointer select-none rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition sm:p-6"
          onClick={() => setFlipped((value) => !value)}
          title={copy.knowledge.flipHint}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[var(--brand)]">
                {selectedIndex + 1} / {total}
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-snug">{topic.title[lang]}</h2>
            </div>
            <span className={`field-icon field-${topic.tone}`}>
              <GraduationCap size={22} />
            </span>
          </div>

          {!flipped ? (
            <div className="mt-5">
              <p className="leading-7 text-[var(--muted)]">{topic.tagline[lang]}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                {copy.knowledge.flipHint}
              </p>
            </div>
          ) : topic.placeholder ? (
            <div className="mt-5 grid gap-4">
              <p className="rounded-md border border-dashed border-[var(--border)] p-3 text-sm leading-6 text-[var(--muted)]">
                {copy.knowledge.placeholderNote}
              </p>
              <div>
                <h3 className="font-bold">{copy.knowledge.tocTitle}</h3>
                <ul className="mt-2 grid gap-2 text-sm leading-6 text-[var(--muted)]">
                  {topic.toc.map((item) => (
                    <li key={item[lang]} className="flex gap-2">
                      <CheckCircle2 className="mt-1 shrink-0 text-[var(--muted)]" size={15} />
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {topic.repo && (
                <a
                  href={topic.repo.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--surface-2)]"
                >
                  <Github size={16} />
                  {copy.knowledge.contribute}: {topic.repo.label}
                </a>
              )}
            </div>
          ) : topic.Component ? (
            <div className="mt-5 grid gap-6" onClick={(event) => event.stopPropagation()}>
              <topic.Component lang={lang} theme={theme} />
            </div>
          ) : (
            <div className="mt-5 grid gap-5">
              {topic.sections.map((section) => (
                <div key={section.heading[lang]}>
                  <h3 className="font-bold">{section.heading[lang]}</h3>
                  <ul className="mt-2 grid gap-2 text-sm leading-6 text-[var(--muted)]">
                    {section.items.map((item) => (
                      <li key={item[lang]} className="flex gap-2">
                        <CheckCircle2 className="mt-1 shrink-0 text-[var(--ok)]" size={15} />
                        <span>{item[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex gap-2">
              <SecondaryButton icon={ArrowLeft} onClick={() => goRelative(-1)}>
                {copy.knowledge.previous}
              </SecondaryButton>
              <SecondaryButton icon={ArrowRight} onClick={() => goRelative(1)}>
                {copy.knowledge.next}
              </SecondaryButton>
            </div>
            {!topic.placeholder && (
              <PrimaryButton icon={CheckCircle2} onClick={toggleLearned}>
                {progress[topic.id] ? copy.knowledge.unmark : copy.knowledge.markLearned}
              </PrimaryButton>
            )}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

function BuildProcessPage({ lang, copy, openKnowledgeTopic }) {
  return (
    <PageFrame title={copy.buildProcess.title} subtitle={copy.buildProcess.subtitle}>
      <div className="relative grid gap-6 pl-7 sm:pl-9">
        <div className="absolute bottom-2 left-[11px] top-2 w-px bg-[var(--border)] sm:left-[15px]" />

        {buildTimeline.map((commit, index) => (
          <article key={commit.hash} className="relative rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <span className="absolute -left-7 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--brand-soft)] text-[var(--brand)] sm:-left-9">
              <GitCommit size={14} />
            </span>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-[var(--surface-2)] px-2 py-1 font-mono text-xs font-bold text-[var(--text)]">
                  {commit.hash}
                </span>
                <span className="text-xs font-semibold text-[var(--muted)]">{commit.date}</span>
              </div>
              <span className="text-xs font-semibold uppercase text-[var(--muted)]">
                {copy.buildProcess.commitLabel} {index + 1}/{buildTimeline.length}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-bold leading-snug">{commit.message[lang]}</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{copy.buildProcess.filesTitle}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{commit.files[lang]}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{copy.buildProcess.lessonTitle}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{commit.lesson[lang]}</p>
              </div>
            </div>
            {commit.relatedTopic && (
              <button
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--text)] transition hover:bg-[var(--surface-2)]"
                onClick={() => openKnowledgeTopic(commit.relatedTopic)}
              >
                <GraduationCap size={14} />
                {copy.buildProcess.relatedNote}
              </button>
            )}
          </article>
        ))}

        <article className="relative rounded-lg border border-dashed border-[var(--brand)] bg-[var(--brand-soft)] p-5">
          <span className="absolute -left-7 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--brand)] bg-[var(--surface)] sm:-left-9">
            <span className="block h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--brand)]" />
          </span>
          <span className="inline-block rounded-md bg-[var(--brand)] px-2 py-1 text-xs font-bold uppercase text-white">
            {copy.buildProcess.liveBadge}
          </span>
          <p className="mt-3 text-sm leading-6 text-[var(--text)]">{buildInProgress.message[lang]}</p>
          <p className="mt-3 text-xs text-[var(--muted)]">{copy.buildProcess.liveNote}</p>
        </article>
      </div>
    </PageFrame>
  );
}

function InstructorPage({ copy, navigate }) {
  return (
    <PageFrame title={copy.instructor.title} subtitle={copy.instructor.subtitle}>
      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 text-center lg:text-left">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)] lg:mx-0">
            <UserRound size={30} />
          </span>
          <h2 className="mt-4 text-2xl font-bold">{instructor.name}</h2>
          <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{copy.instructor.roleLabel}</p>
          <p className="mt-4 leading-7 text-[var(--muted)]">{copy.instructor.bio}</p>

          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase text-[var(--muted)]">{copy.instructor.linksTitle}</h3>
            <div className="mt-3 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={instructor.links.academicProfile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--surface-2)]"
              >
                <GraduationCap size={16} />
                {copy.instructor.academicProfile}
              </a>
              <a
                href={instructor.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--surface-2)]"
              >
                <Github size={16} />
                {copy.instructor.github}
              </a>
              <a
                href={instructor.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--surface-2)]"
              >
                <Linkedin size={16} />
                {copy.instructor.linkedin}
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <Rocket size={22} />
              </span>
              <h2 className="text-xl font-bold">{copy.instructor.internshipTitle}</h2>
            </div>
            <p className="mt-4 leading-7 text-[var(--muted)]">{copy.instructor.internshipDesc}</p>
            <a
              href={instructor.internshipUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:opacity-90"
            >
              <ExternalLink size={17} />
              {copy.instructor.internshipCta}
            </a>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
            <SecondaryButton icon={GraduationCap} onClick={() => navigate("knowledge")}>
              {copy.instructor.backToKnowledge}
            </SecondaryButton>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function PageFrame({ title, subtitle, children }) {
  return (
    <div className="space-y-6 py-5">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

function FieldCard({ field, lang, onClick }) {
  const Icon = fieldIcons[field.id];
  return (
    <button
      className="field-card min-h-[214px] rounded-lg border border-[var(--border)] p-5 text-left transition hover:-translate-y-0.5 hover:shadow-soft"
      onClick={onClick}
    >
      <span className={`field-icon field-${field.tone}`}>
        <Icon size={22} />
      </span>
      <h2 className="mt-4 text-xl font-bold">{field.title[lang]}</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{field.short[lang]}</p>
    </button>
  );
}

function ScoreCard({ field, score, lang }) {
  const Icon = fieldIcons[field.id];
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="flex items-center justify-between gap-3">
        <span className={`field-icon field-${field.tone}`}>
          <Icon size={21} />
        </span>
        <span className="text-2xl font-bold">{score}%</span>
      </div>
      <h2 className="mt-4 text-lg font-bold">{field.title[lang]}</h2>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-[var(--surface-2)]">
        <div className={`h-full rounded-full progress-${field.tone}`} style={{ width: `${score}%` }} />
      </div>
    </article>
  );
}

function InfoList({ title, items }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-2 grid gap-2 text-sm leading-6 text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-1 shrink-0 text-[var(--ok)]" size={15} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TwoColumnList({ leftTitle, leftItems, rightTitle, rightItems }) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <InfoList title={leftTitle} items={leftItems} />
      <InfoList title={rightTitle} items={rightItems} />
    </div>
  );
}

function Metric({ label, value, wide = false }) {
  return (
    <div className={`rounded-lg border border-[var(--border)] p-4 ${wide ? "sm:col-span-3" : ""}`}>
      <p className="text-xs font-semibold uppercase text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
    </div>
  );
}

function PrimaryButton({ icon: Icon, children, onClick, disabled = false }) {
  return (
    <button
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon size={18} />
      <span>{children}</span>
    </button>
  );
}

function SecondaryButton({ icon: Icon, children, onClick, disabled = false }) {
  return (
    <button
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text)] transition hover:bg-[var(--surface-2)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon size={18} />
      <span>{children}</span>
    </button>
  );
}

function FormPanel({ children }) {
  return <section className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">{children}</section>;
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      <span>{label}</span>
      <input
        className="min-h-12 rounded-md border border-[var(--border)] bg-[var(--input)] px-3 text-[var(--text)] outline-none transition focus:border-[var(--brand)]"
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      <span>{label}</span>
      <textarea
        className="min-h-28 rounded-md border border-[var(--border)] bg-[var(--input)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--brand)]"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function EmptyState({ icon: Icon, title, actionLabel, onAction }) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
        <Icon size={24} />
      </span>
      <h2 className="mt-4 text-2xl font-bold">{title}</h2>
      <button
        className="mt-5 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--brand)] px-5 text-sm font-bold text-white"
        onClick={onAction}
      >
        {actionLabel}
      </button>
    </section>
  );
}

function InlineEmpty({ copy }) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface)] p-6 text-sm text-[var(--muted)]">
      {copy.common.empty}
    </div>
  );
}

function ComparisonCard({ item, copy, onDelete, onShortlist }) {
  return (
    <article className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{item.program}</h3>
          <p className="text-sm text-[var(--muted)]">{item.university}</p>
        </div>
        <button className="icon-action danger" onClick={onDelete} title={copy.common.delete}>
          <Trash2 size={16} />
        </button>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <MiniDetail label={copy.compare.city} value={item.city} />
        <MiniDetail label={copy.compare.rank} value={item.rank} />
        <MiniDetail label={copy.compare.language} value={item.language} />
        <MiniDetail label={copy.compare.curriculum} value={item.curriculum} />
      </dl>
      {item.notes && <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.notes}</p>}
      <button
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-[var(--border)] px-4 py-3 text-sm font-bold hover:bg-[var(--surface-2)]"
        onClick={onShortlist}
      >
        <Plus size={17} />
        {copy.compare.addToShortlist}
      </button>
    </article>
  );
}

function MiniDetail({ label, value }) {
  return (
    <div className="rounded-md bg-[var(--surface-2)] p-3">
      <dt className="text-xs font-semibold text-[var(--muted)]">{label}</dt>
      <dd className="mt-1 break-words font-bold">{value || "-"}</dd>
    </div>
  );
}

function ResourceList({ title, items }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-1 shrink-0 text-[var(--ok)]" size={15} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
