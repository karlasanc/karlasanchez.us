/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gabriela: ["var(--font-gabriela)", "script"],
        rumRaisin: ["var(--font-rum-raisin)", "cursive"],
        caveatBrush: ["var(--font-caveat-brush)", "cursive"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
    },
    colors: {
      ...colors,
      primary: colors.yellow,
      secondary: colors.orange,
    },
  },
  plugins: [],
};
