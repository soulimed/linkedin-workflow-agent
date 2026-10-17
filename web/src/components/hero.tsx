import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero-visual";
import { GetSkillsDialog } from "@/components/get-skills-dialog";
import { GITHUB_REPO_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b border-[var(--line)]/70"
    >
      <HeroVisual />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-8 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:justify-center lg:pb-24 lg:pt-24">
        <div className="max-w-2xl">
          <p className="motion-safe:animate-rise font-display text-[clamp(1.75rem,7.2vw,4.75rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-[var(--ink)]">
            LinkedIn Workflow Agent
          </p>
          <h1 className="motion-safe:animate-rise-delay-1 mt-3 max-w-xl text-balance font-display text-[clamp(1.05rem,3.2vw,1.75rem)] font-semibold leading-snug text-[var(--ink-soft)] sm:mt-4">
            A complete LinkedIn content operating system for Claude.
          </h1>
          <p className="motion-safe:animate-rise-delay-2 mt-3 max-w-md text-pretty text-[0.95rem] leading-relaxed text-[var(--muted-foreground)] sm:mt-4 sm:text-lg">
            Grow on LinkedIn without sounding like AI-generated content—drafts
            stay local, voice-aware, and always under your approval.
          </p>
          <div className="motion-safe:animate-rise-delay-3 mt-5 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3">
            <GetSkillsDialog
              triggerSize="lg"
              triggerClassName="h-10 rounded-md bg-[var(--signal-deep)] px-4 text-sm text-[var(--primary-foreground)] hover:bg-[var(--signal)] sm:h-11 sm:px-5 sm:text-base"
            />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 rounded-md border-[var(--line)] bg-[var(--paper)]/70 px-4 text-sm backdrop-blur-sm hover:bg-[var(--paper)] sm:h-11 sm:px-5 sm:text-base"
            >
              <a href="#lifecycle">See how it works</a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-10 px-2 text-sm text-[var(--ink-soft)] hover:bg-transparent hover:text-[var(--ink)] sm:h-11 sm:px-3 sm:text-base"
            >
              <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
                GitHub →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
