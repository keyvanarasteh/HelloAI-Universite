import { useState } from "react";
import { BadgeCheck, BookOpenText, FileBadge, GitPullRequest, ShieldCheck } from "lucide-react";
import { NoteCallout, NoteList, NoteSection, NoteTable } from "../components/NoteKit.jsx";

export function RepoBasicsNote({ lang }) {
  const tr = lang === "tr";
  const [activeSignal, setActiveSignal] = useState("readme");
  const signals = {
    readme: {
      icon: BookOpenText,
      title: "README",
      says: tr ? "Bu proje nedir, kime yarar ve nasıl çalışır?" : "What is this project, who is it for, how does it run?",
      fix: tr ? "Kurulum, özellikler, ekran görüntüsü ve katkı adımı ekle." : "Add setup, features, screenshot, and contribution steps.",
    },
    badge: {
      icon: BadgeCheck,
      title: "Badges",
      says: tr ? "Build, lisans ve sürüm gibi durumlar hızlıca görünür." : "Build, license, version, and other states are visible quickly.",
      fix: tr ? "Shields.io ile sade ve anlamlı badge'ler kullan." : "Use clean, meaningful badges with shields.io.",
    },
    license: {
      icon: ShieldCheck,
      title: tr ? "Lisans" : "License",
      says: tr ? "Başkaları kodu hangi şartlarla kullanabilir?" : "Under which terms may others use the code?",
      fix: tr ? "MIT/Apache/GPL gibi niyetine uygun bir LICENSE dosyası seç." : "Choose a LICENSE file like MIT/Apache/GPL based on intent.",
    },
    contribute: {
      icon: GitPullRequest,
      title: tr ? "Katkı Rehberi" : "Contribution Guide",
      says: tr ? "Yeni gelen biri nereden başlamalı ve nasıl PR açmalı?" : "Where should a newcomer start and how should they open a PR?",
      fix: tr ? "Küçük görevler, branch adı, test komutu ve PR beklentisini yaz." : "Document small tasks, branch naming, test command, and PR expectations.",
    },
  };
  const active = signals[activeSignal];
  const ActiveIcon = active.icon;

  return (
    <>
      <NoteSection title={tr ? "Repo Sağlık Panosu" : "Repo Health Dashboard"}>
        <div className="grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(signals).map(([id, signal]) => {
              const Icon = signal.icon;
              const selected = id === activeSignal;
              return (
                <button
                  key={id}
                  onClick={() => setActiveSignal(id)}
                  className={[
                    "flex min-h-24 flex-col justify-between rounded-lg border p-3 text-left transition",
                    selected
                      ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]",
                  ].join(" ")}
                >
                  <Icon size={20} />
                  <span className="text-sm font-bold">{signal.title}</span>
                </button>
              );
            })}
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-[var(--muted)]">{tr ? "Ziyaretçiye mesaj" : "Message to visitor"}</p>
                <h3 className="mt-2 text-xl font-bold">{active.title}</h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-[var(--brand)]">
                <ActiveIcon size={22} />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{active.says}</p>
            <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-[var(--muted)]">
                <FileBadge size={14} />
                {tr ? "İyileştirme" : "Improvement"}
              </div>
              <p className="text-sm font-semibold">{active.fix}</p>
            </div>
          </div>
        </div>
      </NoteSection>

      <NoteSection title={tr ? "README ve Badge" : "README & Badges"}>
        <NoteList
          items={
            tr
              ? [
                  "README, projenin ne yaptığını, nasıl kurulduğunu, özelliklerini ve katkı yöntemini anlatır.",
                  "Badge'ler; build durumu, sürüm ve lisans gibi bilgileri gösteren küçük görsel etiketlerdir (örnek: shields.io).",
                ]
              : [
                  "README: explains what the project is, how to install it, its features, and how to contribute.",
                  "Badges: small visual labels showing build status, version, license, etc. (e.g. shields.io).",
                ]
          }
        />
      </NoteSection>

      <NoteSection title={tr ? "Lisans Karşılaştırması" : "License Comparison"}>
        <NoteTable
          headers={tr ? ["Lisans", "Özellik"] : ["License", "Trait"]}
          rows={[
            ["MIT", tr ? "Çok esnek, neredeyse serbest kullanım sağlar." : "Very permissive, nearly unrestricted use."],
            ["Apache 2.0", tr ? "MIT'e benzer, ek olarak patent koruma maddeleri." : "Similar to MIT, plus patent protection clauses."],
            ["GPL", tr ? "Türev projelerin de açık kaynak kalmasını zorunlu kılar." : "Requires derivative projects to also stay open source."],
          ]}
        />
        <NoteCallout tone="warning">
          {tr
            ? "Lisansı belirtilmemiş bir proje varsayılan olarak 'tüm hakları saklı' kabul edilir; başkaları izinsiz kullanmamalıdır."
            : "A project with no license is treated as 'all rights reserved' by default — others should not use it without permission."}
        </NoteCallout>
      </NoteSection>
    </>
  );
}
