import { SiLinkedin } from 'react-icons/si';

import { ContactsItem } from './Item';

export function ContactsLinkedIn() {
  return (
    <ContactsItem.Root
      Icon={SiLinkedin}
      iconColor='text-brand-linkedin dark:text-brand-linkedin-400'
      url='https://www.linkedin.com/in/daniel-nx-73177224'
      text='LinkedIn'
    />
  );
}
