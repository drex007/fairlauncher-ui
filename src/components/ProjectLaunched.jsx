import React, { useState } from 'react'
import { arrowLeft, arrowRight } from '../assets'
import Slides from './Slides'


const ProjectLaunched = () => {
    const [count, setCount] = useState(0)

    const setCountHandler = (countParam) => {
        setCount(countParam)
    }
    const dotCount = [0, 1, 2, 3]

    const prev = () => setCount((count) => (count === 0 ? dotCount.length - 1 : count - 1))
    const next = () => setCount((count) => (count === dotCount.length - 1 ? 0 : count + 1))




    return (
        <div className='bg-transparent'>
            <div className='grid'>
                <p className='flex justify-center lg:text-[35px] text-[25px] font-poppins font-semibold pt-16 pb-4 space-x-2'> <span className='text-blue-600'> Projects </span> <span className='text-primary-text-color'>Launched</span></p>
                <div className='lg:w-2/5 w-full flex justify-center items-center lg:space-x-4 lg:mx-auto space-x-1 px-2'>
                    <img src={arrowLeft} alt="" width={20} className='cursor-pointer' onClick={prev} />

                    <Slides slides={dotCount} current={count} />

                    <img src={arrowRight} alt="" width={20} className='cursor-pointer' onClick={next} />
                </div>
                <div className='flex justify-center space-x-2 my-3 items-center'>
                    {dotCount?.map((e, i) => <p className={`${count === i ? 'bg-blue-600 h-[12px] w-[12px] ' : 'bg-gray-300 h-[8px] w-[8px]'}  rounded-full`}></p>)}
                </div>

            </div>

        </div>
    )
}

export default ProjectLaunched
