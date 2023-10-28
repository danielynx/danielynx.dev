import { tv } from 'tailwind-variants';

const tvStyle = tv(
  {
    slots: {
      container: [
        'flex flex-row justify-center items-center',
        'rounded-t-xl',
        'dark:bg-dark-bg-hg-600/80',
        'border-x-1 border-t-1 dark:border-0 border-light-border',
      ],
    },
    variants: {
      size: {
        initial: {
          container: 'p-1 h-12',
        },
        sm: {
          container: 'p-2 h-14',
        },
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

export function stylePainel() {
  return tvStyle({ size: { sm: 'sm' } });
}
