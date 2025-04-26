import React from 'react'

const Tittle = ({text1, text2}) => {
  return (
    <div className='inline-flex items-center'>
      <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
        <h2 className='text-base sm:text-xl font-medium'>
          <span className='text-gray-500'>{text1}</span>
          {text2 && <span className='text-gray-800 ml-1'>{text2}</span>}
        </h2>
        <div className='hidden sm:block w-8 h-[1px] bg-gray-300'></div>
      </div>
    </div>
  )
}

export default Tittle
