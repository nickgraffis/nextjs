const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-dracula')('dracula'),
    require('tailwind-filter-utilities'),
  ],
}
