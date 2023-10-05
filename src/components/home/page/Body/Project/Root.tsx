import { PropsWithChildren } from 'react';
import { Tab } from '@headlessui/react';

export function ProjectRoot({ children }: PropsWithChildren) {
  return (
    <Tab.Panel>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-2'>
        {children}
      </div>
    </Tab.Panel>
  );
}
