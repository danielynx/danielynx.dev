import { PropsWithChildren } from 'react';
import { MdDeveloperBoard } from 'react-icons/md';

import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { HomeBreadcrumb } from '@/app/_page/Breadcrumb';
import { TabEnum } from '@/types/home/page/TabEnum';

export function ProjectBreadcrumb({ children }: PropsWithChildren) {
  return (
    <HomeBreadcrumb>
      <SharedBreadcrumb.Item
        Icon={MdDeveloperBoard}
        text='Projects'
        selected={false}
        link={`/?tab=${TabEnum.PROJECTS}`}
      />
      <SharedBreadcrumb.Separator />
      {children}
    </HomeBreadcrumb>
  );
}
