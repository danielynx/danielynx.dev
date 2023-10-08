import { PropsWithChildren, ElementType } from 'react';
import { Tab, TabListProps } from '@headlessui/react';
import { tv } from 'tailwind-variants';

const tvStyle = tv({
  base: 'flex flex-row',
});

export function TabList({
  children,
  className,
  ...props
}: PropsWithChildren<TabListProps<ElementType>>) {
  const style = tvStyle({ className });

  return (
    <Tab.List
      className={style}
      {...props}
    >
      {children}
    </Tab.List>
  );
}
