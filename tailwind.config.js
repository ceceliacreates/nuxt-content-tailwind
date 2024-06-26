/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    colors: {
      'sky': '#bfe1fe',
      'white': '#fdfdfd',
      'black': '#201726',
      'purple': '#5317eb',
      'cerulean': '#7fcdec',
      'pink': '#ff00ff',
      'lavender': '#dfc4fb',
      'navy': '#2a40ad',
      'blue': '#4d5ff8'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}