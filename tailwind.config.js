module.exports = {
  purge:{
    mode: 'layers',
    content: ['./public/**/*.html/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      cwc: {
        red: '#E84977',
        blue: '@49AADE',
        grey: '#222222',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
