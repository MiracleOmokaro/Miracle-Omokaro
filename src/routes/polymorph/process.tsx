import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { POLYMORPH } from "@/data/site";

export const Route = createFileRoute("/polymorph/process")({
  component: ProcessPage,
  head: () => ({ meta: [{ title: `Process — ${POLYMORPH.name}` }] }),
});

const STEPS = [
  {
    t: "Brief",
    d: "A business name, market, and what the site must do. We do not start with a mood board. We start with the job the site has to perform in that market.",
  },
  {
    t: "Search",
    d: "Low-latency agents collect competitor IA, language norms, payment and trust patterns, and regulatory copy that must exist (privacy, VAT, healthcare disclaimers).",
  },
  {
    t: "Sort",
    d: "A structuring agent produces the information architecture, content model, and a constraint set from Pentagon Cyber: CSP posture, form hygiene, no stray debug routes.",
  },
  {
    t: "Print",
    d: "A generator emits a production codebase and draft copy. This is not a theme. It is a site with routes, metadata, and a stack chosen for the brief.",
  },
  {
    t: "Human checkpoints",
    d: "Brand, photography, legal, and medical or financial claims. Agents do not get the last word on those. Latency stays low because the rest of the work is already done.",
  },
  {
    t: "Voice",
    d: "Outreach and qualification via voice agents — xAI where it is the strongest instrument, a custom layer where the market needs it. Disclosure, opt-out, and a human on the close are non-negotiable.",
  },
];

function ProcessPage() {
  return (
    <SiteShell variant="polymorph">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Process</p>
        <h1 className="mt-3 font-display text-4xl text-fg sm:text-6xl">
          Search, sort, print. Then a human.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Traditional agencies sell weeks of workshops. Polymorph sells a machine that already did
          the research, plus the few hours of judgement that still require a person. Latency is the
          product feature. Quality is the constraint, not the opposite of speed.
        </p>
        <ol className="mt-14 space-y-10">
          {STEPS.map((s, i) => (
            <li key={s.t} className="grid gap-3 sm:grid-cols-[4rem_1fr]">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-2xl text-fg">{s.t}</h2>
                <p className="mt-2 leading-relaxed text-muted">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SiteShell>
  );
}
