import { MdRocketLaunch } from 'react-icons/md';

import { CoursesItem } from './Item';

export function CoursesRocketseat() {
  const lightBgColor = 'bg-light-bg-courses-rocketseat';
  const darkTextColor = 'dark:text-dark-text-courses-rocketseat';

  return (
    <CoursesItem.Root lightBgColor={lightBgColor}>
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon
          Icon={MdRocketLaunch}
          darkTextColor={darkTextColor}
        />
        <CoursesItem.Header.Text darkTextColor={darkTextColor}>
          <span className='font-bold text-xl xs:text-2xl md:text-xl 2xl:text-3xl'>
            Rocketseat
          </span>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer
        darkTextColor={darkTextColor}
        link='#'
      />
    </CoursesItem.Root>
  );
}
