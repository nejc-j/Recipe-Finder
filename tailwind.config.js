module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-beige': '#E4D7C4',
        'black-text': '#2B2522',
        'brown-dark': '#A95539',
        'footer-background': '#B0714E',
        'orange-bright': '#E1A371',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        title: ['"Libre Baskerville"', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      backgroundImage: {
        'hero-background': 'linear-gradient(to bottom right, #E4D7C4, #E4CDB2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
