import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { headerStyle } from '@/components/shared/Header/style';
import { contentStyle } from '@/components/shared/Content/style';

const tvStyle = tv(
  {
    slots: {
      header: 'flex flex-row items-end sticky',
      content: 'flex flex-row items-end justify-start h-full',
    },
    variants: {
      size: {
        initial: {
          header: 'justify-center top-16',
          content: 'justify-center',
        },
        lg: {
          header: 'justify-start top-0',
          content: 'justify-start',
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

export function ContentHeader({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { lg: 'lg' },
  });

  return (
    <header className={style.header({ className: headerStyle })}>
      <nav className={style.content({ className: contentStyle })}>
        {children}
      </nav>
    </header>
  );
}
