import { PropsWithChildren, ElementType, Fragment } from 'react';
import { Tab, TabProps } from '@headlessui/react';
import { IconType } from 'react-icons';

import { SharedNavigator } from '@/components/shared/Navigator';

export interface TabItemProps extends TabProps<ElementType> {
  Icon: IconType;
  text: string;
}

export function TabItem({
  Icon,
  text,
  children,
  ...props
}: PropsWithChildren<TabItemProps>) {
  const styleButtom = SharedNavigator.style.buttom;

  return (
    <Tab
      as={Fragment}
      {...props}
    >
      {({ selected }) => {
        const style = styleButtom({ selected });

        return (
          <button className={style.container()}>
            <Icon className={style.icon()} />
            <span className={style.text()}>{text}</span>
          </button>
        );
      }}
    </Tab>
  );
}
