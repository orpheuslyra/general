// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "./src",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/styles/reset.scss";
            @import "@/styles/variants/_mixin.scss";
            @import "@/styles/global.scss";`,
        },
      },
    },
  },
});
