import { PropsWithChildren } from 'react';

export interface HeaderTextProps {
  darkTextColor: string;
}

export function HeaderText({
  children,
  darkTextColor,
}: PropsWithChildren<HeaderTextProps>) {
  return (
    <div
      className={
        'flex flex-row justify-start grow text-white font-serif ' +
        darkTextColor
      }
    >
      {children}
    </div>
  );
}
