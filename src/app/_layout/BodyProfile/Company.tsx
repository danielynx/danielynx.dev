import { use } from 'react';
import Link from 'next/link';
import { PiBuildings } from 'react-icons/pi';

import { GITHUB_USER } from '@/constant/home/layout';
import { Profile } from '@/type/home/layout/Profile';
import { getGithubProfile } from '@/service/home/layout/getGithubProfile';

export function ProfileCompany() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <>
      {profile && (
        <div className='flex flex-row items-center mt-4 text-base'>
          <PiBuildings className='mr-2 h-5 w-5' />
          {profile.company}
        </div>
      )}
    </>
  );
}
