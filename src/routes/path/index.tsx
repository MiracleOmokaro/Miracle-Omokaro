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
      <div className="px-4 py-20 sm:px-6 sm:py-28">
        <PathOfProgress />
      </div>
    </SiteShell>
  );
}
