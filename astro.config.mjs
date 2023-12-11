import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mkcert from "vite-plugin-mkcert";

// https://astro.build/config
export default defineConfig({
  site: "https://dmostovyi.com",
  integrations: [tailwind()],
  vite: {
    plugins: [mkcert()],
    server: {
      https: true,
    },
  },
});
