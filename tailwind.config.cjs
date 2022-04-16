module.exports = {
  presets: [require("./src/uideck/play/styles/tailwind.config.js")],
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
