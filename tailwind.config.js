/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        davidlibre: ['DavidLibre', 'sans-serif'],
      }
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

