import React, { useState } from 'react'

const ProjectLaunched = () => {
    const [count, setCount] = useState(0)

    const setCountHandler = (countParam) => {
        setCount(countParam)
    }
    const dotCount = [0, 1, 2, 3, 4]
    return (
        <div className='bg-transparent'>
            <div className='grid'>
                <p className='flex justify-center text-[45px] font-poppins font-semibold pt-16 pb-4 space-x-2'> <span className='text-blue-600'> Projects </span> <span className='text-primary-text-color'>Launched</span></p>
                <div className='w-2/5 flex justify-center items-center space-x-8 mx-auto'>
                    <p>..</p>
                    <div className='w-full bg-black h-3/2 mx-auto my-1 rounded-2xl flex flex-1 '>
                        <div className='flex-[0.5] bg-gray-300 m-3 rounded-xl'>

                        </div>
                        <div className='flex-[0.5] my-3 mr-3 rounded-xl py-2'>
                            <p className='font-poppins text-[18px] text-primary-yellow'>BigMusk Cats</p>
                            <p className='font-poppins text-[12px] text-white tracking-wider mt-3'>Ensuring Transparent, Secure, and Equitable Token Distribution For All.</p>

                            <button className='py-2 px-10 bg-primary-yellow text-blue-600 font-semibold rounded-3xl text-[10px] my-2'>Buy Now</button>

                        </div>
                    </div>
                    <p>..</p>
                </div>
                <div className='flex justify-center space-x-2 my-3'>
                    {dotCount?.map((e, i) => <p className={`${count === i ? 'bg-blue-600' : 'bg-gray-500'} h-[10px] w-[10px] rounded-full`} onClick={(e) => setCountHandler(i)}></p>)}
                </div>

            </div>

        </div>
    )
}

export default ProjectLaunched
