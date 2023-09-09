import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { SharedHeader } from '@/components/shared/Header';

const tvStyle = tv(
  {
    slots: {
      outer: ['top-0 z-10'],
      inner: ['flex flex-row items-center justify-end py-2'],
    },
    variants: {
      size: {
        initial: {
          outer: 'fixed',
          inner: 'w-11/12 px-3',
        },
        sm: {
          inner: 'w-8/12',
        },
        md: {
          inner: 'w-6/12 px-5',
        },
        lg: {
          outer: 'justify-end sticky',
          inner: 'w-11/12 px-4 mr-2',
        },
        xl: {
          inner: 'w-8/12 px-5',
        },
        '2xl': {
          inner: 'w-7/12',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm', 'md', 'lg', 'xl', '2xl'],
  },
);

export function SharedHeaderLeft({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl' },
  });

  return (
    <SharedHeader className={style.outer()}>
      <nav className={style.inner()}>{children}</nav>
    </SharedHeader>
  );
}
