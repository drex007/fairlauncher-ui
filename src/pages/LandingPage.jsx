import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SupportedChain from '../components/SupportedChain'
import LaunchNow from '../components/LaunchNow'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'



const LandingPage = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='lg:bg-gradient-to-br bg-gradient-radial bg-cover absolute 2xl:h-[1400px] md:min-h-[550px] min-h-[500px] min-w-full -z-10 from-primary-bg-blend via-purple-50 to-primary-bg-blend from-25% to-75% 2xl:translate-x-[30%] md:translate-x-60 2xl:blur-3xl blur-2xl  rounded-b-full'>

      </div>
      <div className=''>
        <div className='bg-transparent md:pt-8 lg:px-14 px-4'>
          <Header />
        </div>

        <Hero />
      </div>
      <SupportedChain />
      <LaunchNow />
      <NewsLetter />
      <Footer />


    </div>
  )
}

export default LandingPage
