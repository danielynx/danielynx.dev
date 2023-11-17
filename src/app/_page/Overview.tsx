import { MdToday } from 'react-icons/md';
import { GiClockwork } from 'react-icons/gi';

import { Tab } from '@/component/Tab';
import { Timeline } from '@/component/Timeline';
import { SessionHeader } from '@/component/SessionHeader';

export function AppOverview() {
  return (
    <Tab.Panel>
      <div className='leading-loose'>
        <p>
          Hi there, I{`'`}m{' '}
          <span className='text-purple-700 dark:text-orange-300 text-3xl font-extrabold'>
            Daniel
          </span>
        </p>
        <p>👨‍🎓 Computing Scientist</p>
        <p>
          💻 Developing with PHP (Symfony Framework) and Javascript for many
          years
        </p>
        <p>📜 Currently studying NodeJS, React JS and React Native</p>
        <p>
          🔥 I{`'`}m also a Blockchain and Decentralized System enthusiast,
          technologies that will be my next study aim
        </p>
      </div>

      <SessionHeader
        Icon={GiClockwork}
        title='Experiences'
        className='pb-6'
      />

      <Timeline.Root>
        <Timeline.Time date='Today' />
        <Timeline.Content
          title='PHP Developer'
          subtitle='Mato Grosso Parliament'
        >
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2014' />
        <Timeline.Content
          title='PHP Developer'
          subtitle='Mato Grosso Government'
        >
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2013' />
        <Timeline.Content
          title='Java Developer'
          subtitle='Ábaco Company'
        >
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2012' />
        <Timeline.Content
          title='Java Developer'
          subtitle='Tractors Parts Company'
        >
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2009' />
        <Timeline.Content
          title='Computing Scientist'
          subtitle='Mato Grosso State University'
        >
          <p>
            My get go in IT area was in 2005 when I started my Computing
            Scientist graduation.
          </p>
          <p>
            This in person course taught me the basis and after a while I
            noticed that I made the right choice, because it allow me exercise
            my logics and transform my ideas into digital products.
          </p>
        </Timeline.Content>
      </Timeline.Root>
    </Tab.Panel>
  );
}
