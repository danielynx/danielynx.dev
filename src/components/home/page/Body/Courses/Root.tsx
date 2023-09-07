import { PropsWithChildren } from 'react';

import { TabEnum } from '@/types/home/page/TabEnum';
import { BodyItem } from '../Item';

export function CoursesRoot({ children }: PropsWithChildren) {
  return (
    <BodyItem.Root tab={TabEnum.COURSES}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-2'>
        {children}
      </div>
    </BodyItem.Root>
  );
}
