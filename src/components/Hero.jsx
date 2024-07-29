import React from 'react'
import { home, gear } from '../assets'

const Hero = () => {
    return (

        <div className='md:flex space-x-0 items-center px-14'>
            <div className='md:flex-[0.35] font-poppins md:ml-28 z-40 md:mt-4 flex-1'>
                <p className='md:text-[30px]  text-[22px] font-semibold text-primary-text-color mt-16 flex md:justify-start justify-center'>Seamless & Fair  Launch</p>
                <p className='text-blue-600 md:text-[30px] text-[22px] font-semibold my-0 flex md:justify-start justify-center'><span className='text-primary-text-color mr-2'>For</span> Everyone</p>
                
                
                <p className='tracking-[1px] lg:text-[16px] text-[14px] mt-1 flex md:justify-start justify-center '>Ensuring  Transparent, Secure , And </p>
                <p className='flex md:justify-start justify-center lg:tetxt-[16px] text-[15px]'>Equitable Token Distribution For All</p>
                <div className='hidden md:py-4 md:flex space-x-4'>
                    <button className='py-3 px-14 font-semibold text-primary-yellow rounded-3xl bg-blue-600 font-poppins text-[12px]'> Buy</button>
                    <button className='py-3 px-10 font-semibol bg-primary-yellow rounded-3xl text-blue-600 font-poppins font-semibold text-[12px]'> List Project</button>
                </div>




                {/* Gear */}

                <div className='hidden lg:block'>
                    <div className='pt-28 -ml-5'>
                        <img src={gear} alt="" srcset="" className='w-2/4' />
                    </div>
                </div>


            </div>
            <div className='md:flex-[0.70] lg:-mt-28 flex-1 '>
                <img src={home} alt="" srcset="" className='w-full mb-6'    />
            </div>

        </div>

    )
}

export default Hero
