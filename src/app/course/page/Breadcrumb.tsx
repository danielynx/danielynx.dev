import { PropsWithChildren } from 'react';
import { MdSchool } from 'react-icons/md';

import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { HomeBreadcrumb } from '@/app/page/Breadcrumb';
import { TabEnum } from '@/types/home/page/TabEnum';

export function CourseBreadcrumb({ children }: PropsWithChildren) {
  return (
    <HomeBreadcrumb>
      <SharedBreadcrumb.Item
        Icon={MdSchool}
        text='Courses'
        selected={false}
        link={`/?tab=${TabEnum.COURSES}`}
      />
      <SharedBreadcrumb.Separator />
      {children}
    </HomeBreadcrumb>
  );
}
