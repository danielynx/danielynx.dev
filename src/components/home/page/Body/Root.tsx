import { PropsWithChildren } from 'react';

import { SharedTab } from '@/components/shared/Tab';
import { SharedContent } from '@/components/shared/Content';

export function BodyRoot({ children }: PropsWithChildren) {
  return (
    <SharedContent.Body>
      <SharedTab.Panels>{children}</SharedTab.Panels>
    </SharedContent.Body>
  );
}
