/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'media',
}

