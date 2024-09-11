import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { arrowLeft, arrowLeftSVg, arrowRight, arrowRightSVg, warning } from '../assets'
import ProgressBar from "@ramonak/react-progress-bar";

const BuyProjectDetails = () => {
    const cardCount = [1, 2, 3]
    const dexes = ["PancakeSwap", "SushiSwap", "UniSwap", "OkuSwap"]

    const [tokenSupply, setTokenSupply] = useState(false)
    const [toggleAddress, setToggleAddress] = useState(false)
    const [toggleBuyProjectInfo, setToggleButProjectInfo] = useState(false)

    return (
        <div className='relative w-full h-screen  '>
            <div className='bg-gradient-radial bg-cover absolute 2xl:h-[1400px] md:min-h-[550px] min-h-[500px] min-w-full -z-10 from-primary-bg-blend via-purple-50 to-primary-bg-blend from-25% to-75% blur-2xl  rounded-b-full'>

            </div>
            <div className=''>
                <div className='bg-transparent md:pt-8 lg:px-10 px-2'>
                    <Header />
                </div>
                {/* first Card Set */}
                <div className='lg:flex lg:flex-1  lg:px-20  my-4 lg:space-x-4 px-4'>
                    <div className='lg:flex-[0.5] w-full flex space-x-4 lg:min-h-56 h-[150px] bg-gray-100 p-2 rounded-xl shadow-sm sm:px-4 lg:my-0 mb-4'>
                        <div className='w-1/2 bg-gray-200  rounded-xl'>

                        </div>
                        <div>
                            <p className=''>BigMusk Cat</p>
                            <div className='flex space-x-2 my-2'>
                                <button className='w-1/2 bg-primary-yellow lg:px-8 px-4 py-1 text-[10px] rounded-full  text-primary-card font-poppins'>Audit</button>
                                <button className='w-1/2 bg-primary-yellow lg:px-8 px-4 py-1 text-[10px] rounded-full  text-primary-card font-poppins'>Kyc</button>
                            </div>

                            <button className=' bg-button-blue w-[135px] text-[11px] mt-10  font-semibold text-primary-yellow p-2 rounded-full font-poppins' >Buy BigMusk</button>


                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-gray-100 to-gray-50 flex-[0.5] p-4 rounded-xl font-poppins'>
                        <p className='my-4 flex justify-center'>Sale is ongoing</p>
                        <div>
                            <div className='mt-4 mb-1 bg-gray-300 rounded-2xl p-1'>
                                <ProgressBar completed={60} labelClassName='' bgColor='#194FFF' customLabel=' ' />

                            </div>
                            <div className='flex justify-between font-poppins text-[10px]'>
                                <p>100 SOL</p>
                                <p>2,000 SOL</p>
                            </div>
                        </div>
                        <p className='font-semibold text-[12px] mt-4 mb-2'>Total Contributors</p>

                        <p className='text-[15px]'>1000</p>


                        <div>

                        </div>



                    </div>

                </div>
                <div className='lg:flex lg:flex-1 min-h-96 lg:px-20  my-4 lg:space-x-4 px-4'>
                    <div className='flex-[0.5] min-h-76 bg-gradient-to-b from-gray-100 to-transparent p-4 rounded-xl'>
                        <div className='flex space-x-2 items-center'>
                            <div className='w-[10px] h-[10px] bg-blue-600'></div>
                            <p>Pool Info </p>
                        </div>
                        <div className='px-8 py-2 lg:text-[15px] text-[10px] font-poppins relative'>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Total Supply</p>
                                <div className='flex justify-between items-center'>
                                    <p>0x447E75998acf8943aA5882DDC7712ccf</p>
                                    <img src={warning} alt="" className=' bg-blue-700 p-2 rounded-full cursor-pointer' onMouseOver={() => setTokenSupply(true)} onMouseOut={() => setTokenSupply(false)} />
                                </div>
                                {tokenSupply && <div className='absolute w-1/2 ml-[45%] px-1 flex justify-center py-2 text-[10px] rounded-md text-white font-poppins bg-blue-700'>
                                    <p>Do not send token to this address</p>

                                </div>}
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Tokens For Liquidity</p>
                                <p>12,000,000,000</p>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Soft Cap</p>
                                <p>29,589,123,591</p>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Start Time</p>
                                <p>20204:05:07:00(UTC)</p>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>End Time</p>
                                <p>20204:05:12:00(UTC)</p>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Listing On</p>
                                <p>PancakeSwap, SushiSwap, UniSwap</p>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Liquidity Percentage</p>
                                <p>51%</p>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Liquidity Unlocked Time</p>
                                <p>2024:05:07:00 (UTC)</p>
                            </div>

                        </div>

                    </div>
                    <div className='flex-[0.5] min-h-52 bg-gradient-to-b from-gray-100 to-transparent p-2 rounded-xl shadow-sm'>
                        <div className='flex space-x-2 items-center'>
                            <div className='w-[10px] h-[10px] bg-blue-600'></div>
                            <p>Token</p>
                        </div>
                        <div className='px-8 py-2 lg:text-[15px] text-[10px] font-poppins'>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Chain</p>
                                <div className=' relative flex justify-between items-center'>
                                    <p>BSC</p>
                                    <img src={warning} alt="" className=' bg-blue-700 p-2 rounded-full cursor-pointer' onMouseOver={() => setToggleButProjectInfo(true)} onMouseOut={() => setToggleButProjectInfo(false)} />
                                    {toggleBuyProjectInfo && <div className='absolute w-1/2 ml-[55%] mt-[14%] px-1 flex justify-center py-2 text-[10px] rounded-md text-white font-poppins bg-blue-700'>
                                        <p>You can only buy this project with BSC</p>

                                    </div>}
                                </div>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Address</p>
                                <div className='relative flex justify-between items-center'>
                                    <p>0x447E75998acf8943aA5882DDC7712c8A304016cf</p>
                                    <img src={warning} alt="" className=' bg-blue-700 p-2 rounded-full cursor-pointer' onMouseOver={() => setToggleAddress(true)} onMouseOut={() => setToggleAddress(false)} />
                                    {toggleAddress && <div className='absolute w-1/2 ml-[55%] mt-[14%] px-1 flex justify-center py-2 text-[10px] rounded-md text-white font-poppins bg-blue-700'>
                                        <p>Do not send token to this address</p>

                                    </div>}
                                </div>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Symbol</p>
                                <p>BGMSK</p>
                            </div>
                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Decimal</p>
                                <p>18</p>
                            </div>

                            <div className='my-2'>
                                <p className='font-semibold text-primary-text-color'>Total Supply</p>
                                <p>10,000,000</p>
                            </div>

                            <button className=' bg-button-blue w-[135px] text-[11px] mt-2  font-semibold text-primary-yellow p-2 rounded-full font-poppins' >Download Tokenomic</button>



                        </div>


                    </div>

                </div>
                <div className='lg:px-16 px-4 flex space-x-2 '>
                    <h1 className='lg:text-[35px] text-[20px] font-semibold font-poppins'>More Project <span className='text-button-blue'>For You</span></h1>
                    <div className='flex items-center space-x-1 mt-1'>
                        <p className='text-[12px]'>View more</p>
                        <img src={arrowRightSVg} className='w-[20px] cursor-pointer' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-3 lg:px-24 px-4  my-6'>
                    {cardCount?.map((e, i) => <ProjectCard key={i} />)}

                </div>

            </div>




            <Footer />


        </div>
    )
}

export default BuyProjectDetails
