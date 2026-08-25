import type { ContentBlock } from "@/data/types";

export function ProseBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block) => (
        <section key={block.heading ?? block.body.slice(0, 24)}>
          {block.heading ? (
            <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-[1.75rem]">
              {block.heading}
            </h2>
          ) : null}
          <p className="mt-3 max-w-prose text-[17px] leading-[1.7] text-muted">{block.body}</p>
          {block.bullets?.length ? (
            <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 text-[17px] leading-[1.7] text-muted">
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
