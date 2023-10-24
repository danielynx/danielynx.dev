import { tv } from 'tailwind-variants';
import { IconType } from 'react-icons';
import { MdClose } from 'react-icons/md';

export interface TitleBarOpenTabProps {
  Favicon: IconType;
  name: string;
}

const tvStyle = tv(
  {
    slots: {
      container: [
        'flex flex-row justify-start items-center',
        'bg-gray-700',
        'rounded-md',
        'py-2 px-2',
      ],
      circle: [
        'flex flex-row justify-center items-center',
        'bg-teal-600',
        'rounded-full',
      ],
      icon: '',
      name: 'font-bold pl-2 pr-8',
    },
    variants: {
      size: {
        initial: {
          circle: 'w-4 h-4',
          icon: 'w-2 h-2',
          name: 'text-xs',
        },
        xs: {
          icon: 'w-3 h-3',
        },
        sm: {
          name: 'text-sm',
          circle: 'w-5 h-5',
          icon: 'w-4 h-4',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['xs', 'sm'],
  },
);

export function TitleBarOpenTab({ Favicon, name }: TitleBarOpenTabProps) {
  const style = tvStyle({
    size: { xs: 'xs', sm: 'sm' },
  });

  return (
    <div className={style.container()}>
      <div className={style.circle()}>
        <Favicon className={style.icon()} />
      </div>
      <div className={style.name()}>{name}</div>
      <MdClose className={style.icon()} />
    </div>
  );
}
