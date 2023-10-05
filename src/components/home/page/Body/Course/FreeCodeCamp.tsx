import { SiFreecodecamp } from 'react-icons/si';
import { tv } from 'tailwind-variants';

import { SharedCard } from '@/components/shared/Card';
import { textStyle } from './style';

const tvStyle = tv({
  slots: {
    text: 'font-bold',
  },
});

export function CourseFreeCodeCamp() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-brand-freecodecamp';
  const darkTextColor = 'dark:text-dark-text-brand-freecodecamp';
  const link = 'https://www.freecodecamp.org/danielynx';

  return (
    <SharedCard.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <SharedCard.Header.Root>
        <SharedCard.Header.Icon Icon={SiFreecodecamp} />
        <SharedCard.Header.Text>
          <div className={style.text({ className: textStyle })}>
            freeCodeCamp
          </div>
        </SharedCard.Header.Text>
      </SharedCard.Header.Root>
      <SharedCard.Footer />
    </SharedCard.Root>
  );
}
