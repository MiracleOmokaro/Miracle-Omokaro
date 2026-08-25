import { createFileRoute, Link } from "@tanstack/react-router";
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
  const featured = projectsSorted().filter((p) => p.group === "Client Work").slice(0, 4);
  return (
    <SiteShell variant="polymorph">
      <section className="mx-auto max-w-4xl px-4 pb-8 pt-20 text-center sm:px-6 sm:pt-28">
        <p className="text-sm text-muted">Polymorph Technologies</p>
        <h1 className="mt-5 text-4xl font-medium tracking-tight text-fg sm:text-6xl">
          Agentic software development.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Websites researched, structured, and printed at low latency. Among the first agentic
          development companies in Africa — starting with SMEs across Saudi Arabia, Dubai, and the
          Gulf.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link to="/polymorph/contact">Start a project</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/polymorph/process">How it works</Link>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {POLYMORPH.markets.map((m) => (
            <span
              key={m}
              className="inline-flex h-10 items-center rounded-lg border border-fg/12 bg-chip px-4 text-sm text-fg"
            >
              {m}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
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
              d: "Voice agents open conversations and qualify SMEs. A human still closes. Disclosure and opt-out are non-negotiable.",
            },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-mono text-xs text-muted">{s.n}</p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight text-fg">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">Selected work</h2>
          <Link to="/polymorph/work" className="text-sm text-muted hover:text-fg">
            All posts →
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} to="/polymorph/work/$slug" />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
