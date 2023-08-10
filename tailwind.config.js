/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    fontFamily: {
      title: ["'Playfair Display', serif"],
      main: ['Roboto Condensed', 'sans - serif'],
    },
    colors: {
      black: '#1b1b1e',
      charcoale: '#373F51',
      moonstone: '#58A4B0',
      powderBlue: '#A9BCD0',
      platinum: '#D8DBE2',
      violet: '#887caf',
      murrey: '#ED7EBA',
      pop: '#E39D27',
    },
    extend: {},
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [
    require('flowbite/plugin'),
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
};
