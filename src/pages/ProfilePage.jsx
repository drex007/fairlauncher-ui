import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import {copy, copyBlack } from '../assets'
import NewsLetter from '../components/NewsLetter'

const ProfilePage = () => {
  const cardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dexes = ["PancakeSwap", "SushiSwap", "UniSwap", "OkuSwap"]
  return (
    <div className='relative w-full h-screen  '>
      <div className='bg-gradient-radial bg-cover absolute 2xl:h-[1400px] md:min-h-[550px] min-h-[500px] min-w-full -z-10 from-primary-bg-blend via-purple-50 to-primary-bg-blend from-25% to-75% blur-2xl  rounded-b-full'>
      </div>

      <div className='bg-transparent md:pt-8 lg:px-14 px-4'>
        <Header />
      </div>
      <div className='px-16'>
        <div className='min-h-[220px] bg-blue-400 rounded-2xl flex flex-col items-center font-poppins lg:mx-20 my-4 '>
          <p className='text-white text-[40px] mt-4 font-semibold'>$339</p>
          <p className='my-2 text-gray-700'>Total Wallet Value</p>
          <hr className='w-5/6 h-[1px] flex mx-auto' />
          <div className='my-auto flex'>
            <img src={copy} alt="" className='cursor-pointer' />
            <p className='text-white lg:text-[15px] text-[12px]'>0x9434843ffwd9434-4f-049449448</p>
          </div>

        </div>


      </div>
      <div className='lg:px-16 px-2'>
        <div className='min-h-[220px] bg-gradient-to-b from-gray-300 to-gray-50 rounded-2xl flex flex-col items-center font-poppins my-4 '>
          <div className='flex grid-cols-3 lg:gap-64 gap-2 lg:my-8 my-4'>
            <div>
              <p className='lg:text-[15px] text-[12px]'>Project Invested</p>
              <p className='flex justify-center font-semibold'>12</p>
            </div>
            <div>
              <p className='lg:text-[15px] text-[12px]'>Project Invested</p>
              <p className='flex justify-center font-semibold' >12</p>
            </div>
            <div>
              <p className='lg:text-[15px] text-[12px]'>Project Invested</p>
              <p className='flex justify-center font-semibold'>12</p>
            </div>


          </div>
          <div className='flex grid-cols-5 lg:gap-40 gap-2 lg:mx-auto'>
            <div>
              <p className='lg:text-[15px] text-[10px] font-semibold'>Project Name</p>
              <p className='flex justify-center font-semibold lg:text-[15px] text-[10px]'>BGMSK</p>
            </div>
            <div>
              <p className='lg:text-[15px] text-[10px] font-semibold'>Date Invested</p>
              <p className='flex justify-center lg:text-[15px] text-[10px]' >2024:05:07 UTC</p>
            </div>
            <div>
              <p className='lg:text-[15px] text-[10px] font-semibold'>Amount</p>
              <p className='flex justify-center lg:text-[15px] text-[10px]'>12 SOL</p>
            </div>
            <div>
              <p className='lg:text-[15px] text-[10px] font-semibold'>Transaction Hash</p>
              <div className='flex'>
                <img src={copyBlack} alt="" className='cursor-pointer'/>
                <p className='flex justify-center lg:text-[15px] text-[10px]'>test_0x45</p>
              </div>
            </div>
            <div>
              <p className='lg:text-[15px] text-[10px]'></p>
              <Link><p className='flex justify-center font-semibold text-[8px] bg-blue-600 px-2 py-1 text-white rounded-full items-center lg:mt-5 mt-3'>View Project</p></Link>
            </div>



          </div>


        </div>
      </div>


      <NewsLetter />

      <Footer />


    </div>
  )
}

export default ProfilePage
