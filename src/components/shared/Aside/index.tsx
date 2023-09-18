import { tv } from 'tailwind-variants';

export const asideTvStyle = tv(
  {
    variants: {
      size: {
        initial: 'w-11/12',
        sm: 'w-8/12',
        md: 'w-6/12',
        lg: 'w-11/12',
        xl: 'w-8/12',
        '2xl': 'w-7/12',
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm', 'md', 'lg', 'xl', '2xl'],
  },
);

export const asideStyle = asideTvStyle({
  size: { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl' },
});
