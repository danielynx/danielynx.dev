import Link from 'next/link';
import { tv } from 'tailwind-variants';

export interface ItemFooterProps {
  link: string;
  darkTextColor: string;
}

const tvStyle = tv(
  {
    base: [
      'flex flex-row justify-center items-center w-full h-10',
      'font-light border-t',
    ],
    variants: {
      size: {
        initial: 'text-sm',
        sm: 'text-base',
        md: 'text-sm',
        xl: 'text-base',
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm', 'md', 'xl'],
  },
);

export function ItemFooter() {
  const style = tvStyle({
    size: { sm: 'sm', md: 'md', xl: 'xl' },
  });

  return <div className={style}>Show Details</div>;
}
