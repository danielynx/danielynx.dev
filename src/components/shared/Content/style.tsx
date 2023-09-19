import { tv } from 'tailwind-variants';

export const contentTvStyle = tv(
  {
    variants: {
      size: {
        initial: 'w-11/12',
        md: 'w-10/12',
        lg: 'w-11/12',
        xl: 'w-9/12',
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

export const contentStyle = contentTvStyle({
  size: { md: 'md', lg: 'lg', xl: 'xl' },
});
