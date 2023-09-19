import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { headerStyle } from '@/components/shared/Header/style';
import { sidebarStyle } from '@/components/shared/Sidebar/style';

const tvStyle = tv(
  {
    slots: {
      header: 'top-0 z-10',
      nav: 'flex flex-row items-center justify-end py-2',
    },
    variants: {
      size: {
        initial: {
          header: 'fixed',
          nav: 'px-3',
        },
        md: {
          nav: 'px-5',
        },
        lg: {
          header: 'justify-end sticky',
          nav: 'px-4 mr-2',
        },
        xl: {
          nav: 'px-5',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['md', 'lg', 'xl'],
  },
);

export function HeaderSidebar({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { md: 'md', lg: 'lg', xl: 'xl' },
  });

  return (
    <header className={style.header({ className: headerStyle })}>
      <nav className={style.nav({ className: sidebarStyle })}>{children}</nav>
    </header>
  );
}
