import { PRINCIPLES } from "@/lib/skills";

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="border-b border-[var(--line)]/70 bg-[var(--paper)]/55 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[var(--signal)]">
          Key principles
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          Built for operators who refuse to trade authenticity for automation.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="border-l-2 border-[var(--signal)] pl-5"
            >
              <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
                {principle.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--muted-foreground)]">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
