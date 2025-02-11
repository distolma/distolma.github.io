import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mkcert from "vite-plugin-mkcert";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://dmostovyi.com",
  integrations: [icon()],
  vite: {
    plugins: [mkcert(), tailwindcss()],
    server: {
      https: true,
    },
  },
});
