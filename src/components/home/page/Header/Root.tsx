import { PropsWithChildren } from 'react';

import { LayoutContentHeader } from '@/components/home/layout/ContentHeader';

export function HeaderRoot({ children }: PropsWithChildren) {
  return <LayoutContentHeader>{children}</LayoutContentHeader>;
}
