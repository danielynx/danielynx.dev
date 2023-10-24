import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const tvStyle = tv({
  base: [
    'flex flex-col',
    'border-8 border-light-border-600 dark:border-dark-border',
    'rounded-lg',
  ],
});

export function BrowserFrameRoot({ children }: PropsWithChildren) {
  const style = tvStyle();

  return <div className={style}>{children}</div>;
}
