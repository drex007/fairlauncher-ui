import React from 'react'
import ProjectLaunched from './ProjectLaunched'
import UniqueFeatures from './UniqueFeatures'


const SupportedChain = () => {
    return (
        <div className='overflow-hidden w-full'>
            <div className='bg-gradient-to-b absolute min-w-full min-h-[850px] rounded-full -z-10 -translate-x-[45%] translate-y-[5%]  from-sky-50 via-gray-50 blur-2xl to-sky-100 from-25% to-75%'>
            </div>
            <div>

                <div className='grid justify-center '>
                    <p className='font-poppins text-primary-text-color tracking-wide'>Supported Chains</p>
                </div>

                <div>
                    <div className='flex lg:space-x-10 space-x-2 justify-center mt-5 font-poppins lg:text-[20px] text-[15px] text-primary-black-text'>
                        <div>
                            <p className='font-poppins'> <span className='font-semibold'>BNB</span> CHAIN</p>
                        </div>
                        <div>
                            <p>BASE</p>
                        </div>
                        <div>
                            <p><span className='font-semibold'>BLAST</span> CHAIN</p>
                        </div>
                    </div>
                    <div className='flex lg:space-x-10 space-x-3  justify-center mt-5'>
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
