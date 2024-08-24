import React from 'react'

const ProjectCard = () => {
    return (
        <div className='bg-gray-100 rounded-xl p-4 '>
            <div className='bg-gray-300 rounded-xl my-2 h-[200px]'>

            </div>
            <p className='font-poppins my-2 font-semibold'>BigMusk Cat</p>
            <p className='font-poppins my-1 text-[12px]'>21 Days To End</p>
            <div className='flex justify-between w-full space-x-4'>
                <div className='flex space-x-2'>
                    <button className='w-1/2 bg-primary-yellow px-8 text-[12px] rounded-full  text-primary-card font-poppins'>Next</button>
                    <button className='w-1/2 bg-primary-yellow px-8 text-[12px] rounded-full  text-primary-card font-poppins'>Next</button>
                </div>
                <button className='w-full bg-button-blue py-2 text-[12px] rounded-full text-white font-poppins'>View Project</button>
            </div>

        </div>
    )
}

export default ProjectCard
