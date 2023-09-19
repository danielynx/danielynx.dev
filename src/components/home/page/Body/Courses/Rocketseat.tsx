import { MdRocketLaunch } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { textStyle } from './style';
import { CoursesItem } from './Item';

const tvStyle = tv({
  slots: {
    text: 'font-bold',
  },
});

export function CoursesRocketseat() {
  const style = tvStyle();

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
          <div className={style.text({ className: textStyle })}>Rocketseat</div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer />
    </CoursesItem.Root>
  );
}
