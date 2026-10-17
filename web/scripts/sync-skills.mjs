import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const candidates = [
  join(root, "..", "skills"), // monorepo: repoRoot/skills → web/
  join(root, "public", "skills"), // already synced
];

const source = candidates.find((path) => existsSync(path));
const target = join(root, "public", "skills");

if (!source) {
  console.warn(
    "[sync-skills] No skills/ source found; keeping existing public/skills if present.",
  );
  process.exit(0);
}

if (source === target) {
  console.log("[sync-skills] public/skills already in place");
  process.exit(0);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(dirname(target), { recursive: true });
cpSync(source, target, { recursive: true });
console.log(`[sync-skills] Copied ${source} → ${target}`);
