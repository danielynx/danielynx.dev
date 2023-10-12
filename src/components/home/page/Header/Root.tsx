import { PropsWithChildren } from 'react';

import { SharedTab } from '@/components/shared/Tab';
import { SharedContent } from '@/components/shared/Content';

export function HeaderRoot({ children }: PropsWithChildren) {
  return (
    <SharedContent.Header>
      <SharedTab.List>{children}</SharedTab.List>
    </SharedContent.Header>
  );
}
