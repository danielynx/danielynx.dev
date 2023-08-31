'use client';

import { PropsWithChildren } from 'react';
import { Switch } from '@headlessui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { useProfileIntersection } from '@/hooks/home/layout/useProfileIntersection';
import { useColorScheme } from '@/hooks/home/layout/useColorScheme';

export function Wrapper({ children }: PropsWithChildren) {
  const { isProfileHidden } = useProfileIntersection();
  const { isColorSchemeDark, toggleColorScheme } = useColorScheme();

  return (
    <header className='flex flex-row w-full h-20 fixed lg:sticky top-0 justify-center lg:justify-end border-b bg-light-bg-hg dark:bg-dark-bg-hg border-light-border dark:border-dark-border z-10'>
      <div className='flex flex-row items-center justify-end w-11/12 sm:w-8/12 md:w-6/12 lg:w-11/12 xl:w-8/12 2xl:w-7/12 py-2 px-3 md:px-5 lg:px-4 xl:px-5 lg:mr-2'>
        <div
          className={
            'grow flex flex-row items-center justify-start' +
            (isProfileHidden ? ' block' : ' hidden')
          }
        >
          {children}
        </div>
        <Switch.Group>
          <div className='flex items-end '>
            <Switch
              title={
                isColorSchemeDark
                  ? 'Switch to Light Theme'
                  : 'Switch to Dark Theme'
              }
              checked={isColorSchemeDark}
              onChange={() => toggleColorScheme()}
              className={`${
                isColorSchemeDark ? 'bg-dark-hg' : 'bg-light-bg'
              } relative inline-flex h-9 w-16 items-center rounded-full transition-colors border dark:border-2 dark:border-white border-light-hg`}
            >
              {isColorSchemeDark ? (
                <MdDarkMode className='translate-x-8 inline-block transition-transform transform h-6 w-6 rounded-full bg-white text-dark-hg' />
              ) : (
                <MdLightMode className='translate-x-1 inline-block transition-transform transform h-6 w-6 rounded-full bg-light-bg text-light-hg' />
              )}
            </Switch>
          </div>
        </Switch.Group>
      </div>
    </header>
  );
}
