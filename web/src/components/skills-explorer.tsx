"use client";

import { useMemo, useState, type MouseEvent } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GetSkillsDialog } from "@/components/get-skills-dialog";
import { downloadSkill } from "@/lib/download-skill";
import { GITHUB_REPO_URL } from "@/lib/constants";
import {
  SKILL_CATEGORIES,
  SKILLS,
  type Skill,
  type SkillCategory,
} from "@/lib/skills";
import { cn } from "@/lib/utils";

type Filter = "All" | SkillCategory;

export function SkillsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [errorId, setErrorId] = useState<string | null>(null);

  const filters: Filter[] = useMemo(() => ["All", ...SKILL_CATEGORIES], []);

  const visible = useMemo(() => {
    if (filter === "All") return SKILLS;
    return SKILLS.filter((skill) => skill.category === filter);
  }, [filter]);

  async function handleDownload(skill: Skill, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    setDownloadingId(skill.id);
    setErrorId(null);
    try {
      await downloadSkill(skill);
    } catch {
      setErrorId(skill.id);
    } finally {
      setDownloadingId(null);
    }
  }

  return (
    <section
      id="skills"
      className="border-b border-[var(--line)]/70 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[var(--signal)]">
              What it does
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              Eleven specialized Claude skills covering the entire LinkedIn
              growth process.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              Filter by discipline, expand a skill, then download the real{" "}
              <code className="rounded bg-[var(--mist)] px-1 text-sm">
                skills/li-*
              </code>{" "}
              pack for Cursor or Claude. Nothing auto-posts.
            </p>
          </div>
          <GetSkillsDialog
            triggerLabel="Open skill picker"
            triggerVariant="outline"
            triggerClassName="h-10 shrink-0 rounded-md border-[var(--line)] px-4"
          />
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Skill categories"
        >
          {filters.map((item) => {
            const active = filter === item;
            return (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={active ? "default" : "outline"}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item)}
                className={cn(
                  "h-9 rounded-md px-3",
                  active
                    ? "bg-[var(--signal-deep)] text-[var(--primary-foreground)] hover:bg-[var(--signal)]"
                    : "border-[var(--line)] bg-transparent text-[var(--ink-soft)] hover:bg-[var(--paper)]",
                )}
              >
                {item}
              </Button>
            );
          })}
        </div>

        <p
          className="mt-4 text-sm text-[var(--muted-foreground)]"
          aria-live="polite"
        >
          Showing {visible.length} of {SKILLS.length} skills
          {filter !== "All" ? ` in ${filter}` : ""}. Source:{" "}
          <a
            href={`${GITHUB_REPO_URL}/tree/main/skills`}
            className="underline underline-offset-2 hover:text-[var(--ink)]"
            target="_blank"
            rel="noreferrer"
          >
            github.com/soulimed/linkedin-workflow-agent
          </a>
        </p>

        {visible.length === 0 ? (
          <div className="mt-10 border border-dashed border-[var(--line)] px-6 py-12 text-center">
            <p className="font-display text-lg font-semibold text-[var(--ink)]">
              No skills in this filter
            </p>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Choose another category or reset to All.
            </p>
            <Button
              type="button"
              className="mt-5"
              onClick={() => setFilter("All")}
            >
              Show all skills
            </Button>
          </div>
        ) : (
          <Accordion
            type="single"
            collapsible
            className="mt-6 border-t border-[var(--line)]"
            defaultValue={visible[0]?.id}
          >
            {visible.map((skill) => (
              <AccordionItem
                key={skill.id}
                value={skill.id}
                className="border-[var(--line)]"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <span className="flex flex-col items-start gap-1 text-left sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-display text-lg font-semibold text-[var(--ink)]">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-[var(--signal)]">
                      {skill.command}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                      {skill.category}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                    {skill.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Button
                      type="button"
                      size="sm"
                      className="h-9 rounded-md bg-[var(--signal-deep)] px-3 hover:bg-[var(--signal)]"
                      disabled={downloadingId === skill.id}
                      onClick={(event) => handleDownload(skill, event)}
                    >
                      {downloadingId === skill.id ? (
                        <Loader2
                          className="animate-spin"
                          data-icon="inline-start"
                        />
                      ) : (
                        <Download data-icon="inline-start" />
                      )}
                      Download{" "}
                      {skill.files.length === 1 ? "SKILL.md" : "skill zip"}
                    </Button>
                    <Button asChild size="sm" variant="outline" className="h-9">
                      <a
                        href={`${GITHUB_REPO_URL}/tree/main/skills/${skill.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View on GitHub
                      </a>
                    </Button>
                    {errorId === skill.id ? (
                      <span className="text-xs text-red-700">
                        Download failed — try again or use GitHub.
                      </span>
                    ) : null}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}
