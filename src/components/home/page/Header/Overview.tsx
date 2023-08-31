'use client';

import { MdPieChart } from 'react-icons/md';

import { TabEnum } from '@/types/home/page/TabEnum';
import { HeaderItem } from './Item';

export function HeaderOverview() {
  return (
    <HeaderItem.Root
      Icon={MdPieChart}
      text={TabEnum.OVERVIEW}
      tab={TabEnum.OVERVIEW}
    />
  );
}
