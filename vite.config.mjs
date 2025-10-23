import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

// Config dinamica: in dev base="/" ; in build base="/mia-doppio/"
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/mia-doppio/" : "/",

  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },

  plugins: [tsconfigPaths(), react(), tagger()],

  server: {
    port: 4028,             // numero, non stringa
    host: "0.0.0.0",
    strictPort: true,
    // consenti anche l'accesso locale
    allowedHosts: ["localhost", "127.0.0.1", ".amazonaws.com", ".builtwithrocket.new"],
  },

  // utile se usi `vite preview`
  preview: {
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
  },
}));
