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
          primary: "#CF371B", // formerly shpe-primary
          secondary: "#1A2B52", // formerly shpe-secondary
          accent: "#ED5D29", // formerly shpe-accent

          // utility colors
          dark: "#1C1B1A", // was dark-text
          "light-gray": "#BADEEC",
          "light-blue": "#79ABBE",
          "mid-navy": "#2F4D87",
        },
        // any extra feedback colors
        success: "#34D399",
        warning: "#FBBF24",
        error: "#EF4444",
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
