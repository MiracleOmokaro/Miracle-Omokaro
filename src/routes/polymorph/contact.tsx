import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { PERSON, POLYMORPH } from "@/data/site";

export const Route = createFileRoute("/polymorph/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: `Contact — ${POLYMORPH.name}` }] }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const body = String(data.get("body") ?? "");
    const subject = encodeURIComponent(`Project brief from ${name}`);
    const mailBody = encodeURIComponent(`${body}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${PERSON.social.email}?subject=${subject}&body=${mailBody}`;
    setSent(true);
  }

  return (
    <SiteShell variant="polymorph">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="mt-3 font-display text-4xl text-fg sm:text-5xl">Start a project.</h1>
        <p className="mt-4 text-muted leading-relaxed">
          Tell us the business, the market, and what the site must do. A person reads this. A
          voice-agent discovery call is optional and disclosed.
        </p>
        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <label className="block">
            <span className="text-sm text-muted">Name</span>
            <input
              required
              name="name"
              className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-fg outline-none focus:ring-2 focus:ring-accent/50"
            />
          </label>
          <label className="block">
            <span className="text-sm text-muted">Email</span>
            <input
              required
              type="email"
              name="email"
              className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-3 text-fg outline-none focus:ring-2 focus:ring-accent/50"
            />
          </label>
          <label className="block">
            <span className="text-sm text-muted">Brief</span>
            <textarea
              required
              name="body"
              rows={6}
              className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-fg outline-none focus:ring-2 focus:ring-accent/50"
            />
          </label>
          <Button type="submit">Send brief</Button>
          {sent ? (
            <p className="text-sm text-muted">Your mail client should open with the brief addressed to us.</p>
          ) : null}
        </form>
      </div>
    </SiteShell>
  );
}
