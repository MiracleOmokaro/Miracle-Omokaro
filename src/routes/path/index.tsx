import { createFileRoute } from "@tanstack/react-router";
import { PathOfProgress } from "@/components/path-of-progress";
import { SiteShell } from "@/components/site-shell";
import { PERSON } from "@/data/site";

export const Route = createFileRoute("/path/")({
  component: PathPage,
  head: () => ({ meta: [{ title: `Path of Progress — ${PERSON.name}` }] }),
});

function PathPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Path of Progress</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-fg sm:text-6xl">
          A deliberate journey through the best available resources.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Follow along. This is a proven path for mastering cybersecurity — written in public,
          with verification links, what I learned, and the projects each stage inspired.
        </p>
        <div className="mt-12">
          <PathOfProgress />
        </div>
      </div>
    </SiteShell>
  );
}
