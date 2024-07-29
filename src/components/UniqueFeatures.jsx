import React from 'react'
import { light } from '../assets'

const UniqueFeatures = () => {
  return (
    <div className='lg:flex lg:flex-1 lg:px-16 px-8 my-8'>
      <div className='flex-[0.5]'>
        <div className='lg:ml-16'>
          <p className='text-blue-700 lg:text-[40px] font-semibold text-[30px] '>Unique Features</p>
          <p className='text-primary-black-text font-semibold font-poppins lg:text-[40px] text-[30px]'>Of FairLauncher</p>
        </div>
        <img src={light} alt="" srcset="" className='hidden lg:block w-4/6' />

      </div>
      <div className='flex-[0.5] flex justify-normal space-x-10 items-center'>
        <div className='w-2/5'>
          <div className='flex space-x-2 my-2'>
            <p className='h-[10px] w-[30px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg text-[13px]'>
              <p className='font-semibold  text-primary-black-text'>Anti-Rug</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

          <div className='flex space-x-2 my-2'>
            <p className='h-[10px] w-[30px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg text-[13px]'>
              <p className='font-semibold  text-primary-black-text'>Whitelisted Sale</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

        </div>

        <div className='w-2/5'>
          <div className='flex space-x-2 my-2'>
            <p className='h-[10px] w-[30px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg text-[13px]'>
              <p className='font-semibold  text-primary-black-text'>Autolist To Dex</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

          <div className='flex space-x-2 my-2'>
            <p className='h-[10px] w-[30px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg text-[13px]'>
              <p className='font-semibold  text-primary-black-text'>Token Vesting</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

          <div className='flex space-x-2 my-2'>
            <p className='h-[10px] w-[30px] bg-primary-yellow mt-4'></p>
            <div className='font-poppins py-3 px-2 bg-gray-200 rounded-lg text-[13px]'>
              <p className='font-semibold  text-primary-black-text'>Low fees</p>
              Ensuring Transparent, Secure, and Equitable Token Distribution For All.</div>
          </div>

        </div>




      </div>

    </div>
  )
}

export default UniqueFeatures