import { PropsWithChildren } from 'react';

export function LayoutContentHeader({ children }: PropsWithChildren) {
  return (
    <header className='flex flex-col items-center lg:items-start justify-end w-full h-20 sticky top-16 lg:top-0 border-b bg-light-bg-hg border-light-border dark:border-dark-border dark:bg-dark-bg-hg'>
      <nav className='flex flex-row justify-start items-end w-full sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 h-full px-3 md:px-5 lg:px-4 xl:px-5 ml-0 lg:ml-2'>
        {children}
      </nav>
    </header>
  );
}
