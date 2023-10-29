import './globals.css';

import { PropsWithChildren } from 'react';
import { Open_Sans as Sans } from 'next/font/google';
import { Roboto_Serif as Serif } from 'next/font/google';
import { MdJavascript, MdPhp } from 'react-icons/md';

import { LayoutHeader } from '@/components/home/layout/Header';
import { LayoutBody } from '@/components/home/layout/Body';
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
          <div className='flex flex-col min-h-screen text-light-text dark:text-dark-text'>
            <div className='flex flex-col lg:flex-row justify-center grow'>
              <div className='flex flex-col items-center lg:items-end w-full lg:w-4/12'>
                <ProfileIntersectionProvider>
                  <LayoutHeader.Root>
                    <LayoutHeader.Profile.Root>
                      <LayoutHeader.Profile.Avatar />
                      <LayoutHeader.Profile.Name />
                    </LayoutHeader.Profile.Root>
                    <LayoutHeader.ColorSchema />
                  </LayoutHeader.Root>
                  <LayoutBody.Root>
                    <LayoutBody.Profile.Root>
                      <LayoutBody.Profile.Avatar.IntersectionObserver>
                        <LayoutBody.Profile.Avatar.Root />
                      </LayoutBody.Profile.Avatar.IntersectionObserver>
                      <LayoutBody.Profile.Name />
                      <LayoutBody.Profile.Bio />
                      <LayoutBody.Profile.Company />
                      <LayoutBody.Profile.Location />
                      <LayoutBody.Profile.Contact.Root>
                        <LayoutBody.Profile.Contact.ProtonMail />
                        <LayoutBody.Profile.Contact.GitHub />
                        <LayoutBody.Profile.Contact.StackOverflow />
                        <LayoutBody.Profile.Contact.LinkedIn />
                      </LayoutBody.Profile.Contact.Root>
                    </LayoutBody.Profile.Root>
                  </LayoutBody.Root>
                </ProfileIntersectionProvider>
              </div>
              <div className='flex flex-col items-center lg:items-start w-full lg:w-8/12'>
                {children}
                {/* <div className='min-h-screen' /> */}
              </div>
            </div>
            <footer className='flex flex-row justify-center items-center pb-2 pt-3 w-full text-sm border-t dark:border-0 border-light-border bg-light-bg dark:bg-dark-bg-hg-600'>
              @
              <span className='underline decoration-teal-500 dark:decoration-pink-500 decoration-2 underline-offset-2'>
                danielynx
              </span>
              &nbsp; building software since 2011 using &nbsp;
              <span className='font-black text-[#777BB4]'>PHP</span>
              &nbsp; and &nbsp;
              <span className='font-black text-[#ddcc47]'>JavaScript</span>
            </footer>
          </div>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
