import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { IconType } from 'react-icons';
import { tv } from 'tailwind-variants';

export interface HeaderTabProps {
  Icon: IconType;
  text: string;
}

const tvStyle = tv(
  {
    slots: {
      button: [
        'flex flew-row items-center justify-center py-2 rounded-lg',
        'focus:ring-3 ring-offset-2 focus:outline-none',
        'ring-light-bg-ct/50 ring-offset-light-hg-400',
        'dark:ring-dark-bg-ct/50 dark:ring-offset-dark-hg-400',
      ],
      icon: '',
      text: 'font-medium',
    },
    variants: {
      selected: {
        true: {
          button: [
            'shadow',
            'bg-light-bg-ct text-light-text-ct',
            'dark:bg-dark-bg-ct dark:text-dark-text-ct',
          ],
        },
        false: {
          button: [
            'text-light-text/70 hover:bg-light-bg-ct/[0.12] hover:text-light-text',
            'dark:text-dark-text/70 dark:hover:bg-dark-bg-ct/[0.12] dark:hover:text-dark-text',
          ],
        },
      },
      size: {
        initial: {
          button: 'w-[5.5rem] xs:w-[6.5rem] px-1',
          icon: 'h-4 w-4 xs:h-5 xs:w-5',
          text: 'pl-1 text-xs xs:text-sm',
        },
        sm: {
          button: 'w-36 px-2',
          icon: 'h-6 w-6 ',
          text: 'pl-1.5 text-base',
        },
        md: {
          button: 'w-40 px-2',
          icon: 'h-7 w-7 ',
          text: 'pl-2',
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

export function HeaderTab({ Icon, text }: HeaderTabProps) {
  const style = tvStyle({ size: { sm: 'sm', md: 'md' } });

  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button className={style.button({ selected })}>
          <Icon className={style.icon({ selected })} />
          <span className={style.text({ selected })}>{text}</span>
        </button>
      )}
    </Tab>
  );
}
