import { IconType } from 'react-icons';
import { tv } from 'tailwind-variants';

export interface HeaderIconProps {
  Icon: IconType;
}

const tvStyle = tv(
  {
    slots: {
      container: 'px-3',
      icon: '',
    },
    variants: {
      size: {
        initial: {
          icon: 'h-10 w-10',
        },
        sm: {
          icon: 'h-16 w-16',
        },
        md: {
          icon: 'h-10 w-10',
        },
        '2xl': {
          icon: 'h-16 w-16',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['sm', 'md', '2xl'],
  },
);

export function HeaderIcon({ Icon }: HeaderIconProps) {
  const style = tvStyle({
    size: { sm: 'sm', md: 'md', '2xl': '2xl' },
  });

  return (
    <div className={style.container()}>
      <Icon className={style.icon()} />
    </div>
  );
}