'use client';

import { Tab } from '@headlessui/react';

import { PageHeader } from '@/components/home/page/Header';
import { PageBody } from '@/components/home/page/Body';

export default function Page() {
  return (
    <Tab.Group>
      <PageHeader.Root>
        <PageHeader.Overview />
        <PageHeader.Projects />
        <PageHeader.Courses />
      </PageHeader.Root>
      <PageBody.Root>
        <PageBody.Overview />
        <PageBody.Projects.Root>
          <PageBody.Projects.MyPortfolio />
          <PageBody.Projects.GoBarber />
        </PageBody.Projects.Root>
        <PageBody.Courses.Root>
          <PageBody.Courses.Symfony />
          <PageBody.Courses.Rocketseat />
          <PageBody.Courses.MongoDb />
          <PageBody.Courses.FreeCodeCamp />
        </PageBody.Courses.Root>
      </PageBody.Root>
    </Tab.Group>
  );
}
