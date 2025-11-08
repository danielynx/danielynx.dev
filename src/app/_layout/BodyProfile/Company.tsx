import { use } from 'react';
import { PiBuildings } from 'react-icons/pi';

import { GITHUB_USER } from '@/constant/_layout';
import type { Profile } from '@/type/_layout/Profile';
import { getGithubProfile } from '@/service/_layout/getGithubProfile';

export function ProfileCompany() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <>
      {profile && (
        <div className='flex flex-row items-center mt-4 text-base font-light'>
          <PiBuildings className='mr-2 h-5 w-5' />
          {profile.company}
        </div>
      )}
    </>
  );
}
