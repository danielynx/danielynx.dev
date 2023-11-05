import { SiLinkedin } from 'react-icons/si';

import { ContactItem } from './Item';

export function ContactLinkedIn() {
  return (
    <ContactItem.Root
      Icon={SiLinkedin}
      iconColor='text-light-text-brand-linkedin dark:text-dark-text-brand-linkedin'
      url='https://www.linkedin.com/in/daniel-nx-73177224'
      text='LinkedIn'
    />
  );
}
