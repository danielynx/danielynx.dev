import { GiClockwork } from 'react-icons/gi';
import { tv } from 'tailwind-variants';

import { Tab } from '@/component/Tab';
import { Timeline } from '@/component/Timeline';
import { SessionHeader } from '@/component/SessionHeader';

const tvStyle = tv({
  slots: {
    paragraph: 'tracking-wide mb-2',
  },
});

export function AppOverview() {
  const style = tvStyle();

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
          <p className={style.paragraph()}>
            I{"'"}m a public servant working as a Software Developer. Since 2014
            I have improved a lot in my skills and nowadays I work as a Software
            Architect and Tech Lead.
          </p>
          <p className={style.paragraph()}>
            My team is responsible for maintaining the house website and also
            many systems that support all sectors of the house, mainly the
            parliament{"'"}s activities.
          </p>
          <p className={style.paragraph()}>
            The majority of the system that we maintain are web applications,
            but we also have an API and a Storage application. All of them are
            built in PHP language with Symfony framework and MariaDB database.
            In those applications that have a Web layer, we also use the
            JavaScript language.
          </p>
          <p className={style.paragraph()}>
            Over the past few years, we started to use Docker to standardize our
            development environment, but also to allow the PHP upgrade of our
            newest applications.
          </p>
          <p className={style.paragraph()}>
            We use GitLab as code repository and also to run pipelines that
            deploy our applications in a Docker Swarm cluster for each
            environment.
          </p>
          <p className={style.paragraph()}>
            The team uses Scrum framework to structure and manage its work
            process.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2014' />
        <Timeline.Content
          title='PHP Developer'
          subtitle='Mato Grosso Government'
        >
          <p className={style.paragraph()}>
            As a Government Employee I worked in the Mato Grosso State{"'"}s
            Civil House. There I was in charge of build a system to support
            their internal activities.
          </p>
          <p className={style.paragraph()}>
            It was a web application built using PHP language and MySQL
            database.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2013' />
        <Timeline.Content
          title='Java Developer'
          subtitle='Ábaco Company'
        >
          <p className={style.paragraph()}>
            Ábaco is a Software House company where I worked building a queuing
            management system, ordered by the Mato Grosso State{"'"}s Department
            of Motor Vehicles. It was a web application built using Java
            language and Oracle database.
          </p>
          <p className={style.paragraph()}>
            Then I was allocated in the Mato Grosso State{"'"}s Court of
            Auditors in an outsourcing contract. There I worked as a kind of
            DevOps, being responsible for managing the publication of nine
            application in the quality assurance and stage environments.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2012' />
        <Timeline.Content
          title='Java Developer'
          subtitle='Tractors Parts Company'
        >
          <p className={style.paragraph()}>
            It was my first job as Software Developer, working in a team in
            charge of maintain and improve an Enterprise Resource Planning
            system that support sales companies{"'"} activities.
          </p>
          <p className={style.paragraph()}>
            It was a desktop application built using Java language and Oracle
            database.
          </p>
          <p className={style.paragraph()}>
            My team had been using Scrum framework to structure and manage its
            work process.
          </p>
        </Timeline.Content>
      </Timeline.Root>

      <Timeline.Root>
        <Timeline.Time date='2009' />
        <Timeline.Content
          title='Computing Scientist'
          subtitle='Mato Grosso State University'
        >
          <p className={style.paragraph()}>
            My get go in IT area was in 2005 when I started my Computing
            Scientist graduation.
          </p>
          <p className={style.paragraph()}>
            This in person course taught me the basis and after a while I
            noticed that I made the right choice, because it allow me exercise
            my logics and transform my ideas into digital products.
          </p>
        </Timeline.Content>
      </Timeline.Root>
    </Tab.Panel>
  );
}
