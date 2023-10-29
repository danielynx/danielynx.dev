import { tv } from 'tailwind-variants';

const tvStyle = tv(
  {
    slots: {
      container: 'flex flex-row justify-center items-center',
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
