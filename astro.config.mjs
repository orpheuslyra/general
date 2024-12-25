// @ts-check
import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

export default defineConfig({
  integrations: [solid()],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
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
