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
        <div className='w-full bg-gradient-to-tr from-white via-white to-primary-bg-blend from-25% to-75% px-16'>
          <div className='hidden lg:block bg-transparent pt-8 px-14'>
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
