import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { SharedBody } from '@/components/shared/Body';
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
        'rounded-xl',
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
    <main className={style.main({ className: SharedBody.style() })}>
      <div className={style.content({ className: contentStyle() })}>
        {children}
      </div>
    </main>
  );
}
