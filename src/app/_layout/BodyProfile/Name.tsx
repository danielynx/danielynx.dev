import { use } from 'react';

import { GITHUB_USER } from '@/constant/home/layout';
import { Profile } from '@/type/home/layout/Profile';
import { getGithubProfile } from '@/service/home/layout/getGithubProfile';

export function ProfileName() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <>
      {profile && (
        <div className='mt-5 text-xl font-serif font-bold tracking-wide'>
          {profile.name}
        </div>
      )}
    </>
  );
}
