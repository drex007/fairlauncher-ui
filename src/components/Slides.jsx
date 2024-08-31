import React, { useState } from 'react'

const Slides = ({ slides, current }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className='relative lg:w-full w-4/5  overflow-hidden'>
            <div
                className='flex transition-transform duration-1000 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className='w-full flex-shrink-0'>
                        <div className='bg-black 2xl:h-[300px] lg:h-3/2 h-4/3 mx-auto my-1 rounded-2xl flex flex-1'>
                            <div className='bg-gray-300 flex-[0.5]  m-3 rounded-xl'>
                            </div>
                            <div className='flex-[0.5] my-3 mr-3 rounded-xl py-2'>
                                <p className='font-poppins 2xl:text-[30px] lg:text-[15px] text-[11px] text-primary-yellow'>BigMusk Cats</p>
                                <p className='font-poppins 2xl:text-[20px] lg:text-[11px] text-[8px] text-white tracking-wider md:mt-2 mt-1 2xl:w-4/5'>Network: ETH</p>
                                <p className='font-poppins 2xl:text-[20px] lg:text-[11px] text-[8px] text-white tracking-wider md:mt-2 mt-1 2xl:w-4/5'>Listing Price: $0.1</p>
                                <p className='font-poppins 2xl:text-[20px] lg:text-[11px] text-[8px] text-white tracking-wider md:mt-2 mt-1 2xl:w-4/5'>Listing Date: 2025-09-01</p>
                                <button className='2xl:px-16 2xl:py-4 2xl:my-8 2xl:rounded-full py-2 md:px-10 px-4 bg-primary-yellow text-blue-600 font-semibold rounded-3xl md:text-[10px] text-[8px] lg:my-3 my-2'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Add navigation buttons if needed */}
        </div>
    )
}

export default Slides