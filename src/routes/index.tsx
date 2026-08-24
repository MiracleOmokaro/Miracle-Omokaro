import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { PERSON } from "@/data/site";
import { ROADMAP } from "@/data/roadmap";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const completed = ROADMAP.filter((s) => s.status === "completed").length;
  const live = PROJECTS.filter((p) => p.status === "live").length;

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">{PERSON.title}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-fg sm:text-7xl">
            {PERSON.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Sophomore in cybersecurity. I train on the best public resources in the field, write
            them down so others can follow, and ship real sites through Polymorph Technologies —
            an agentic development company aimed at the Gulf and broader Asian markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/path">
                Path of Progress <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/work">See client work</Link>
            </Button>
          </div>
          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wide text-subtle">Stages logged</dt>
              <dd className="mt-1 font-display text-3xl text-fg">{completed}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-subtle">Live sites</dt>
              <dd className="mt-1 font-display text-3xl text-fg">{live}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-subtle">Companies</dt>
              <dd className="mt-1 font-display text-3xl text-fg">2</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-subtle">The path</p>
            <h2 className="mt-2 font-display text-3xl text-fg sm:text-4xl">
              A proven sequence, written in public.
            </h2>
            <p className="mt-4 max-w-prose text-muted leading-relaxed">
              Cisco, TryHackMe, PortSwigger, pwn.college. Each node is a course I actually took,
              with what I learned, the ideas it produced, and whether those ideas are already in a
              repository. Recruiters can see the work. Learners can follow the same resources.
            </p>
            <Link to="/path" className="mt-6 inline-flex items-center gap-2 text-sm text-accent">
              Open the path <ArrowRight className="size-4" />
            </Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-subtle">The company</p>
            <h2 className="mt-2 font-display text-3xl text-fg sm:text-4xl">
              Polymorph prints websites.
            </h2>
            <p className="mt-4 max-w-prose text-muted leading-relaxed">
              Low-latency agentic machinery that researches a market, structures a site, and
              generates it — then voice agents that can open the conversation with an SME. Sister
              company Pentagon Cyber holds the security brief.
            </p>
            <Link
              to="/polymorph"
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent"
            >
              Visit Polymorph <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
