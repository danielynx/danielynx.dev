import { Profile } from '@/types/shared/Profile';

async function getGithubProfile(user: string): Promise<Profile> {
  const response = await fetch(`https://api.github.com/users/${user}`);

  if (!response.ok) {
    throw new Error('User not found in Github');
  }

  return response.json();
}

export { getGithubProfile };
