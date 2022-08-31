/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        djent: {
          50: '#f4f5f4',
          100: '#e9eae9',
          200: '#c7cbc9',
          300: '#a5aca8',
          400: '#626e66',
          500: '#1f3025',
          600: '#1c2b21',
          700: '#17241c',
          800: '#131d16',
          900: '#0f1812'
        },
        leaf: {
          50: '#f4fdf5',
          100: '#e8fceb',
          200: '#c6f7cc',
          300: '#a3f2ae',
          400: '#5ee971',
          500: '#19df34',
          600: '#17c92f',
          700: '#13a727',
          800: '#0f861f',
          900: '#0c6d19'
        }
      },
      dropShadow: {
        leaf: '0 1px 2px rgb(25 223 51 / 0.5)',
        djent: '0 1px 2px rgb(31 48 37 / 0.2)',
        blue: '0 1px 2px rgb(59 131 246 / 0.4)',
        red: '0 1px 2px rgb(239 68 68 / 0.4)'
      }
    }
  },
  plugins: [
    // radix disabled attribute
    plugin(({ addVariant }) => {
      addVariant('rx-disabled', '&[data-disabled]');
    }),
    // radix highlighted attribute
    plugin(({ addVariant }) => {
      addVariant('rx-highlighted', '&[data-highlighted]');
    }),
    // radix state open attribute
    plugin(({ addVariant }) => {
      addVariant('rx-state-open', '&[data-state="open"]');
    })
  ],
  corePlugins: {
    preflight: false
  }
};
