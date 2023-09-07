import {
  SiGithub,
  SiStackoverflow,
  SiProtonmail,
  SiLinkedin,
} from 'react-icons/si';
import { MdLocationPin, MdHomeWork } from 'react-icons/md';
import { PiBuildings } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

import { GITHUB_USER } from '@/constants/home/layout';

import { ProfileIntersectionObserver } from './ProfileIntersectionObserver';
import { Profile } from '@/types/shared/Profile';
import { getGithubProfile } from '@/services/shared/getGithubProfile';

export function LayoutProfileBody() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <aside className='w-11/12 sm:w-8/12 md:w-6/12 lg:w-11/12 xl:w-8/12 2xl:w-7/12 py-8 px-5 md:px-7 lg:px-6 xl:px-7 mt-28 lg:mt-4 mb-3 lg:mr-2 bg-light-bg-hg dark:bg-dark-bg-hg border dark:border-0 border-light-border rounded-xl'>
      <ProfileIntersectionObserver>
        <div className='flex flex-row justify-center'>
          <div className='relative pb-3'>
            <Image
              id='image'
              src={profile.avatar_url}
              alt='Avatar'
              width='400'
              height='400'
              className='rounded-full h-40 w-40'
            />
            <div className='group absolute flex bottom-0 left-24 flex-row justify-center hover:justify-start hover:pl-2 items-center rounded-full w-8 h-8 hover:w-40 border border-light-hg dark:border-dark-hg-700 shadow-md bg-white hover:cursor-pointer'>
              <MdHomeWork className='text-light-hg dark:text-dark-hg text- w-5 h-5' />
              <span className='ml-2 text-xs text-light-hg-700 dark:text-dark-hg-700 font-black hidden group-hover:inline'>
                Working from home
              </span>
            </div>
          </div>
        </div>
      </ProfileIntersectionObserver>
      {profile && (
        <>
          <div className='mt-5 text-xl font-serif font-bold tracking-wide'>
            {profile.name}
          </div>
          <div className='mt-5 text-sm'>{profile.bio}</div>
          <div className='flex flex-row items-center mt-4 text-base'>
            <PiBuildings className='mr-2 h-5 w-5' />
            <Link
              href={'https://www.al.mt.gov.br'}
              target={'_blank'}
            >
              {profile.company}
            </Link>
          </div>
          <div className='flex flex-row items-center mt-2 text-base'>
            <MdLocationPin className='mr-2 h-5 w-5 ' />
            <Link
              href={'https://goo.gl/maps/dQ5rWzKNCeYxj6fm8'}
              target={'_blank'}
            >
              {profile.location}
            </Link>
          </div>
          <hr className='mt-3 mb-3 border-light-border dark:border-dark-border' />
          <div className='flex flex-row items-center mt-2 text-sm'>
            <SiProtonmail className='mr-2 h-5 w-5 text-[#6D4AFF]' />
            <Link
              href={'mailto:danielynx@proton.me'}
              target={'_blank'}
            >
              danielynx@proton.me
            </Link>
          </div>
          <div className='flex flex-row items-center mt-2 text-sm'>
            <SiGithub className='mr-2 h-5 w-5 text-[#181717]' />
            <Link
              href={'https://github.com/danielynx'}
              target={'_blank'}
            >
              GitHub
            </Link>
          </div>
          <div className='flex flex-row items-center mt-2 text-sm'>
            <SiStackoverflow className='mr-2 h-5 w-5 text-[#F58025]' />
            <Link
              href={'https://stackoverflow.com/users/10463549'}
              target={'_blank'}
            >
              Stack Overflow
            </Link>
          </div>
          <div className='flex flex-row items-center mt-2 text-sm'>
            <SiLinkedin className='mr-2 h-5 w-5 text-[#0A66C2]' />
            <Link
              href={'https://www.linkedin.com/in/daniel-nx-73177224'}
              target={'_blank'}
            >
              LinkedIn
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}
