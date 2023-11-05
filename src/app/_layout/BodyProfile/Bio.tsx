import { use } from 'react';

import { GITHUB_USER } from '@/constants/home/layout';
import { Profile } from '@/types/home/layout/Profile';
import { getGithubProfile } from '@/services/home/layout/getGithubProfile';

export function ProfileBio() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return <>{profile && <div className='mt-5 text-sm'>{profile.bio}</div>}</>;
}