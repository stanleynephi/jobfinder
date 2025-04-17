import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "/dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/aboutus/index.html"),
        profile: resolve(__dirname, "src/profile/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
        jobs: resolve(__dirname, "src/job/index.html"),
      },
    },
  },
});
