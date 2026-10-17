# LinkedIn Workflow Agent

**An open-source toolkit for creating better LinkedIn content, building professional relationships, and managing your content workflow — with AI assistance and human control at every step.**

**Try the site:** [https://soulimed.github.io/linkedin-workflow-agent/](https://soulimed.github.io/linkedin-workflow-agent/) — browse skills and download them in the browser.

LinkedIn Workflow Agent is a collection of 11 Claude Code skills designed to streamline your LinkedIn workflow, from content creation and profile optimization to engagement, outreach, and performance analysis.

Each skill produces actionable, ready-to-use drafts tailored to your communication style. Nothing is published automatically. You review, refine, and approve every piece of content before it goes live.

## Why LinkedIn Workflow Agent?

| Principle | Description |
|---|---|
| **Privacy-first** | Humanization and detection scripts run locally on your machine. No API key is required for these scripts, and draft content is not uploaded by them. |
| **Human-in-the-loop** | Every workflow produces a copy-ready draft. You retain full control over what you publish or send. |
| **Personalized voice** | Skills reference your `voice.md` profile to align content with your tone, vocabulary, and writing style. |
| **Modular by design** | Use individual skills or combine them into a complete LinkedIn content workflow. |
| **Open source** | Released under the MIT License. Free to use, modify, and distribute under its terms. |

## Features & Skills

Eleven specialized skills cover the LinkedIn content lifecycle, from ideation to performance analysis.

| Command | Description |
|---|---|
| `/li-post` | Transform an idea into a complete LinkedIn post. Generate three alternative hooks from 21 formulas, develop the strongest option, and refine the final draft. |
| `/li-comment` | Write thoughtful, context-aware comments using nine engagement styles. Avoid generic responses and contribute meaningfully to discussions. |
| `/li-reply` | Review and respond to comments on your posts with relevant, personalized replies. |
| `/li-profile` | Evaluate your LinkedIn profile against a 12-part rubric, score it out of 100, and improve weaker sections. |
| `/li-plan` | Build a weekly content and engagement plan with recommended topics, posting schedules, and networking priorities. |
| `/li-human` | Refine drafts to remove common AI-writing patterns and evaluate them using a five-part diagnostic report. |
| `/li-carousel` | Create document-style LinkedIn carousel content, including slide-by-slide copy, cover concepts, and PDF preparation guidance. |
| `/li-repurpose` | Turn a video, newsletter, or transcript into a week of distinct, standalone LinkedIn posts. |
| `/li-dm` | Draft personalized connection requests, initial outreach messages, and two follow-up messages. |
| `/li-inbox` | Organize inbox conversations into lead, recruiter, peer, request, or spam categories to help prioritize responses. |
| `/li-audit` | Analyze published posts using available reach and engagement metrics to identify patterns and opportunities for improvement. |

## Installation

### Option 1: Claude Code — Recommended

Clone the repository:

```bash
git clone https://github.com/soulimed/linkedin-workflow-agent.git
```

Install the skills in your personal Claude Code skills directory:

```bash
mkdir -p ~/.claude/skills
cp -r linkedin-workflow-agent/skills/li-* ~/.claude/skills/
```

The skills will then be available across your Claude Code projects.

### Option 2: Install as a Claude Code Plugin

Add the marketplace and install the plugin:

```text
/plugin marketplace add soulimed/linkedin-workflow-agent
/plugin install linkedin-agent
```

### Option 3: Project-Level Installation

To make the skills available only within a specific project, copy the required `skills/li-*` directories into that project's `.claude/skills/` directory.

### Option 4: Chat-Only Usage

You can use the writing skills without installing Claude Code:

1. Open the desired skill's `SKILL.md` file.
2. Copy its contents into a Claude conversation.
3. Provide your topic, context, or draft.
4. Review and refine the generated content before publishing.

**Note:** The `/li-human` skill's Python scripts require local execution and are not available through the chat-only workflow.

## Personalize Your Writing Voice

For the best results, configure your voice profile before using the skills.

Create the configuration directory and copy the template:

```bash
mkdir -p ~/.claude/linkedin
cp linkedin-workflow-agent/templates/voice.md \
   ~/.claude/linkedin/voice.md
```

Edit `voice.md` to describe your tone, preferred vocabulary, writing habits, audience, and communication preferences.

Alternatively, provide Claude with three examples of your own LinkedIn posts and ask it to generate a voice profile based on those samples.

The skills use this profile to produce more consistent, personalized drafts instead of relying on generic templates.

## Local Humanization & Draft Analysis

The `/li-human` skill includes lightweight Python scripts that refine drafts and report on common AI-writing patterns.

**No external API key or third-party detector service is required.**

### Requirements

- Python 3
- No additional Python dependencies

### Usage

Navigate to the humanization skill directory:

```bash
cd linkedin-workflow-agent/skills/li-human
```

Humanize a draft and display the changes:

```bash
python3 humanize.py draft.txt --report
```

Evaluate a draft using the diagnostic checks:

```bash
python3 detect.py draft.txt
```

Compare the original and revised versions:

```bash
python3 detect.py before.txt after.txt
```

### Diagnostic Checks

| Check | What It Evaluates |
|---|---|
| **Burstiness** | Variation in sentence length and structure. |
| **Specificity** | Presence of concrete details, names, numbers, and examples. |
| **Slop Density** | Frequency of common AI-associated phrases and vocabulary. |
| **Fingerprint** | Formatting artifacts, invisible characters, em dashes, and curly quotation marks. |
| **Voice** | Use of contractions, personal perspective, and structural patterns. |

These checks are local heuristics designed to support editing and consistency. They are not scientific measures of authorship, do not guarantee that content will pass AI detectors, and should be interpreted as writing-quality signals rather than definitive evidence.

## Repository Structure

```text
linkedin-workflow-agent/
├── README.md
├── LICENSE
├── .gitignore
├── .claude-plugin/
│   └── ...                    # Plugin configuration
├── skills/
│   ├── li-post/
│   │   ├── hooks.json
│   │   └── SKILL.md
│   ├── li-human/
│   │   ├── detect.py
│   │   ├── humanize.py
│   │   └── slop.json
│   ├── li-profile/
│   │   ├── rubric.json
│   │   └── SKILL.md
│   ├── li-comment/
│   ├── li-reply/
│   ├── li-plan/
│   ├── li-carousel/
│   ├── li-repurpose/
│   ├── li-dm/
│   ├── li-inbox/
│   └── li-audit/
└── templates/
    └── voice.md
```

Each skill has its own directory and instructions. Some skills include supporting configuration files or scripts.

## Design Principles

### 1. Human Approval Comes First

The agent drafts content but does not automatically publish posts, send messages, or interact with LinkedIn on your behalf. You decide what to use and when to use it.

### 2. Accuracy Over Fabrication

The skills must not invent achievements, statistics, metrics, or professional experience. When information is missing, placeholders such as `{{your number}}` are used where appropriate so you can supply verified details.

### 3. Humanization Without False Promises

The humanizer targets recognizable writing patterns and formatting artifacts. It supports clearer, more natural writing but does not promise undetectable AI-generated content.

### 4. Local Processing Where Possible

The humanization and diagnostic scripts operate locally. Other processing depends on the AI environment in which the skills are used.

### 5. Modular and Extensible

Each skill addresses a specific task and can be used independently, adapted to your workflow, or extended to support additional LinkedIn use cases.

## Marketing Website

The public-facing website is maintained in the [`web/`](https://github.com/soulimed/linkedin-workflow-agent/tree/main/web) directory and built with Next.js using static export.

**Live demo (try it):** [https://soulimed.github.io/linkedin-workflow-agent/](https://soulimed.github.io/linkedin-workflow-agent/)

### Run Locally

```bash
cd web
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321) in your browser.

### Build for Production

```bash
npm run build
```

The build process synchronizes the skill files into `public/skills` and generates the static website in `web/out`.

### Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-github-pages.yml`.

Deployments are triggered by pushes to `main` that modify files under `web/` or `skills/`.

Once GitHub Pages is enabled and configured, the public URL is:

**https://soulimed.github.io/linkedin-workflow-agent/**

### Get the Skills

The website's **Get the Skills** experience allows visitors to browse the 11 skill packs and download their `SKILL.md` files, or ZIP archives when a skill contains multiple files.

Repository links provide access to the source code and documentation.

The website follows the same principles as the project: local-first utilities, transparent behavior, human approval, and no automatic posting.

## Contributing

Contributions, bug reports, documentation improvements, and new skill ideas are welcome.

When contributing, please preserve the project's core principles:

- Keep workflows transparent and user-controlled.
- Never fabricate professional claims or performance metrics.
- Avoid unauthorized automated LinkedIn interactions.
- Document external dependencies and data-processing behavior.
- Keep local utilities lightweight wherever practical.

## License

This project is licensed under the [MIT License](https://github.com/soulimed/linkedin-workflow-agent/blob/main/LICENSE).

You are free to use, modify, and distribute the project in accordance with the license terms.

---

**Build a more consistent LinkedIn presence — one thoughtful draft at a time.**

*Draft with AI. Refine with your voice. Publish on your terms.*
