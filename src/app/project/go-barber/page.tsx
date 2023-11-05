import { tv } from 'tailwind-variants';
import { BsScissors } from 'react-icons/bs';

import { LayoutContent } from '@/component/shared/layout/Content';
import { Breadcrumb } from '@/component/Breadcrumb';
import { ProjectBreadcrumb } from '@/app/project/_page/Breadcrumb';
import { RocketseatLink } from '@/app/course/rocketseat/_page/Link';

import { GoBarberRepository } from './_page/Repository';
import { GoBarberScreenshot } from './_page/Screenshot';
import { GoBarberTechnology } from './_page/Technology';

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
          <Breadcrumb.Item
            Icon={BsScissors}
            text='GoBarber'
            selected={true}
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
            It was built during the {<RocketseatLink />}
            {`'s`} GoStack course, which addressed the stack that is compounded
            by the NodeJS, ReactJS and React Native technologies.
          </p>
        </div>
        <GoBarberRepository />
        <GoBarberScreenshot />
        <GoBarberTechnology />
      </LayoutContent.Body>
    </>
  );
}
