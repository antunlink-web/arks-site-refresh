import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: ReactNode }) {
  return (
    <section className="border-b border-border bg-slate-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-safety">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>}
      </div>
    </section>
  );
}
