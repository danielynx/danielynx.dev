import { TbError404, TbHandStop } from 'react-icons/tb';
import { MdHome } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { SharedBreadcrumb } from '@/components/shared/Breadcrumb';
import { LayoutContent } from '@/components/shared/layout/Content';

const tvStyle = tv(
  {
    slots: {
      container: [
        'flex flex-col items-center justify-center',
        'text-dark-text-ct dark:text-light-text-ct',
      ],
      icon: '',
      ask: 'font-bold',
      message: 'font-bold',
    },
    variants: {
      size: {
        initial: {
          icon: 'mt-2 h-28 w-28',
          ask: 'mt-4 text-lg',
          message: 'mt-1 text-lg',
        },
        sm: {
          icon: 'mt-8 h-32 w-32',
          ask: 'mt-10 text-xl',
          message: 'mt-2 text-xl',
        },
        lg: {
          icon: 'mt-20 h-40 w-40',
          ask: 'mt-20 text-3xl',
          message: 'mt-4 text-3xl',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm', 'lg'],
  },
);

export default function NotFound() {
  const style = tvStyle({
    size: { sm: 'sm', lg: 'lg' },
  });

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
            Icon={TbError404}
            text='PageNotFound'
            selected={true}
          />
        </SharedBreadcrumb.Root>
      </LayoutContent.Header>
      <LayoutContent.Body>
        <div className={style.container()}>
          <TbHandStop className={style.icon()} />
          <p className={style.ask()}>Where did you want to go? 🤔</p>
          <p className={style.message()}>There {`isn't`} this page.</p>
        </div>
      </LayoutContent.Body>
    </>
  );
}
