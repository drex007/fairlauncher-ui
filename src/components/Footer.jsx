import React from 'react'
import { discord, logoGreen, telegram, x } from '../assets'

const Footer = () => {
    return (
        <div className='px-16 pb-16'>
            <div className='bg-blue-700 rounded-3xl  h-[300px] '>
                <div className='flex justify-between py-10 px-16 '>
                    <div className='font-poppins font-semibold'>
                        <img src={logoGreen} alt="" srcset="" width={200} className='my-6' />
                        <p className='text-white'>Seamless Fair Launch</p>
                        <p className='text-white'>For <span className='text-primary-yellow'>Everyone</span></p>
                    </div>
                    <div className='font-poppins text-white'>
                        <p className=''>About Fairlauncher</p>
                        <p className='my-2'>KOL Package Apply</p>
                        <p className='my-2'>Apply For Partnered Project Launch</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
                <div className='flex justify-center'><hr className='h-[1px] w-5/6 opacity-20' /></div>
                <div className='flex px-32 py-4 justify-between'>
                    <div>
                        <p className='text-white font-poppins'>©Fairlauncher2024</p>
                    </div>
                    <div className='flex space-x-4 justify-end'>
                        <img src={x} alt=""   width={25}/>
                        <img src={telegram} alt=""   width={25}/>
                        <img src={discord} alt=""   width={25}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer