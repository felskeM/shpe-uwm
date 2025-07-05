/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shpe: {
          red:        "#CF371B",
          "main-navy": "#1A2B52",
          "light-navy":"#1B69B0",
          orange:     "#ED5D29",
          dark:       "#1C1B1A",
          "mid-navy": "#2F4D87",
          "light-blue":"#79ABBE",
          "light-gray":"#BADEEC",
        },
      },
    },
  },
  plugins: [],
}
