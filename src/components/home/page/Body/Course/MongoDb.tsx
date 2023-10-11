import { SiMongodb } from 'react-icons/si';
import { tv } from 'tailwind-variants';

import { SharedCard } from '@/components/shared/Card';
import { textStyle } from './style';

const tvStyle = tv({
  slots: {
    text: 'flex flex-col items-start',
    mongoDb: 'font-bold',
    university: 'font-normal',
  },
});

export function CourseMongoDb() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-brand-mongodb';
  const darkTextColor = 'dark:text-dark-text-brand-mongodb';
  const link =
    'https://university.mongodb.com/course_completion/2afe5b18-37c2-4a62-8a32-e1e27256a5bf?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing';

  return (
    <SharedCard.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
      target='_blank'
    >
      <SharedCard.Header.Root>
        <SharedCard.Header.Icon Icon={SiMongodb} />
        <SharedCard.Header.Text>
          <div className={style.text({ className: textStyle })}>
            <span className={style.mongoDb()}>MongoDB</span>
            <span className={style.university()}>University</span>
          </div>
        </SharedCard.Header.Text>
      </SharedCard.Header.Root>
      <SharedCard.Footer />
    </SharedCard.Root>
  );
}
