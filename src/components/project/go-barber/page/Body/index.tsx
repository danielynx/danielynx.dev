import Image from 'next/image';
import { BsScissors } from 'react-icons/bs';

import { LayoutContent } from '@/components/shared/layout/Content';
import { SharedBrowserFrame } from '@/components/shared/BrowserFrame';
import { SharedAppFrame } from '@/components/shared/AppFrame';

export function PageBody() {
  return (
    <LayoutContent.Body>
      <div className='flex flex-col items-center gap-y-3'>
        <SharedBrowserFrame.Builder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/login'
        >
          <Image
            src='/project/go-barber/web/login.png'
            width={800}
            height={400}
            alt="GoBarber's web login page"
          />
        </SharedBrowserFrame.Builder>

        <SharedBrowserFrame.Builder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/signup'
        >
          <Image
            src='/project/go-barber/web/signup.png'
            width={800}
            height={400}
            alt="GoBarber's web signup page"
          />
        </SharedBrowserFrame.Builder>

        <SharedBrowserFrame.Builder
          Favicon={BsScissors}
          tabName='GoBarber'
          url='https://gobarber.dev/admin/appointments'
        >
          <Image
            src='/project/go-barber/web/appointments.png'
            width={800}
            height={400}
            alt="GoBarber's web appointments page"
          />
        </SharedBrowserFrame.Builder>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-3 mt-5'>
        <SharedAppFrame>
          <Image
            src='/project/go-barber/app/login.png'
            width={200}
            height={403}
            alt="GoBarber's app login screen"
          />
        </SharedAppFrame>

        <SharedAppFrame>
          <Image
            src='/project/go-barber/app/hairdressers.png'
            width={200}
            height={403}
            alt="GoBarber's app hairdressers screen"
          />
        </SharedAppFrame>

        <SharedAppFrame>
          <Image
            src='/project/go-barber/app/appointments.png'
            width={200}
            height={403}
            alt="GoBarber's app appointments screen"
          />
        </SharedAppFrame>
      </div>
    </LayoutContent.Body>
  );
}
