// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "",
  build: {
    assetsPrefix: ".", // すべてのアセットを相対パスに設定
  },
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
            @import "@/styles/global.scss";
            @import "@/styles/responsive.scss";`,
        },
      },
    },
  },
});
