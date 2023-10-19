import { PropsWithChildren } from 'react';

import { SharedTab } from '@/components/shared/Tab';
import { LayoutContent } from '@/components/shared/layout/Content';

export function BodyRoot({ children }: PropsWithChildren) {
  return (
    <LayoutContent.Body>
      <SharedTab.Panels>{children}</SharedTab.Panels>
    </LayoutContent.Body>
  );
}
