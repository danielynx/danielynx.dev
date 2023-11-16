import { use } from 'react';

import { GITHUB_USER } from '@/constant/_layout';
import { Profile } from '@/type/_layout/Profile';
import { getGithubProfile } from '@/service/_layout/getGithubProfile';

export function ProfileBio() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <>
      {profile && (
        <div className='mt-5 text-sm font-extralight'>{profile.bio}</div>
      )}
    </>
  );
}
