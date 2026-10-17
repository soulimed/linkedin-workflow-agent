# LinkedIn Workflow Agent

Eleven Claude skills for LinkedIn content workflows — posts, comments, replies, profile scoring, weekly planning, DMs, inbox triage, and a local humanizer that strips common AI fingerprints before you publish.

**Nothing is posted until you approve it.** These skills draft. You paste.

---

## Why this repo

| | |
| --- | --- |
| **Local-first** | Humanizer scripts run on your machine. No API key. Nothing uploaded. |
| **Human approval** | Every skill ends with a copy-ready block. You decide what goes live. |
| **Voice-aware** | Skills read your `voice.md` so drafts sound like you, not a template. |
| **Open source** | MIT. Free to use, change, and ship. |

---

## Skills

| Command | What it does |
| --- | --- |
| `/li-post` | Turn one idea into a post — 3 hooks from 21 formulas, one full draft, humanized. |
| `/li-comment` | Comment on other people's posts (9 types). Never "Great post!". |
| `/li-reply` | Triage and reply to comments under your own posts. |
| `/li-profile` | Score your profile against a 12-part rubric (out of 100) and rewrite weak spots. |
| `/li-plan` | Plan the week: what to post, when, and who to engage with. |
| `/li-human` | Strip AI tells and score the draft with a five-check panel. |
| `/li-carousel` | Document-post copy, slide by slide, plus cover and PDF guidance. |
| `/li-repurpose` | Turn one video, newsletter, or transcript into a week of standalone posts. |
| `/li-dm` | Connection note, first message, and two follow-ups. |
| `/li-inbox` | Triage inbox into lead / recruiter / peer / ask / spam. |
| `/li-audit` | Post-mortem on published posts by engagement rate and reach. |

---

## Install

### Claude Code (recommended)

```bash
git clone https://github.com/soulimed/linkedin-workflow-agent.git
cp -r linkedin-workflow-agent/skills/li-* ~/.claude/skills/
```

Or as a plugin:

```
/plugin marketplace add soulimed/linkedin-workflow-agent
/plugin install linkedin-agent
```

### Project-local

Copy the same `skills/li-*` folders into your repo's `.claude/skills/`.

### Chat-only

Paste any single `SKILL.md` at the top of a chat. You lose the Python tools in `/li-human`, but the writing skills still work.

### Voice profile (do this first)

```bash
mkdir -p ~/.claude/linkedin
cp templates/voice.md ~/.claude/linkedin/voice.md
```

Fill it in, or paste three of your own posts into Claude and ask it to write `voice.md` from them. Every skill reads that file.

---

## Humanizer (local Python, no dependencies)

```bash
cd skills/li-human

python3 humanize.py draft.txt --report   # clean + show every change
python3 detect.py draft.txt              # five-check score
python3 detect.py before.txt after.txt   # before / after delta
```

| Check | Measures |
| --- | --- |
| **BURSTINESS** | Sentence-length variation |
| **SPECIFICITY** | Numbers, names, concrete markers |
| **SLOP DENSITY** | Stock AI vocabulary hits |
| **FINGERPRINT** | Invisible chars, em dashes, curly quotes |
| **VOICE** | Contractions, person, structural tells |

Scores are local heuristics, not third-party detector APIs. Higher is more human.

---

## Repository layout

```
.
├── README.md
├── LICENSE
├── .gitignore
├── .claude-plugin/          # Claude Code plugin manifest
├── skills/
│   ├── li-post/             # hooks.json + SKILL.md
│   ├── li-human/            # detect.py, humanize.py, slop.json
│   ├── li-profile/          # rubric.json + SKILL.md
│   ├── li-comment/
│   ├── li-reply/
│   ├── li-plan/
│   ├── li-carousel/
│   ├── li-repurpose/
│   ├── li-dm/
│   ├── li-inbox/
│   └── li-audit/
└── templates/
    └── voice.md             # copy to ~/.claude/linkedin/voice.md
```

---

## Design rules

1. **No auto-posting.** LinkedIn's personal-profile posting API is partner-only; browser automation violates their User Agreement. Skills draft; you paste.
2. **No fabricated claims.** Missing numbers become `{{your number}}` with a flag.
3. **Humanizer is honest.** It removes real machine artefacts (invisible chars, slop lexicon, typography). It does not claim "undetectable."

## License

[MIT](./LICENSE)

---

## Marketing site

The public landing experience lives in [`web/`](./web/) (Next.js static export).

```bash
cd web
npm install
npm run dev    # http://127.0.0.1:4321
npm run build  # syncs ../skills into public/skills, writes ./out
```

GitHub Pages deploys from `.github/workflows/deploy-github-pages.yml` on pushes to `main` that touch `web/` or `skills/`. Expected URL after Pages is enabled:

**https://soulimed.github.io/linkedin-workflow-agent/**

The site’s **Get the skills** flow lets visitors pick one of the eleven `skills/li-*` packs and download `SKILL.md` (or a zip when the skill has multiple files). GitHub CTAs point at this repository. Product truths stay the same: local-first, human approval, **no auto-posting**.

