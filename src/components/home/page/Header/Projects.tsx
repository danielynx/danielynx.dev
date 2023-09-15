'use client';

import { MdDeveloperBoard } from 'react-icons/md';

import { HeaderTab } from './Tab';

export function HeaderProjects() {
  return (
    <HeaderTab
      Icon={MdDeveloperBoard}
      text='Projects'
    />
  );
}
