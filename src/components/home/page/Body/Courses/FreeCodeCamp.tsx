import { SiFreecodecamp } from 'react-icons/si';
import { tv } from 'tailwind-variants';

import { textStyle } from './style';
import { CoursesItem } from './Item';

const tvStyle = tv({
  slots: {
    text: 'font-bold',
  },
});

export function CoursesFreeCodeCamp() {
  const style = tvStyle();

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
          <div className={style.text({ className: textStyle })}>
            freeCodeCamp
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer />
    </CoursesItem.Root>
  );
}
