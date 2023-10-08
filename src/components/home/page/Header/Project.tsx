'use client';

import { MdDeveloperBoard } from 'react-icons/md';

import { SharedTab } from '@/components/shared/Tab';

export function HeaderProject() {
  return (
    <SharedTab.Item
      Icon={MdDeveloperBoard}
      text='Projects'
    />
  );
}
