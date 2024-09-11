import React, { useContext } from 'react'
import { reload } from '../assets'
import { AppContext } from '../contextProvider'

const ForFeitSaleModal = () => {
  const { modals, setModals } = useContext(AppContext)
  return (
    <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-poppins'>
      <div className='lg:w-1/4 w-full bg-gray-100 rounded-xl min-h-[200px] max-h-[400px] px-4 py-4'>
        <div className='flex justify-between mb-2'>
          <p></p>
          <p className='cursor-pointer' onClick={() => setModals({ ...modals, showForfeitSaleModal: false })}>x</p>

        </div>
        <p className='font-semibold text-[30px] text-gray-700'>Are You Sure You Want To Forfeit This Presale ?</p>
        <p className='text-[12px] text-gray-700'>If You Forfeit, You Will Lose <span className='font-semibold'>5000 BGMSK</span> Worth</p>
    

        <div className='w-full flex justify-between my-2'>
          <button className='px-4 py-3 bg-button-blue rounded-full text-[12px] text-white'>No, Do Not Forfeit</button>
          <button className='px-4 py-3 rounded-full bg-gray-200 text-blue-500 text-[12px] '>Yes Forfeit</button>

        </div>


      </div>

    </div>
  )
}

export default ForFeitSaleModal
