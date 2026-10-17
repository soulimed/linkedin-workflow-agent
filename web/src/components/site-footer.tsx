import { Button } from "@/components/ui/button";
import { GetSkillsDialog } from "@/components/get-skills-dialog";
import { GITHUB_REPO_URL } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-[var(--line)] pt-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <p className="font-display text-2xl font-bold tracking-tight text-[var(--ink)]">
            LinkedIn Workflow Agent
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
            Open source under the MIT License. Local-first. Voice-aware. Human
            approval required.{" "}
            <span className="font-semibold text-[var(--ink)]">
              No auto-posting—ever.
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <GetSkillsDialog
            triggerSize="default"
            triggerClassName="h-10 rounded-md bg-[var(--signal-deep)] px-4 hover:bg-[var(--signal)]"
          />
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-md border-[var(--line)] px-4"
          >
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 text-xs text-[var(--muted-foreground)] sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} LinkedIn Workflow Agent · MIT</p>
        <p>Draft locally. Review yourself. Publish manually.</p>
      </div>
    </footer>
  );
}
