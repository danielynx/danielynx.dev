'use client';

import React, {
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
  SetStateAction,
  Dispatch,
} from 'react';

import { TabEnum } from '@/types/home/page/TabEnum';

interface ActiveTabContextType {
  activeTab: TabEnum;
  setActiveTab: Dispatch<SetStateAction<TabEnum>>;
}

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(
  undefined,
);

interface Props {
  initialState: TabEnum;
}

function ActiveTabProvider({
  children,
  initialState,
}: PropsWithChildren<Props>) {
  const [activeTab, setActiveTab] = useState<TabEnum>(initialState);

  const value = useMemo<ActiveTabContextType>(
    () => ({ activeTab, setActiveTab }),
    [activeTab, setActiveTab],
  );

  return (
    <ActiveTabContext.Provider value={value}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export { ActiveTabContext, ActiveTabProvider, type ActiveTabContextType };
