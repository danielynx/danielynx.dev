'use client';

import { MdSchool } from 'react-icons/md';

import { HeaderTab } from './Tab';

export function HeaderCourses() {
  return (
    <HeaderTab
      Icon={MdSchool}
      text='Courses'
    />
  );
}
