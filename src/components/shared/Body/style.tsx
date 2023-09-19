import { tv } from 'tailwind-variants';

export const bodyTvStyle = tv({
  base: ['w-full grow', 'bg-light-bg dark:bg-dark-bg'],
});

export const bodyStyle = bodyTvStyle();
