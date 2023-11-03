import { PropsWithChildren } from 'react';
import { MdHome, MdDeveloperBoard } from 'react-icons/md';

import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { TabEnum } from '@/types/home/page/TabEnum';

export function ProjectBreadcrumb({ children }: PropsWithChildren) {
  return (
    <SharedBreadcrumb.Root>
      <SharedBreadcrumb.Item
        Icon={MdHome}
        text='Home'
        selected={false}
        link='/'
      />
      <SharedBreadcrumb.Separator />
      <SharedBreadcrumb.Item
        Icon={MdDeveloperBoard}
        text='Projects'
        selected={false}
        link={`/?tab=${TabEnum.PROJECTS}`}
      />
      <SharedBreadcrumb.Separator />
      {children}
    </SharedBreadcrumb.Root>
  );
}
