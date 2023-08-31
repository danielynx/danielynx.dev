import { useContext } from 'react';

import {
  ActiveTabContextType,
  ActiveTabContext,
} from '@/contexts/home/page/ActiveTabProvider';

import { TabEnum } from '@/types/home/page/TabEnum';

interface UseActiveTabType extends ActiveTabContextType {
  isActiveTab: (tab: TabEnum) => boolean;
}

function useActiveTab(): UseActiveTabType {
  const context = useContext(ActiveTabContext);

  if (!context) {
    throw new Error('useActiveTab must be used within a ActiveTabProvider');
  }

  const isActiveTab = (tab: TabEnum) => tab === context.activeTab;

  return { ...context, isActiveTab };
}

export { useActiveTab, type UseActiveTabType };
