import { PropsWithChildren } from 'react';

import { LayoutSidebar } from '@/components/shared/layout/Sidebar';

export function BodyRoot({ children }: PropsWithChildren) {
  return <LayoutSidebar.Body>{children}</LayoutSidebar.Body>;
}
