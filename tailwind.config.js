/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-black': 'linear-gradient(180deg, #000000, #434343)',
        'gradient-to-white': '#fffff'
      },
      textAlign: {
        'justify': 'justify',
        'center': 'center'
      },
      fontSize: {
        'high': '55px'
      },
      fontWeight: {
        'bolder': 700,
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif']
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '180': '60rem',
        'screen-90': '90vh'
      },
      maxHeight: {
        '90p': '90%'
      }
    },
  },
  plugins: [],
}