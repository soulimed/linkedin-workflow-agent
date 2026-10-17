import { ROADMAP_ITEMS } from "@/lib/skills";

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="border-b border-[var(--line)]/70 bg-[var(--paper)]/55 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[var(--signal)]">
            Roadmap
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            What’s ahead after the operating system.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            The site can tease the future—shared memory, multi-platform reach,
            and deeper local AI—without promising auto-posting.
          </p>
        </div>

        <ol className="space-y-0">
          {ROADMAP_ITEMS.map((item, index) => (
            <li
              key={item}
              className="flex items-baseline gap-4 border-t border-[var(--line)] py-4 last:border-b"
            >
              <span className="w-8 shrink-0 font-display text-sm font-semibold text-[var(--signal)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base text-[var(--ink-soft)]">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
