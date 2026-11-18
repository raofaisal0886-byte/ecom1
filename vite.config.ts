import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Official TanStack Start + Nitro order:
// tanstackStart() → nitro() → viteReact()
// Wrong order leaves production HTML pointing at
// /@id/virtual:tanstack-start-dev-client-entry (404) so React never hydrates.
// Explicit src/client.tsx keeps hydration independent of the virtual module.
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
      client: {
        entry: "./client.tsx",
      },
    }),
    nitro(),
    viteReact(),
  ],
});
