import { tv } from 'tailwind-variants';
import type { IconType } from 'react-icons';

export interface BadgeProps {
  Icon: IconType;
  title: string;
}

const tvStyle = tv(
  {
    slots: {
      container: 'flex flex-row items-center rounded-md',
      icon: '',
      title: 'text-light-text dark:text-dark-text',
    },
    variants: {
      size: {
        initial: {
          container: 'px-1.5 py-1',
          icon: 'h-4 w-4',
          title: 'text-sm ml-1',
        },
        sm: {
          container: 'px-2 py-1.5',
          icon: 'h-5 w-5',
          title: 'text-base ml-2',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm'],
  },
);

export function Badge({ Icon, title }: BadgeProps) {
  const style = tvStyle({
    size: { sm: 'sm' },
  });

  return (
    <div className={style.container()}>
      <Icon
        className={style.icon()}
        title={title}
      />
      <h1 className={style.title()}>{title}</h1>
    </div>
  );
}
