import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { headerStyle } from '@/components/shared/Header/style';
import { sidebarStyle } from '@/components/shared/Sidebar/style';

const tvStyle = tv(
  {
    slots: {
      header: 'flex flex-row items-center top-0 z-10',
      sidebar: 'flex flex-row items-center justify-end py-2',
    },
    variants: {
      size: {
        initial: {
          header: 'justify-center fixed',
        },
        lg: {
          header: 'justify-end sticky',
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

export function SidebarHeader({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { lg: 'lg' },
  });

  return (
    <header className={style.header({ className: headerStyle })}>
      <nav className={style.sidebar({ className: sidebarStyle })}>
        {children}
      </nav>
    </header>
  );
}
