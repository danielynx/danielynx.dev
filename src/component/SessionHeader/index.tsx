import { tv } from 'tailwind-variants';
import { IconType } from 'react-icons';

export interface SessionHeaderProps {
  Icon: IconType;
  title: string;
}

const tvStyle = tv(
  {
    slots: {
      container: 'flex flex-row justify-start items-center',
      icon: '',
      title: 'font-extrabold',
    },
    variants: {
      size: {
        initial: {
          container: 'mt-8 mb-3',
          icon: 'h-5 w-5',
          title: 'text-xl ml-2',
        },
        sm: {
          container: 'mt-10 mb-4',
          icon: 'h-7 w-7',
          title: 'text-2xl ml-3',
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

export function SessionHeader({ Icon, title }: SessionHeaderProps) {
  const style = tvStyle({
    size: { sm: 'sm' },
  });

  return (
    <div className={style.container()}>
      <Icon className={style.icon()} />
      <h1 className={style.title()}>{title}</h1>
    </div>
  );
}
