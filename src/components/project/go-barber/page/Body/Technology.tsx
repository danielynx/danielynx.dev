import { tv } from 'tailwind-variants';
import { GiCircuitry } from 'react-icons/gi';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs as SiNodeJs,
  SiExpress,
  SiYarn,
  SiJest,
  SiStyledcomponents,
  SiGithubactions,
} from 'react-icons/si';

import { SharedSessionHeader } from '@/components/shared/SessionHeader';
import { SharedBadge } from '@/components/shared/Badge';

const tvStyle = tv(
  {
    slots: {
      container: 'grid',
    },
    variants: {
      size: {
        initial: {
          container: 'grid-cols-2 gap-2',
        },
        md: {
          container: 'grid-cols-4 gap-4',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['md'],
  },
);

export function BodyTechnology() {
  const style = tvStyle({
    size: { md: 'md' },
  });

  return (
    <>
      <SharedSessionHeader
        Icon={GiCircuitry}
        title='Technologies'
      />
      <div className={style.container()}>
        <SharedBadge
          Icon={SiNodeJs}
          title='NodeJS'
        />
        <SharedBadge
          Icon={SiReact}
          title='React JS and Native'
        />
        <SharedBadge
          Icon={SiExpress}
          title='Express'
        />
        <SharedBadge
          Icon={SiTypescript}
          title='TypeScript'
        />

        <SharedBadge
          Icon={SiYarn}
          title='Yarn'
        />
        <SharedBadge
          Icon={SiJest}
          title='Jest'
        />
        <SharedBadge
          Icon={SiStyledcomponents}
          title='Styled Components'
        />
        <SharedBadge
          Icon={SiGithubactions}
          title='GitHub Actions'
        />
      </div>
    </>
  );
}
