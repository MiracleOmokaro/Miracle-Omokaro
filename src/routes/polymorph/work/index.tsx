import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { projectsSorted } from "@/data/projects";
import { POLYMORPH } from "@/data/site";

export const Route = createFileRoute("/polymorph/work/")({
  component: PolyWork,
  head: () => ({ meta: [{ title: `Work — ${POLYMORPH.name}` }] }),
});

function PolyWork() {
  const projects = projectsSorted();
  return (
    <SiteShell variant="polymorph">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Work</p>
        <h1 className="mt-3 font-display text-4xl text-fg sm:text-6xl">Printed for the Gulf.</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted leading-relaxed">
          Client properties and the internal pipeline that produces them. Filter is chronological
          by design — the newest work sits with the oldest so the company history is visible.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} to="/polymorph/work/$slug" />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
