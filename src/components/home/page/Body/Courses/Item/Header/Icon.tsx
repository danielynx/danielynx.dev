import { IconType } from 'react-icons';

export interface HeaderIconProps {
  Icon: IconType;
  darkTextColor: string;
}

export function HeaderIcon({ Icon, darkTextColor }: HeaderIconProps) {
  return (
    <div className='px-3'>
      <Icon
        className={
          'h-10 w-10 sm:h-16 sm:w-16 md:h-10 md:w-10 2xl:h-16 2xl:w-16 text-white ' +
          darkTextColor
        }
      />
    </div>
  );
}
