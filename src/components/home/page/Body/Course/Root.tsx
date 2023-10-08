import { PropsWithChildren } from 'react';
import { SharedTab } from '@/components/shared/Tab';

export function CourseRoot({ children }: PropsWithChildren) {
  return (
    <SharedTab.Panel>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-2'>
        {children}
      </div>
    </SharedTab.Panel>
  );
}
