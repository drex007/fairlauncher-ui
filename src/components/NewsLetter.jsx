import React from 'react'

const NewsLetter = () => {
  return (
    <div className='px-16 my-8 h-[140px] py-4'>
      <div className='bg-black  h-full rounded-2xl flex flex-1'>

        <div className='flex-[0.5]  text-white font-poppins flex flex-col justify-center  font-semibold ml-10  items-start text-[15px]'>
          <p className=''>Join Our Newsletter To</p>
          <p className=''> Keep Up To Date With Us!</p>

        </div>
        <div className='flex-[0.5] flex items-center space-x-4'>

          <input type="text" className='flex h-[45px]   rounded-full px-4 w-1/2 bg-white items-center font-poppins text-black text-[15px]' placeholder='Enter Mail' />

          <button className='bg-primary-yellow py-2 px-2 h-[45px] w-1/4 rounded-full text-[15px] font-semibold text-primary-black-text'> Subscribe </button>
        </div>
      </div>

    </div>
  )
}

export default NewsLetter