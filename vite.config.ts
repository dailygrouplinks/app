// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Vercel sets VERCEL=1 during its builds. Pin nitro's Vercel preset there so the output lands in
// .vercel/output (Build Output API). Lovable builds ignore this and keep their own target.
const isVercelBuild = !!process.env["VERCEL"];

// Netlify sets NETLIFY=true during its builds. There, skip nitro and use Netlify's official
// TanStack Start plugin, which emits dist/client (static files) plus Netlify's server function.
const isNetlifyBuild = !isVercelBuild && !!process.env["NETLIFY"];

export default defineConfig({
  tanstackStart: {
    // Entry files resolved from src/: src/router.tsx (getRouter), src/start.ts, and
    // src/server.ts (our SSR error wrapper). All three must exist in the deployed repo.
    srcDirectory: "src",
    router: { entry: "router" },
    server: { entry: "server" },
  },
  ...(isVercelBuild ? { nitro: { preset: "vercel" } } : {}),
  ...(isNetlifyBuild ? { nitro: false, plugins: [netlify()] } : {}),
});
