import { SiSymfony } from 'react-icons/si';
import { tv } from 'tailwind-variants';

import { Card } from '@/component/Card';

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
    <Card.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
      target='_blank'
    >
      <Card.Header.Root>
        <Card.Header.Icon Icon={SiSymfony} />
        <Card.Header.Text>
          <div className={style.text()}>
            <span className={style.symfony()}>Symfony</span>
            <span className={style.casts()}>Casts</span>
          </div>
        </Card.Header.Text>
      </Card.Header.Root>
      <Card.Footer />
    </Card.Root>
  );
}
