import Link from 'next/link';
import { tv } from 'tailwind-variants';
import type { IconType } from 'react-icons';

import { Navigator } from '@/component/Navigator';

export interface BreadcrumbItemProps {
  Icon: IconType;
  text: string;
  selected: boolean;
  link?: string;
  target?: '_blank' | '_self';
}

const tvStyle = tv(
  {
    slots: {
      container: 'py-1',
      separator: 'text-light-text/70 dark:text-dark-text/70',
    },
    variants: {
      size: {
        initial: {
          separator: 'h-4 w-4 xs:h-5 xs:w-5 2xs:h-6 2xs:w-6',
        },
        sm: {
          separator: 'h-7 w-7',
        },
        md: {
          separator: 'h-8 w-8',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm', 'md'],
  },
);

export function BreadcrumbItem({
  Icon,
  text,
  selected,
  link = '#',
  target = '_self',
}: BreadcrumbItemProps) {
  const navigatorButtomStyle = Navigator.style.buttom({ selected });

  const style = tvStyle({ size: { sm: 'sm', md: 'md' } });

  return (
    <Link
      className={navigatorButtomStyle.container({
        className: style.container(),
      })}
      href={link}
      target={target}
    >
      <Icon className={navigatorButtomStyle.icon()} />
      <span className={navigatorButtomStyle.text()}>{text}</span>
    </Link>
  );
}
