import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const tvStyle = tv(
  {
    base: 'flex flex-row justify-start grow font-serif',
    variants: {
      size: {
        initial: 'text-xl',
        xs: 'text-2xl',
        md: 'text-xl',
        xl: 'text-2xl',
        '2xl': 'text-3xl',
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['xs', 'md', 'xl', '2xl'],
  },
);

export function HeaderText({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { xs: 'xs', md: 'md', xl: 'xl', '2xl': '2xl' },
  });

  return <div className={style}>{children}</div>;
}
