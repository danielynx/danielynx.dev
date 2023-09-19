import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { sidebarStyle } from '@/components/shared/Sidebar/style';

const tvStyle = tv(
  {
    base: [
      'bg-light-bg-hg dark:bg-dark-bg-hg',
      'border dark:border-0 border-light-border',
      'rounded-xl',
    ],
    variants: {
      size: {
        initial: 'py-8 px-5 mt-28 mb-3',
        md: 'px-7',
        lg: 'px-6 mt-4 mr-2',
        xl: 'px-7',
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

export function ProfileRoot({ children }: PropsWithChildren) {
  const style = tvStyle({
    className: sidebarStyle,
    size: { md: 'md', lg: 'lg', xl: 'xl' },
  });

  return <aside className={style}>{children}</aside>;
}
