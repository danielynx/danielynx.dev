import './globals.css';

import { PropsWithChildren } from 'react';
import { Open_Sans as Sans } from 'next/font/google';
import { Roboto_Serif as Serif } from 'next/font/google';

import { LayoutProfileHeader } from '@/components/home/layout/ProfileHeader';
import { LayoutProfileBody } from '@/components/home/layout/ProfileBody';
import { ProfileIntersectionProvider } from '@/contexts/home/layout/ProfileIntersectionProvider';
import { ColorSchemeProvider } from '@/contexts/home/layout/ColorSchemeProvider';

export const metadata = {
  title: 'Daniel NX',
  description: "Daniel's Portfolio",
};

const sans = Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
  variable: '--font-sans',
});

const serif = Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang='en'
      className={`${sans.variable} ${serif.variable}`}
    >
      <body className='font-sans'>
        <ColorSchemeProvider>
          <div className='flex flex-col min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text text-lg'>
            <div className='flex flex-col lg:flex-row justify-center grow'>
              <div className='flex flex-col items-center lg:items-end w-full lg:w-4/12 '>
                <ProfileIntersectionProvider>
                  <LayoutProfileHeader />
                  <LayoutProfileBody />
                </ProfileIntersectionProvider>
              </div>
              <div className='flex flex-col items-center lg:items-start w-full lg:w-8/12'>
                {children}
                {/* <div className='min-h-screen' /> */}
              </div>
            </div>
            <footer className='h-20 p-5 w-full border-t border-light-border dark:border-dark-border text-base'>
              Created using NextJS and Tailwind
            </footer>
          </div>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
