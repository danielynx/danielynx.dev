import type { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const tvStyle = tv({
  base: [
    'flex flex-col',
    'border-4 border-light-border dark:border-dark-border',
    'rounded',
  ],
});

export function BrowserFrameRoot({ children }: PropsWithChildren) {
  const style = tvStyle();

  return <div className={style}>{children}</div>;
}
