/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {

  content: [

    "./src/**/*.{html,ts}",

  ],  
  theme: {
    fontFamily: {
      raleway: ['Raleway', ...defaultTheme.fontFamily.sans]

    },

    extend: {},
  },
  plugins: [],
}

