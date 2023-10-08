'use client';

import { MdPieChart } from 'react-icons/md';

import { SharedTab } from '@/components/shared/Tab';

export function HeaderOverview() {
  return (
    <SharedTab.Item
      Icon={MdPieChart}
      text='Overview'
    />
  );
}
