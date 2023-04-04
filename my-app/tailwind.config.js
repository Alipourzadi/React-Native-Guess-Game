/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primery500: "#72063c",
      primery600: "#640233",
      primery700: "#4e0329",
      primery800: "#3b021f",
      accent500: "#ddb52f",
    },
  },
  plugins: [],
};
