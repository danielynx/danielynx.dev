import { type PropsWithChildren, type ElementType, Fragment } from 'react';
import { Tab, type TabProps } from '@headlessui/react';
import type { IconType } from 'react-icons';
import { tv } from 'tailwind-variants';

import { Navigator } from '@/component/Navigator';

export interface TabItemProps extends TabProps<ElementType> {
  Icon: IconType;
  text: string;
}

const tvStyle = tv(
  {
    slots: {
      container: '',
    },
    variants: {
      size: {
        initial: {
          container: ['w-[5.5rem] xs:w-[6.5rem] 2xs:w-[7.5rem]', 'py-1.5'],
        },
        sm: {
          container: ['w-36', 'py-2'],
        },
        md: {
          container: ['w-40'],
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

export function TabItem({
  Icon,
  text,
  children,
  ...props
}: PropsWithChildren<TabItemProps>) {
  const buttomStyle = Navigator.style.buttom;

  const style = tvStyle({ size: { sm: 'sm', md: 'md' } });

  return (
    <Tab
      as={Fragment}
      {...props}
    >
      {({ selected }) => {
        const innerButtonStyle = buttomStyle({ selected });

        return (
          <button
            type='button'
            className={innerButtonStyle.container({
              className: style.container(),
            })}
          >
            <Icon className={innerButtonStyle.icon()} />
            <span className={innerButtonStyle.text()}>{text}</span>
          </button>
        );
      }}
    </Tab>
  );
}
