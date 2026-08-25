import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PERSON } from "@/data/site";

export const Route = createFileRoute("/connect")({
  component: ConnectPage,
  head: () => ({ meta: [{ title: `Connect — ${PERSON.name}` }] }),
});

const LINKS = [
  { label: "X", href: PERSON.social.x, note: "Public notes and path updates" },
  { label: "GitHub", href: PERSON.social.github, note: "Repositories for green-status ideas" },
  { label: "TryHackMe", href: PERSON.social.tryhackme, note: "Rooms and path progress" },
  { label: "Discord", href: PERSON.social.discord, note: "Team hacking and study groups" },
  { label: "Email", href: `mailto:${PERSON.social.email}`, note: PERSON.social.email },
];

function ConnectPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm text-muted">Connect</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg sm:text-6xl">
          Team hacking welcome.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          I am on X, Discord, TryHackMe, and GitHub. If you are learning the same path, hunting
          with permission, or building for SMEs in the Gulf, write.
        </p>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex min-h-16 items-center justify-between gap-4 py-4"
              >
                <span className="text-fg">{l.label}</span>
                <span className="text-sm text-muted">{l.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
