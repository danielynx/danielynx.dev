'use client';

import { Switch } from '@headlessui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { useColorScheme } from '@/hooks/home/layout/useColorScheme';

export function HeaderColorSchema() {
  const { isColorSchemeDark, toggleColorScheme } = useColorScheme();

  return (
    <Switch.Group>
      <div className='flex items-end'>
        <Switch
          title={
            isColorSchemeDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'
          }
          checked={isColorSchemeDark}
          onChange={() => toggleColorScheme()}
          className={`${
            isColorSchemeDark ? 'bg-dark-hg' : 'bg-light-bg'
          } relative inline-flex h-7 w-14 items-center rounded-full transition-colors border dark:border-2 dark:border-white border-light-hg`}
        >
          {isColorSchemeDark ? (
            <MdDarkMode className='translate-x-7 inline-block transition-transform transform h-5 w-5 rounded-full bg-white text-dark-hg' />
          ) : (
            <MdLightMode className='translate-x-1 inline-block transition-transform transform h-5 w-5 rounded-full bg-light-bg text-light-hg' />
          )}
        </Switch>
      </div>
    </Switch.Group>
  );
}
