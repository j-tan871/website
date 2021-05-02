const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      }, 
      transitionProperty: {
        'height':'height',
        'display':'display',
        'visibility':'visibility'
      }
    },
    colors: {
      darkpurple: {
        DEFAULT: '#1F174E'
      },
      lightpurple: {
        DEFAULT: '#6E5FC8'
      }, 
      lightgray: {
        DEFAULT: '#F3F3F3'
      },
      white: colors.white, 
      gray: colors.gray
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
