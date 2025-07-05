// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.ts',
    },
    autoprefixer: {},
  },
}
