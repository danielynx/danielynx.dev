'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { SharedTab } from '@/components/shared/Tab';
import { PageHeader } from '@/components/home/page/Header';
import { PageBody } from '@/components/home/page/Body';
import { TabEnum } from '@/types/home/page/TabEnum';

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
      <PageHeader.Root>
        <PageHeader.Overview />
        <PageHeader.Project />
        <PageHeader.Course />
      </PageHeader.Root>
      <PageBody.Root>
        <PageBody.Overview />
        <PageBody.Project.Root>
          <PageBody.Project.DanielPortfolio />
          <PageBody.Project.GoBarber />
        </PageBody.Project.Root>
        <PageBody.Course.Root>
          <PageBody.Course.Symfony />
          <PageBody.Course.Rocketseat />
          <PageBody.Course.MongoDb />
          <PageBody.Course.FreeCodeCamp />
        </PageBody.Course.Root>
      </PageBody.Root>
    </SharedTab.Group>
  );
}
