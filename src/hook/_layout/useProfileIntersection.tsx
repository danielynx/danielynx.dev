'use client';

import { useContext, useMemo } from 'react';

import {
  type ProfileIntersectionContextType,
  ProfileIntersectionContext,
} from '@/context/_layout/ProfileIntersectionProvider';

interface UseProfileIntersectionType extends ProfileIntersectionContextType {
  isProfileHidden: boolean;
}

function useProfileIntersection(): UseProfileIntersectionType {
  const context = useContext(ProfileIntersectionContext);

  if (!context) {
    throw new Error(
      'useProfileIntersection must be used within a ProfileIntersectionProvider',
    );
  }

  const { profileIntersection } = context;

  const isProfileHidden = useMemo(
    () => profileIntersection < 0.1,
    [profileIntersection],
  );

  return { ...context, isProfileHidden };
}

export { useProfileIntersection, type UseProfileIntersectionType };
