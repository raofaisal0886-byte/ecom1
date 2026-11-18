/**
 * Safety net for TanStack Start + Nitro on Vercel/Node.
 *
 * Two failure modes kill React hydration (every onClick becomes a no-op):
 * 1. Manifest points at Vite-dev `virtual:tanstack-start-dev-client-entry`
 * 2. Unhashed `_tanstack-start-manifest_v.mjs` is a tiny stub (~0.3KB) while
 *    the hashed sibling has the real production scripts — Start then falls
 *    back to the DEV client entry in SSR HTML.
 *
 * Always prefer the hashed production manifest. Fail the build if we still
 * cannot prove a real `/assets/index-*.js` client script is wired.
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DEV_ENTRY = "virtual:tanstack-start-dev-client-entry";
const PROD_SCRIPT_RE = /\/assets\/index-[A-Za-z0-9_-]+\.js/;
const serverPath = join(dirname(fileURLToPath(import.meta.url)), "..", ".output", "server");

async function findServerRoots() {
  const roots = [serverPath];
  // Vercel Nitro output also places the function under .vercel/output
  const vercelFunc = join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    ".vercel",
    "output",
    "functions",
    "__server.func",
  );
  try {
    await stat(vercelFunc);
    roots.push(vercelFunc);
  } catch {
    /* no vercel output yet */
  }
  return roots;
}

async function patchRoot(root) {
  let files;
  try {
    files = await readdir(root);
  } catch {
    return { patched: false, ok: false, reason: `missing ${root}` };
  }

  const hashedName = files
    .filter((f) => f.startsWith("_tanstack-start-manifest_v-") && f.endsWith(".mjs"))
    .sort()
    .at(-1);

  const targetPath = join(root, "_tanstack-start-manifest_v.mjs");

  if (!hashedName) {
    return { patched: false, ok: false, reason: `no hashed manifest in ${root}` };
  }

  const hashedPath = join(root, hashedName);
  const production = await readFile(hashedPath, "utf8");
  const current = await readFile(targetPath, "utf8").catch(() => "");

  if (production.includes(DEV_ENTRY) || !PROD_SCRIPT_RE.test(production)) {
    return {
      patched: false,
      ok: false,
      reason: `hashed ${hashedName} is not a valid production client manifest`,
    };
  }

  const needsPatch =
    current.includes(DEV_ENTRY) ||
    !PROD_SCRIPT_RE.test(current) ||
    current.length < production.length * 0.5;

  if (needsPatch) {
    await writeFile(targetPath, production);
    console.log(`[fix-start-manifest] Patched ${targetPath} ← ${hashedName}`);
    return { patched: true, ok: true };
  }

  console.log(`[fix-start-manifest] OK ${targetPath}`);
  return { patched: false, ok: true };
}

const roots = await findServerRoots();
let anyOk = false;
for (const root of roots) {
  const result = await patchRoot(root);
  if (result.ok) anyOk = true;
  else if (result.reason) console.warn(`[fix-start-manifest] ${result.reason}`);
}

if (!anyOk) {
  console.error("[fix-start-manifest] No valid production client manifest found.");
  process.exit(1);
}

// Final gate across patched roots
for (const root of roots) {
  let files;
  try {
    files = await readdir(root);
  } catch {
    continue;
  }
  for (const name of files) {
    if (!name.includes("tanstack-start-manifest") || !name.endsWith(".mjs")) continue;
    const text = await readFile(join(root, name), "utf8");
    if (text.includes(DEV_ENTRY) || !PROD_SCRIPT_RE.test(text)) {
      console.error(`[fix-start-manifest] Invalid client manifest: ${join(root, name)}`);
      process.exit(1);
    }
  }
}

console.log("[fix-start-manifest] Production client scripts verified.");
