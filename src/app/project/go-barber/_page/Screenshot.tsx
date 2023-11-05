import { tv } from 'tailwind-variants';
import Image from 'next/image';
import { CgScreenShot } from 'react-icons/cg';
import { BsScissors } from 'react-icons/bs';

import { SharedBrowserFrame } from '@/components/shared/BrowserFrame';
import { SharedAppFrame } from '@/components/shared/AppFrame';
import { SharedSessionHeader } from '@/components/shared/SessionHeader';

const tvStyle = tv(
  {
    slots: {
      browser: 'flex flex-col items-center',
      app: 'flex items-center justify-center',
    },
    variants: {
      size: {
        initial: {
          browser: 'gap-y-2',
          app: 'flex-col mt-6 gap-y-2',
        },
        md: {
          browser: 'gap-y-3',
          app: 'flex-row mt-8 gap-x-3',
        },
      },
    },
    defaultVariants: {
      size: 'initial',
    },
  },
  {
    responsiveVariants: ['md'],
  },
);

export function GoBarberScreenshot() {
  const style = tvStyle({
    size: { md: 'md' },
  });

  return (
    <>
      <SharedSessionHeader
        Icon={CgScreenShot}
        title='Screenshots'
      />
      <div className={style.browser()}>
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
      <div className={style.app()}>
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
    </>
  );
}
