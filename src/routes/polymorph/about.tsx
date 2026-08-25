import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PERSON, POLYMORPH } from "@/data/site";

export const Route = createFileRoute("/polymorph/about")({
  component: PolyAbout,
  head: () => ({ meta: [{ title: `About — ${POLYMORPH.name}` }] }),
});

function PolyAbout() {
  return (
    <SiteShell variant="polymorph">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm text-muted">About</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg sm:text-6xl">
          {POLYMORPH.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Polymorph is an agentic software development company. We believe a first-of-kind claim in
          Africa is a responsibility, not a slogan: the work has to be real sites, in real markets,
          with a security posture that does not embarrass the sister company.
        </p>
        <hr className="my-12 border-border" />
        <div className="space-y-5 text-[17px] leading-[1.7] text-muted">
          <p>
            Operator: {PERSON.name}, cybersecurity practitioner. The agents do the volume. The
            operator sets the constraints and the taste.
          </p>
          <p>
            {POLYMORPH.sister} is the security company. It does not get a second full marketing site
            here — it gets a brief: authorized research, defensive literacy, and the
            secure-by-default rules the generator must obey.
          </p>
          <p>
            We use xAI voice agents where they are the strongest available instrument. We will build
            a custom voice layer for markets and languages where that is not enough. We do not
            pretend a custom stack already matches that power.
          </p>
        </div>
        <p className="mt-10 text-sm text-muted">
          <Link to="/" className="hover:text-fg">
            Practitioner site
          </Link>
        </p>
      </article>
    </SiteShell>
  );
}
