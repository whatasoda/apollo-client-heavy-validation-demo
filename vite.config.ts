import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { Plugin } from "vite";

const mockServiceWorker = (): Plugin => ({
  name: "mock-service-worker",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.originalUrl === "/mockServiceWorker.js") {
        req.url = `/@fs${process.cwd()}/public/mockServiceWorker.js`;
      }
      next();
    });
  },
});

export default defineConfig({
  root: "src",
  build: {
    sourcemap: true,
    outDir: "../dist",
  },
  publicDir: "dist",
  plugins: [react(), mockServiceWorker()],
});
