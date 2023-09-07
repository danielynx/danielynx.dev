import { PropsWithChildren } from 'react';

export function ProfileRoot({ children }: PropsWithChildren) {
  return (
    <aside className='w-11/12 sm:w-8/12 md:w-6/12 lg:w-11/12 xl:w-8/12 2xl:w-7/12 py-8 px-5 md:px-7 lg:px-6 xl:px-7 mt-28 lg:mt-4 mb-3 lg:mr-2 bg-light-bg-hg dark:bg-dark-bg-hg border dark:border-0 border-light-border rounded-xl'>
      {children}
    </aside>
  );
}
