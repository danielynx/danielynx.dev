'use client';

import { MdBuild } from 'react-icons/md';

import { HeaderTab } from './Tab';

export function HeaderSkills() {
  return (
    <HeaderTab
      Icon={MdBuild}
      text='Skills'
    />
  );
}
