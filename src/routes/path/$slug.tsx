import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { IdeaCard } from "@/components/idea-card";
import { ProseBlocks } from "@/components/prose-blocks";
import { SiteShell } from "@/components/site-shell";
import { StageGlyph } from "@/components/stage-icon";
import { getStage, ROADMAP } from "@/data/roadmap";
import { PERSON } from "@/data/site";

export const Route = createFileRoute("/path/$slug")({
  component: StagePage,
  loader: ({ params }) => {
    const stage = getStage(params.slug);
    if (!stage) throw notFound();
    return { stage };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.stage.title ?? "Stage"} — ${PERSON.name}` }],
  }),
});

function StagePage() {
  const { stage } = Route.useLoaderData();
  const related = stage.relatedStages
    .map((id) => ROADMAP.find((s) => s.id === id))
    .filter(Boolean);
  const next = stage.nextRecommended ? getStage(stage.nextRecommended) : null;
  const prev = ROADMAP.filter((s) => s.order < stage.order).sort((a, b) => b.order - a.order)[0];

  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm text-subtle">
          <Link to="/path" className="hover:text-fg">
            Path of Progress
          </Link>
          {" / "}
          {stage.group}
        </p>
        <div className="mt-6 flex items-center gap-3 text-accent">
          <StageGlyph name={stage.icon} className="size-6" />
          <span className="text-xs uppercase tracking-wide">{stage.platform}</span>
        </div>
        <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">{stage.title}</h1>
        <p className="mt-3 text-sm text-muted">
          {stage.completedDate
            ? `Completed ${new Date(stage.completedDate + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`
            : stage.status === "in-progress"
              ? "In progress"
              : "Upcoming"}
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {stage.verificationUrl ? (
            <a
              href={stage.verificationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              Verification <ExternalLink className="size-3.5" />
            </a>
          ) : null}
          {stage.officialUrl ? (
            <a
              href={stage.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-fg"
            >
              Official course <ExternalLink className="size-3.5" />
            </a>
          ) : null}
        </div>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="font-display text-2xl text-fg">Course overview</h2>
          <p className="mt-3 leading-relaxed text-muted">{stage.courseOverview}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-fg">What I learned</h2>
          <div className="mt-6">
            <ProseBlocks blocks={stage.learned} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-fg">Ideas, projects and takeaways</h2>
          <p className="mt-2 text-sm text-muted">
            Green means work has begun — the title is a repository. Amber is planned. Blue is
            still being researched. Gray is shelved.
          </p>
          <div className="mt-6 grid gap-4">
            {stage.ideas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="text-xs uppercase tracking-wide text-subtle">Continue the path</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                to="/path/$slug"
                params={{ slug: prev.id }}
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
              >
                <ArrowLeft className="size-4" /> {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/path/$slug"
                params={{ slug: next.id }}
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                {next.title} <ArrowRight className="size-4" />
              </Link>
            ) : null}
          </div>
          {related.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {related.map((r) =>
                r ? (
                  <Link
                    key={r.id}
                    to="/path/$slug"
                    params={{ slug: r.id }}
                    className="rounded-full border border-border px-3 py-2 text-xs text-muted hover:text-fg"
                  >
                    {r.title}
                  </Link>
                ) : null,
              )}
            </div>
          ) : null}
        </section>
      </article>
    </SiteShell>
  );
}
