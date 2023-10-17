import { PropsWithChildren, ElementType, Fragment } from 'react';
import { Tab, TabProps } from '@headlessui/react';
import { IconType } from 'react-icons';
import { tv } from 'tailwind-variants';

import { SharedNavigator } from '@/components/shared/Navigator';

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
  let styleButtom = SharedNavigator.style.buttom;

  const style = tvStyle({ size: { sm: 'sm', md: 'md' } });

  return (
    <Tab
      as={Fragment}
      {...props}
    >
      {({ selected }) => {
        const styleButtomInner = styleButtom({ selected });

        return (
          <button
            className={styleButtomInner.container({
              className: style.container(),
            })}
          >
            <Icon className={styleButtomInner.icon()} />
            <span className={styleButtomInner.text()}>{text}</span>
          </button>
        );
      }}
    </Tab>
  );
}
