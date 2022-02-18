// an array of the colour classes to add to the safelist so they do not get purged in
// production compile
const tailwindCssPurgeSafelist = require('./src/config/tailwind-safelist.js')
module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safeList: tailwindCssPurgeSafelist,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
