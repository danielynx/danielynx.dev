'use client';

import { MdDeveloperBoard } from 'react-icons/md';

import { HeaderTab } from './Tab';

export function HeaderProject() {
  return (
    <HeaderTab
      Icon={MdDeveloperBoard}
      text='Projects'
    />
  );
}
