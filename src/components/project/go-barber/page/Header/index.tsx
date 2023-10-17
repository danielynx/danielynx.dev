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
      container: 'py-1',
      separator: '',
    },
    variants: {
      size: {
        initial: {
          separator: 'h-4 w-4 xs:h-5 xs:w-5 2xs:h-6 2xs:w-6',
        },
        sm: {
          separator: 'h-7 w-7',
        },
        md: {
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
  const painelStyle = SharedNavigator.style.painel;
  const buttomStyle = SharedNavigator.style.buttom;
  const selectedButtomStyle = buttomStyle({ selected: true });
  const unselectedButtomStyle = buttomStyle({ selected: false });

  const style = tvStyle({ size: { sm: 'sm', md: 'md' } });

  return (
    <SharedContent.Header>
      <div className={painelStyle()}>
        <Link
          className={unselectedButtomStyle.container({
            className: style.container(),
          })}
          href={`/`}
        >
          <MdHome className={unselectedButtomStyle.icon()} />
          <span className={unselectedButtomStyle.text()}>Home</span>
        </Link>
        <MdChevronRight
          className={unselectedButtomStyle.containerColor({
            className: style.separator(),
          })}
        />
        <Link
          className={unselectedButtomStyle.container({
            className: style.container(),
          })}
          href={`/?tab=${TabEnum.PROJECTS}`}
        >
          <MdDeveloperBoard className={unselectedButtomStyle.icon()} />
          <span className={unselectedButtomStyle.text()}>Projects</span>
        </Link>
        <MdChevronRight
          className={unselectedButtomStyle.containerColor({
            className: style.separator(),
          })}
        />
        <Link
          className={selectedButtomStyle.container({
            className: style.container(),
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
