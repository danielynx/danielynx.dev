const { withTV } = require('tailwind-variants/transformer');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
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
            400: colors.gray[50],
            DEFAULT: colors.gray[100],
            600: colors.gray[200],
            700: colors.gray[300],
            hg: {
              DEFAULT: colors.gray[100],
              600: colors.gray[200],
            },
            ct: {
              DEFAULT: colors.cyan[700],
            },
            brand: {
              rocketseat: '#6C4FBB',
              mongodb: '#47A248',
              freecodecamp: '#0A0A23',
              symfony: '#1AB4FC',
            },
          },
          hg: {
            300: colors.blue[300],
            400: colors.blue[400],
            DEFAULT: colors.blue[500],
            600: colors.blue[600],
            700: colors.blue[700],
          },
          text: {
            100: colors.gray[400],
            200: colors.gray[500],
            300: colors.gray[600],
            400: colors.gray[700],
            DEFAULT: colors.gray[800],
            600: colors.gray[900],
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
          },
        },
        dark: {
          bg: {
            200: colors.slate[400],
            300: colors.slate[500],
            400: colors.slate[600],
            DEFAULT: colors.slate[700],
            hg: {
              300: colors.cyan[500],
              400: colors.cyan[600],
              DEFAULT: colors.cyan[700],
              600: colors.cyan[800],
            },
            ct: {
              DEFAULT: colors.gray[100],
            },
          },
          hg: {
            300: colors.red[200],
            400: colors.red[300],
            DEFAULT: colors.red[400],
            600: colors.red[500],
            700: colors.red[600],
          },
          text: {
            400: colors.gray[50],
            DEFAULT: colors.gray[100],
            600: colors.gray[200],
            700: colors.gray[300],
            800: colors.gray[400],
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
