import { tv } from 'tailwind-variants';

const textTvStyle = tv(
  {
    variants: {
      size: {
        initial: 'text-xl',
        xs: 'text-2xl',
        md: 'text-xl',
        '2xl': 'text-3xl',
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['xs', 'md', '2xl'],
  },
);

export const textStyle = textTvStyle({
  size: { xs: 'xs', md: 'md', '2xl': '2xl' },
});
