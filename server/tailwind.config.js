const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{jsx,js}",
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        primary: '#699429'
      }
    },
  },
  plugins: [],
}
