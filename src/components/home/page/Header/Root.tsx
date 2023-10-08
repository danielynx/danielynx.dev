import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { SharedTab } from '@/components/shared/Tab';
import { SharedContent } from '@/components/shared/Content';

const tvStyle = tv(
  {
    base: [
      'flex dark:space-x-2 rounded-xl',
      'bg-light-bg-hg-600/80 dark:bg-dark-bg-hg-600/80',
    ],
    variants: {
      size: {
        initial: 'p-1',
        sm: 'p-1.5',
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm'],
  },
);

export function HeaderRoot({ children }: PropsWithChildren) {
  const style = tvStyle({ size: { sm: 'sm' } });

  return (
    <SharedContent.Header>
      <SharedTab.List>
        <div className={style}>{children}</div>
      </SharedTab.List>
    </SharedContent.Header>
  );
}
