import React from 'react'
import Chains from './Chains'
import { arrowLeftSVg, arrowRightSVg, bgRocket, rocket } from '../assets'
import { Link } from 'react-router-dom'


const LisitingPageOne = ({ showListingPageTwo, setshowListingPageTwo }) => {
    const chains = ["BNB", "BASE", "BLAST", "POLYGON", "ARBITRUM", "FANTOM"]
    const dexes = ["PancakeSwap", "SushiSwap", "UniSwap", "OkuSwap"]
    return (
        <div className='lg:flex-[0.75] w-full min-h-[100%] py-4 lg:px-8 px-2 overflow-scroll'>
            <div className='flex justify-between'>
                <div className='flex space-x-4'>
                    <Link to="/">
                        <div className='w-[35px] h-[35px] rounded-full bg-white flex p-2 hover:bg-gray-300 cursor-pointer'>
                            <img src={arrowLeftSVg} alt="" className='text-button-blue' />
                        </div>
                    </Link>
                    <div className='w-[35px] h-[35px] rounded-full bg-white flex p-2 hover:bg-gray-300 cursor-pointer' onClick={() => setshowListingPageTwo(true)}>
                        <img src={arrowRightSVg} alt="" className='text-button-blue' />
                    </div>
                </div>
                <div>
                    <button className='bg-button-blue rounded-full py-3 text-primary-yellow px-4 font-poppins text-[10px]'>0X94843848483484</button>
                </div>



            </div>

            <div className='flex justify-center mt-4 '>
                <p className='text-black font-poppins text-sm'>Select Chain</p>
            </div>
            <div className='grid grid-cols-3 '>
                {chains?.map((e, i) => <Chains chain={e} index={i} key={i} />)}
            </div>
            {/* form */}

            <div className='px-16'>
                <div className='mt-2'>
                    <input type="" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Enter token address' />
                </div>
                <div className='mt-2 flex space-x-2'>
                    <input type="" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Enter token name' />
                    <input type="" className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[8px] outline-none' placeholder='Symbol (ETH or SOL)' />
                </div>
                <div className='mt-2 flex space-x-2'>
                    <input type="number" min={0} className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Total Suppply' />
                    <input type="number" min={0} className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Amount to be sold' />
                </div>
                <div className='mt-2 w-full p-4 rounded-sm border-none font-poppins lg:text-[14px] text-[10px] outline-none h-[50px] bg-white flex justify-center items-center'>
                    <p className='text-gray-500'>Drag image here or <span className='text-button-blue'>Upload a file</span></p>
                </div>
                <div className='mt-2 flex space-x-2'>
                    <input type="number" min={0} className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Sale Price' />
                    <input type="number" min={0} className='w-full p-4 rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' placeholder='Listing Price' />
                </div>
                <div className='mt-2  w-full p-4 bg-white rounded-full border-none'>
                    <select name="" className='w-full bg-white rounded-full border-none font-poppins lg:text-[14px] text-[10px] outline-none' id="">
                        {dexes?.map((e, i) => <option className='' key={i}>{e}</option>)}

                    </select>

                </div>

                <button className='w-full bg-button-blue py-2 rounded-full my-2 text-white font-poppins' onClick={() => setshowListingPageTwo(true)}>Next</button>


            </div>

        </div>

    )
}

export default LisitingPageOne
