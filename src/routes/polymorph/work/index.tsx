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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-medium tracking-tight text-fg sm:text-6xl">Work</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Client properties and the internal pipeline that produces them.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} to="/polymorph/work/$slug" />
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
