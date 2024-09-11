import React, { useContext } from 'react'
import { reload } from '../assets'
import { AppContext } from '../contextProvider'

const BuyProjectModal = () => {
  const { modals, setModals } = useContext(AppContext)
  return (
    <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-poppins'>
      <div className='lg:w-1/4 w-full bg-gray-100 rounded-xl min-h-[350px] max-h-[600px] px-4 py-4'>
        <div className='flex justify-between mb-2'>
          <img src={reload} alt="" className='bg-button-blue rounded-full p-2 w-[30px]' />
          <p className='cursor-pointer' onClick={() => setModals({ ...modals, showBuyProjectModal: false })}>x</p>

        </div>
        <p className='font-semibold text-[28px] text-gray-700 '>Enter The Amount Of Token You Want To Buy</p>
        <p className='text-[12px]'>Enter the amount of Sol you want to use to purchase <span className='font-semibold'>BGMSK</span></p>
        {/* InputLine */}
        <div className='flex flex-1 bg-gray-300 rounded-full w-full h-[35px] my-2 items-center px-2'>
          <div className='flex-[0.2] bg-transparent'>
            <select className='rounded-full px-2 bg-white outline-none text-[15px]'>
              <option>SOL</option>
              <option>BNB</option>
              <option>ETH</option>
            </select>

          </div>
          <div className='flex-[0.6] bg-transparent px-2'>
            <input type="number" min={0} className='w-full outline-none bg-transparent' placeholder='0' />

          </div>
          <div className='flex-[0.2] bg-transparent'>
            <p className='font-semibold text-[15px] cursor-pointer'>MAX</p>
          </div>

        </div>
        <div className='w-full text-gray-700'>
          <div className='flex justify-between'>
            <p className='font-semibold text-[12px]'>Max Buy</p>
            <p className='text-[12px]'>100,000,000</p>

          </div>
          <div className='flex justify-between'>
            <p className='font-semibold text-[12px]'>BGMSK</p>
            <p className='text-[12px]'>100,000 BGMSK</p>

          </div>
          <div className='flex justify-between text-[12px]'>
            <p className='font-semibold text-[12px]'>Transaction Fee</p>
            <p>2%</p>

          </div>
        </div>

        <div className='w-full flex justify-between my-2'>
          <button className='px-4 py-1 rounded-full bg-gray-200 text-blue-500 text-[12px] '>Go Back</button>
          <button className='px-4 py-1 bg-button-blue rounded-full text-[12px] text-white'>Buy Now</button>

        </div>


      </div>

    </div>
  )
}

export default BuyProjectModal
