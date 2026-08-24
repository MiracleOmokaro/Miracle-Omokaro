import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProseBlocks } from "@/components/prose-blocks";
import { SiteShell } from "@/components/site-shell";
import { PERSON } from "@/data/site";
import { severityCounts, WINS, winsBySeverity } from "@/data/wins";
import type { Severity } from "@/data/types";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({ meta: [{ title: `Skills & wins — ${PERSON.name}` }] }),
});

const FILTERS = ["all", "critical", "high", "medium", "low"] as const;

const SEV_COLOR: Record<Severity, string> = {
  critical: "text-danger",
  high: "text-amber",
  medium: "text-blue",
  low: "text-muted",
};

function SkillsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const counts = severityCounts();
  const list = useMemo(() => winsBySeverity(filter), [filter]);

  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Skills & wins</p>
        <h1 className="mt-3 font-display text-4xl text-fg sm:text-6xl">
          Findings, written as teaching.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          These are authorized lab case studies, not claimed production bounties against named
          companies. The method is the point: source, sink, impact, fix — Feynman-clear so another
          practitioner can repeat it. Amounts stay off the page.
        </p>

        <dl className="mt-10 grid grid-cols-4 gap-3 border-y border-border py-6 text-center">
          {(["critical", "high", "medium", "low"] as const).map((s) => (
            <div key={s}>
              <dt className="text-xs uppercase tracking-wide text-subtle">{s}</dt>
              <dd className={cn("mt-1 font-display text-2xl", SEV_COLOR[s])}>{counts[s]}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "h-11 shrink-0 rounded-full border px-4 text-sm capitalize",
                filter === f
                  ? "border-accent/40 bg-elevated text-fg"
                  : "border-border text-muted hover:text-fg",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-14">
          {list.map((win) => (
            <article key={win.id} className="border-t border-border pt-8">
              <p className={cn("text-xs uppercase tracking-wide", SEV_COLOR[win.severity])}>
                {win.severity} · {win.context}
              </p>
              <h2 className="mt-2 font-display text-2xl text-fg">{win.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{win.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {win.techniques.map((t) => (
                  <span key={t} className="rounded-full border border-border px-2 py-1 text-xs text-subtle">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <ProseBlocks blocks={win.writeup} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
