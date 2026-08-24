import { createFileRoute } from "@tanstack/react-router";
import { ProseBlocks } from "@/components/prose-blocks";
import { SiteShell } from "@/components/site-shell";
import { RESEARCH } from "@/data/research";
import { PERSON } from "@/data/site";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({ meta: [{ title: `Research — ${PERSON.name}` }] }),
});

function ResearchPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Research</p>
        <h1 className="mt-3 font-display text-4xl text-fg sm:text-6xl">Notes that can survive a reviewer.</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Public drafts on the way to student tracks, workshops, and practitioner bodies — IEEE
          Computer Society / Security & Privacy, and ASIS International among them. Claims stay
          smaller than the evidence.
        </p>
        <div className="mt-14 space-y-16">
          {RESEARCH.map((post) => (
            <article key={post.id} className="border-t border-border pt-10">
              <p className="text-xs uppercase tracking-wide text-subtle">
                {post.status} · {post.venue}
              </p>
              <h2 className="mt-2 font-display text-2xl text-fg sm:text-3xl">{post.title}</h2>
              <p className="mt-3 text-muted leading-relaxed">{post.summary}</p>
              <div className="mt-6">
                <ProseBlocks blocks={post.body} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
