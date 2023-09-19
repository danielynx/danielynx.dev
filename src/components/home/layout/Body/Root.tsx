import { PropsWithChildren } from 'react';

import { SharedSidebar } from '@/components/shared/Sidebar';

export function BodyRoot({ children }: PropsWithChildren) {
  return <SharedSidebar.Body>{children}</SharedSidebar.Body>;
}
