import { SiProtonmail } from 'react-icons/si';

import { ContactsItem } from './Item';

export function ContactsProtonMail() {
  return (
    <ContactsItem.Root
      Icon={SiProtonmail}
      iconColor='text-brand-protonmail'
      url='mailto:danielynx@proton.me'
      text='danielynx@proton.me'
    />
  );
}
