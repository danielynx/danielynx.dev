import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const tvStyle = tv({
  base: [
    'flex flex-row justify-start items-center',
    'bg-gray-800 text-white',
    'py-1 px-2',
  ],
});

export function TitleBarRoot({ children }: PropsWithChildren) {
  const style = tvStyle();

  return <div className={style}>{children}</div>;
}
