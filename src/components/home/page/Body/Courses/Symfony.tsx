import { SiSymfony } from 'react-icons/si';

import { CoursesItem } from './Item';

export function CoursesSymfony() {
  const lightBgColor = 'bg-light-bg-brand-symfony';
  const darkTextColor = 'dark:text-dark-text-brand-symfony';
  const link = 'https://symfonycasts.com/u/danielynx';

  return (
    <CoursesItem.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon Icon={SiSymfony} />
        <CoursesItem.Header.Text>
          <div className='text-xl xs:text-2xl md:text-xl 2xl:text-3xl'>
            <span className='font-bold'>Symfony</span>
            <span className='font-normal'>Casts</span>
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer />
    </CoursesItem.Root>
  );
}
