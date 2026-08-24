import { Link } from "@tanstack/react-router";
import { PERSON } from "@/data/site";

export function SiteFooter({ variant }: { variant: "personal" | "polymorph" }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg text-fg">
            {variant === "polymorph" ? "Polymorph Technologies" : PERSON.name}
          </p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            {variant === "polymorph"
              ? "Agentic software development for businesses that need a real site, not a template."
              : "Cybersecurity practitioner. Sophomore. Builder of Polymorph Technologies and Pentagon Cyber."}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <Link to="/" className="hover:text-fg">
            Practitioner
          </Link>
          <Link to="/polymorph" className="hover:text-fg">
            Polymorph
          </Link>
          <Link to="/path" className="hover:text-fg">
            Path of Progress
          </Link>
          <Link to="/connect" className="hover:text-fg">
            Connect
          </Link>
        </div>
      </div>
    </footer>
  );
}
