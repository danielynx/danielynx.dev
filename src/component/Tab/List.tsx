import type { PropsWithChildren, ElementType } from 'react';
import { Tab, type TabListProps } from '@headlessui/react';

import { Navigator } from '@/component/Navigator';

export function TabList({
  children,
  className,
  ...props
}: PropsWithChildren<TabListProps<ElementType>>) {
  const painelStyle = Navigator.style.painel();

  return (
    <Tab.List
      className={painelStyle.container()}
      {...props}
    >
      {children}
    </Tab.List>
  );
}
