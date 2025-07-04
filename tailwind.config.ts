// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: { 
    extend: {
      colors: {
        shpe: {
          red: '#CF371B', // RGB 207,55,27 :contentReference[oaicite:1]{index=1}
          mainNavy: '#1A2B52', // RGB 26,43,82 :contentReference[oaicite:2]{index=2}
          lightNavy: '#1B69B0', // RGB 27,105,176 :contentReference[oaicite:3]{index=3}
          orange: '#ED5D29', // RGB 237,93,41 :contentReference[oaicite:4]{index=4}
          dark: '#1C1B1A', // RGB 28,27,26 :contentReference[oaicite:5]{index=5}
          midNavy: '#2F4D87', // RGB 47,77,135 :contentReference[oaicite:6]{index=6}
          lightBlue: '#79ABBE', // RGB 121,171,190 :contentReference[oaicite:7]{index=7}
          lightGray: '#BADEEC', // RGB 186,222,236 :contentReference[oaicite:8]{index=8}
        },
      },
    }, 
  },
  plugins: [],
}

export default config