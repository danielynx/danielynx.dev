import { MdRocketLaunch } from 'react-icons/md';

import { CoursesItem } from './Item';

export function CoursesRocketseat() {
  const lightBgColor = 'bg-light-bg-brand-rocketseat';
  const darkTextColor = 'dark:text-dark-text-brand-rocketseat';
  const link = '#';

  return (
    <CoursesItem.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon Icon={MdRocketLaunch} />
        <CoursesItem.Header.Text>
          <span className='font-bold text-xl xs:text-2xl md:text-xl 2xl:text-3xl'>
            Rocketseat
          </span>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer />
    </CoursesItem.Root>
  );
}
