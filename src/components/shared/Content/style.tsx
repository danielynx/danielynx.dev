import { tv } from 'tailwind-variants';

export const contentTvStyle = tv(
  {
    variants: {
      size: {
        initial: ['w-11/12', 'px-3', 'ml-0'],
        md: ['w-10/12', 'px-5'],
        lg: ['w-11/12', 'px-4', 'ml-2'],
        xl: ['w-9/12', 'px-5'],
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
