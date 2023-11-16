import { Public_Sans } from 'next/font/google';
import { Roboto_Serif } from 'next/font/google';
import { Source_Code_Pro } from 'next/font/google';

const sans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-sans',
});

const serif = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-serif',
});

const mono = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-mono',
});

export const AppFont = {
  variable: `${sans.variable} ${serif.variable} ${mono.variable}`,
};
