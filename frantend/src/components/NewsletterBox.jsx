import React from 'react'

const Newsletterbox = () => {
    const onSubmitHendler = (event) => {
        event.preventDefault();
    }
    
    return (
        <div className='bg-gray-50 py-12 px-4 rounded-lg shadow-sm my-10 max-w-4xl mx-auto'>
            <div className='max-w-2xl mx-auto text-center'>
                <h3 className='text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2'>Stay Updated</h3>
                <p className='text-3xl font-bold text-gray-900 mb-4'>Subscribe Now & Get 20% Off</p>
                <p className='text-gray-600 mb-6'>Join our newsletter to receive the latest updates and promotions.</p>
                
                <form onSubmit={onSubmitHendler} className='flex flex-col sm:flex-row items-center gap-3 mx-auto my-4'>
                    <div className='relative w-full'>
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-gray-400' viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <input 
                            className='w-full py-3 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none' 
                            type='email' 
                            placeholder='Enter your email' 
                            required
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='w-full sm:w-auto mt-3 sm:mt-0 px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out shadow-sm'
                    >
                        Subscribe
                    </button>
                </form>
                
                <p className='text-xs text-gray-500 mt-4'>We respect your privacy. Unsubscribe at any time.</p>
            </div>
        </div>
    )
}

export default Newsletterbox
