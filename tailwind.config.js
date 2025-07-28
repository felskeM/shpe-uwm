/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Use the CSS variable that Next/font will inject
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        shpe: {
          primary: "var(--shpe-primary)",
          secondary: "var(--shpe-secondary)",
          accent: "var(--shpe-accent)",

          dark: "var(--shpe-dark)",
          "light-gray": "var(--shpe-light-gray)",
          "light-blue": "var(--shpe-light-blue)",
          "mid-navy": "var(--shpe-mid-navy)",
        },
      },
      fontFamily: {
        sans: ["var(--font-family)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
// This configuration file sets up Tailwind CSS with custom colors for SHPE branding and utility purposes.
