import { MdRocketLaunch } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { SharedCard } from '@/components/shared/Card';

const tvStyle = tv({
  slots: {
    text: 'font-bold',
  },
});

export function CourseRocketseat() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-brand-rocketseat';
  const darkTextColor = 'dark:text-dark-text-brand-rocketseat';
  const link = '#';

  return (
    <SharedCard.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <SharedCard.Header.Root>
        <SharedCard.Header.Icon Icon={MdRocketLaunch} />
        <SharedCard.Header.Text>
          <div className={style.text()}>Rocketseat</div>
        </SharedCard.Header.Text>
      </SharedCard.Header.Root>
      <SharedCard.Footer />
    </SharedCard.Root>
  );
}
