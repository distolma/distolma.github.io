const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['class'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jaldi", "Helvetica", "Arial", ...defaultTheme.fontFamily.sans],
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
    },
  },
  plugins: [],
};
