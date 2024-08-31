import React from 'react'
import { home, gear } from '../assets'

const Hero = () => {
    return (

        <div className='md:flex space-x-0 items-center lg:px-14 '>
            <div className='md:flex-[0.35] font-poppins md:ml-28 z-40 md:mt-4 flex-1'>
                <p className='2xl:text-[50px] md:text-[30px]  text-[22px] font-semibold text-primary-text-color mt-16 flex md:justify-start justify-center'>Seamless Fair  Launch</p>
                <p className='text-blue-600 2xl:text-[50px] md:text-[30px] text-[22px] font-semibold my-0 flex md:justify-start justify-center'><span className='text-primary-text-color mr-2'>For</span> Everyone</p>


                <p className='tracking-[1px] 2xl:text-[30px] lg:text-[16px] text-[14px] mt-1 flex md:justify-start justify-center '>Ensuring  Transparent, Secure, Fair and </p>
                <p className='flex md:justify-start justify-center 2xl:text-[30px] lg:tetxt-[16px] text-[15px]'>Safe Token Launch for Everyone</p>
                <div className='hidden md:py-4 md:flex space-x-4 2xl:mt-4'>
                    <button className='2xl:px-24 2xl:py-6 2xl:rounded-full 2xl:text-[18px] py-3 px-14 font-semibold text-primary-yellow rounded-3xl bg-blue-600 font-poppins text-[12px]'> Buy</button>
                    <button className='2xl:px-24 2xl:py-6 2xl:rounded-full 2xl:text-[18px] py-3 px-10 font-semibol bg-primary-yellow rounded-3xl text-blue-600 font-poppins font-semibold text-[12px]'> List Project</button>
                </div>




                {/* Gear */}

                <div className='hidden lg:block'>
                    <div className='2xl:pt-56 pt-28 -ml-5'>
                        <img src={gear} alt="" className=' w-2/4' />
                    </div>
                </div>


            </div>
            <div className='md:flex-[0.70] lg:-mt-18 flex-1 justify-center w-full 2xl:justify-end'>
                <img src={home} alt="" className='lg:w-full 2xl:w-5/6 2xl:-mt-[0px]  2xl:ml-56 mb-6 max-md:-ml-10' />
            </div>



        </div>

    )
}

export default Hero
