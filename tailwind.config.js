const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
// const preset = require('./vendor/filament/support/tailwind.config');
import preset from './vendor/filament/support/tailwind.config'


module.exports = {
  darkMode: 'class',
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './vendor/filament/**/*.blade.php',
    './vendor/wire-elements/modal/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './safelist-static.txt',
    './tailwind.config.js'
  ],
  presets: [preset],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Hind Siliguri"', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
        body: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        admin: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'tiny': '.625rem',
      },
      colors: {
        'future': '#3A236C',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
    },
    colors: {
      danger: colors.rose,
      primary: colors.blue,
      secondary: colors.gray,
      success: colors.green,
      warning: colors.yellow,
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      pink: colors.pink,
      sky: colors.sky,
      blueGray: colors.slate,
      blue: {
        DEFAULT: '#0000FF',
        ...colors.blue
      },
      indigo: {
        DEFAULT: '#4B0082',
        ...colors.indigo
      },
      green: {
        DEFAULT: '#00FF00',
        ...colors.green
      },
      red: {
        DEFAULT: '#FF0000',
        ...colors.rose
      },
      yellow: {
        DEFAULT: '#FFFF00',
        ...colors.amber
      },
      socialmedia: '#8E63A5',
      season: '#656565',
      orange: '#FFA500',
      headeryellow: '#EEBA2B',
      footer: '#3a236c',
      heading: '#54097C',
      headergradient: '#F2F4F7',
      button: {
        DEFAULT: '#008f00',
        '500': '#617753',
      },
      flower: {
        DEFAULT: '#6F1D72',
        '50': '#FCF3FC',
        '100': '#F1CEF3',
        '200': '#E091E3',
        '300': '#CF54D4',
        '400': '#AA2DAF',
        '500': '#6F1D72',
        '600': '#5F1962',
        '700': '#4F1551',
        '800': '#3F1141',
        '900': '#300C31'
      },
      corn: {
        DEFAULT: '#E0A500',
        '50': '#FFF0C6',
        '100': '#FFE9AD',
        '200': '#FFDC7A',
        '300': '#FFCF47',
        '400': '#FFC114',
        '500': '#E0A500',
        '600': '#B78700',
        '700': '#8E6900',
        '800': '#664B00',
        '900': '#3D2D00'
      },
      razz: {
        DEFAULT: '#D20F59',
        '50': '#FBCBDD',
        '100': '#FAB3CE',
        '200': '#F684AF',
        '300': '#F35490',
        '400': '#EF2572',
        '500': '#D20F59',
        '600': '#AC0C49',
        '700': '#860A39',
        '800': '#600729',
        '900': '#3A0418'
      },
      laurel: {
        DEFAULT: '#00A608',
        '50': '#8DFF92',
        '100': '#73FF7A',
        '200': '#40FF49',
        '300': '#0DFF19',
        '400': '#00D90A',
        '500': '#00A608',
        '600': '#008707',
        '700': '#006905',
        '800': '#004A04',
        '900': '#002C02'
      },
      'theme': {
        'background': '#ffffff',
        'text': '#000000',
        'button': '#6F1D72',
        'link': '#00A608',
      }
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
