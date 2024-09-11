import React from 'react'
import { bgRocket, gstring, ios, medium, nextdoor, parma, pointer, reload, rocket } from '../assets'

const LaunchNow = () => {
    return (
        <div className='2xl:px-32 px-16 pb-3'>
            <div className='flex lg:justify-start justify-center'>
                <p className='2xl:text-[60px] md:text-[35px]  text-[20px] font-semibold text-primary-black-text font-poppins md:ml-8 mb-4'>Launch <span className='text-blue-600'>Now</span> </p>
                <img src={pointer} alt="" className='2xl:my-10 md:ml-2 md:w-[40px] md:my-6 w-[20px] my-4 ' />
            </div>
            <div className='2xl:h-[600px] md:h-[500px] h-[550px] bg-gray-100 md:rounded-lg rounded-2xl w-full flex flex-1'>
                <div className='hidden  2xl:h md:block 2xl:flex-[0.25] flex-[0.25] h-full 2xl:bg-contain bg-cover  rounded-md  bg-no-repeat w-full' style={{ backgroundImage: `url(${bgRocket})` }}>
                    <img src={rocket} alt="" className='flex justify-start absolute 2xl:w-[700px] md:w-[600px] 2xl:mt-0 -ml-24 rotate-8 z-10' />

                </div>
                <div className='2xl:flex-[0.75] md:flex-[0.7] 2xl:mx-0 mx-auto flex flex-col  '>
                    <div className='px-16 flex md:justify-between my-8 justify-center'>
                        <p className='hidden md:block font-poppins 2xl:text-[25px] 2xl:text-primary-black-text'></p>
                        <p className='bg-blue-700 rounded-full h-[30px] w-[30px] p-2 cursor-pointer'><img src={reload} alt="" /></p>
                    </div>
                    <div className=' md:flex md:justify-center'>
                        <div className='md:flex flex-col  items-center bg-blue-600 rounded-xl md:w-1/5 2xl:py-16 py-10 md:mx-4 px-2 justify-center font-poppins text-white 2xl:text-[20px] text-[13px] font-semibold'>
                            <p className='flex justify-center'>List On</p>
                            <p className='flex justify-center'>Fairlauncher</p>

                        </div>
                        <div className='md:flex flex-col items-center bg-blue-600 rounded-xl md:w-1/5 2xl:py-16 py-10 md:mx-4 px-4 justify-center font-poppins text-white  2xl:text-[20px]  text-[13px] font-semibold md:mt-0 mt-2'>
                            <p className='flex justify-center'>Buy On</p>
                            <p className='flex justify-center'>Fairlauncher</p>

                        </div>

                    </div>

                    <div className='flex flex-col items-center  justify-center md:mt-8'>
                        <p className='font-poppins text-black 2xl:text-[20px] md:text-[13px] text-[10px] '>Connect Wallet To Start</p>
                        <img src={gstring} alt="" width={50} />

                        <button className='bg-primary-yellow py-4 2xl:px-16 2xl:py-6 px-8 rounded-full text-blue-700 md:text-[13px] text-[10px] font-poppins font-semibold mt-8'> Connect Wallet</button>
                    </div>


                </div>

            </div>
            {/* 
            <div className='w-full flex flex-col  items-center mt-32'>
                <p className='flex justify-center font-poppins my-4 text-primary-black-text 2xl:text-[30px] 2xl:my-8 md:text-[20px] text-[15px]'>Partners  Projects </p>
                <div className='grid grid-cols-4 lg:space-x-16 space-x-8 items-center 2xl:my-4'>
                    <img src={parma} alt="" className='2xl:w-[150px] md:w-[90px] w-[40px]' />
                    <img src={ios} alt="" className='2xl:w-[150px] md:w-[90px] w-[40px]' />
                    <img src={nextdoor} alt="" className='2xl:w-[200px] md:w-[120px] w-[40px]' />
                    <img src={medium} alt="" className='2xl:w-[200px] md:w-[120px] w-[40px]' />

                </div>
            </div> */}
        </div>
    )
}

export default LaunchNow