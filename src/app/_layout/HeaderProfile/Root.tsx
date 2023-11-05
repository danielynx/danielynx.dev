'use client';

import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

import { useProfileIntersection } from '@/hooks/home/layout/useProfileIntersection';

const tvStyle = tv({
  base: 'grow flex flex-row items-center justify-start',
  variants: {
    isProfileHidden: {
      false: 'hidden',
    },
  },
});

export function ProfileRoot({ children }: PropsWithChildren) {
  const { isProfileHidden } = useProfileIntersection();

  const style = tvStyle({ isProfileHidden });

  return <div className={style}>{children}</div>;
}
