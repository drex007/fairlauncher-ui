import React from 'react'
import { light } from '../assets'

const UniqueFeatures = () => {
  return (
    <div className='lg:flex lg:flex-1 2xl:mt-28  2xl:px-48 lg:px-16 px-2 my-8'>
      <div className='flex-[0.5]'>
        <div className='lg:ml-16'>
          <p className='2xl:text-[60px] text-blue-700 lg:text-[40px] font-semibold text-[25px] flex lg:justify-start   justify-center'>Unique Features</p>
          <p className='2xl:text-[50px] text-primary-black-text font-semibold font-poppins lg:text-[40px] text-[25px] flex  lg:justify-start justify-center'>Of FairLauncher</p>
        </div>
        <img src={light} alt="" className='hidden 2xl:w-4/5 lg:block w-4/6' />

      </div>
      <div className='flex-[0.5] flex lg:justify-end space-x-10 items-center'>
        <div className='2xl:w-1/3 w-2/5'>
          <div className='flex space-x-2 2xl:my-4 my-2'>
            <p className='2xl:h-[20px] 2xl:w-[40px] h-[10px] w-[25px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg 2xl:text-[18px] 2xl:text-primary-black-text 2xl:p-8 lg:text-[13px] text-[10px]'>
              <p className='font-semibold  text-primary-black-text'>Anti-Rug</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

          <div className='flex space-x-2 2xl:my-4 my-2'>
            <p className='2xl:h-[20px] 2xl:w-[40px] h-[10px] w-[25px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg 2xl:text-[18px] 2xl:text-primary-black-text 2xl:p-8  lg:text-[13px] text-[10px]'>
              <p className='font-semibold  text-primary-black-text'>Whitelisted Sale</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

        </div>

        <div className='2xl:w-1/3 w-2/5'>
          <div className='flex space-x-2 2xl:my-4 my-2 '>
            <p className='2xl:h-[20px] 2xl:w-[40px] h-[10px] w-[25px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg 2xl:text-[18px] 2xl:text-primary-black-text 2xl:p-8 lg:text-[13px] text-[10px]'>
              <p className='font-semibold  text-primary-black-text'>Autolist To Dex</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

          <div className='flex space-x-2 2xl:my-4 my-2 '>
            <p className='2xl:h-[20px] 2xl:w-[40px] h-[10px] w-[25px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg 2xl:text-[18px] 2xl:text-primary-black-text 2xl:p-8  lg:text-[13px] text-[10px]'>
              <p className='font-semibold  text-primary-black-text'>Token Vesting</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

          <div className='flex space-x-2 2xl:my-4 my-2 '>
            <p className='2xl:h-[20px] 2xl:w-[40px] h-[10px] w-[25px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg 2xl:text-[18px] 2xl:text-primary-black-text 2xl:p-8  lg:text-[13px] text-[10px]'>
              <p className='font-semibold  text-primary-black-text'>Low fees</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

        </div>




      </div>

    </div>
  )
}

export default UniqueFeatures