import { IconType } from 'react-icons';

import Link from 'next/link';
import { tv } from 'tailwind-variants';

export interface ItemRootProps {
  Icon: IconType;
  iconColor: string;
  url: string;
  text: string;
}

const tvStyle = tv({
  slots: {
    container: 'flex flex-row items-center mt-2 text-sm',
    icon: 'mr-2 h-5 w-5',
  },
});

export function ItemRoot({ Icon, iconColor, url, text }: ItemRootProps) {
  const style = tvStyle();

  return (
    <div className={style.container()}>
      <Icon className={style.icon({ className: iconColor })} />
      <Link
        href={url}
        target={'_blank'}
      >
        {text}
      </Link>
    </div>
  );
}
