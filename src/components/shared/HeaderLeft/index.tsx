import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { asideStyle } from '@/components/shared/Aside';

import { SharedHeader } from '@/components/shared/Header';

const tvStyle = tv(
  {
    slots: {
      container: ['top-0 z-10'],
      base: ['flex flex-row items-center justify-end py-2'],
    },
    variants: {
      size: {
        initial: {
          container: 'fixed',
          base: 'px-3',
        },
        md: {
          base: 'px-5',
        },
        lg: {
          container: 'justify-end sticky',
          base: 'px-4 mr-2',
        },
        xl: {
          base: 'px-5',
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

export function SharedHeaderLeft({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { md: 'md', lg: 'lg', xl: 'xl' },
  });

  return (
    <SharedHeader className={style.container()}>
      <nav className={style.base({ className: asideStyle })}>{children}</nav>
    </SharedHeader>
  );
}
