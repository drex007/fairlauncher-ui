import React, { useState, useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { arrowRightSVg, cloud2, cloude1, home2, warning } from '../assets'
import ProgressBar from "@ramonak/react-progress-bar";
import { AppContext } from '../contextProvider'
import BuyProjectModal from '../modals/BuyProjectModal'
import NewsLetter from '../components/NewsLetter'

const AboutPage = () => {
  const { modals, setModals } = useContext(AppContext);
  const cardCount = [1, 2, 3]

  const [tokenSupply, setTokenSupply] = useState(false)
  const [toggleAddress, setToggleAddress] = useState(false)
  const [toggleBuyProjectInfo, setToggleButProjectInfo] = useState(false)



  return (
    <>
      {modals.showBuyProjectModal && (<BuyProjectModal />)}

      <div className='relative w-full font-poppins '>
        <div className='bg-gradient-radial bg-cover absolute 2xl:h-[900px] md:min-h-[600px] min-h-[500px] min-w-full -z-10 from-primary-bg-blend via-purple-50 to-primary-bg-blend from-25% to-75% blur-2xl  rounded-b-full'>

        </div>
        <div className=''>

          <div className='bg-transparent md:pt-8 lg:px-10 px-2'>
            <Header />
          </div>
          <div className='relative lg:px-[30%] px-4 lg:mb-[30%] mb-8 mt-8'>
            <p className='lg:text-[60px] 2xl:text-[80px]  text-[30px] font-semibold flex justify-center'>Our Mission Is </p>
             
            <p className='lg:text-[60px] 2xl:text-[80px] text-[30px] font-semibold flex justify-center'>To Make Life Easy</p>
            <p className='lg:text-[60px] 2xl:text-[80px]  text-[30px] font-semibold flex justify-center'> and Fair</p>
            <img src={home2} alt="" className='hidden  lg:block  absolute top-0 lg:-ml-[5%] 2xl:-ml-[1%] 2xl:mt-[12%] lg:mt-[9%]' />
            <img src={cloud2} alt="" className='hidden  lg:block absolute top-0 -ml-[20%]' />
            <img src={cloude1} alt="" className='hidden lg:block absolute top-0 ml-[38%] -mt-[2%]' />
          </div>

          <div className='lg:px-[20%] px-8 lg:pt-24 2xl:pt-2'>
            <hr className='h-[2px] bg-blue-800 lg:my-24 2xl:my-8 ' />
          </div>
          <div className='lg:flex flex-1 px-4 lg:px-[15%] 2xl:2xl:px-[15%]'>
            <p className='flex-[0.3] w-full font-semibold text-gray-700 text-[25px]'>About FairLauncher</p>
            <div className='flex-[0.7] w-full'>
              <p className='w-full text-gray-700'>
                Globally, the most recognized Web3 concepts are the Metaverse (36%) and NFTs (34%), while Web3 itself is the least known, familiar to only 24% of respondents​ (McKinsey & Company)​​ (ethereum.org)​​ (Coursera)​Globally, the most recognized Web3 concepts are the Metaverse (36%) and NFTs (34%), while Web3 itself is the least known, familiar to only 24% of respondents​ (McKinsey & Company)​​ (ethereum.org)​​ (Coursera)​Globally.
              </p>
            </div>

          </div>


        </div>
        <NewsLetter />
        <Footer />


      </div>

    </>
  )
}

export default AboutPage
