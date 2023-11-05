import { PropsWithChildren, ElementType } from 'react';
import { Tab, TabGroupProps } from '@headlessui/react';

export function TabGroup({
  children,
  ...props
}: PropsWithChildren<TabGroupProps<ElementType>>) {
  return <Tab.Group {...props}>{children}</Tab.Group>;
}
