import { tv } from 'tailwind-variants';
import { AiOutlineDatabase } from 'react-icons/ai';
import { CiMobile3 } from 'react-icons/ci';
import { PiDesktopTowerLight } from 'react-icons/pi';
import { SiGithub } from 'react-icons/si';

import { SharedCard } from '@/components/shared/Card';
import { SharedSessionHeader } from '@/components/shared/SessionHeader';

const tvStyle = tv(
  {
    slots: {
      container: 'grid',
    },
    variants: {
      size: {
        initial: {
          container: 'grid-cols-1 gap-3',
        },
        md: {
          container: 'grid-cols-2 gap-4',
        },
        xl: {
          container: 'grid-cols-3',
        },
        '2xl': {
          container: 'gap-5',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['md', 'xl', '2xl'],
  },
);

export function BodyRepository() {
  const style = tvStyle({
    size: { md: 'md', xl: 'xl', '2xl': '2xl' },
  });

  return (
    <>
      <SharedSessionHeader
        Icon={SiGithub}
        title='GitHub Repositories'
      />
      <div className={style.container()}>
        <SharedCard.Root
          link='https://github.com/danielynx/rocketseat-gobarber-api'
          target='_blank'
        >
          <SharedCard.Header.Root>
            <SharedCard.Header.Icon Icon={AiOutlineDatabase} />
            <SharedCard.Header.Text>Headless</SharedCard.Header.Text>
          </SharedCard.Header.Root>
          <SharedCard.Footer />
        </SharedCard.Root>
        <SharedCard.Root
          lightBgColor='bg-light-bg-ct'
          link='https://github.com/danielynx/rocketseat-gobarber-web'
          target='_blank'
        >
          <SharedCard.Header.Root>
            <SharedCard.Header.Icon Icon={PiDesktopTowerLight} />
            <SharedCard.Header.Text>Web</SharedCard.Header.Text>
          </SharedCard.Header.Root>
          <SharedCard.Footer />
        </SharedCard.Root>
        <SharedCard.Root
          link='https://github.com/danielynx/rocketseat-gobarber-mobile'
          target='_blank'
        >
          <SharedCard.Header.Root>
            <SharedCard.Header.Icon Icon={CiMobile3} />
            <SharedCard.Header.Text>Mobile</SharedCard.Header.Text>
          </SharedCard.Header.Root>
          <SharedCard.Footer />
        </SharedCard.Root>
      </div>
    </>
  );
}
