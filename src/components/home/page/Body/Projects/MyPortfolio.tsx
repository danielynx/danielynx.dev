import { ImProfile } from 'react-icons/im';
import { tv } from 'tailwind-variants';

import { SharedCard } from '@/components/shared/Card';
import { textStyle } from './style';

const tvStyle = tv({
  slots: {
    text: 'flex flex-col items-start',
    largerSpan: 'font-bold',
    smalerSpan: 'font-normal text-base',
  },
});

export function ProjectsMyPortfolio() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-project-myportfolio';
  const darkTextColor = 'dark:text-dark-text-project-myportfolio';
  const link = '#';

  return (
    <SharedCard.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <SharedCard.Header.Root>
        <SharedCard.Header.Icon Icon={ImProfile} />
        <SharedCard.Header.Text>
          <div className={style.text({ className: textStyle })}>
            <span className={style.largerSpan()}>Daniel's Portfolio</span>
            <span className={style.smalerSpan()}>(This website)</span>
          </div>
        </SharedCard.Header.Text>
      </SharedCard.Header.Root>
      <SharedCard.Footer />
    </SharedCard.Root>
  );
}
