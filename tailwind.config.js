module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          '50':  '#fbfaf8',
          '100': '#f7f0e7',
          '200': '#eed9cc',
          '300': '#d8b3a0',
          '400': '#c18772',
          '500': '#a6644d',
          '600': '#894a35',
          '700': '#673729',
          '800': '#47261d',
          '900': '#2b1712',
        },
        gray: {
          '50':  '#f9f9f8',
          '100': '#f0f0f0',
          '200': '#dddddd',
          '300': '#b9bbb9',
          '400': '#8c938f',
          '500': '#6e716a',
          '600': '#59574f',
          '700': '#44413c',
          '800': '#2f2c2b',
          '900': '#1d1b1c',
        },
        blue: {
          '50':  '#f7f9f9',
          '100': '#e9f0f6',
          '200': '#cedeec',
          '300': '#a2bdd3',
          '400': '#7097b4',
          '500': '#567595',
          '600': '#455a78',
          '700': '#37445c',
          '800': '#262e40',
          '900': '#171c29',
        },
        purple: {
          '50':  '#fafafb',
          '100': '#f3f0f8',
          '200': '#e6d6f1',
          '300': '#ccafde',
          '400': '#b784c6',
          '500': '#9d5fb1',
          '600': '#824494',
          '700': '#613370',
          '800': '#43234c',
          '900': '#26162b',
        },
        pink: {
          '50':  '#fbfbfa',
          '100': '#f6f0f4',
          '200': '#edd5e9',
          '300': '#d8adce',
          '400': '#c880ae',
          '500': '#b15c90',
          '600': '#944171',
          '700': '#703053',
          '800': '#4d2137',
          '900': '#2d1520',
        },
        red: {
          '50':  '#fdfcfa',
          '100': '#fbf0e8',
          '200': '#f7d2d0',
          '300': '#eca6a5',
          '400': '#e67678',
          '500': '#d75255',
          '600': '#be383a',
          '700': '#962a2b',
          '800': '#6b1d1d',
          '900': '#411211',
        },
        yellow: {
          '50':  '#fbfaf6',
          '100': '#f7f0da',
          '200': '#edddb1',
          '300': '#d3b87d',
          '400': '#b28e4e',
          '500': '#936d2d',
          '600': '#76531e',
          '700': '#5a3e19',
          '800': '#3d2a13',
          '900': '#271a0d',
        },
        green: {
          '50':  '#f8f8f4',
          '100': '#f0f0da',
          '200': '#dce2af',
          '300': '#b3c279',
          '400': '#769d4a',
          '500': '#577f29',
          '600': '#45661c',
          '700': '#374d18',
          '800': '#263413',
          '900': '#19200f',
        },
        aquamarine: {
          '50':  '#f4f7f6',
          '100': '#e2f0ef',
          '200': '#bce4db',
          '300': '#86c7b4',
          '400': '#45a487',
          '500': '#31875f',
          '600': '#296e47',
          '700': '#235438',
          '800': '#1a3929',
          '900': '#11231e',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      ringWidth: ['active', 'hover'],
      textColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
