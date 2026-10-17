import { TRUST_POINTS } from "@/lib/skills";

const ISSUES = [
  "They generate generic content that sounds robotic.",
  "They require subscriptions or API costs.",
  "They prioritize automation over authenticity.",
] as const;

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="border-b border-[var(--line)]/70 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[var(--signal)]">
            The problem
          </p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Professionals don’t need another content generator. They need a
            workflow.
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
            Most LinkedIn AI tools have three major issues. LinkedIn Workflow
            Agent was built as a system that helps transform ideas into content,
            engage with your audience, maintain consistent visibility, and
            protect your personal voice.
          </p>
        </div>

        <ol className="space-y-0 border-t border-[var(--line)]">
          {ISSUES.map((issue, index) => (
            <li
              key={issue}
              className="flex gap-4 border-b border-[var(--line)] py-5"
            >
              <span className="font-display text-sm font-semibold text-[var(--signal)]">
                0{index + 1}
              </span>
              <p className="text-base leading-relaxed text-[var(--ink-soft)]">
                {issue}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto mt-16 max-w-6xl">
        <p className="mb-4 text-sm text-[var(--muted-foreground)]">
          Nothing is ever published automatically. Every piece of content is
          reviewed by you before it goes live.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--line)] pt-5">
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="text-sm font-medium text-[var(--ink)] before:mr-2 before:text-[var(--signal)] before:content-['◆']"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
