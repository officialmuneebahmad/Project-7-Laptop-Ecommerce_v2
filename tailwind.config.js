/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust paths to match your project structure
    "./index.html",
    "./pages/pg2/pg2.html",
    "./laptops/mac/mac_2016.html",
    "./laptops/mac/mac_2016_2.html",
    "./laptops/mac/mac_2016_3.html",
    "./laptops/mac/mac_2017.html",
    "./laptops/mac/mac_2017_2.html",
    "./laptops/mac/mac_2017_3.html",
    "./laptops/mac/mac_2018.html",
    "./laptops/mac/mac_2018_2.html",
    "./laptops/mac/mac_2018_3.html",
    "./laptops/mac/mac_2019.html",
    "./laptops/mac/mac_2019_2.html",
    "./laptops/mac/mac_2019_3.html",
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

