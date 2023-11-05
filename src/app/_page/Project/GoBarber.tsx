import { BsScissors } from 'react-icons/bs';
import { tv } from 'tailwind-variants';

import { Card } from '@/component/Card';

const tvStyle = tv({
  slots: {
    text: 'font-bold',
  },
});

export function ProjectGoBarber() {
  const style = tvStyle();

  const lightBgColor = 'bg-light-bg-project-gobarber';
  const darkTextColor = 'dark:text-dark-text-project-gobarber';
  const link = 'project/go-barber';

  return (
    <Card.Root
      lightBgColor={lightBgColor}
      darkTextColor={darkTextColor}
      link={link}
    >
      <Card.Header.Root>
        <Card.Header.Icon Icon={BsScissors} />
        <Card.Header.Text>
          <div className={style.text()}>GoBarber</div>
        </Card.Header.Text>
      </Card.Header.Root>
      <Card.Footer />
    </Card.Root>
  );
}
