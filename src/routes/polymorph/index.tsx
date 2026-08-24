import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { projectsSorted } from "@/data/projects";
import { POLYMORPH } from "@/data/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/polymorph/")({
  component: PolymorphHome,
  head: () => ({ meta: [{ title: `${POLYMORPH.name} — Agentic software development` }] }),
});

function PolymorphHome() {
  const featured = projectsSorted().filter((p) => p.group === "Client Work").slice(0, 3);
  return (
    <SiteShell variant="polymorph">
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Polymorph Technologies</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-fg sm:text-6xl">
            Agentic software development. Websites researched, structured, and printed at low latency.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Among the first agentic development companies in Africa. We start with SMEs across
            Saudi Arabia, Dubai, and the Gulf: a real site, in market language, with a voice agent
            that can open the deal.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/polymorph/contact">
                Start a project <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/polymorph/process">How it works</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Search & research",
              d: "Agents gather market, competitor, and language context for the brief — fast enough that discovery is not a six-week workshop.",
            },
            {
              n: "02",
              t: "Structure & generate",
              d: "Information architecture, copy, and a production codebase are printed together. Human review locks brand, legal, and photography.",
            },
            {
              n: "03",
              t: "Voice outreach",
              d: "Voice agents (xAI where it is the right instrument, custom where it is not) open conversations and qualify SMEs. A human still closes.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-lg border border-border bg-surface p-6">
              <p className="font-mono text-xs text-accent">{s.n}</p>
              <h2 className="mt-3 font-display text-2xl text-fg">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-fg">Selected work</h2>
            <Link to="/polymorph/work" className="text-sm text-accent hover:underline">
              All projects
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} to="/polymorph/work/$slug" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl text-fg">Markets</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {POLYMORPH.markets.map((m) => (
              <li key={m} className="rounded-full border border-border px-4 py-2 text-sm text-muted">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Sister company {POLYMORPH.sister} holds the security brief: secure-by-default generation,
            not a plugin after launch.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
