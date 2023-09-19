import { PropsWithChildren } from 'react';

import { SharedBody } from '@/components/shared/Body';

export function BodyRoot({ children }: PropsWithChildren) {
  return <SharedBody.Sidebar>{children}</SharedBody.Sidebar>;
}
