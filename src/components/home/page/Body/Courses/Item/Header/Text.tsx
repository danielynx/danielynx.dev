import { PropsWithChildren } from 'react';

export function HeaderText({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-row justify-start grow font-serif'>
      {children}
    </div>
  );
}
