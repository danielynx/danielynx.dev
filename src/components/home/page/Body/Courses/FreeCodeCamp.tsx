import { SiFreecodecamp } from 'react-icons/si';

import { CoursesItem } from './Item';

export function CoursesFreeCodeCamp() {
  const lightBgColor = 'bg-light-bg-brand-freecodecamp';
  const darkTextColor = 'dark:text-dark-text-brand-freecodecamp';

  return (
    <CoursesItem.Root lightBgColor={lightBgColor}>
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon
          Icon={SiFreecodecamp}
          darkTextColor={darkTextColor}
        />
        <CoursesItem.Header.Text darkTextColor={darkTextColor}>
          <div className='font-bold text-xl xs:text-2xl md:text-xl 2xl:text-3xl'>
            freeCodeCamp
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer
        darkTextColor={darkTextColor}
        link='https://www.freecodecamp.org/danielynx'
      />
    </CoursesItem.Root>
  );
}
