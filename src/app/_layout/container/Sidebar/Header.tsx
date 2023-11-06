import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { AppContainerHeader } from '@/app/_layout/container/Header';
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
    <header className={style.header({ className: AppContainerHeader.style() })}>
      <nav className={style.sidebar({ className: sidebarStyle() })}>
        {children}
      </nav>
    </header>
  );
}
