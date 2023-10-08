'use client';

import { MdSchool } from 'react-icons/md';

import { SharedTab } from '@/components/shared/Tab';

export function HeaderCourse() {
  return (
    <SharedTab.Item
      Icon={MdSchool}
      text='Courses'
    />
  );
}
