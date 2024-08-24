import React, { useState } from 'react'
import { logo, menu } from '../assets'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const toggleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className=''>
      <div className='relative lg:hidden  grid grid-cols-3   mt-8  items-center '>
        <div className=' bg-white w-[45px] p-2 flex justify-center rounded-xl cursor-pointer' onClick={() => toggleShowNav()}>
          <img src={menu} alt="" width={150} className='' />
        </div>
        {showNav &&
          <div className='z-50  absolute bg-white  w-3/4 rounded-2xl flex flex-col items-start -left-2  -top-4 pt-8 pb-4 px-4 transition ease-in-out delay-5000'>
            <img src={logo} alt="" width={120} className='cursor-pointer -mt-1 mb-8' onClick={() => toggleShowNav()} />
            <div className='flex flex-col  font-poppins '>
              <a href="" className='my-2'>Buy</a>
              <Link to="/listing">
                <a href="" className='my-2'>List</a>
              </Link>
              {/* <a href="" className='my-2'>Partnered Launch</a> */}
              <a href="" className='my-2'>About</a>

              <button className='py-3 px-10 font-semibold text-primary-yellow rounded-3xl bg-blue-600 font-poppins text-[10px] mt-8'> Buy</button>
              <button className='py-3 px-10 font-semibol bg-primary-yellow rounded-3xl text-blue-600 font-poppins font-semibold text-[10px] my-1'> List Project</button>
            </div>

          </div>}


        <img src={logo} alt="" width={150} className='cursor-pointer -ml-6' />

        <button className='bg-button-blue text-primary-yellow font-poppins md:px-4 px-1 py-4  rounded-full lg:text-[10px]  text-[8px] font-semibold'>Connect Wallet</button>


      </div>
      {/* Heaader for Large Screen */}
      <div className='hidden lg:flex bg-white rounded-2xl justify-between py-6 2xl:px-24 px-16 2xl:py-10'>
        <div>
          <img src={logo} alt="" className='cursor-pointer w-[150px] 2xl:w-[180px]' />
        </div>

        <div className='flex space-x-6 cursor-pointer'>
          <Link to="/buy"><p className='cursor-pointer 2xl:text-[25px]'>Buy</p></Link>
          <p className='cursor-pointer 2xl:text-[25px]'>About</p>
          <Link to="/listing">
            <p className='2xl:text-[25px] cursor-pointer'>List</p>
          </Link>
          {/* <p className='hover:cursor-pointer 2xl:text-[25px]'>Partnered Launch</p> */}

        </div>
        <div>
          <button className='cursor-pointer bg-button-blue text-primary-yellow font-poppins px-4 2xl:px-16  2xl:py-6 py-3 rounded-full 2xl:text-[15px] text-[10px] font-semibold'>Connect Wallet</button>
        </div>


      </div>
    </div >
  )

}

export default Header
