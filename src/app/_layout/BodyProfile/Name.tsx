import { use } from 'react';

import { GITHUB_USER } from '@/constant/_layout';
import { Profile } from '@/type/_layout/Profile';
import { getGithubProfile } from '@/service/_layout/getGithubProfile';

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
