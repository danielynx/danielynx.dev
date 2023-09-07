import { IconType } from 'react-icons';

import Link from 'next/link';

export interface ItemRootProps {
  Icon: IconType;
  iconColor: string;
  url: string;
  text: string;
}

export function ItemRoot({ Icon, iconColor, url, text }: ItemRootProps) {
  return (
    <div className='flex flex-row items-center mt-2 text-sm'>
      <Icon className={'mr-2 h-5 w-5 ' + iconColor} />
      <Link
        href={url}
        target={'_blank'}
      >
        {text}
      </Link>
    </div>
  );
}
