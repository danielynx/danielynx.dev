'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BsScissors } from 'react-icons/bs';
import { CiMobile3 } from 'react-icons/ci';
import { AiOutlineDatabase } from 'react-icons/ai';
import { PiDesktopTowerLight } from 'react-icons/pi';
import { GiCircuitry } from 'react-icons/gi';
import { CgScreenShot } from 'react-icons/cg';
import {
  SiReact,
  SiTypescript,
  SiNodedotjs as SiNodeJs,
  SiExpress,
  SiYarn,
  SiJest,
  SiStyledcomponents,
  SiGithubactions,
  SiGithub,
} from 'react-icons/si';

import { LayoutContent } from '@/components/shared/layout/Content';
import { SharedBrowserFrame } from '@/components/shared/BrowserFrame';
import { SharedAppFrame } from '@/components/shared/AppFrame';
import { SharedCard } from '@/components/shared/Card';

export function PageBody() {
  return (
    <LayoutContent.Body>
      <div className='text-base lg:text-lg space-y-4 leading-relaxed'>
        <p>
          The GoBarber project is a barbershop schedule manager, compound by a
          headless application, a web application and a mobile application.
        </p>
        <p>
          It was built during the{' '}
          {
            <Link
              className='underline decoration-solid'
              href='https://www.rocketseat.com.br/'
              target='_blank'
            >
              Rocketseat
            </Link>
          }
          's GoStack Course, which addressed the stack compound by NodeJS,
          ReactJS and React Native technologies.
        </p>
      </div>
      <div className='flex flew-row justify-start items-center mt-10 mb-4'>
        <GiCircuitry className='h-7 w-7 mr-3' />
        <h1 className='text-2xl font-extrabold'>Technologies</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm sm:text-base text-light-text dark:text-dark-text'>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiNodeJs className='h-4 w-4 sm:h-5 sm:w-5' />
          <div className='ml-2'>NodeJS</div>
        </div>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiReact className='h-4 w-4 sm:h-5 sm:w-5' />
          <div className='ml-2'>React JS and Native</div>
        </div>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiExpress
            className='h-4 w-4 sm:h-5 sm:w-5'
            title='Express'
          />
          <div className='ml-2'>Express</div>
        </div>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiTypescript className='h-4 w-4 sm:h-5 sm:w-5' />
          <div className='ml-2'>TypeScript</div>
        </div>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiYarn className='h-4 w-4 sm:h-5 sm:w-5' />
          <div className='ml-2'>Yarn</div>
        </div>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiJest className='h-4 w-4 sm:h-5 sm:w-5' />
          <div className='ml-2'>Jest</div>
        </div>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiStyledcomponents className='h-4 w-4 sm:h-5 sm:w-5' />
          <div className='ml-2'>Styled Components</div>
        </div>
        <div className='flex flex-row items-center px-2 py-1.5 rounded-md'>
          <SiGithubactions className='h-4 w-4 sm:h-5 sm:w-5' />
          <div className='ml-2'>GitHub Actions</div>
        </div>
      </div>
      <div className='flex flew-row justify-start items-center mt-10 mb-4'>
        <SiGithub className='h-7 w-7 mr-3' />
        <h1 className='text-2xl font-extrabold'>GitHub Repositories</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
      </div>
      <div className='flex flew-row justify-start items-center mt-10 mb-4'>
        <CgScreenShot className='h-7 w-7 mr-3' />
        <h1 className='text-2xl font-extrabold'>Screenshots</h1>
      </div>
      <div className='flex flex-col items-center gap-y-3'>
        <SharedBrowserFrame.Builder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/login'
        >
          <Image
            src='/project/go-barber/web/login.png'
            width={800}
            height={400}
            alt="GoBarber's web login page"
          />
        </SharedBrowserFrame.Builder>

        <SharedBrowserFrame.Builder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/signup'
        >
          <Image
            src='/project/go-barber/web/signup.png'
            width={800}
            height={400}
            alt="GoBarber's web signup page"
          />
        </SharedBrowserFrame.Builder>

        <SharedBrowserFrame.Builder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/admin/appointments'
        >
          <Image
            src='/project/go-barber/web/appointments.png'
            width={800}
            height={400}
            alt="GoBarber's web appointments page"
          />
        </SharedBrowserFrame.Builder>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-3 mt-8'>
        <SharedAppFrame>
          <Image
            src='/project/go-barber/app/login.png'
            width={200}
            height={403}
            alt="GoBarber's app login screen"
          />
        </SharedAppFrame>

        <SharedAppFrame>
          <Image
            src='/project/go-barber/app/hairdressers.png'
            width={200}
            height={403}
            alt="GoBarber's app hairdressers screen"
          />
        </SharedAppFrame>

        <SharedAppFrame>
          <Image
            src='/project/go-barber/app/appointments.png'
            width={200}
            height={403}
            alt="GoBarber's app appointments screen"
          />
        </SharedAppFrame>
      </div>
    </LayoutContent.Body>
  );
}
