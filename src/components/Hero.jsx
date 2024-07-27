import React from 'react'
import { home, gear } from '../assets'

const Hero = () => {
    return (

        <div className='flex space-x-0 items-center px-14'>
            <div className='flex-[0.35] font-poppins ml-28 z-40 mt-10'>
                <p className='text-[30px] font-semibold text-primary-text-color mt-32'>Seamless & Fair  Launch</p>
                <p className='text-blue-600 text-[30px] font-semibold my-0'><span className='text-primary-text-color'>For</span> Everyone</p>
                <p className='tracking-[1px] text-[16px]'>Ensuring  Transparent, Secure , And </p>
                <p>Equitable Token Distribution For All</p>
                <div className='py-4 flex space-x-4'>
                    <button className='py-3 px-14 font-semibold text-primary-yellow rounded-3xl bg-blue-600 font-poppins text-[12px]'> Buy</button>
                    <button className='py-3 px-10 font-semibol bg-primary-yellow rounded-3xl text-blue-600 font-poppins font-semibold text-[12px]'> List Project</button>
                </div>




                {/* Gear */}

                <div className=''>
                    <div className='pt-28 -ml-5'>
                        <img src={gear} alt="" srcset="" className='w-2/4' />
                    </div>
                </div>


            </div>
            <div className='flex-[0.70] -mt-44'>
                <img src={home} alt="" srcset="" className='w-full mb-6'   />
            </div>

        </div>

    )
}

export default Hero
