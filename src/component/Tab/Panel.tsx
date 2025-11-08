import type { PropsWithChildren, ElementType } from 'react';
import { Tab, type TabPanelProps } from '@headlessui/react';

export function TabPanel({
  children,
  ...props
}: PropsWithChildren<TabPanelProps<ElementType>>) {
  return <Tab.Panel {...props}>{children}</Tab.Panel>;
}
