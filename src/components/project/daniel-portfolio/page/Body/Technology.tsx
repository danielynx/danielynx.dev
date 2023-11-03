import { tv } from 'tailwind-variants';
import { GiCircuitry } from 'react-icons/gi';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs as SiNodeJs,
  SiNextdotjs as SiNextJs,
  SiNpm,
  SiTailwindcss as SiTailwind,
  SiZod,
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
          Icon={SiNextJs}
          title='Next JS'
        />
        <SharedBadge
          Icon={SiReact}
          title='React JS'
        />
        <SharedBadge
          Icon={SiTypescript}
          title='TypeScript'
        />
        <SharedBadge
          Icon={SiNodeJs}
          title='Node JS'
        />
        <SharedBadge
          Icon={SiTailwind}
          title='Tailwind and Variants'
        />
        <SharedBadge
          Icon={SiNpm}
          title='Npm'
        />
        <SharedBadge
          Icon={SiZod}
          title='Zod'
        />
      </div>
    </>
  );
}
