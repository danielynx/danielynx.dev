import Link from 'next/link';

export interface ItemFooterProps {
  link: string;
  darkTextColor: string;
}

export function ItemFooter({ link, darkTextColor }: ItemFooterProps) {
  return (
    <Link
      target={'_blank'}
      href={link}
      className={
        'flex flex-row justify-center items-center w-full h-10 hover:bg-orange-400 dark:hover:bg-violet-500 text-white dark:hover:text-white text-sm sm:text-base md:text-sm 2xl:text-base font-light hover:font-semibold border-t ' +
        darkTextColor
      }
    >
      <span>Show Details</span>
    </Link>
  );
}
