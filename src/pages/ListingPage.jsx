import React, {useState} from 'react'
import { bgRocket, rocket } from '../assets'

import LisitingPageOne from '../components/LisitingPageOne'
import LisitingPageTwo from '../components/ListingPageTwo'

const ListingPage = () => {
 
    const [showListingPageTwo, setshowListingPageTwo] = useState(false)
    return (
        <div className='w-full h-screen bg-gray-100 min-w-[100%] fixed p-1'>
            <div className=' flex flex-1  h-full'>
                <div className='hidden lg:block relative flex-[0.25]  bg-cover bg-no-repeat bg-center rounded-2xl mt-0 w-full' style={{ backgroundImage: `url(${bgRocket})` }}>
                    <img src={rocket} alt="" className='flex min-w-[200%] min-h-[120%] -bottom-40 -left-24  absolute  z-10' />

                </div>
                {showListingPageTwo === false ? <LisitingPageOne showListingPageTwo={showListingPageTwo} setshowListingPageTwo={setshowListingPageTwo} /> :
                
                <LisitingPageTwo showListingPageTwo={showListingPageTwo} setshowListingPageTwo={setshowListingPageTwo} />
                }

            </div>
        </div>
    )
}

export default ListingPage