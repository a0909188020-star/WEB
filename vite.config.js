import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/WEB/",
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    process: resolve(import.meta.dirname, "process.html"),
  },
});
