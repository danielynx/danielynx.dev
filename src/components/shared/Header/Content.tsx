import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { headerStyle } from '@/components/shared/Header/style';
import { contentStyle } from '@/components/shared/Content/style';

const tvStyle = tv(
  {
    slots: {
      header: 'items-end sticky',
      nav: 'flex flex-row items-end h-full',
    },
    variants: {
      size: {
        initial: {
          header: 'top-16',
          nav: 'px-3 ml-0 justify-center',
        },
        md: {
          nav: 'px-5',
        },
        lg: {
          header: 'justify-start top-0',
          nav: 'px-4 ml-2 justify-start',
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
    responsiveVariants: ['sm', 'md', 'lg', 'xl'],
  },
);

export function HeaderContent({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { md: 'md', lg: 'lg', xl: 'xl' },
  });

  return (
    <header className={style.header({ className: headerStyle })}>
      <nav className={style.nav({ className: contentStyle })}>{children}</nav>
    </header>
  );
}
