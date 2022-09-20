/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        djent: {
          50: '#E8F0EB',
          100: '#D2E2D8',
          200: '#A7C6B2',
          300: '#7BAA8C',
          400: '#578768',
          500: '#3B5B46',
          600: '#1F3025',
          700: '#152119',
          800: '#0B110D',
          900: '#010201'
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
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        },
        'slide-in': {
          from: { transform: 'translateX(calc(100% + 1.5rem))' },
          to: { transform: 'translateX(0)' }
        },
        'swipe-out': {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + 1.5rem))' }
        },
        'rx-collapsible-height-open': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'rx-collapsible-height-close': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        hide: 'hide 0.2s ease-in-out',
        'slide-in': 'slide-in 0.1s ease-out',
        'swipe-out': 'swipe-out 0.1s ease-out',
        'rx-collapsible-height-open': 'rx-collapsible-height-open 0.1s ease-out',
        'rx-collapsible-height-close': 'rx-collapsible-height-close 0.1s ease-out'
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
    }),
    // radix state closed attribute
    plugin(({ addVariant }) => {
      addVariant('rx-state-closed', '&[data-state="closed"]');
    }),
    // radix swipe move attribute
    plugin(({ addVariant }) => {
      addVariant('rx-swipe-move', '&[data-swipe="move"]');
    }),
    // radix swipe cancel attribute
    plugin(({ addVariant }) => {
      addVariant('rx-swipe-cancel', '&[data-swipe="cancel"]');
    }),
    // radix swipe end attribute
    plugin(({ addVariant }) => {
      addVariant('rx-swipe-end', '&[data-swipe="end"]');
    }),
    // radix state checked attribute
    plugin(({ addVariant }) => {
      addVariant('rx-state-checked', '&[data-state="checked"]');
    }),
    // radix state unchecked attribute
    plugin(({ addVariant }) => {
      addVariant('rx-state-unchecked', '&[data-state="unchecked"]');
    })
  ],
  corePlugins: {
    preflight: false
  }
};
