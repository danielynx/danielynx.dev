import { SiMongodb } from 'react-icons/si';

import { CoursesItem } from './Item';

export function CoursesMongoDb() {
  const lightBgColor = 'bg-light-bg-courses-mongodb';
  const darkTextColor = 'dark:text-dark-text-courses-mongodb';

  return (
    <CoursesItem.Root lightBgColor={lightBgColor}>
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon
          Icon={SiMongodb}
          darkTextColor={darkTextColor}
        />
        <CoursesItem.Header.Text darkTextColor={darkTextColor}>
          <div className='flex flex-col items-start text-xl xs:text-2xl md:text-xl 2xl:text-3xl'>
            <div className='font-bold'>MongoDB</div>
            <div className='font-normal'>University</div>
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer
        darkTextColor={darkTextColor}
        link='https://university.mongodb.com/course_completion/2afe5b18-37c2-4a62-8a32-e1e27256a5bf?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing'
      />
    </CoursesItem.Root>
  );
}
