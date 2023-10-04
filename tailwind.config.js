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
        '2xs': '500px',
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
            // highlight
            hg: {
              DEFAULT: colors.gray[100],
              600: colors.gray[200],
            },
            // contrast
            ct: {
              DEFAULT: colors.orange[600],
            },
            brand: {
              rocketseat: '#6C4FBB',
              mongodb: '#47A248',
              freecodecamp: '#0A0A23',
              symfony: '#1AB4FC',
            },
            project: {
              gobarber: '#ff9000',
            },
          },
          text: {
            100: colors.gray[400],
            200: colors.gray[500],
            300: colors.gray[600],
            400: colors.gray[700],
            DEFAULT: colors.gray[800],
            600: colors.gray[900],
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
          },
        },
        dark: {
          bg: {
            200: colors.slate[400],
            300: colors.slate[500],
            400: colors.slate[600],
            DEFAULT: colors.slate[700],
            // highlight
            hg: {
              300: colors.cyan[500],
              400: colors.cyan[600],
              DEFAULT: colors.cyan[700],
              600: colors.cyan[800],
            },
            // contrast
            ct: {
              DEFAULT: colors.gray[100],
            },
          },
          text: {
            400: colors.gray[50],
            DEFAULT: colors.gray[100],
            600: colors.gray[200],
            700: colors.gray[300],
            800: colors.gray[400],
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
