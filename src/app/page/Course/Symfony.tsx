import { SiSymfony } from 'react-icons/si';
import { tv } from 'tailwind-variants';

import { SharedCard } from '@/components/shared/Card';

const tvStyle = tv({
  slots: {
    text: '',
    symfony: 'font-bold',
    casts: 'font-normal',
  },
});

export function CourseSymfony() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-brand-symfony';
  const darkTextColor = 'dark:text-dark-text-brand-symfony';
  const link = 'https://symfonycasts.com/u/danielynx';

  return (
    <SharedCard.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
      target='_blank'
    >
      <SharedCard.Header.Root>
        <SharedCard.Header.Icon Icon={SiSymfony} />
        <SharedCard.Header.Text>
          <div className={style.text()}>
            <span className={style.symfony()}>Symfony</span>
            <span className={style.casts()}>Casts</span>
          </div>
        </SharedCard.Header.Text>
      </SharedCard.Header.Root>
      <SharedCard.Footer />
    </SharedCard.Root>
  );
}
