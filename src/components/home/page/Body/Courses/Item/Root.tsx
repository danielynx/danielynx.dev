import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { tv } from 'tailwind-variants';

export interface ItemRootProps {
  link: string;
  lightBgColor: string;
  darkTextColor: string;
}

const tvStyle = tv({
  base: [
    'flex flex-col justify-center',
    'rounded-md overflow-hidden h-40',
    'dark:bg-dark-bg-ct',
    'hover:ring-4 ring-offset-4',
    'ring-light-bg-ct/50 dark:ring-dark-bg-ct/50',
    'ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg',
  ],
});

export function ItemRoot({
  children,
  link,
  lightBgColor,
  darkTextColor,
}: PropsWithChildren<ItemRootProps>) {
  const style = tvStyle({
    className: [
      lightBgColor,
      'dark:bg-dark-bg-ct',
      'text-light-text-ct',
      darkTextColor,
    ],
  });

  return (
    <Link
      target={'_blank'}
      href={link}
    >
      <div className={style}>{children}</div>
    </Link>
  );
}
