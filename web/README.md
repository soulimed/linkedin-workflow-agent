# LinkedIn Workflow Agent — marketing site

Next.js landing for [soulimed/linkedin-workflow-agent](https://github.com/soulimed/linkedin-workflow-agent).

## Run

```bash
npm install
npm run dev    # http://127.0.0.1:4321
npm run build  # copies ../skills → public/skills, exports ./out
```

## Product truths

Local-first · Human approval required · Voice-aware · MIT · **No auto-posting**

## Downloads

**Get the skills** opens a picker. Choosing a skill downloads that pack from `public/skills/<slug>/` (synced from the repo’s `skills/` on build) — `SKILL.md` alone, or a zip when the skill includes helpers (e.g. `li-human`).
