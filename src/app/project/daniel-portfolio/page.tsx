import { tv } from 'tailwind-variants';
import { ImProfile } from 'react-icons/im';

import { LayoutContent } from '@/components/shared/layout/Content';
import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { ProjectBreadcrumb } from '@/app/project/page/Breadcrumb';
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
        <ProjectBreadcrumb>
          <SharedBreadcrumb.Item
            Icon={ImProfile}
            text="Daniel's Portfolio"
            selected={true}
          />
        </ProjectBreadcrumb>
      </LayoutContent.Header>
      <LayoutContent.Body>
        <div className={style}>
          <p>
            The {`Daniel's`} Portfolio project is this web application, and its
            proposal is show my career as a Software Developer.
          </p>
          <p>
            I was wanting to learn the NextJS framework, so I decided to build
            my own portfolio to learn by developing a real project. I took this
            opportunity to learn Tailwind too and to improve my skills in build
            responsive layout, create page design and create pages with the
            color scheme chooser.
          </p>
          <p>
            {`It's`} important to mentionate that the layout was inspired in the
            GitHub page, but the entire application was built by myself. I learn
            a lot by trying many times, until I was able of developing
            everything that I intending to do.
          </p>
        </div>
        <PageBody.Technology />
        <PageBody.Repository />
      </LayoutContent.Body>
    </>
  );
}
