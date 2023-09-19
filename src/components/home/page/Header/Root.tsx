import { PropsWithChildren } from 'react';
import { Tab } from '@headlessui/react';
import { tv } from 'tailwind-variants';

import { SharedHeader } from '@/components/shared/Header';

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
    <SharedHeader.Content>
      <Tab.List className={style}>{children}</Tab.List>
    </SharedHeader.Content>
  );
}
