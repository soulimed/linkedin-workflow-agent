import { GetSkillsDialog } from "@/components/get-skills-dialog";
import { GITHUB_REPO_URL } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-[var(--ink)]/80 transition-colors hover:text-[var(--ink)]"
        >
          LWA
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[var(--ink-soft)] md:flex">
          <a href="#problem" className="transition-colors hover:text-[var(--ink)]">
            Problem
          </a>
          <a href="#skills" className="transition-colors hover:text-[var(--ink)]">
            Skills
          </a>
          <a
            href="#lifecycle"
            className="transition-colors hover:text-[var(--ink)]"
          >
            Lifecycle
          </a>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--ink)]"
          >
            GitHub
          </a>
        </nav>
        <GetSkillsDialog
          triggerSize="sm"
          triggerClassName="h-9 rounded-md bg-[var(--signal-deep)] px-3.5 text-[var(--primary-foreground)] hover:bg-[var(--signal)]"
        />
      </div>
    </header>
  );
}
