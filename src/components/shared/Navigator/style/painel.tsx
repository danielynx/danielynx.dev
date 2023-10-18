import { tv } from 'tailwind-variants';

const tvStyle = tv(
  {
    slots: {
      container: [
        'flex flex-row justify-center items-center',
        'rounded-xl',
        'bg-light-bg-hg-700/70 dark:bg-dark-bg-hg-600/80',
      ],
    },
    variants: {
      size: {
        initial: {
          container: 'py-1 px-1 h-12',
        },
        sm: {
          container: 'py-1.5 px-1.5 h-14',
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
