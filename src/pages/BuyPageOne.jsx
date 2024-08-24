import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { arrowLeft, arrowLeftSVg, arrowRight, arrowRightSVg } from '../assets'
import ProjectLaunched from '../components/ProjectLaunched'

const BuyPageOne = () => {
  const cardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dexes = ["PancakeSwap", "SushiSwap", "UniSwap", "OkuSwap"]
  return (
    <div className='relative w-full h-screen  '>
      <div className='bg-gradient-radial bg-cover absolute 2xl:h-[1400px] md:min-h-[550px] min-h-[500px] min-w-full -z-10 from-primary-bg-blend via-purple-50 to-primary-bg-blend from-25% to-75% blur-2xl  rounded-b-full'>

      </div>
      <div className=''>
        <div className='bg-transparent md:pt-8 lg:px-14 px-4'>
          <Header />
        </div>
        <ProjectLaunched />
        <div className='flex justify-start lg:space-x-10 lg:ml-[7%] my-5'>
          <div className='flex justify-between'>
            <div className='flex space-x-4'>
              <Link to="/">
                <div className='w-[35px] h-[35px] rounded-full bg-gray-300 flex p-2 hover:bg-primary-bg-blend cursor-pointer'>
                  <img src={arrowLeftSVg} alt="" className='text-button-blue' />
                </div>
              </Link>
              <div className='w-[35px] h-[35px] rounded-full bg-gray-300 flex p-2 hover:bg-primary-bg-blend cursor-pointer'>
                <img src={arrowRightSVg} alt="" className='text-button-blue' />
              </div>
            </div>




          </div>
          <div className='flex items-center space-x-4 '>
            <p>Filter</p>
            <select name="" className=' px-2 py-2 w-full bg-gray-200 rounded-2xl border-none font-poppins lg:text-[14px] text-[10px] outline-none' id="">
              {dexes?.map((e, i) => <option className='' key={i}>{e}</option>)}

            </select>
          </div>
          <div className='flex items-center space-x-4 '>
            <p>Filter</p>
            <select name="" className=' px-2 py-2 w-full bg-gray-200 rounded-2xl border-none font-poppins lg:text-[14px] text-[10px] outline-none' id="">
              {dexes?.map((e, i) => <option className='' key={i}>{e}</option>)}

            </select>
          </div>

        </div>
        <div className='grid lg:grid-cols-3 grid-cols-2 gap-3 lg:px-24 my-6'>
          {cardCount?.map((e, i) => <ProjectCard />)}

        </div>

      </div>


      <div className='bg-white p-5 rounded-2xl flex items-center  justify-between shadow-slate-400 shadow-2xl mx-auto lg:w-4/6 w-full my-4'>
        <p><img src={arrowLeft} alt="" className='w-[20px] cursor-pointer' /></p>
        {cardCount?.map((e, i) => <p className='lg:mx-4 px-2 rounded-sm hover:bg-blue-700 hover:text-white cursor-pointer'>{e}</p>)}
        <p><img src={arrowRight} alt="" className='lg:w-[20px] cursor-pointer' /></p>

      </div>


      <Footer />


    </div>
  )
}

export default BuyPageOne
