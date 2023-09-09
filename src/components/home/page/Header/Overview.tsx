'use client';

import { MdPieChart } from 'react-icons/md';

import { HeaderTab } from './Tab';

export function HeaderOverview() {
  return (
    <HeaderTab
      Icon={MdPieChart}
      text='Overview'
    />
  );
}
