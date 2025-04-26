import React from 'react'

const Newsletterbox = () => {

    const onSubmitHendler =(event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% off</p>
        <form onSubmit={onSubmitHendler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input  className='w-full sm:flex-1 outline-none' type='emali' placeholder='Eanter your email' required/>
            <button type='submit' className='text-white bg-black text-xs px-10 py-4'>Subscribe</button>
        </form>
      
    </div>
  )
}

export default Newsletterbox
