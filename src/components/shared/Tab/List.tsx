import { PropsWithChildren, ElementType } from 'react';
import { Tab, TabListProps } from '@headlessui/react';
import { tv } from 'tailwind-variants';

import { SharedNavigator } from '@/components/shared/Navigator';

const tvStyle = tv({
  base: 'flex flex-row',
});

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
