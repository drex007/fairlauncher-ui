import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SupportedChain from '../components/SupportedChain'


const LandingPage = () => {
  return (
    <div className='h-screen bg-white'>
      <div>
        <div className='bg-gradient-to-tr from-white via-white to-primary-bg-blend from-25% to-75% px-18'>
          <div className='bg-transparent pt-8 px-14'>
            <Header />
          </div>
          {/* Hero */}
          <Hero />
        </div>
      </div>
      <SupportedChain />


    </div>
  )
}

export default LandingPage
