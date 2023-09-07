import { PropsWithChildren } from 'react';

import { SharedHeader } from '@/components/shared/Header';

export function SharedHeaderLeft({ children }: PropsWithChildren) {
  return (
    <SharedHeader className='lg:justify-end fixed lg:sticky top-0 z-10'>
      <nav className='flex flex-row items-center justify-end w-11/12 sm:w-8/12 md:w-6/12 lg:w-11/12 xl:w-8/12 2xl:w-7/12 py-2 px-3 md:px-5 lg:px-4 xl:px-5 lg:mr-2'>
        {children}
      </nav>
    </SharedHeader>
  );
}
