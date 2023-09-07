import { PropsWithChildren } from 'react';

import { SharedHeaderLeft } from '@/components/shared/HeaderLeft';

export function HeaderRoot({ children }: PropsWithChildren) {
  return <SharedHeaderLeft>{children}</SharedHeaderLeft>;
}
