import { use } from 'react';
import Link from 'next/link';
import { MdLocationPin } from 'react-icons/md';

import { GITHUB_USER } from '@/constants/home/layout';
import { Profile } from '@/types/home/layout/Profile';
import { getGithubProfile } from '@/services/home/layout/getGithubProfile';

export function ProfileLocation() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <>
      {profile && (
        <div className='flex flex-row items-center mt-2 text-base'>
          <MdLocationPin className='mr-2 h-5 w-5 ' />
          <Link
            href={'https://goo.gl/maps/dQ5rWzKNCeYxj6fm8'}
            target={'_blank'}
          >
            {profile.location}
          </Link>
        </div>
      )}
    </>
  );
}
