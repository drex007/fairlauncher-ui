import React from 'react'

const NewsLetter = () => {
  return (
    <div className='px-16 my-8 md:h-[140px] h-[150px] py-4 md:w-full'>
      <div className='bg-black  h-full rounded-2xl md:flex md:flex-1 px-8 py-4'>

        <div className='md:flex-[0.5] text-white font-poppins flex flex-col items-center justify-center  font-semibold md:ml-10  md:items-start md:text-[15px] mb-4 text-[12px] mt-2'>
          <p className=''>Join Our Newsletter To</p>
          <p className=''> Keep Up To Date With Us!</p>

        </div>
        <div className='flex-[0.5] flex items-center space-x-2 justify-center'>

          <input type="text" className='flex md:h-[45px] h-[30px]  rounded-full px-4 md:w-1/2  bg-white items-center font-poppins text-black md:text-[15px] text-[10px] w-2/3' placeholder='Enter Mail' />

          <button className='bg-primary-yellow py-2 px-2 md:h-[45px] h-[30px] md:w-1/4 rounded-full md:text-[15px] text-[10px] font-semibold text-primary-black-text'> Subscribe </button>
        </div>
      </div>

    </div>
  )
}

export default NewsLetter