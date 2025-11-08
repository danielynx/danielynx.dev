import type { IconType } from 'react-icons';
import { tv } from 'tailwind-variants';

export interface HeaderIconProps {
  Icon: IconType;
}

const tvStyle = tv(
  {
    slots: {
      container: '',
      icon: '',
    },
    variants: {
      size: {
        initial: {
          container: 'px-1.5',
          icon: 'h-8 w-8',
        },
        xs: {
          container: 'px-2',
          icon: 'h-10 w-10',
        },
        sm: {
          icon: 'h-12 w-12',
        },
        md: {
          container: 'px-3',
          icon: 'h-14 w-14',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['xs', 'sm', 'md'],
  },
);

export function HeaderIcon({ Icon }: HeaderIconProps) {
  const style = tvStyle({
    size: { xs: 'xs', sm: 'sm', md: 'md' },
  });

  return (
    <div className={style.container()}>
      <Icon className={style.icon()} />
    </div>
  );
}
