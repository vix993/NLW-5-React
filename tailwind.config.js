const { callbackify } = require("node:util");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '0': '0',
        '9375': '93.75%',
        '875': '87.5%',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
      height: {
        'fh': 'calc(100vh - 6.5rem)',
      },
      maxWidth: {
        'p70': '70%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
