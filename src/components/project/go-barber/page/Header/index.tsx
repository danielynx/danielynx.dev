import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { SharedContent } from '@/components/shared/Content';
import { TabEnum } from '@/types/home/page/TabEnum';

const tvStyle = tv(
  {
    slots: {
      container: 'flex flex-row',
      button: [
        'flex dark:space-x-2 rounded-xl',
        'bg-light-bg-hg-600/80 dark:bg-dark-bg-hg-600/80',
      ],
    },
    variants: {
      size: {
        initial: {
          button: 'p-1',
        },
        sm: {
          button: 'p-1.5',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm'],
  },
);

export function PageHeader() {
  const style = tvStyle({ size: { sm: 'sm' } });

  return (
    <SharedContent.Header>
      <div className={style.container()}>
        <Link
          className={style.button()}
          href={`/?tab=${TabEnum.PROJECTS}`}
        >
          Go Back
        </Link>
      </div>
    </SharedContent.Header>
  );
}
