import React from 'react'
import { logo, menu } from '../assets'

const Header = () => {
  return (
    <div>
      <div className='lg:hidden  grid grid-cols-3   mt-8  items-center '>

        <div className='bg-white w-[45px] p-2 flex justify-center rounded-xl'>
          <img src={menu} alt="" width={150} className='cursor-pointer' />
        </div>


        <img src={logo} alt="" width={150} className='cursor-pointer -ml-6' />

        <button className='bg-button-blue text-primary-yellow font-poppins md:px-4 px-1 py-4  rounded-3xl lg:text-[10px]  text-[8px] font-semibold'>Connect Wallet</button>


      </div>
      {/* Heaader for Large Screen */}
      <div className='hidden lg:flex bg-white rounded-2xl  justify-between py-6 px-16'>
        <div>
          <img src={logo} alt="" width={150} className='cursor-pointer' />
        </div>
        <div className='flex space-x-8 font-poppins items-center'>
          <a href="">Buy</a>
          <a href="">List</a>
          <a href="">Partnered Launch</a>
          <a href="">About</a>
        </div>
        <div>
          <button className='bg-button-blue text-primary-yellow font-poppins px-4 py-3 rounded-2xl text-[10px] font-semibold'>Connect Wallet</button>
        </div>


      </div>
    </div>
  )
}

export default Header
