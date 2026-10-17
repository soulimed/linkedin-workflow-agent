"use client";

import { useEffect, useState } from "react";
import { LIFECYCLE_STEPS } from "@/lib/skills";
import { cn } from "@/lib/utils";

const STEP_COPY: Record<(typeof LIFECYCLE_STEPS)[number], string> = {
  Idea: "Capture a spark—notes, transcripts, or a rough angle—without forcing a polished post yet.",
  Draft: "Turn the idea into structured LinkedIn drafts with hooks that still sound like you.",
  Humanize: "Run local humanization checks to strip machine fingerprints before anything goes live.",
  Publish: "You publish manually. The agent never auto-posts—approval is the gate.",
  Engage: "Show up in comments and replies with value, not empty applause.",
  Network: "Keep DMs and inbox triage intentional so relationships compound.",
  Analyze: "Review what landed with a performance audit, not vanity metrics alone.",
  Improve: "Feed learnings back into planning so the next cycle is sharper.",
};

export function LifecycleSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % LIFECYCLE_STEPS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [paused]);

  const step = LIFECYCLE_STEPS[active];

  return (
    <section
      id="lifecycle"
      className="border-b border-[var(--line)]/70 bg-[var(--signal-deep)] px-5 py-20 text-[var(--primary-foreground)] sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[var(--signal-soft)]">
          Why different
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          A complete content workflow—not just post generation.
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Idea → Draft → Humanize → Publish → Engage → Network → Analyze →
          Improve. One framework instead of eleven disconnected prompts.
        </p>

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setPaused(false);
            }
          }}
        >
          <ol className="flex flex-wrap gap-2 sm:gap-3">
            {LIFECYCLE_STEPS.map((label, index) => {
              const isActive = index === active;
              return (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={cn(
                      "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "animate-lifecycle-active border-[var(--signal-soft)] bg-[var(--signal)] text-white"
                        : "border-white/15 bg-white/5 text-white/75 hover:border-white/30 hover:bg-white/10",
                    )}
                  >
                    <span className="mr-2 font-display text-[0.7rem] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 min-h-[7.5rem] border border-white/15 bg-white/5 px-5 py-6 sm:px-7">
            <p className="font-display text-2xl font-semibold">{step}</p>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/75">
              {STEP_COPY[step]}
            </p>
            <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div
                key={active}
                className={cn(
                  "h-full origin-left bg-[var(--signal-soft)]",
                  paused ? "w-full" : "animate-lifecycle-progress w-full",
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
