import React from 'react'
import ProjectLaunched from './ProjectLaunched'
import UniqueFeatures from './UniqueFeatures'


const SupportedChain = () => {
    return (
        <div className='overflow-hidden w-full'>
            <div className='bg-gradient-to-b absolute min-w-full 2xl:h-[1500px] min-h-[850px] rounded-full -z-10 2xl:-translate-x-[55%] -translate-x-[45%] translate-y-[5%]  from-sky-50 via-gray-50 blur-2xl to-sky-100 from-25% to-75%'>
            </div>
            <div>

                <div className='grid justify-center '>
                    <p className='2xl:text-[40px] font-poppins text-primary-text-color tracking-wide'>Supported Chains</p>
                </div>

                <div>
                    <div className='flex lg:space-x-10 space-x-2 justify-center mt-5 font-poppins 2xl:text-[40px] lg:text-[20px] text-[15px] text-primary-black-text'>
                        <div>
                            <p className='font-poppins font-semibold'>BNB CHAIN</p>
                        </div>
                        <div className='font-semibold'>
                            <p>BASE</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>BLAST</span></p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>ETHEREUM</span></p>
                        </div>
                    </div>
                    <div className='2xl:text-[40px] flex lg:space-x-10 space-x-3  justify-center mt-5 text-primary-black-text'>
                        <div>
                            <p>POLYGON</p>
                        </div>
                        <div>
                            <p>ARBITRUM</p>
                        </div>
                        <div>
                            <p>FANTOM</p>
                        </div>
                    </div>
                </div>
                <ProjectLaunched />
                <UniqueFeatures />

            </div>
        </div>
    )
}

export default SupportedChain
