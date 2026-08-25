import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PERSON } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: `About — ${PERSON.name}` }] }),
});

function About() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm text-muted">About</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg sm:text-6xl">
          {PERSON.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          I am a sophomore studying cybersecurity. I am not a graduate and I do not pretend to be a
          principal engineer. I am a practitioner: I take the best public curricula seriously, I
          write down what they actually taught me, and I ship work under two companies.
        </p>
        <hr className="my-12 border-border" />
        <div className="space-y-6 text-[17px] leading-[1.7] text-muted">
          <p>
            The Path of Progress on this site is the spine. It is designed so a recruiter can see
            that I train on Cisco, TryHackMe, PortSwigger, and pwn.college — not a random playlist
            — and that some of the ideas those courses produced are already in GitHub repositories.
          </p>
          <p>
            <strong className="font-medium text-fg">Polymorph Technologies</strong> is an agentic
            software development company. It researches, structures, and generates production
            websites for businesses, starting with SMEs in Saudi Arabia, Dubai, and the wider Gulf.
            Voice agents handle outreach. Human review holds brand and legal.
          </p>
          <p>
            <strong className="font-medium text-fg">Pentagon Cyber</strong> is the sister company:
            security practice, secure-by-default constraints on what Polymorph ships, and the long
            path toward authorized research and bug-bounty work. This site iterates on that idea; it
            does not replace a full Pentagon property.
          </p>
          <p>
            I write with Feynman-level clarity on purpose. If a sophomore cannot explain a lab
            without hiding behind a payload, the sophomore does not understand the lab.
          </p>
        </div>
        <p className="mt-12 text-sm text-muted">
          <Link to="/connect" className="hover:text-fg">
            Connect
          </Link>
          {" · "}
          <Link to="/path" className="hover:text-fg">
            Path of Progress
          </Link>
        </p>
      </article>
    </SiteShell>
  );
}
