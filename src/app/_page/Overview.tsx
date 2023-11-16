import { Tab } from '@/component/Tab';
import { MdToday } from 'react-icons/md';
import { GiClockwork } from 'react-icons/gi';

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
      <div className='flex flex-row w-full mb-6'>
        <div className='flex flex-col items-end justify-start w-30'>
          <div className='flex flex-row items-center justify-start'>
            <div className='flex flex-row items-center justify-start pl-2 font-bold text-sm bg-light-bg-ct dark:bg-dark-bg-ct text-light-text-ct dark:text-dark-text-ct h-6 w-20 rounded-md mr-3 font-mono'>
              <MdToday className='h-4 w-4 mr-2' />
              Today
            </div>
            <div className='bg-light-bg-ct dark:bg-dark-bg-ct h-3 w-3 rounded-full ring-2 ring-offset-2 ring-light-bg-ct/50 dark:ring-dark-bg-ct/50 ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg' />
          </div>
          <div className='bg-light-bg-ct dark:bg-dark-bg-ct grow w-3 rounded-full mt-2' />
        </div>
        <div className='flex flex-col items-start pl-4 w-full'>
          <div className='text-xl font-bold font-serif'>PHP Developer</div>
          <div className='text-lg font-semibold font-serif'>
            Mato Grosso Parliament
          </div>
          <div className='text-base font-extralight'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full mb-6'>
        <div className='flex flex-col items-end justify-start w-30'>
          <div className='flex flex-row items-center justify-start'>
            <div className='flex flex-row items-center justify-start pl-2 font-bold text-sm bg-light-bg-ct dark:bg-dark-bg-ct text-light-text-ct dark:text-dark-text-ct h-6 w-20 rounded-md mr-3 font-mono'>
              <MdToday className='h-4 w-4 mr-2' />
              2014
            </div>
            <div className='bg-light-bg-ct dark:bg-dark-bg-ct h-3 w-3 rounded-full ring-2 ring-offset-2 ring-light-bg-ct/50 dark:ring-dark-bg-ct/50 ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg' />
          </div>
          <div className='bg-light-bg-ct dark:bg-dark-bg-ct grow w-3 rounded-full mt-2' />
        </div>
        <div className='flex flex-col items-start pl-4 w-full'>
          <div className='text-xl font-bold font-serif'>PHP Developer</div>
          <div className='text-lg font-semibold font-serif'>
            Mato Grosso Government
          </div>
          <div className='text-base font-extralight'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full mb-6'>
        <div className='flex flex-col items-end justify-start w-30'>
          <div className='flex flex-row items-center justify-start'>
            <div className='flex flex-row items-center justify-start pl-2 font-bold text-sm bg-light-bg-ct dark:bg-dark-bg-ct text-light-text-ct dark:text-dark-text-ct h-6 w-20 rounded-md mr-3 font-mono'>
              <MdToday className='h-4 w-4 mr-2' />
              2013
            </div>
            <div className='bg-light-bg-ct dark:bg-dark-bg-ct h-3 w-3 rounded-full ring-2 ring-offset-2 ring-light-bg-ct/50 dark:ring-dark-bg-ct/50 ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg' />
          </div>
          <div className='bg-light-bg-ct dark:bg-dark-bg-ct grow w-3 rounded-full mt-2' />
        </div>
        <div className='flex flex-col items-start pl-4 w-full'>
          <div className='text-xl font-bold font-serif'>Java Developer</div>
          <div className='text-lg font-semibold font-serif'>Ábaco Company</div>
          <div className='text-base font-extralight'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full mb-6'>
        <div className='flex flex-col items-end justify-start w-30'>
          <div className='flex flex-row items-center justify-start'>
            <div className='flex flex-row items-center justify-start pl-2 font-bold text-sm bg-light-bg-ct dark:bg-dark-bg-ct text-light-text-ct dark:text-dark-text-ct h-6 w-20 rounded-md mr-3 font-mono'>
              <MdToday className='h-4 w-4 mr-2' />
              2012
            </div>
            <div className='bg-light-bg-ct dark:bg-dark-bg-ct h-3 w-3 rounded-full ring-2 ring-offset-2 ring-light-bg-ct/50 dark:ring-dark-bg-ct/50 ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg' />
          </div>
          <div className='bg-light-bg-ct dark:bg-dark-bg-ct grow w-3 rounded-full mt-2' />
        </div>
        <div className='flex flex-col items-start pl-4 w-full'>
          <div className='text-xl font-bold font-serif'>Java Developer</div>
          <div className='text-lg font-semibold font-serif'>
            Tractors Parts Company
          </div>
          <div className='text-base font-extralight'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </div>

      <div className='flex flex-row w-full mb-6'>
        <div className='flex flex-col items-end justify-start w-30'>
          <div className='flex flex-row items-center justify-start'>
            <div className='flex flex-row items-center justify-start pl-2 font-bold text-sm bg-light-bg-ct dark:bg-dark-bg-ct text-light-text-ct dark:text-dark-text-ct h-6 w-20 rounded-md mr-3 font-mono'>
              <MdToday className='h-4 w-4 mr-2' />
              2009
            </div>
            <div className='bg-light-bg-ct dark:bg-dark-bg-ct h-3 w-3 rounded-full ring-2 ring-offset-2 ring-light-bg-ct/50 dark:ring-dark-bg-ct/50 ring-offset-light-bg-hg dark:ring-offset-dark-bg-hg' />
          </div>
          <div className='bg-light-bg-ct dark:bg-dark-bg-ct grow w-3 rounded-full mt-2' />
        </div>
        <div className='flex flex-col items-start pl-4 w-full'>
          <div className='text-xl font-bold font-serif'>
            Computing Scientist
          </div>
          <div className='text-lg font-semibold font-serif'>
            Mato Grosso State University
          </div>
          <div className='text-base font-extralight'>
            <p>
              My get go in IT area was in 2005 when I started my Computing
              Scientist graduation.
            </p>
            <p>
              This in person course taught me the basis and after a while I
              noticed that I made the right choice, because it allow me exercise
              my logics and transform my ideas into this digital world.
            </p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
}
