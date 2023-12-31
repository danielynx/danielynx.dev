import { PropsWithChildren } from 'react';
import { MdSchool } from 'react-icons/md';

import { Breadcrumb } from '@/component/Breadcrumb';
import { HomeBreadcrumb } from '@/app/_page/Breadcrumb';
import { TabEnum } from '@/type/_page/TabEnum';

export function CourseBreadcrumb({ children }: PropsWithChildren) {
  return (
    <HomeBreadcrumb>
      <Breadcrumb.Item
        Icon={MdSchool}
        text='Courses'
        selected={false}
        link={`/?tab=${TabEnum.COURSES}`}
      />
      <Breadcrumb.Separator />
      {children}
    </HomeBreadcrumb>
  );
}
