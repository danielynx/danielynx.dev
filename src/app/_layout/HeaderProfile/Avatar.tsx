import { use } from 'react';
import Image from 'next/image';

import { GITHUB_USER } from '@/constant/home/layout';
import { Profile } from '@/type/home/layout/Profile';
import { getGithubProfile } from '@/service/home/layout/getGithubProfile';

export function ProfileAvatar() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <>
      {profile && (
        <Image
          id='image'
          src={profile.avatar_url}
          alt='Avatar'
          width='50'
          height='50'
          className='rounded-full h-12 w-12'
        />
      )}
    </>
  );
}
