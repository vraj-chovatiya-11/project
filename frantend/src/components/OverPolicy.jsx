import React from 'react'
import { assets } from '../assets/assets'

const OverPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 cursor-pointer'>
        <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
      <p className='font-semibold'>Esay  Exchange</p>
      <p>We Ofeer Hassel Free Exchange Policy</p>
    </div>
    <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
      <p className='font-semibold'>7 Days Return Policy</p>
      <p>We Provide 7 Day free return Policy</p>
    </div>
    <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
      <p className='font-semibold'>Best Customer Support</p>
      <p>We Provide 24/7 Customer Support</p>
    </div>
    </div>
  )
}

export default OverPolicy 







