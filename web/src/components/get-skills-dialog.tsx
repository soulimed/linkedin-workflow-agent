"use client";

import { useMemo, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

type GetSkillsDialogProps = {
  triggerClassName?: string;
  triggerLabel?: string;
  triggerVariant?: "default" | "outline" | "ghost" | "secondary";
  triggerSize?: "default" | "sm" | "lg";
};

export function GetSkillsDialog({
  triggerClassName,
  triggerLabel = "Get the skills",
  triggerVariant = "default",
  triggerSize = "lg",
}: GetSkillsDialogProps) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(SKILLS[0]?.id ?? "");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const filters: Filter[] = useMemo(() => ["All", ...SKILL_CATEGORIES], []);

  const visible = useMemo(() => {
    if (filter === "All") return SKILLS;
    return SKILLS.filter((skill) => skill.category === filter);
  }, [filter]);

  const selected: Skill | undefined =
    visible.find((skill) => skill.id === selectedId) ?? visible[0];

  async function handleDownload() {
    if (!selected) return;
    setStatus("loading");
    setError(null);
    try {
      await downloadSkill(selected);
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Download failed");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setStatus("idle");
          setError(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          type="button"
          variant={triggerVariant}
          size={triggerSize}
          className={triggerClassName}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[min(90vh,40rem)] gap-0 overflow-hidden border-[var(--line)] bg-[var(--paper)] p-0 sm:max-w-xl">
        <DialogHeader className="border-b border-[var(--line)] px-5 py-4 text-left">
          <DialogTitle className="font-display text-xl text-[var(--ink)]">
            Get a skill
          </DialogTitle>
          <DialogDescription className="text-[var(--muted-foreground)]">
            Choose one Claude skill and download it for Cursor, Claude Code, or
            a chat paste. Local-first — nothing auto-posts.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 border-b border-[var(--line)] px-5 py-3">
          {filters.map((item) => {
            const active = filter === item;
            return (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={active ? "default" : "outline"}
                onClick={() => {
                  setFilter(item);
                  setStatus("idle");
                }}
                className={cn(
                  "h-8 rounded-md px-2.5 text-xs",
                  active
                    ? "bg-[var(--signal-deep)] text-[var(--primary-foreground)] hover:bg-[var(--signal)]"
                    : "border-[var(--line)] bg-transparent",
                )}
              >
                {item}
              </Button>
            );
          })}
        </div>

        <div className="max-h-[18rem] overflow-y-auto px-2 py-2">
          {visible.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-[var(--muted-foreground)]">
              No skills in this filter.
            </p>
          ) : (
            <ul className="space-y-1" role="listbox" aria-label="Skills">
              {visible.map((skill) => {
                const active = selected?.id === skill.id;
                return (
                  <li key={skill.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => {
                        setSelectedId(skill.id);
                        setStatus("idle");
                        setError(null);
                      }}
                      className={cn(
                        "flex w-full flex-col gap-0.5 rounded-md px-3 py-2.5 text-left transition-colors",
                        active
                          ? "bg-[var(--signal-soft)]/45 text-[var(--ink)]"
                          : "hover:bg-[var(--mist-deep)]/50",
                      )}
                    >
                      <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="font-display text-sm font-semibold">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[0.7rem] text-[var(--signal)]">
                          {skill.command}
                        </span>
                      </span>
                      <span className="line-clamp-2 text-xs text-[var(--muted-foreground)]">
                        {skill.summary}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="space-y-3 border-t border-[var(--line)] px-5 py-4">
          {selected ? (
            <p className="text-xs text-[var(--muted-foreground)]">
              Downloads{" "}
              <span className="font-medium text-[var(--ink)]">
                {selected.files.length === 1
                  ? `${selected.slug}/SKILL.md`
                  : `${selected.slug}.zip (${selected.files.length} files)`}
              </span>
              . Drop into{" "}
              <code className="rounded bg-[var(--mist)] px-1">
                ~/.claude/skills/
              </code>{" "}
              or paste SKILL.md into chat.
            </p>
          ) : null}

          {error ? (
            <p className="text-xs text-red-700" role="alert">
              {error}
            </p>
          ) : null}
          {status === "done" ? (
            <p className="text-xs text-[var(--signal)]" role="status">
              Download started. Review every draft before you publish — no
              auto-posting.
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              disabled={!selected || status === "loading"}
              onClick={handleDownload}
              className="h-10 rounded-md bg-[var(--signal-deep)] px-4 hover:bg-[var(--signal)]"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" data-icon="inline-start" />
              ) : (
                <Download data-icon="inline-start" />
              )}
              Download skill
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-md border-[var(--line)] px-4"
            >
              <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
