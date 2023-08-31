'use client';

import { PropsWithChildren } from 'react';

import { useActiveTab } from '@/hooks/home/page/useActiveTab';
import { TabEnum } from '@/types/home/page/TabEnum';

export interface ItemRootProps {
  tab: TabEnum;
}

export function ItemRoot({ tab, children }: PropsWithChildren<ItemRootProps>) {
  const { isActiveTab } = useActiveTab();

  return (
    <div className={isActiveTab(tab) ? 'block' : 'hidden'}>{children}</div>
  );
}
