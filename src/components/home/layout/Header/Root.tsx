import { PropsWithChildren } from 'react';

import { SharedHeader } from '@/components/shared/Header';

export function HeaderRoot({ children }: PropsWithChildren) {
  return <SharedHeader.Sidebar>{children}</SharedHeader.Sidebar>;
}
