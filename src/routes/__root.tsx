import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site-shell";
import { Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";

const APP_NAME = "Miracle Omokaro";
const BASE_URL = import.meta.env.BASE_URL;

function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-fg">This node is not on the path.</h1>
        <Link to="/" className="mt-6 inline-block text-sm text-fg underline-offset-4 hover:underline">
          Return home
        </Link>
      </div>
    </SiteShell>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#000000" },
      {
        name: "description",
        content:
          "Miracle Omokaro — cybersecurity practitioner. Path of Progress, research, and Polymorph Technologies.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: `${BASE_URL}favicon.svg` },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: `${BASE_URL}__grok/manifest.webmanifest` },
      { rel: "apple-touch-icon", href: `${BASE_URL}__grok/icon-180.png` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
