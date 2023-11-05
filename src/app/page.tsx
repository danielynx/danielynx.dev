'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MdDeveloperBoard, MdSchool, MdPieChart } from 'react-icons/md';

import { LayoutContent } from '@/component/shared/layout/Content';
import { Tab } from '@/component/Tab';
import { TabEnum } from '@/types/home/page/TabEnum';

import { AppOverview } from './_page/Overview';
import { AppProject } from './_page/Project';
import { AppCourse } from './_page/Course';

export default function Page() {
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab');

  const [selectedIndex, setSelectedIndex] = useState(
    tab === TabEnum.PROJECTS ? 1 : tab === TabEnum.COURSES ? 2 : 0,
  );

  return (
    <Tab.Group
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <LayoutContent.Header>
        <Tab.List>
          <Tab.Item
            Icon={MdPieChart}
            text='Overview'
          />
          <Tab.Item
            Icon={MdDeveloperBoard}
            text='Projects'
          />
          <Tab.Item
            Icon={MdSchool}
            text='Courses'
          />
        </Tab.List>
      </LayoutContent.Header>
      <LayoutContent.Body>
        <Tab.Panels>
          <AppOverview />
          <AppProject.Root>
            <AppProject.DanielPortfolio />
            <AppProject.GoBarber />
          </AppProject.Root>
          <AppCourse.Root>
            <AppCourse.Symfony />
            <AppCourse.Rocketseat />
            <AppCourse.MongoDb />
            <AppCourse.FreeCodeCamp />
          </AppCourse.Root>
        </Tab.Panels>
      </LayoutContent.Body>
    </Tab.Group>
  );
}
