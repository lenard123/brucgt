const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
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
