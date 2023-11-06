import { tv } from 'tailwind-variants';
import { MdRocketLaunch } from 'react-icons/md';

import { CourseBreadcrumb } from '@/app/course/_page/Breadcrumb';
import { Breadcrumb } from '@/component/Breadcrumb';

import { AppContainerContent } from '@/app/_layout/container/Content';
import { RocketseatLink } from './_page/Link';
import { RocketseatGoStack } from './_page/GoStack';

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
      <AppContainerContent.Header>
        <CourseBreadcrumb>
          <Breadcrumb.Item
            Icon={MdRocketLaunch}
            text='Rocketseat'
            selected={true}
          />
        </CourseBreadcrumb>
      </AppContainerContent.Header>
      <AppContainerContent.Body>
        <div className={style}>
          <p>
            {<RocketseatLink />} is a Brasilian Coding School that focus in
            technologies that are basead in JavaScript.
          </p>
        </div>
        <RocketseatGoStack />
      </AppContainerContent.Body>
    </>
  );
}
