import Image from 'next/image';
import { BsScissors } from 'react-icons/bs';

import { LayoutContent } from '@/components/shared/layout/Content';
import { SharedBrowserFrame } from '@/components/shared/BrowserFrame';

export function PageBody() {
  return (
    <LayoutContent.Body>
      <div className='flex flex-col items-center gap-y-3'>
        <SharedBrowserFrame.DefaultBuilder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/login'
        >
          <Image
            src='/project/go-barber/login.png'
            width={800}
            height={400}
            alt="GoBarber's Login page"
          />
        </SharedBrowserFrame.DefaultBuilder>

        <SharedBrowserFrame.DefaultBuilder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/signup'
        >
          <Image
            src='/project/go-barber/signup.png'
            width={800}
            height={400}
            alt="GoBarber's Signup page"
          />
        </SharedBrowserFrame.DefaultBuilder>
      </div>
    </LayoutContent.Body>
  );
}
