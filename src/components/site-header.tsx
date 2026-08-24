import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { PERSON } from "@/data/site";

const PERSONAL_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/path", label: "Path" },
  { to: "/work", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/skills", label: "Skills" },
  { to: "/connect", label: "Connect" },
] as const;

const POLY_NAV = [
  { to: "/polymorph", label: "Home" },
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
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          to={brandTo}
          className="font-display text-lg tracking-tight text-fg sm:text-xl"
        >
          {brand}
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.to === "/" || item.to === "/polymorph"
                ? pathname === item.to
                : pathname === item.to || pathname.startsWith(item.to + "/");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm transition-colors duration-150",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          {variant === "personal" ? (
            <Link
              to="/polymorph"
              className="ml-2 rounded-sm border border-border px-3 py-2 text-sm text-muted hover:text-fg"
            >
              Polymorph
            </Link>
          ) : (
            <Link
              to="/"
              className="ml-2 rounded-sm border border-border px-3 py-2 text-sm text-muted hover:text-fg"
            >
              Practitioner
            </Link>
          )}
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm text-fg lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-11 items-center text-sm text-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={variant === "personal" ? "/polymorph" : "/"}
              className="flex min-h-11 items-center text-sm text-muted"
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
