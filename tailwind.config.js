/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1678CB",
        "secodary": "#242424",
        "accent": "#B4B4B4",
        "border": "#A4A4A4"
      }
    },
  },
  plugins: [],
}
