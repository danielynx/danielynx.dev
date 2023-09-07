'use client';

import { PropsWithChildren } from 'react';

import { useProfileIntersection } from '@/hooks/home/layout/useProfileIntersection';

export function ProfileRoot({ children }: PropsWithChildren) {
  const { isProfileHidden } = useProfileIntersection();

  return (
    <div
      className={
        'grow flex flex-row items-center justify-start' +
        (isProfileHidden ? ' block' : ' hidden')
      }
    >
      {children}
    </div>
  );
}
