import { Open_Sans as Sans } from 'next/font/google';
import { Roboto_Serif as Serif } from 'next/font/google';

const sans = Sans({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: '300',
  variable: '--font-sans',
});

const serif = Serif({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: '400',
  variable: '--font-serif',
});

export const AppFont = {
  variable: `${sans.variable} ${serif.variable}`,
};
