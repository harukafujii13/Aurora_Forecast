/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tailwind-datepicker-react/dist/**/*.js"],
  theme: {
    fontFamily: {
      title: ["Castoro Titling", "cursive"],
      main: ["Roboto Condensed", "sans - serif"],
    },
    colors: {
      black: "#1b1b1e",
      charcoale: "#373F51",
      moonstone: "#58A4B0",
      powderBlue: "#A9BCD0",
      platinum: "#D8DBE2",
    },
    fontSize: {
      base: "2.5rem",
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'),
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
};


