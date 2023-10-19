import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { LayoutHeader } from '@/components/shared/layout/Header';
import { sidebarStyle } from './style';

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
    <header className={style.header({ className: LayoutHeader.style() })}>
      <nav className={style.sidebar({ className: sidebarStyle() })}>
        {children}
      </nav>
    </header>
  );
}
