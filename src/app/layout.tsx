import './globals.css';

import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { LayoutHeader } from '@/components/home/layout/Header';
import { LayoutBody } from '@/components/home/layout/Body';
import { LayoutFooter } from '@/components/home/layout/Footer';
import { ProfileIntersectionProvider } from '@/contexts/home/layout/ProfileIntersectionProvider';
import { ColorSchemeProvider } from '@/contexts/home/layout/ColorSchemeProvider';
import { fontVariable } from './font';

export const metadata = {
  title: "Daniel's Portfolio",
  description: "Daniel's Portfolio",
};

const tvStyle = tv(
  {
    slots: {
      body: 'font-sans',
      viewport: [
        'flex flex-col min-h-screen',
        'text-light-text dark:text-dark-text',
      ],
      growth: 'flex justify-center grow',
      sidebar: 'flex flex-col',
      content: 'flex flex-col',
    },
    variants: {
      size: {
        initial: {
          growth: 'flex-col',
          sidebar: 'items-center w-full',
          content: 'items-center w-full',
        },
        lg: {
          growth: 'flex-row',
          sidebar: 'items-end w-4/12',
          content: 'items-start w-8/12',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['lg'],
  },
);

export default function RootLayout({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { lg: 'lg' },
  });

  return (
    <html
      lang='en'
      className={fontVariable}
    >
      <body className={style.body()}>
        <ColorSchemeProvider>
          <div className={style.viewport()}>
            <div className={style.growth()}>
              <div className={style.sidebar()}>
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
              <div className={style.content()}>{children}</div>
            </div>
            <LayoutFooter />
          </div>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
