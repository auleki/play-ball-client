/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          200: "#AB81CD",
          600: "#2F1E45",
          700: "#28173E",
          800: "#130822",
        }
      }
    },
  },
  plugins: [],
}