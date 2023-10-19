import { PropsWithChildren } from 'react';

import { LayoutSidebar } from '@/components/shared/layout/Sidebar';

export function HeaderRoot({ children }: PropsWithChildren) {
  return <LayoutSidebar.Header>{children}</LayoutSidebar.Header>;
}
