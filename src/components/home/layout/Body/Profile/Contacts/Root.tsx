import { PropsWithChildren } from 'react';

export function ContactsRoot({ children }: PropsWithChildren) {
  return (
    <>
      <hr className='mt-3 mb-3 border border-light-border dark:border-dark-border' />
      {children}
    </>
  );
}
