import Link from 'next/link';
import { MdHome, MdDeveloperBoard } from 'react-icons/md';
import { BsScissors } from 'react-icons/bs';

import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { TabEnum } from '@/types/home/page/TabEnum';
import { LayoutContent } from '@/components/shared/layout/Content';
import { PageBody } from '@/components/project/go-barber/page/Body';

export default function Page() {
  return (
    <>
      <LayoutContent.Header>
        <SharedBreadcrumb.Root>
          <SharedBreadcrumb.Item
            Icon={MdHome}
            text='Home'
            selected={false}
            link='/'
          />
          <SharedBreadcrumb.Separator />
          <SharedBreadcrumb.Item
            Icon={MdDeveloperBoard}
            text='Projects'
            selected={false}
            link={`/?tab=${TabEnum.PROJECTS}`}
          />
          <SharedBreadcrumb.Separator />
          <SharedBreadcrumb.Item
            Icon={BsScissors}
            text='GoBarber'
            selected={true}
            link='/project/go-barber'
          />
        </SharedBreadcrumb.Root>
      </LayoutContent.Header>
      <LayoutContent.Body>
        <div className='text-base lg:text-lg space-y-4 leading-relaxed'>
          <p>
            The GoBarber project is a barbershop schedule manager, compound by a
            headless application, a web application and a mobile application.
          </p>
          <p>
            It was built during the{' '}
            {
              <Link
                className='underline decoration-1 hover:decoration-2 underline-offset-2'
                href='https://www.rocketseat.com.br/'
                target='_blank'
              >
                Rocketseat
              </Link>
            }
            {`'s`} GoStack course, which addressed the stack that is compounded
            by the NodeJS, ReactJS and React Native technologies.
          </p>
        </div>
        <PageBody.Technology />
        <PageBody.Repository />
        <PageBody.Screenshot />
      </LayoutContent.Body>
    </>
  );
}
