import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { PERSON } from "@/data/site";
import { Wordmark } from "./wordmark";

const PERSONAL_NAV = [
  { to: "/path", label: "Path" },
  { to: "/news", label: "News" },
  { to: "/work", label: "Work" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
] as const;

const POLY_NAV = [
  { to: "/polymorph/work", label: "Work" },
  { to: "/polymorph/process", label: "Process" },
  { to: "/polymorph/about", label: "About" },
  { to: "/polymorph/contact", label: "Contact" },
] as const;

export function SiteHeader({ variant }: { variant: "personal" | "polymorph" }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const nav = variant === "polymorph" ? POLY_NAV : PERSONAL_NAV;
  const brandTo = variant === "polymorph" ? "/polymorph" : "/";
  const brand = variant === "polymorph" ? "Polymorph" : PERSON.name;

  return (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to={brandTo} className="shrink-0">
          <Wordmark label={brand} />
        </Link>
        <nav className="hidden items-center gap-1.5 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to || pathname.startsWith(item.to + "/");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex h-9 items-center rounded-full border px-3.5 text-[13px] transition-colors duration-150",
                  active
                    ? "border-fg/30 bg-elevated text-fg"
                    : "border-fg/12 text-muted hover:border-fg/25 hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          {variant === "personal" ? (
            <Link
              to="/polymorph"
              className="ml-2 inline-flex h-9 items-center rounded-full bg-fg px-4 text-[13px] font-medium text-accent-fg"
            >
              Polymorph
            </Link>
          ) : (
            <Link
              to="/"
              className="ml-2 inline-flex h-9 items-center rounded-full bg-fg px-4 text-[13px] font-medium text-accent-fg"
            >
              Practitioner
            </Link>
          )}
        </nav>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-fg/18 text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-12 items-center text-sm text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={variant === "personal" ? "/polymorph" : "/"}
              className="flex min-h-12 items-center text-sm text-muted"
              onClick={() => setOpen(false)}
            >
              {variant === "personal" ? "Polymorph Technologies" : "Practitioner site"}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
