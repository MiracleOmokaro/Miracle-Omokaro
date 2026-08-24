import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteShell({
  children,
  variant = "personal",
}: {
  children: ReactNode;
  variant?: "personal" | "polymorph";
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader variant={variant} />
      <main className="flex-1">{children}</main>
      <SiteFooter variant={variant} />
    </div>
  );
}
