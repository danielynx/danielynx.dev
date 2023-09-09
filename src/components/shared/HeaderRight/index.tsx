import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { SharedHeader } from '@/components/shared/Header';

const tvStyle = tv(
  {
    slots: {
      outer: ['items-end sticky'],
      inner: ['flex flex-row items-end h-full'],
    },
    variants: {
      size: {
        initial: {
          outer: 'top-16',
          inner: 'w-full px-3 ml-0 justify-center',
        },
        sm: {
          inner: 'w-11/12',
        },
        md: {
          inner: 'w-10/12 px-5',
        },
        lg: {
          outer: 'justify-start top-0',
          inner: 'w-11/12 px-4 ml-2 justify-start',
        },
        xl: {
          inner: 'w-9/12 px-5',
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

export function SharedHeaderRight({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
  });

  return (
    <SharedHeader className={style.outer()}>
      <nav className={style.inner()}>{children}</nav>
    </SharedHeader>
  );
}
