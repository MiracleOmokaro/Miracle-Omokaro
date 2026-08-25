import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { NewsGrid } from "@/components/news-card";
import { SiteShell } from "@/components/site-shell";
import { PERSON } from "@/data/site";
import { severityCounts, winsBySeverity } from "@/data/wins";
import type { NewsPost } from "@/data/types";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/skills/")({
  component: SkillsPage,
  head: () => ({ meta: [{ title: `Skills — ${PERSON.name}` }] }),
});

const FILTERS = ["all", "critical", "high", "medium", "low"] as const;

function SkillsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const counts = severityCounts();
  const list = useMemo(() => winsBySeverity(filter), [filter]);
  const posts: NewsPost[] = list.map((w) => ({
    id: w.id,
    title: w.title,
    date: w.date,
    excerpt: w.summary,
    kind: "skills",
    href: `/skills/${w.id}`,
    newsArt: w.newsArt,
    kicker: w.severity,
  }));

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-medium tracking-tight text-fg sm:text-6xl">Skills</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Authorized lab case studies today. Production CVE and bug-bounty write-ups will land here
          as disclosures are published — method first, no payout figures, no unnamed theatre.
        </p>

        <dl className="mt-12 grid grid-cols-4 gap-3 border-y border-border py-6 text-center">
          {(["critical", "high", "medium", "low"] as const).map((s) => (
            <div key={s}>
              <dt className="text-xs uppercase tracking-wide text-subtle">{s}</dt>
              <dd className="mt-1 text-2xl font-medium tracking-tight text-fg">{counts[s]}</dd>
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
                "h-10 shrink-0 rounded-full border px-4 text-sm capitalize",
                filter === f
                  ? "border-fg/25 bg-elevated text-fg"
                  : "border-fg/12 text-muted hover:text-fg",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <NewsGrid posts={posts} />
        </div>
        <p className="mt-10 text-sm text-subtle">
          <Link to="/news" className="hover:text-fg">
            Also filed under News
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
