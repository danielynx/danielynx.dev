import { PropsWithChildren } from 'react';

import { SharedSidebar } from '@/components/shared/Sidebar';

export function HeaderRoot({ children }: PropsWithChildren) {
  return <SharedSidebar.Header>{children}</SharedSidebar.Header>;
}
