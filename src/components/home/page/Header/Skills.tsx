'use client';

import { MdBuild } from 'react-icons/md';

import { TabEnum } from '@/types/home/page/TabEnum';
import { HeaderItem } from './Item';

export function HeaderSkills() {
  return (
    <HeaderItem.Root
      Icon={MdBuild}
      text={TabEnum.SKILLS}
      tab={TabEnum.SKILLS}
    />
  );
}
