import { PropsWithChildren } from 'react';
import { Tab } from '@headlessui/react';

import { SharedBody } from '@/components/shared/Body';

export function BodyRoot({ children }: PropsWithChildren) {
  return (
    <SharedBody.Content>
      <Tab.Panels className='grow'>{children}</Tab.Panels>
    </SharedBody.Content>
  );
}
