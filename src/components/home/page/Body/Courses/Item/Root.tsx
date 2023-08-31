import { PropsWithChildren } from 'react';

export interface ItemRootProps {
  lightBgColor: string;
}

export function ItemRoot({
  children,
  lightBgColor,
}: PropsWithChildren<ItemRootProps>) {
  return (
    <div
      className={
        'flex flex-col justify-center rounded-md overflow-hidden h-40 dark:bg-white ' +
        lightBgColor
      }
    >
      {children}
    </div>
  );
}
