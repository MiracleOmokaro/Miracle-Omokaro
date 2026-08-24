import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { getProject, PROJECTS } from "@/data/projects";
import { PERSON } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.project.title ?? "Project"} — ${PERSON.name}` }],
  }),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = project.relatedProjects
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm text-subtle">
          <Link to="/work" className="hover:text-fg">
            Work
          </Link>
          {" / "}
          {project.group}
        </p>
        <p className="mt-6 text-xs uppercase tracking-wide text-accent">{project.market}</p>
        <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">{project.title}</h1>
        <p className="mt-2 text-muted">{project.client}</p>
        <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-6 leading-relaxed text-muted">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-subtle">
              {t}
            </span>
          ))}
        </div>

        {project.clientFeedback ? (
          <blockquote className="mt-10 border-l-2 border-accent/50 pl-5">
            <p className="font-display text-xl leading-relaxed text-fg">
              “{project.clientFeedback.quote}”
            </p>
            <footer className="mt-3 text-sm text-muted">{project.clientFeedback.author}</footer>
          </blockquote>
        ) : null}

        <section className="mt-10">
          <h2 className="text-xs uppercase tracking-wide text-subtle">Agentic notes</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.agenticNotes}</p>
        </section>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              Live site <ExternalLink className="size-3.5" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-fg"
            >
              Repository <ExternalLink className="size-3.5" />
            </a>
          ) : null}
        </div>

        {related.length ? (
          <div className="mt-12 flex flex-wrap gap-2">
            {related.map((r) =>
              r ? (
                <Link
                  key={r.id}
                  to="/work/$slug"
                  params={{ slug: r.id }}
                  className="rounded-full border border-border px-3 py-2 text-xs text-muted hover:text-fg"
                >
                  {r.title}
                </Link>
              ) : null,
            )}
          </div>
        ) : null}
      </article>
    </SiteShell>
  );
}
