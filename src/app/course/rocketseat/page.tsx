import { tv } from 'tailwind-variants';
import { MdRocketLaunch } from 'react-icons/md';

import { LayoutContent } from '@/components/shared/layout/Content';
import { CourseBreadcrumb } from '@/app/course/page/Breadcrumb';
import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { PageBody } from '@/components/project/daniel-portfolio/page/Body';

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
          <p>Rocketseat</p>
        </div>
      </LayoutContent.Body>
    </>
  );
}
