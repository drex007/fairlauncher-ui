import React from 'react'
import { discord, logoGreen, telegram, x } from '../assets'

const Footer = () => {
    return (
        <div className='md:px-16 px-8 pb-16 sm:w-full'>
            <div className='bg-blue-700 rounded-3xl  lg:h-[300px] h-[200px] '>
                <div className='flex justify-between py-10 lg:px-16 px-4 '>
                    <div className='font-poppins font-semibold'>
                        <img src={logoGreen} alt="" srcset=""  className='lg:w-[200px] w-[100px] lg:my-6 my-2' />
                        <p className='text-white lg:text-[20px] text-[10px]'>Seamless Fair Launch</p>
                        <p className='text-white lg:text-[20px] text-[10px]'>For <span className='text-primary-yellow'>Everyone</span></p>
                    </div>
                    <div className='font-poppins text-white lg:text-[15px] text-[8px]'>
                        <p className=''>About Fairlauncher</p>
                        <p className='my-2'>KOL Package Apply</p>
                        <p className='my-2'>Apply For Partnered Project Launch</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
                <div className='flex justify-center'><hr className='h-[1px] w-5/6 opacity-20' /></div>
                <div className='flex md:px-32 px-8 lg:py-4 justify-between mt-2'>
                    <div>
                        <p className='text-gray-300 font-poppins lg:text-[18px] text-[15px]'>©Fairlauncher2024</p>
                    </div>
                    <div className='flex space-x-4 justify-end'>
                        <img src={x} alt=""  className='lg:w-[27px] w-[18px]'/>
                        <img src={telegram} alt=""   className='lg:w-[27px] w-[18px]'/>
                        <img src={discord} alt=""   className='lg:w-[27px] w-[18px]'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer