import { PropsWithChildren } from 'react';

import { SharedHeader } from '@/components/shared/Header';

export function SharedHeaderRight({ children }: PropsWithChildren) {
  return (
    <SharedHeader className='lg:justify-start items-end sticky top-16 lg:top-0 '>
      <nav className='flex flex-row justify-center lg:justify-start items-end w-full sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 h-full px-3 md:px-5 lg:px-4 xl:px-5 ml-0 lg:ml-2'>
        {children}
      </nav>
    </SharedHeader>
  );
}
