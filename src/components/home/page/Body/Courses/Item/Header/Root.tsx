import { PropsWithChildren } from 'react';

export function HeaderRoot({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-row justify-start items-center grow'>
      {children}
    </div>
  );
}
