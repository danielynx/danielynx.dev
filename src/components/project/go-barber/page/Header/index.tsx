import Link from 'next/link';
import { MdHome, MdDeveloperBoard, MdChevronRight } from 'react-icons/md';
import { BsScissors } from 'react-icons/bs';
import { tv } from 'tailwind-variants';

import { SharedContent } from '@/components/shared/Content';
import { SharedNavigator } from '@/components/shared/Navigator';
import { TabEnum } from '@/types/home/page/TabEnum';

const tvStyle = tv(
  {
    slots: {
      painelContainer: 'px-5',
      buttomContainer: 'py-1',
      separator: 'text-light-text/70 dark:text-dark-text/70',
    },
    variants: {
      size: {
        initial: {
          painelContainer: 'px-2',
          separator: 'h-4 w-4 xs:h-5 xs:w-5 2xs:h-6 2xs:w-6',
        },
        sm: {
          painelContainer: 'px-3',
          separator: 'h-7 w-7',
        },
        md: {
          painelContainer: 'px-4',
          separator: 'h-8 w-8',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm', 'md'],
  },
);

export function PageHeader() {
  const painelStyle = SharedNavigator.style.painel();

  const buttomStyle = SharedNavigator.style.buttom;
  const selectedButtomStyle = buttomStyle({ selected: true });
  const unselectedButtomStyle = buttomStyle({ selected: false });

  const style = tvStyle({ size: { sm: 'sm', md: 'md' } });

  return (
    <SharedContent.Header>
      <div
        className={painelStyle.container({
          className: style.painelContainer(),
        })}
      >
        <Link
          className={unselectedButtomStyle.container({
            className: style.buttomContainer(),
          })}
          href={`/`}
        >
          <MdHome className={unselectedButtomStyle.icon()} />
          <span className={unselectedButtomStyle.text()}>Home</span>
        </Link>
        <MdChevronRight className={style.separator()} />
        <Link
          className={unselectedButtomStyle.container({
            className: style.buttomContainer(),
          })}
          href={`/?tab=${TabEnum.PROJECTS}`}
        >
          <MdDeveloperBoard className={unselectedButtomStyle.icon()} />
          <span className={unselectedButtomStyle.text()}>Projects</span>
        </Link>
        <MdChevronRight className={style.separator()} />
        <Link
          className={selectedButtomStyle.container({
            className: style.buttomContainer(),
          })}
          href={`/project/go-barber`}
        >
          <BsScissors className={selectedButtomStyle.icon()} />
          <span className={selectedButtomStyle.text()}>GoBarber</span>
        </Link>
      </div>
    </SharedContent.Header>
  );
}
