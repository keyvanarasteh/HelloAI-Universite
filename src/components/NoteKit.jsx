import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import mermaid from "mermaid";

let mermaidInitialized = false;

function ensureMermaidInit(theme) {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: theme === "dark" ? "dark" : "default",
    fontFamily: "inherit",
  });
  mermaidInitialized = true;
}

export function TerminalBlock({ lines, caption, className = "" }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const commandText = lines.filter((line) => !line.comment).map((line) => line.text ?? line).join("\n");

  const copy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex((current) => (current === index ? null : current)), 1500);
    } catch {
      // clipboard API unavailable; silently ignore
    }
  };

  return (
    <div className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[#0b1020] ${className}`}>
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-white/60">
          <Terminal size={14} />
          <span>{caption}</span>
        </div>
        <button
          onClick={() => copy(commandText, "all")}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
          title={caption}
        >
          {copiedIndex === "all" ? <Check size={13} /> : <Copy size={13} />}
        </button>
      </div>
      <div className="grid gap-1 px-4 py-3 font-mono text-[13px] leading-6">
        {lines.map((line, index) => {
          const text = typeof line === "string" ? line : line.text;
          const isComment = typeof line === "object" && line.comment;
          return (
            <div key={index} className="group flex items-center justify-between gap-3">
              <code className={isComment ? "text-white/40" : "text-emerald-300"}>
                {!isComment && <span className="mr-2 select-none text-white/30">$</span>}
                {text}
              </code>
              {!isComment && (
                <button
                  onClick={() => copy(text, index)}
                  className="shrink-0 rounded-md p-1 text-white/30 opacity-0 transition hover:bg-white/10 hover:text-white group-hover:opacity-100"
                  title={caption}
                >
                  {copiedIndex === index ? <Check size={13} /> : <Copy size={13} />}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Mermaid({ chart, theme = "light" }) {
  const containerRef = useRef(null);
  const id = useId().replace(/:/g, "-");
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    ensureMermaidInit(theme);
    mermaid
      .render(`mermaid-${id}`, chart)
      .then(({ svg: rendered }) => {
        if (!cancelled) setSvg(rendered);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart, theme, id]);

  if (error) return null;

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function NoteSection({ title, children }) {
  return (
    <section className="grid gap-3">
      <h3 className="text-lg font-bold">{title}</h3>
      {children}
    </section>
  );
}

export function NoteCallout({ tone = "info", children }) {
  const toneClass =
    tone === "warning"
      ? "border-[var(--danger)]/40 bg-[var(--danger)]/10 text-[var(--text)]"
      : tone === "ok"
        ? "border-[var(--ok)]/40 bg-[var(--ok-soft)] text-[var(--text)]"
        : "border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)]";
  return <div className={`rounded-lg border p-4 text-sm leading-6 ${toneClass}`}>{children}</div>;
}

export function NoteList({ items }) {
  return (
    <ul className="grid gap-2 text-sm leading-6 text-[var(--muted)]">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NoteTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="bg-[var(--surface-2)] text-[var(--muted)]">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-[var(--border)]">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top leading-6 text-[var(--text)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function NoteSteps({ steps }) {
  return (
    <ol className="grid gap-3">
      {steps.map((step, index) => (
        <li key={index} className="flex gap-3 rounded-lg border border-[var(--border)] p-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--brand-soft)] text-sm font-bold text-[var(--brand)]">
            {index + 1}
          </span>
          <span className="text-sm leading-6 text-[var(--text)]">{step}</span>
        </li>
      ))}
    </ol>
  );
}
