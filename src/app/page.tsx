import { PageHeader } from '@/components/home/page/Header';
import { PageBody } from '@/components/home/page/Body';
import { ActiveTabProvider } from '@/contexts/home/page/ActiveTabProvider';
import { TabEnum } from '@/types/home/page/TabEnum';

export default function Page() {
  return (
    <ActiveTabProvider initialState={TabEnum.COURSES}>
      <PageHeader.Root>
        <PageHeader.Overview />
        <PageHeader.Skills />
        <PageHeader.Courses />
      </PageHeader.Root>
      <PageBody.Root>
        <PageBody.Overview />
        <PageBody.Skills />
        <PageBody.Courses.Root>
          <PageBody.Courses.Symfony />
          <PageBody.Courses.Rocketseat />
          <PageBody.Courses.MongoDb />
          <PageBody.Courses.FreeCodeCamp />
        </PageBody.Courses.Root>
      </PageBody.Root>
    </ActiveTabProvider>
  );
}
