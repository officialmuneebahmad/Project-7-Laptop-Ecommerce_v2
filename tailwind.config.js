/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust paths to match your project structure
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: '#003F85',
        cusBlue: '#3a659f',
      },
    },
  },
  plugins: [],
}

