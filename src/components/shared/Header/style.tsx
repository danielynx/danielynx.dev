import { tv } from 'tailwind-variants';

export const headerTvStyle = tv({
  base: [
    'w-full h-20',
    'border-b border-light-border dark:border-dark-border',
    'bg-light-bg-hg dark:bg-dark-bg-hg',
  ],
});

export const headerStyle = headerTvStyle();
