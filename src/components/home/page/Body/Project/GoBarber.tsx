import { BsScissors } from 'react-icons/bs';
import { tv } from 'tailwind-variants';

import { SharedCard } from '@/components/shared/Card';
import { textStyle } from './style';

const tvStyle = tv({
  slots: {
    text: 'font-bold',
  },
});

export function ProjectGoBarber() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-project-gobarber';
  const darkTextColor = 'dark:text-dark-text-project-gobarber';
  const link = '#';

  return (
    <SharedCard.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <SharedCard.Header.Root>
        <SharedCard.Header.Icon Icon={BsScissors} />
        <SharedCard.Header.Text>
          <div className={style.text({ className: textStyle })}>GoBarber</div>
        </SharedCard.Header.Text>
      </SharedCard.Header.Root>
      <SharedCard.Footer />
    </SharedCard.Root>
  );
}
