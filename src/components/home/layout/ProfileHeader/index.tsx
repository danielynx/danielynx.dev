import { use } from 'react';
import Image from 'next/image';

import { GITHUB_USER } from '@/constants/home/layout';

import { Wrapper } from './Wrapper';
import { Profile } from '@/types/shared/Profile';
import { getGithubProfile } from '@/services/shared/getGithubProfile';

export function LayoutProfileHeader() {
  const profile = use<Profile>(getGithubProfile(GITHUB_USER));

  return (
    <Wrapper>
      <Image
        id='image'
        src={profile.avatar_url}
        alt='Avatar'
        width='50'
        height='50'
        className='rounded-full h-12 w-12'
      />
      {profile && (
        <div className='ml-3 text-lg font-serif font-bold tracking-wide'>
          {profile.name}
        </div>
      )}
    </Wrapper>
  );
}
