'use client';

import { SharedTab } from '@/components/shared/Tab';

import { PageHeader } from '@/components/home/page/Header';
import { PageBody } from '@/components/home/page/Body';

export default function Page() {
  return (
    <SharedTab.Group>
      <PageHeader.Root>
        <PageHeader.Overview />
        <PageHeader.Project />
        <PageHeader.Course />
      </PageHeader.Root>
      <PageBody.Root>
        <PageBody.Overview />
        <PageBody.Project.Root>
          <PageBody.Project.MyPortfolio />
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
