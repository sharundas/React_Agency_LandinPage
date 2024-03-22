/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#384046',
        'secondary': '#F7FBFE',
        'tertiary': '#F1F5F9'
      },
      boxShadow: {
        'box-shadow': '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}