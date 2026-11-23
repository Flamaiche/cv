import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const output = "out";

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await htmlFiles(path)));
    } else if (entry.name.endsWith(".html")) {
      files.push(path);
    }
  }
  return files;
}

async function stripGeneratedFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await stripGeneratedFiles(path);
    } else if (
      entry.name.endsWith(".js") ||
      (entry.name.endsWith(".txt") && entry.name !== "robots.txt")
    ) {
      await rm(path);
    }
  }
}

for (const path of await htmlFiles(output)) {
  const html = await readFile(path, "utf8");
  const cleaned = html
    .replace(/<link\b[^>]*\bas="script"[^>]*>/g, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  await writeFile(path, cleaned);
}

await stripGeneratedFiles(output);
