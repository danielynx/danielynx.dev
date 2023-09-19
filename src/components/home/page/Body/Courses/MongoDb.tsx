import { SiMongodb } from 'react-icons/si';
import { tv } from 'tailwind-variants';

import { textStyle } from './style';
import { CoursesItem } from './Item';

const tvStyle = tv({
  slots: {
    text: 'flex flex-col items-start',
    mongoDb: 'font-bold',
    university: 'font-normal',
  },
});

export function CoursesMongoDb() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-brand-mongodb';
  const darkTextColor = 'dark:text-dark-text-brand-mongodb';
  const link =
    'https://university.mongodb.com/course_completion/2afe5b18-37c2-4a62-8a32-e1e27256a5bf?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing';

  return (
    <CoursesItem.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <CoursesItem.Header.Root>
        <CoursesItem.Header.Icon Icon={SiMongodb} />
        <CoursesItem.Header.Text>
          <div className={style.text({ className: textStyle })}>
            <span className={style.mongoDb()}>MongoDB</span>
            <span className={style.university()}>University</span>
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer />
    </CoursesItem.Root>
  );
}
