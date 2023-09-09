import { PropsWithChildren } from 'react';
import { Tab } from '@headlessui/react';

export function BodyRoot({ children }: PropsWithChildren) {
  return (
    <main className='grow w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 py-5 px-3 md:px-5 lg:px-4 xl:px-5 ml-0 lg:ml-2 mt-4 mb-4 bg-light-bg-hg dark:bg-dark-bg-hg border dark:border-0 border-light-border rounded-xl'>
      <Tab.Panels>{children}</Tab.Panels>
    </main>
  );
}
