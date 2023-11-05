import { PropsWithChildren } from 'react';
import { MdHome } from 'react-icons/md';

import { Breadcrumb } from '@/component/Breadcrumb';

export function HomeBreadcrumb({ children }: PropsWithChildren) {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item
        Icon={MdHome}
        text='Home'
        selected={false}
        link='/'
      />
      <Breadcrumb.Separator />
      {children}
    </Breadcrumb.Root>
  );
}
