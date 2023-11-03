/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Kaisei': ["'Kaisei Tokumin'", "serif"],
        'Abhaya': ["'Abhaya Libre'", "serif"],
        'Jomolhari': ["'Jomolhari'", "serif"],
      }
    },
  },
  plugins: [],
}

