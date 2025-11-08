import type { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { AppContainerBody } from '@/app/_layout/container/Body';
import { contentStyle } from './style';

const tvStyle = tv(
  {
    slots: {
      main: 'flex flex-col justify-start',
      content: [
        'grow',
        'py-5 my-4',
        'bg-light-bg-hg dark:bg-dark-bg-hg',
        'border dark:border-0 border-light-border',
        'rounded-xl shadow-xl',
      ],
    },
    variants: {
      size: {
        initial: {
          main: 'items-center',
        },
        lg: {
          main: 'items-start',
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

export function ContentBody({ children }: PropsWithChildren) {
  const style = tvStyle({
    size: { lg: 'lg' },
  });

  return (
    <main className={style.main({ className: AppContainerBody.style() })}>
      <div className={style.content({ className: contentStyle() })}>
        {children}
      </div>
    </main>
  );
}
