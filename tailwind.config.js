const { withTV } = require('tailwind-variants/transformer');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '0.0625rem',
      0: '0',
      1: '0.0625rem',
      2: '0.125rem',
      3: '0.1875rem',
      4: '0.25rem',
      8: '0.5rem',
    },
    ringWidth: {
      DEFAULT: '0.0625rem',
      0: '0',
      1: '0.0625rem',
      3: '0.1875rem',
      2: '0.125rem',
      4: '0.25rem',
      8: '0.5rem',
    },
    ringOffsetWidth: {
      DEFAULT: '0.0625rem',
      0: '0',
      1: '0.0625rem',
      2: '0.125rem',
      4: '0.25rem',
      8: '0.5rem',
    },
    extend: {
      screens: {
        xs: '360px',
        '2xs': '500px',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        brand: {
          protonmail: '#6D4AFF',
          github: '#181717',
          stackoverflow: '#F58025',
          linkedin: {
            400: '#008CC9',
            DEFAULT: '#0077B5',
          },
        },
        light: {
          bg: {
            DEFAULT: colors.gray[100],
            // highlight
            hg: {
              DEFAULT: colors.gray[100],
            },
            // contrast
            ct: {
              DEFAULT: colors.orange[500],
            },
            brand: {
              rocketseat: '#6C4FBB',
              mongodb: '#47A248',
              freecodecamp: '#0A0A23',
              symfony: '#1AB4FC',
            },
            project: {
              myportfolio: colors.blue[500],
              gobarber: '#ff9000',
            },
          },
          text: {
            DEFAULT: colors.gray[800],
            // contrast
            ct: {
              DEFAULT: colors.gray[100],
            },
            brand: {
              protonmail: '#8a90c7',
              github: '#181717',
              stackoverflow: '#F58025',
              linkedin: '#0077B5',
            },
          },
          border: {
            DEFAULT: colors.slate[300],
            600: colors.slate[400],
          },
        },
        dark: {
          bg: {
            DEFAULT: colors.cyan[800],
            // DEFAULT: '#116D6E',
            // highlight
            hg: {
              DEFAULT: colors.cyan[900],
            },
            // contrast
            ct: {
              DEFAULT: colors.gray[100],
            },
          },
          text: {
            DEFAULT: colors.gray[200],
            // contrast
            ct: {
              DEFAULT: colors.gray[800],
            },
            brand: {
              protonmail: '#8a90c7',
              github: '#181717',
              stackoverflow: '#F58025',
              linkedin: '#008CC9',
              rocketseat: '#6C4FBB',
              mongodb: '#47A248',
              freecodecamp: '#0A0A23',
              symfony: '#1AB4FC',
            },
            project: {
              myportfolio: colors.blue[500],
              gobarber: '#ff9000',
            },
          },
          border: {
            DEFAULT: colors.white,
          },
        },
      },
    },
  },
  plugins: [],
});
