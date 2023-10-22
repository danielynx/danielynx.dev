import Image from 'next/image';
import {
  MdOutlineLock,
  MdArrowBack,
  MdArrowForward,
  MdRefresh,
  MdStarOutline,
  MdClose,
  MdAdd,
  MdCrop54,
  MdRemove,
} from 'react-icons/md';
import { BsScissors } from 'react-icons/bs';

import { LayoutContent } from '@/components/shared/layout/Content';

export function PageBody() {
  return (
    <LayoutContent.Body>
      <div className='flex flex-col items-center gap-y-3'>
        <div className='flex flex-col border-8 border-light-border-600 dark:border-dark-border rounded-lg'>
          <div className='flex flex-row justify-start items-center bg-gray-800 text-white py-1 px-2'>
            <div className='flex flex-row justify-start items-center bg-gray-700 rounded-md py-2 px-2'>
              <div className='flex flex-row justify-center items-center bg-teal-600 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <BsScissors className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
              <div className='text-xs sm:text-sm font-bold pl-2 pr-8'>
                GoBarber
              </div>
              <MdClose className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
            </div>
            <div className='w-full ml-2'>
              <MdAdd className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
            </div>
            <div className='flex flex-row justify-start items-center mr-3 gap-2'>
              <div className='flex flex-row justify-center items-center bg-red-500 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <MdRemove className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
              <div className='flex flex-row justify-center items-center bg-yellow-500 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <MdCrop54 className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
              <div className='flex flex-row justify-center items-center bg-green-500 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <MdClose className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-end items-center w-full py-1 px-2 xs:px-3 sm:px-5 md:px-6 bg-gray-700'>
            <div className='flex flex-row justify-start items-center gap-1 sm:gap-2 md:gap-3 w-16 xs:w-20 md:w-32 pr-1 sm:pr-2 text-white'>
              <MdArrowBack className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              <MdArrowForward className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              <MdRefresh className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
            </div>
            <div className='flex flex-row justify-start items-center w-full bg-black text-gray-300 rounded py-1 px-1 sm:px-2 md:px-3'>
              <MdOutlineLock className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              <div className='w-full mx-1 sm:mx-2 md:mx-3'>
                <span className='text-xs sm:text-sm font-extrabold'>
                  https://gobarber.dev/login
                </span>
              </div>
              <MdStarOutline className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
            </div>
          </div>
          <Image
            src='/project/go-barber/login.png'
            width={800}
            height={400}
            alt="GoBarber's Login page"
          />
        </div>
        <div className='flex flex-col border-8 border-light-border-600 dark:border-dark-border rounded-lg'>
          <div className='flex flex-row justify-start items-center bg-gray-800 text-white py-1 px-2'>
            <div className='flex flex-row justify-start items-center bg-gray-700 rounded-md py-2 px-2'>
              <div className='flex flex-row justify-center items-center bg-teal-600 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <BsScissors className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
              <div className='text-xs sm:text-sm font-bold pl-2 pr-8'>
                GoBarber
              </div>
              <MdClose className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
            </div>
            <div className='w-full ml-2'>
              <MdAdd className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
            </div>
            <div className='flex flex-row justify-start items-center mr-3 gap-2'>
              <div className='flex flex-row justify-center items-center bg-red-500 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <MdRemove className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
              <div className='flex flex-row justify-center items-center bg-yellow-500 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <MdCrop54 className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
              <div className='flex flex-row justify-center items-center bg-green-500 rounded-full w-4 h-4 sm:w-5 sm:h-5'>
                <MdClose className='w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4' />
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-end items-center w-full py-1 px-2 xs:px-3 sm:px-5 md:px-6 bg-gray-700'>
            <div className='flex flex-row justify-start items-center gap-1 sm:gap-2 md:gap-3 w-16 xs:w-20 md:w-32 pr-1 sm:pr-2 text-white'>
              <MdArrowBack className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              <MdArrowForward className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              <MdRefresh className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
            </div>
            <div className='flex flex-row justify-start items-center w-full bg-black text-gray-300 rounded py-1 px-1 sm:px-2 md:px-3'>
              <MdOutlineLock className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
              <div className='w-full mx-1 sm:mx-2 md:mx-3'>
                <span className='text-xs sm:text-sm font-extrabold'>
                  https://gobarber.dev/signup
                </span>
              </div>
              <MdStarOutline className='w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5' />
            </div>
          </div>
          <Image
            src='/project/go-barber/signup.png'
            width={800}
            height={400}
            alt="GoBarber's Signup page"
          />
        </div>
      </div>
    </LayoutContent.Body>
  );
}
