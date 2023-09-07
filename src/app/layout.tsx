import './globals.css';

import { PropsWithChildren } from 'react';
import { Open_Sans as Sans } from 'next/font/google';
import { Roboto_Serif as Serif } from 'next/font/google';

import { SiNextdotjs as SiNextJs } from 'react-icons/si';
import { SiTailwindcss as SiTailwind } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

import { LayoutProfileHeader } from '@/components/home/layout/ProfileHeader';
import { LayoutProfileBody } from '@/components/home/layout/ProfileBody';
import { ProfileIntersectionProvider } from '@/contexts/home/layout/ProfileIntersectionProvider';
import { ColorSchemeProvider } from '@/contexts/home/layout/ColorSchemeProvider';

export const metadata = {
  title: "Daniel's Portfolio",
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
            <footer className='flex flex-row justify-center align-middle p-5 w-full border-t dark:border-0 border-light-border bg-light-bg dark:bg-dark-bg-hg-600'>
              <div className='flex flex-col md:flex-row justify-center items-center w-11/12 xl:w-9/12'>
                <p className='text-sm sm:text-base lg:text-lg mr-4 mb-4 md:mb-0'>
                  Built with
                </p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-light-text dark:text-dark-text'>
                  <div className='flex flex-row items-center px-2 py-1 border border-light-border dark:border-dark-border rounded-md'>
                    <SiNextJs className='h-3 w-3 sm:h-4 sm:w-4' />
                    <div className='ml-2'>NextJS</div>
                  </div>
                  <div className='flex flex-row items-center px-2 py-1 border border-light-border dark:border-dark-border rounded-md'>
                    <SiTailwind className='h-3 w-3 sm:h-4 sm:w-4' />
                    <div className='ml-2'>Tailwind</div>
                  </div>
                  <div className='flex flex-row items-center px-2 py-1 border border-light-border dark:border-dark-border rounded-md'>
                    <SiReact className='h-3 w-3 sm:h-4 sm:w-4' />
                    <div className='ml-2'>ReactJS</div>
                  </div>
                  <div className='flex flex-row items-center px-2 py-1 border border-light-border dark:border-dark-border rounded-md'>
                    <SiTypescript className='h-3 w-3 sm:h-4 sm:w-4' />
                    <div className='ml-2'>Typescript</div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
