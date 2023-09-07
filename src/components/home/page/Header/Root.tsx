import { PropsWithChildren } from 'react';

import { SharedHeaderRight } from '@/components/shared/HeaderRight';

export function HeaderRoot({ children }: PropsWithChildren) {
  return <SharedHeaderRight>{children}</SharedHeaderRight>;
}
