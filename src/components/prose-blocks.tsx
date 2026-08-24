import type { ContentBlock } from "@/data/types";

export function ProseBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block) => (
        <section key={block.heading ?? block.body.slice(0, 24)}>
          {block.heading ? (
            <h3 className="font-display text-xl text-fg sm:text-2xl">{block.heading}</h3>
          ) : null}
          <p className="mt-2 max-w-prose text-base leading-relaxed text-muted">{block.body}</p>
          {block.bullets?.length ? (
            <ul className="mt-3 max-w-prose list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
              {block.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
