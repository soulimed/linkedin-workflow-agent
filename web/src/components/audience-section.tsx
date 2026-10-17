import { AUDIENCE } from "@/lib/skills";

export function AudienceSection() {
  return (
    <section
      id="audience"
      className="border-b border-[var(--line)]/70 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[var(--signal)]">
          Who it’s for
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          Anyone who wants a repeatable LinkedIn system without expensive SaaS.
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
          Built for consultants, founders, and operators who treat presence as
          craft—not a content factory.
        </p>

        <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE.map((persona) => (
            <li
              key={persona}
              className="border-t border-[var(--line)] pt-4 font-display text-lg font-semibold text-[var(--ink)]"
            >
              {persona}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
