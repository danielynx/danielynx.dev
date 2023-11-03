import { tv } from 'tailwind-variants';
import Link from 'next/link';
import { BsScissors } from 'react-icons/bs';

import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { LayoutContent } from '@/components/shared/layout/Content';
import { PageBody } from '@/components/project/go-barber/page/Body';
import { ProjectBreadcrumb } from '@/components/project/Breadcrumb';

const tvStyle = tv(
  {
    base: 'space-y-4 leading-relaxed',
    variants: {
      size: {
        initial: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['lg'],
  },
);

export default function Page() {
  const style = tvStyle({
    size: { lg: 'lg' },
  });

  return (
    <>
      <LayoutContent.Header>
        <ProjectBreadcrumb>
          <SharedBreadcrumb.Item
            Icon={BsScissors}
            text='GoBarber'
            selected={true}
            link='/project/go-barber'
          />
        </ProjectBreadcrumb>
      </LayoutContent.Header>
      <LayoutContent.Body>
        <div className={style}>
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
