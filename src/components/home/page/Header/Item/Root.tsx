import { IconType } from 'react-icons';

import { TabEnum } from '@/types/home/page/TabEnum';
import { useActiveTab } from '@/hooks/home/page/useActiveTab';

export interface ItemRootProps {
  Icon: IconType;
  text: string;
  tab: TabEnum;
}

export function ItemRoot({ Icon, text, tab }: ItemRootProps) {
  const { isActiveTab, setActiveTab } = useActiveTab();

  return (
    <div
      className={
        isActiveTab(tab)
          ? 'border-b-3 border-light-hg dark:border-dark-hg'
          : ' '
      }
    >
      <a
        onClick={() => setActiveTab(tab)}
        className={
          'flex flex-row items-center hover:bg-light-bg-700 hover:dark:bg-dark-bg-hg-600 py-1 xs:py-2 px-2 xs:px-3 mb-1 mr-3 rounded-lg ' +
          (isActiveTab(tab)
            ? 'text-light-text dark:text-dark-text'
            : 'text-light-text-100 hover:text-light-text-300 dark:text-dark-text-700 dark:hover:text-dark-text-600')
        }
      >
        <Icon className='h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7' />
        <span className='pl-1 sm:pl-2 text-sm sm:text-base'>{text}</span>
      </a>
    </div>
  );
}
