import React from 'react'
import { arbitrium, base, blast, bnb, fantom, polygon } from '../assets'
import { blockChains } from '../assets'


const Chains = ({ chain, index }) => {
    const images = [bnb, base, blast, polygon, arbitrium, fantom]
    return (


        <div className={`${index > 2 ? 'py-2' : 'py-3'} m-1 px-4 text-black text-sm font-poppins bg-white flex justify-center rounded-xl hover:bg-button-blue hover:text-white hover:cursor-pointer space-x-2 items-center`}>
            <img src={images[index]} alt="" className='w-[20px]' />  <p className='text-[10px]'>{chain}</p>
        </div>

    )
}

export default Chains
