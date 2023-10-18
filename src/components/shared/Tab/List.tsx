import { PropsWithChildren, ElementType } from 'react';
import { Tab, TabListProps } from '@headlessui/react';

import { SharedNavigator } from '@/components/shared/Navigator';

export function TabList({
  children,
  className,
  ...props
}: PropsWithChildren<TabListProps<ElementType>>) {
  const painelStyle = SharedNavigator.style.painel();

  return (
    <Tab.List
      className={painelStyle.container()}
      {...props}
    >
      {children}
    </Tab.List>
  );
}
