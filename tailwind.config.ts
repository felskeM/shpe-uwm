// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { shpeColors } from './styles/colors'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        shpe: shpeColors,  // now yields classes like bg-shpe-main-navy
      },
    },
  },
  plugins: [],
}

export default config
