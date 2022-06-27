const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald['300']
      }
    },
  },
  plugins: [],
}
