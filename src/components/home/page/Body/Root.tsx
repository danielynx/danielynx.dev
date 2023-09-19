import { PropsWithChildren } from 'react';
import { Tab } from '@headlessui/react';

import { SharedContent } from '@/components/shared/Content';

export function BodyRoot({ children }: PropsWithChildren) {
  return (
    <SharedContent.Body>
      <Tab.Panels className='grow'>{children}</Tab.Panels>
    </SharedContent.Body>
  );
}
