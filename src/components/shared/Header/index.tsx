import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const tvStyle = tv({
  base: [
    'flex flex-row justify-center items-center',
    'w-full h-20',
    'border-b border-light-border dark:border-dark-border',
    'bg-light-bg-hg dark:bg-dark-bg-hg',
  ],
});

export interface SharedHeaderProps {
  className?: string;
}

export function SharedHeader({
  children,
  className,
}: PropsWithChildren<SharedHeaderProps>) {
  const style = tvStyle({ className });

  return <header className={style}>{children}</header>;
}
