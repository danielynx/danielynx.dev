import { use } from 'react';
import Image from 'next/image';
import { MdHomeWork } from 'react-icons/md';

import { GITHUB_USER } from '@/constants/home/layout';
import { Profile } from '@/types/home/layout/Profile';
import { getGithubProfile } from '@/services/home/layout/getGithubProfile';

export function AvatarRoot() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <>
      {profile && (
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
            <div className='group absolute flex bottom-0 left-24 flex-row justify-center hover:justify-start hover:pl-2 items-center rounded-full w-8 h-8 hover:w-40 border border-light-hg dark:border-dark-hg-600 shadow-md bg-white hover:cursor-pointer'>
              <MdHomeWork className='text-light-hg dark:text-dark-hg text- w-5 h-5' />
              <span className='ml-2 text-xs text-light-hg-600 dark:text-dark-hg-600 font-black hidden group-hover:inline'>
                Working from home
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
