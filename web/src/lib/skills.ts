export type SkillCategory =
  | "Content Creation"
  | "Engagement"
  | "Networking"
  | "Personal Branding"
  | "Strategy"
  | "Humanization";

export type Skill = {
  id: string;
  /** Repo folder under skills/ (e.g. li-post) */
  slug: string;
  name: string;
  command: string;
  category: SkillCategory;
  summary: string;
  /** Files relative to skills/<slug>/ available for download */
  files: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  "Content Creation",
  "Engagement",
  "Networking",
  "Personal Branding",
  "Strategy",
  "Humanization",
];

export const SKILLS: Skill[] = [
  {
    id: "posts",
    slug: "li-post",
    name: "Posts",
    command: "/li-post",
    category: "Content Creation",
    summary:
      "Transform ideas into complete LinkedIn posts with multiple hook variations and humanization checks before publishing.",
    files: ["SKILL.md", "hooks.json"],
  },
  {
    id: "carousels",
    slug: "li-carousel",
    name: "Carousels",
    command: "/li-carousel",
    category: "Content Creation",
    summary:
      "Slide-by-slide document-post content with covers, structure, and export-ready PDF guidance.",
    files: ["SKILL.md"],
  },
  {
    id: "repurposing",
    slug: "li-repurpose",
    name: "Repurposing",
    command: "/li-repurpose",
    category: "Content Creation",
    summary:
      "Turn videos, newsletters, recordings, or transcripts into multiple posts—and a week's content from a single source.",
    files: ["SKILL.md"],
  },
  {
    id: "comments",
    slug: "li-comment",
    name: "Comments",
    command: "/li-comment",
    category: "Engagement",
    summary:
      "Thoughtful, value-driven comments that avoid low-value responses like “Great post.”",
    files: ["SKILL.md"],
  },
  {
    id: "replies",
    slug: "li-reply",
    name: "Replies",
    command: "/li-reply",
    category: "Engagement",
    summary:
      "Respond to comments on your own posts with consistency and relationship-building in mind.",
    files: ["SKILL.md"],
  },
  {
    id: "dm-assistant",
    slug: "li-dm",
    name: "DM Assistant",
    command: "/li-dm",
    category: "Networking",
    summary:
      "Connection requests, first-touch messages, and follow-up sequences that stay human.",
    files: ["SKILL.md"],
  },
  {
    id: "inbox-triage",
    slug: "li-inbox",
    name: "Inbox Triage",
    command: "/li-inbox",
    category: "Networking",
    summary:
      "Categorize messages and prioritize leads, recruiters, peers, requests, and noise.",
    files: ["SKILL.md"],
  },
  {
    id: "profile-audit",
    slug: "li-profile",
    name: "Profile Audit",
    command: "/li-profile",
    category: "Personal Branding",
    summary:
      "Score your profile against a professional rubric, identify weaknesses, and plan strategic improvements.",
    files: ["SKILL.md", "rubric.json"],
  },
  {
    id: "weekly-planner",
    slug: "li-plan",
    name: "Weekly Planner",
    command: "/li-plan",
    category: "Strategy",
    summary:
      "Content planning, engagement planning, and relationship-building opportunities for the week ahead.",
    files: ["SKILL.md"],
  },
  {
    id: "performance-audit",
    slug: "li-audit",
    name: "Performance Audit",
    command: "/li-audit",
    category: "Strategy",
    summary:
      "Review published content, learn what worked, and improve future posts with clear takeaways.",
    files: ["SKILL.md"],
  },
  {
    id: "human-review",
    slug: "li-human",
    name: "Human Review Engine",
    command: "/li-human",
    category: "Humanization",
    summary:
      "Detect common AI writing patterns, eliminate machine fingerprints, and improve readability and authenticity.",
    files: ["SKILL.md", "detect.py", "humanize.py", "slop.json"],
  },
];

export const LIFECYCLE_STEPS = [
  "Idea",
  "Draft",
  "Humanize",
  "Publish",
  "Engage",
  "Network",
  "Analyze",
  "Improve",
] as const;

export const PRINCIPLES = [
  {
    title: "Local First",
    body: "Humanization tools run entirely on your machine. No external APIs. No hidden data collection. No mandatory subscriptions.",
  },
  {
    title: "Voice First",
    body: "Every skill can read your personal voice.md profile. The goal: make AI sound like you.",
  },
  {
    title: "Human Approval",
    body: "The agent drafts. You decide. Every workflow ends ready for review, editing, and manual publishing.",
  },
  {
    title: "Open Source",
    body: "MIT License. Use it. Modify it. Extend it.",
  },
] as const;

export const AUDIENCE = [
  "Consultants",
  "Founders",
  "Job seekers",
  "Recruiters",
  "Freelancers",
  "Sales professionals",
  "Content creators",
  "Personal brand builders",
] as const;

export const ROADMAP_ITEMS = [
  "Multi-platform (LinkedIn + X + Reddit)",
  "Shared memory between skills",
  "Personal content knowledge base",
  "RAG-powered voice modeling",
  "Analytics dashboard",
  "Agentic workflow chaining",
  "Local AI integrations",
  "Multi-account content management",
] as const;

export const TRUST_POINTS = [
  "Local-first",
  "Human approval required",
  "Voice-aware content generation",
  "Open source and customizable",
  "No auto-posting",
] as const;
