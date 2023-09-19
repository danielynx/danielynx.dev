import { SiSymfony } from 'react-icons/si';
import { tv } from 'tailwind-variants';

import { textStyle } from './style';
import { CoursesItem } from './Item';

const tvStyle = tv({
  slots: {
    text: '',
    symfony: 'font-bold',
    casts: 'font-normal',
  },
});

export function CoursesSymfony() {
  const style = tvStyle();

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
          <div className={style.text({ className: textStyle })}>
            <span className={style.symfony()}>Symfony</span>
            <span className={style.casts()}>Casts</span>
          </div>
        </CoursesItem.Header.Text>
      </CoursesItem.Header.Root>
      <CoursesItem.Footer />
    </CoursesItem.Root>
  );
}
