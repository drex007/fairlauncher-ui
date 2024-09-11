import React from 'react'
import Chains from './Chains'
import { arrowLeftSVg, arrowRightSVg, bgRocket, rocket } from '../assets'


const LisitingPageTwo = ({ showListingPageTwo, setshowListingPageTwo }) => {

    return (
        <div className='lg:flex-[0.75] min-h-[100%] py-4 lg:px-8 w-full overflow-scroll '>
            <div className='flex justify-between'>
                <div className='w-[35px] h-[35px] rounded-full bg-white flex p-1 hover:bg-gray-300 cursor-pointer' onClick={() => setshowListingPageTwo(false)}>
                    <img src={arrowLeftSVg} alt="" className='text-button-blue' />
                </div>

                <div>
                    <button className='bg-button-blue rounded-full py-3 text-primary-yellow px-4 font-poppins text-[10px]'>0X94843848483484</button>
                </div>



            </div>


            {/* form */}

            <div className='px-16'>

                <div className='mt-2 flex space-x-2'>
                    <input type="number" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Soft cap' />
                    <input type="number" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Hard cap' />
                </div>
                <div className='mt-2 flex space-x-2'>
                    <input type="number" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Maximum buy' />
                    <input type="number" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Minimum buy' />
                </div>
                <div className='lg:mt-4 font-poppins text-gray-500'>
                    <label htmlFor="">Sale Start</label>
                    <div className='mt-2 flex space-x-2'>
                        <input type="date" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Date' />
                        <input type="time" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Minimum buy' />
                    </div>
                </div>
                <div className='lg:mt-4 font-poppins text-gray-500'>
                    <label htmlFor="">Sale End</label>
                    <div className='mt-2 flex space-x-2'>
                        <input type="date" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Date' />
                        <input type="time" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Minimum buy' />
                    </div>
                </div>

                <div className='lg:mt-4 font-poppins text-gray-500'>
                    <label htmlFor="">Vesting Schedule</label>
                    <div className='mt-2 flex space-x-2'>
                        <input type="date" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Date' />
                        <input type="time" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Minimum buy' />
                    </div>
                </div>
                <div className='mt-2 flex space-x-2'>
                    <input type="text" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Project description' />
                </div>




                <button className='w-full bg-button-blue py-3 rounded-full my-2 text-white font-poppins'>List Project</button>


            </div>

        </div>

    )
}

export default LisitingPageTwo
