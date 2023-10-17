import { PropsWithChildren, ElementType } from 'react';
import { Tab, TabListProps } from '@headlessui/react';

import { SharedNavigator } from '@/components/shared/Navigator';

export function TabList({
  children,
  className,
  ...props
}: PropsWithChildren<TabListProps<ElementType>>) {
  const stylePainel = SharedNavigator.style.painel;

  return (
    <Tab.List
      className={stylePainel()}
      {...props}
    >
      {children}
    </Tab.List>
  );
}
