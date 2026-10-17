import JSZip from "jszip";
import type { Skill } from "@/lib/skills";

function skillPublicBase(skill: Skill) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";
  return `${base}/skills/${skill.slug}`;
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

async function fetchSkillFile(skill: Skill, file: string): Promise<Blob> {
  const response = await fetch(`${skillPublicBase(skill)}/${file}`);
  if (!response.ok) {
    throw new Error(`Could not fetch ${skill.slug}/${file} (${response.status})`);
  }
  return response.blob();
}

/** Download SKILL.md alone, or a zip of the whole skill folder when multi-file. */
export async function downloadSkill(skill: Skill): Promise<void> {
  if (skill.files.length === 1) {
    const blob = await fetchSkillFile(skill, skill.files[0]);
    triggerBlobDownload(blob, `${skill.slug}-${skill.files[0]}`);
    return;
  }

  const zip = new JSZip();
  const folder = zip.folder(skill.slug);
  if (!folder) throw new Error("Could not create zip folder");

  await Promise.all(
    skill.files.map(async (file) => {
      const blob = await fetchSkillFile(skill, file);
      folder.file(file, blob);
    }),
  );

  const archive = await zip.generateAsync({ type: "blob" });
  triggerBlobDownload(archive, `${skill.slug}.zip`);
}
