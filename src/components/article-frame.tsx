import type { ReactNode } from "react";

export function ArticleFrame({
  back,
  hero,
  date,
  kicker,
  title,
  dek,
  children,
}: {
  back?: ReactNode;
  hero: ReactNode;
  date?: string;
  kicker?: string;
  title: string;
  dek?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {back ? <div className="pt-8 sm:pt-10">{back}</div> : null}
        <div className={back ? "mt-6" : "mt-8 sm:mt-10"}>{hero}</div>
      </div>
      <article className="mx-auto max-w-3xl px-4 pb-24 pt-12 sm:px-6 sm:pt-16">
        {date ? <p className="text-sm text-muted">{date}</p> : null}
        {kicker ? <p className="mt-2 text-sm text-subtle">{kicker}</p> : null}
        <h1 className="mt-3 text-[2.15rem] font-medium leading-[1.08] tracking-tight text-fg sm:text-[3.15rem]">
          {title}
        </h1>
        {dek ? (
          <p className="mt-6 text-[18px] leading-[1.7] text-muted">{dek}</p>
        ) : null}
        <hr className="my-12 border-border" />
        {children}
      </article>
    </>
  );
}
