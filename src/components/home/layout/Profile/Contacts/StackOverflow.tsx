import { SiStackoverflow } from 'react-icons/si';

import { ContactsItem } from './Item';

export function ContactsStackOverflow() {
  return (
    <ContactsItem.Root
      Icon={SiStackoverflow}
      iconColor='text-brand-stackoverflow'
      url='https://stackoverflow.com/users/10463549'
      text='Stack Overflow'
    />
  );
}
