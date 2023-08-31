import { SiSymfony } from 'react-icons/si';

import { CoursesItem } from './Item';

export function CoursesSymfony() {
  const lightBgColor = 'bg-light-bg-courses-symfony';
  const darkTextColor = 'dark:text-dark-text-courses-symfony';

  return (
    <CoursesItem.Root lightBgColor={lightBgColor}>
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon
          Icon={SiSymfony}
          darkTextColor={darkTextColor}
        />
        <CoursesItem.Header.Text darkTextColor={darkTextColor}>
          <div className='text-xl xs:text-2xl md:text-xl 2xl:text-3xl'>
            <span className='font-bold'>Symfony</span>
            <span className='font-normal'>Casts</span>
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer
        darkTextColor={darkTextColor}
        link='https://symfonycasts.com/u/danielynx'
      />
    </CoursesItem.Root>
  );
}
