'use client';

import { MdSchool } from 'react-icons/md';

import { TabEnum } from '@/types/home/page/TabEnum';
import { HeaderItem } from './Item';

export function HeaderCourses() {
  return (
    <HeaderItem.Root
      Icon={MdSchool}
      text={TabEnum.COURSES}
      tab={TabEnum.COURSES}
    />
  );
}
