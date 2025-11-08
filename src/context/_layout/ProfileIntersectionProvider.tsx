'use client';

import {
  createContext,
  type PropsWithChildren,
  useState,
  useMemo,
  type SetStateAction,
  type Dispatch,
} from 'react';

interface ProfileIntersectionContextType {
  profileIntersection: number;
  setProfileIntersection: Dispatch<SetStateAction<number>>;
}

const ProfileIntersectionContext = createContext<
  ProfileIntersectionContextType | undefined
>(undefined);

function ProfileIntersectionProvider({ children }: PropsWithChildren) {
  const [profileIntersection, setProfileIntersection] = useState<number>(1);

  const value = useMemo<ProfileIntersectionContextType>(
    () => ({ profileIntersection, setProfileIntersection }),
    [profileIntersection],
  );

  return (
    <ProfileIntersectionContext.Provider value={value}>
      {children}
    </ProfileIntersectionContext.Provider>
  );
}

export {
  ProfileIntersectionContext,
  ProfileIntersectionProvider,
  type ProfileIntersectionContextType,
};
