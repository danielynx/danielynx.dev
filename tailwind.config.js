const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        light: {
          bg: {
            400: colors.gray[50],
            DEFAULT: colors.gray[100],
            600: colors.gray[200],
            700: colors.gray[300],
            hg: {
              DEFAULT: colors.gray[100],
            },
            courses: {
              rocketseat: '#6C4FBB',
              mongodb: '#47A248',
              freecodecamp: '#0A0A23',
              symfony: '#1AB4FC',
            },
          },
          hg: {
            300: colors.orange[300],
            400: colors.orange[400],
            DEFAULT: colors.orange[500],
            600: colors.orange[600],
            700: colors.orange[700],
          },
          text: {
            100: colors.gray[500],
            200: colors.gray[600],
            300: colors.gray[700],
            400: colors.gray[800],
            DEFAULT: colors.gray[900],
            600: colors.gray[950],
          },
          border: {
            DEFAULT: colors.slate[300],
          },
        },
        dark: {
          bg: {
            200: colors.gray[700],
            300: colors.gray[800],
            400: colors.gray[900],
            DEFAULT: colors.gray[950],
            hg: {
              DEFAULT: colors.gray[800],
            },
          },
          hg: {
            300: colors.purple[300],
            400: colors.purple[400],
            DEFAULT: colors.purple[500],
            600: colors.purple[600],
            700: colors.purple[700],
          },
          text: {
            400: colors.gray[50],
            DEFAULT: colors.gray[100],
            600: colors.gray[200],
            700: colors.gray[300],
            800: colors.gray[400],
            courses: {
              rocketseat: '#6C4FBB',
              mongodb: '#47A248',
              freecodecamp: '#0A0A23',
              symfony: '#1AB4FC',
            },
          },
          border: {
            DEFAULT: colors.gray[600],
          },
        },
      },
    },
  },
  plugins: [],
};
