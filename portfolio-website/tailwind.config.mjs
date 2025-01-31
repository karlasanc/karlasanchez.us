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
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        gabriela: ["var(--font-gabriela)", "script"],
        caveatBrush: ["var(--font-caveat-brush)", "cursive"],
        rumRaisin: ["var(--font-rum-raisin)", "cursive"],
      },
    },
    colors: {
      ...colors,
      primary: colors.yellow,
      secondary: colors.orange,
      tertiary: "#F05941",
      bgPrimaryBlue: "#0B2839",
      bgSecondaryBlue: "#09324A",
      bgSecondaryBlack: "#18191E",
    },
  },
  plugins: [],
};
