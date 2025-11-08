import type { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export interface ContentProps {
  title: string;
  subtitle: string;
}

const tvStyle = tv(
  {
    slots: {
      container: 'flex flex-col items-start w-full',
      title: 'font-bold font-serif',
      subtitle: 'font-semibold font-serif',
      children: 'font-extralight tracking-wide pt-2',
    },
    variants: {
      size: {
        initial: {
          container: 'pl-3',
          title: 'text-lg',
          subtitle: 'text-base',
          children: 'text-sm',
        },
        lg: {
          container: 'pl-4',
          title: 'text-xl',
          subtitle: 'text-lg',
          children: 'text-base',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['lg'],
  },
);

export function Content({
  title,
  subtitle,
  children,
}: PropsWithChildren<ContentProps>) {
  const style = tvStyle({
    size: { lg: 'lg' },
  });

  return (
    <div className={style.container()}>
      <div className={style.title()}>{title}</div>
      <div className={style.subtitle()}>{subtitle}</div>
      <div className={style.children()}>{children}</div>
    </div>
  );
}
