import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = () => {
    return (
        <div className='bg-gray-100 rounded-xl lg:p-4 p-2 w-full'>
            <div className='bg-gray-300 rounded-xl my-2 h-[200px]'>

            </div>
            <p className='font-poppins my-2 font-semibold lg:text-[20px] text-[12px]'>BigMusk Cat</p>
            <p className='font-poppins my-1 text-[12px]'>21 Days To End</p>
            <div className='lg:flex justify-between w-full lg:space-x-4'>
                <div className='flex space-x-2 mb-2'>
                    <button className='w-1/2 bg-primary-yellow lg:px-8 p-1 text-[10px] rounded-full  text-primary-card font-poppins'>Solana</button>
                    <button className='w-1/2 bg-primary-yellow lg:px-8 p-1 text-[10px] rounded-full  text-primary-card font-poppins'>New</button>
                </div>
                <Link to={"/buy-details"}> <button className='w-full bg-button-blue lg:text-[12px] text-[8px] p-2 rounded-full text-white font-poppins' >View Project</button></Link>
            </div>

        </div>
    )
}

export default ProjectCard
