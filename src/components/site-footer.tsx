import { Link } from "@tanstack/react-router";
import { PERSON } from "@/data/site";

const COLS = [
  {
    title: "Path",
    links: [
      { to: "/path", label: "Path of Progress" },
      { to: "/news", label: "News" },
      { to: "/skills", label: "Skills" },
      { to: "/research", label: "Research" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/polymorph", label: "Polymorph" },
      { to: "/polymorph/process", label: "Process" },
      { to: "/polymorph/work", label: "Work" },
      { to: "/about", label: "About" },
    ],
  },
] as const;

export function SiteFooter({ variant }: { variant: "personal" | "polymorph" }) {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-sm font-medium tracking-tight text-fg">
            {variant === "polymorph" ? "Polymorph Technologies" : PERSON.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {variant === "polymorph"
              ? "Agentic software development. Websites researched, structured, and printed at low latency."
              : "Cybersecurity practitioner. A proven path, written in public."}
          </p>
        </div>
        {COLS.map((col) => (
          <div key={col.title}>
            <p className="text-xs uppercase tracking-[0.16em] text-subtle">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-10 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {PERSON.name}. Sister company: Pentagon Cyber.
        </p>
        <Link to="/connect" className="hover:text-fg">
          Connect
        </Link>
      </div>
    </footer>
  );
}
