import React from 'react'
import { logo } from '../assets'

const Header = () => {
  return (
    <div className='bg-white rounded-2xl flex justify-between py-6 px-16'>
      <div>
        <img src={logo} alt=""  width={150} className='cursor-pointer' />
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
  )
}

export default Header
