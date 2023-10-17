import { tv } from 'tailwind-variants';

const tvStyle = tv(
  {
    base: [
      'flex flex-row justify-center items-center',
      'rounded-t-xl',
      'bg-light-bg-hg-700/70 dark:bg-dark-bg-hg-600/80',
    ],
    variants: {
      size: {
        initial: 'p-1 h-10',
        sm: 'p-1.5 h-14',
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
