/**
 * Safety net: some TanStack Start + Nitro builds leave
 * `.output/server/_tanstack-start-manifest_v.mjs` pointing at the
 * Vite-dev virtual client entry. That 404s in production and kills
 * all React hydration (every onClick becomes a no-op).
 *
 * Prefer the hashed production manifest emitted alongside it.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const serverPath = join(dirname(fileURLToPath(import.meta.url)), "..", ".output", "server");
const files = await readdir(serverPath);
const hashed = files
  .filter((f) => f.startsWith("_tanstack-start-manifest_v-") && f.endsWith(".mjs"))
  .sort()
  .at(-1);

const targetPath = join(serverPath, "_tanstack-start-manifest_v.mjs");

if (!hashed) {
  console.warn("[fix-start-manifest] No hashed production manifest found — skipped.");
  process.exit(0);
}

const hashedPath = join(serverPath, hashed);
const current = await readFile(targetPath, "utf8").catch(() => "");
if (!current.includes("virtual:tanstack-start-dev-client-entry")) {
  console.log("[fix-start-manifest] Production manifest already looks correct.");
  process.exit(0);
}

const production = await readFile(hashedPath, "utf8");
await writeFile(targetPath, production);
console.log(`[fix-start-manifest] Patched _tanstack-start-manifest_v.mjs ← ${hashed}`);
