import { PropsWithChildren } from 'react';

import { SharedTab } from '@/components/shared/Tab';
import { LayoutContent } from '@/components/shared/layout/Content';

export function HeaderRoot({ children }: PropsWithChildren) {
  return (
    <LayoutContent.Header>
      <SharedTab.List>{children}</SharedTab.List>
    </LayoutContent.Header>
  );
}
