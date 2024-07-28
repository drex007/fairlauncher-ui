import React from 'react'
import { gstring, ios, medium, nextdoor, parma, pointer, rocket } from '../assets'

const LaunchNow = () => {
    return (
        <div className='px-16 pb-3'>
            <div className='flex justify-start'>
                <p className='text-[35px] font-semibold text-primary-black-text font-poppins ml-8 mb-4'>Launch <span className='text-blue-600'>Now</span> </p>
                <img src={pointer} alt="" className='ml-10 w-[40px] my-8' />
            </div>
            <div className=' h-[500px] bg-gray-100 rounded-md w-full flex flex-1'>
                <div className='flex-[0.25] h-full bg-blue-600 rounded-md '>
                    <img src={rocket} alt="" className='flex justify-start absolute w-[550px] mt-8 -ml-24 rotate-8 z-10'/>

                </div>
                <div className='flex-[0.7]'>
                    <div className='px-16 flex justify-between my-8'>
                        <p className='font-poppins'>Home</p>
                        <p className='bg-blue-700 rounded-full h-[40px] w-[40px]'></p>
                    </div>
                    <div className=' flex justify-center'>
                        <div className='flex flex-col items-center bg-blue-600 rounded-xl w-1/5 py-10 mx-4 px-2 justify-center font-poppins text-white text-[13px] font-semibold'>
                            <p>List On</p>
                            <p>Fairlauncher</p>

                        </div>
                        <div className='flex flex-col items-center bg-blue-600 rounded-xl w-1/5 py-10 mx-4 px-4 justify-center font-poppins text-white text-[13px] font-semibold'>
                            <p>List On</p>
                            <p>Fairlauncher</p>

                        </div>

                    </div>

                    <div className='flex flex-col items-center  justify-center mt-8'>
                        <p className='font-poppins text-black '>Connect Wallet To Start</p>
                        <img src={gstring} alt="" width={50} />

                        <button className='bg-primary-yellow py-4 px-8 rounded-full text-blue-700 text-[13px] font-poppins font-semibold mt-8'> Connect Wallet</button>
                    </div>
                    <p className='flex justify-start px-16 font-poppins text-primary-black-text'>Need help ?</p>

                </div>

            </div>

            <div className='w-full flex flex-col  items-center mt-32'>
                <p className='flex justify-center font-poppins my-4 text-primary-black-text text-[20px]'>Partners  Projects </p>
                <div className='grid grid-cols-4 space-x-16 items-center'>
                    <img src={parma} alt="" width={90} />
                    <img src={ios} alt="" width={90} />
                    <img src={nextdoor} alt="" width={120} />
                    <img src={medium} alt="" width={120} />

                </div>
            </div>
        </div>
    )
}

export default LaunchNow