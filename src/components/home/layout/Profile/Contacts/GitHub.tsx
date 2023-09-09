import { SiGithub } from 'react-icons/si';

import { ContactsItem } from './Item';

export function ContactsGitHub() {
  return (
    <ContactsItem.Root
      Icon={SiGithub}
      iconColor='text-light-text-brand-github dark:text-dark-text-brand-github'
      url='https://github.com/danielynx'
      text='GitHub'
    />
  );
}
