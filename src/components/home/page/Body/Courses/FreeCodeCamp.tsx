import { SiFreecodecamp } from 'react-icons/si';

import { CoursesItem } from './Item';

export function CoursesFreeCodeCamp() {
  const lightBgColor = 'bg-light-bg-brand-freecodecamp';
  const darkTextColor = 'dark:text-dark-text-brand-freecodecamp';
  const link = 'https://www.freecodecamp.org/danielynx';

  return (
    <CoursesItem.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon Icon={SiFreecodecamp} />
        <CoursesItem.Header.Text>
          <div className='font-bold text-xl xs:text-2xl md:text-xl 2xl:text-3xl'>
            freeCodeCamp
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer />
    </CoursesItem.Root>
  );
}
