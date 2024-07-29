import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SupportedChain from '../components/SupportedChain'
import LaunchNow from '../components/LaunchNow'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


const LandingPage = () => {
  return (
    <div className='h-screen bg-white sm:w-full'>
      <div>
        <div className='w-full md:bg-gradient-to-tr from-white via-white to-primary-bg-blend from-25% lg:to-75% lg:px-16  bg-gradient-radial'>
          <div className='hidden md:block bg-transparent md:pt-8 px-14'>
            <Header />
          </div>
          {/* Hero */}
          <Hero />
        </div>
      </div>
      <SupportedChain />
      <LaunchNow />
      <NewsLetter />
      <Footer />


    </div>
  )
}

export default LandingPage
