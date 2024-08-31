import React, { useState } from 'react'
import { arrowRight, arrowRightSVg, copy, human, logo, menu, profile } from '../assets'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const toggleShowNav = () => {
    setShowNav(!showNav)
  }

  const toggleShowProfile = () => {
    setShowProfile(!showProfile)
  }

  return (
    <div className=''>

      <div className='relative lg:hidden  grid grid-cols-3   mt-8  items-center px-2 '>
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
              <Link to="/about"> <a href="" className='my-2'>About</a></Link>

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
          <Link to="/"> <img src={logo} alt="" className='cursor-pointer w-[150px] 2xl:w-[180px]' /></Link>
        </div>

        <div className='flex space-x-6 cursor-pointer'>
          <Link to="/buy"><p className='cursor-pointer 2xl:text-[25px]'>Buy</p></Link>
          <Link to="/about"><p className='cursor-pointer 2xl:text-[25px]'>About</p></Link>
          <Link to="/listing">
            <p className='2xl:text-[25px] cursor-pointer'>List</p>
          </Link>
          {/* <p className='hover:cursor-pointer 2xl:text-[25px]'>Partnered Launch</p> */}

        </div>
        <div className='relative bg-blue-600 flex px-2 rounded-full py-2 items-center z-50'>
          <img src={human} className='cursor-pointer max-w-[30px]' onMouseOver={() => setShowProfile(true)} />
          <div className='h-1/2 w-[1px] bg-white my-auto ml-1'></div>
          <p className='cursor-pointer max:w-[120px] text-primary-yellow font-poppins px-4 text-[10px] font-semibold'> Connect Wallet</p>
          {showProfile && <div className='min-h-[280px] w-[250px] mr-4 rounded-md bg-blue-400 shadow-xl absolute mt-80 p-2' onMouseLeave={() => setShowProfile(false)}>
            <Link to="/profile">

              <div className=' flex h-[50px] bg-white rounded-md justify-between cursor-pointer'>
                <div className='flex'>
                  <img src={profile} alt="" className='items-center mt-2' />
                  <p className='items-center mt-2 text-[16px] font-poppins'>View Profile</p>

                </div>

                <img src={arrowRight} alt="" className='h-[30px] mt-1' />
              </div>
            </Link>
            {/* Line */}
            <hr className='h-[1px] bg-white mt-4' />

            <div className='flex justify-between font-poppins items-center mb-2'>
              <div>
                <p className='text-white text-[35px] font-semibold'>$339</p>
                <p className='text-[10px]'>Total Wallet Value</p>

              </div>
              <div className='flex items-center'>
                <img src={copy} alt="" className='cursor-pointer' />
                <p className='text-white text-[10px]'>0x9349505</p>
              </div>
            </div>

            <div className=' flex h-[50px] bg-white rounded-md justify-between cursor-pointer'>
              <div className='flex'>
                <img src={profile} alt="" className='items-center mt-2' />
                <p className='items-center mt-2 text-[16px] font-poppins'>SOL</p>

              </div>

              <div className='text-[12px] mr-1 mt-1'>
                <p>0.002</p>
                <p>$0.2</p>

              </div>

            </div>
            <div className=' flex h-[50px] bg-white rounded-md justify-between cursor-pointer my-2'>
              <div className='flex'>
                <img src={profile} alt="" className='items-center mt-2' />
                <p className='items-center mt-2 text-[16px] font-poppins'>SOL</p>

              </div>

              <div className='text-[12px] mr-1 mt-1'>
                <p>0.002</p>
                <p>$0.2</p>

              </div>
            </div>


          </div>}
        </div>

      </div>
    </div >
  )

}

export default Header
