import { tv } from 'tailwind-variants';
import { MdRocketLaunch } from 'react-icons/md';

import { LayoutContent } from '@/components/shared/layout/Content';
import { CourseBreadcrumb } from '@/app/course/_page/Breadcrumb';
import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';

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
      <LayoutContent.Header>
        <CourseBreadcrumb>
          <SharedBreadcrumb.Item
            Icon={MdRocketLaunch}
            text='Rocketseat'
            selected={true}
          />
        </CourseBreadcrumb>
      </LayoutContent.Header>
      <LayoutContent.Body>
        <div className={style}>
          <p>
            {<RocketseatLink />} is a Brasilian Coding School that focus in
            technologies that are basead in JavaScript.
          </p>
        </div>
        <RocketseatGoStack />
      </LayoutContent.Body>
    </>
  );
}
