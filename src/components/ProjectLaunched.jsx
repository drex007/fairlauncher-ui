import React, { useState } from 'react'
import { arrowLeft, arrowRight } from '../assets'

const ProjectLaunched = () => {
    const [count, setCount] = useState(0)

    const setCountHandler = (countParam) => {
        setCount(countParam)
    }
    const dotCount = [0, 1, 2, 3]
    return (
        <div className='bg-transparent'>
            <div className='grid'>
                <p className='flex justify-center lg:text-[45px] text-[30px] font-poppins font-semibold pt-16 pb-4 space-x-2'> <span className='text-blue-600'> Projects </span> <span className='text-primary-text-color'>Launched</span></p>
                <div className='overflow-hidden lg:w-2/5 flex justify-center items-center space-x-8 mx-auto'>
                    <img src={arrowLeft} alt="" width={20}  className='cursor-pointer'/>
                    <div className='w-full bg-black lg:h-3/2  h-4/3 mx-auto my-1 rounded-2xl flex flex-1 '>
                        <div className='flex-[0.5] bg-gray-300 m-3 rounded-xl'>

                        </div>
                        <div className='flex-[0.5] my-3 mr-3 rounded-xl py-2'>
                            <p className='font-poppins lg:text-[18px] text-[12px] text-primary-yellow'>BigMusk Cats</p>
                            <p className='font-poppins lg:text-[12px] text-[8px] text-white tracking-wider md:mt-3 mt-1'>Ensuring Transparent, Secure, and Equitable Token Distribution For All.</p>

                            <button className='py-2 md:px-10 px-4 bg-primary-yellow text-blue-600 font-semibold rounded-3xl md:text-[10px] text-[8px] my-2'>Buy Now</button>

                        </div>
                    </div>
                    <img src={arrowRight} alt="" width={20} className='cursor-pointer'/>
                </div>
                <div className='flex justify-center space-x-2 my-3 items-center'>
                    {dotCount?.map((e, i) => <p className={`${count === i ? 'bg-blue-600 h-[12px] w-[12px] ' : 'bg-gray-300 h-[8px] w-[8px]'}  rounded-full`} onClick={(e) => setCountHandler(i)}></p>)}
                </div>

            </div>

        </div>
    )
}

export default ProjectLaunched
