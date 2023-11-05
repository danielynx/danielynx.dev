'use client';

import { Switch } from '@headlessui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { useColorScheme } from '@/hooks/home/layout/useColorScheme';

const tvStyle = tv({
  slots: {
    switch: [
      'bg-light-bg-ct dark:bg-dark-bg-ct',
      'hover:ring-3 ring-offset-2',
      'ring-light-bg-ct/50 dark:ring-dark-bg-ct/50',
      'ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg',
      'relative inline-flex h-7 w-14 items-center rounded-full transition-colors',
    ],
    darkIcon: ['translate-x-7', 'bg-dark-bg-ct', 'text-dark-text-ct'],
    lightIcon: ['translate-x-1', 'bg-light-bg-ct', 'text-light-text-ct'],
  },
  compoundSlots: [
    {
      slots: ['darkIcon', 'lightIcon'],
      class: [
        'inline-block',
        'transition-transform',
        'transform',
        'h-5 ',
        'w-5',
        'rounded-full',
      ],
    },
  ],
});

export function AppColorSchema() {
  const { isColorSchemeDark, toggleColorScheme } = useColorScheme();
  const style = tvStyle();

  return (
    <div className='flex items-end'>
      <Switch
        title={
          isColorSchemeDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'
        }
        checked={isColorSchemeDark}
        onChange={() => toggleColorScheme()}
        className={style.switch()}
      >
        {isColorSchemeDark ? (
          <MdDarkMode className={style.darkIcon()} />
        ) : (
          <MdLightMode className={style.lightIcon()} />
        )}
      </Switch>
    </div>
  );
}
