import { PropsWithChildren } from 'react';
import { MdHome } from 'react-icons/md';

import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';

export function HomeBreadcrumb({ children }: PropsWithChildren) {
  return (
    <SharedBreadcrumb.Root>
      <SharedBreadcrumb.Item
        Icon={MdHome}
        text='Home'
        selected={false}
        link='/'
      />
      <SharedBreadcrumb.Separator />
      {children}
    </SharedBreadcrumb.Root>
  );
}
