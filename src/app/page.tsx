'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MdDeveloperBoard, MdSchool, MdPieChart } from 'react-icons/md';

import { LayoutContent } from '@/components/shared/layout/Content';
import { SharedTab } from '@/components/shared/Tab';
import { TabEnum } from '@/types/home/page/TabEnum';

import { AppOverview } from './page/Overview';
import { AppProject } from './page/Project';
import { AppCourse } from './page/Course';

export default function Page() {
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab');

  const [selectedIndex, setSelectedIndex] = useState(
    tab === TabEnum.PROJECTS ? 1 : tab === TabEnum.COURSES ? 2 : 0,
  );

  return (
    <SharedTab.Group
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <LayoutContent.Header>
        <SharedTab.List>
          <SharedTab.Item
            Icon={MdPieChart}
            text='Overview'
          />
          <SharedTab.Item
            Icon={MdDeveloperBoard}
            text='Projects'
          />
          <SharedTab.Item
            Icon={MdSchool}
            text='Courses'
          />
        </SharedTab.List>
      </LayoutContent.Header>
      <LayoutContent.Body>
        <SharedTab.Panels>
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
        </SharedTab.Panels>
      </LayoutContent.Body>
    </SharedTab.Group>
  );
}
