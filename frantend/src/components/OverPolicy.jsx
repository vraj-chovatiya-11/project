import React from 'react'
import { assets } from '../assets/assets'

const OverPolicy = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Policy Promises</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <img src={assets.exchange_icon} className="w-8 h-8" alt="Exchange Policy" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">Easy Exchange</h3>
              <p className="text-gray-600">We offer a hassle-free exchange policy to ensure your complete satisfaction.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-indigo-600 font-medium flex items-center group-hover:text-indigo-800">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 flex justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <img src={assets.quality_icon} className="w-8 h-8" alt="Return Policy" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">7 Days Return Policy</h3>
              <p className="text-gray-600">Not satisfied? Return your purchase within 7 days for a full refund.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-emerald-600 font-medium flex items-center group-hover:text-emerald-800">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 flex justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <img src={assets.support_img} className="w-8 h-8" alt="Customer Support" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-gray-800">24/7 Customer Support</h3>
              <p className="text-gray-600">Our dedicated team is available around the clock to assist you with any queries.</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-purple-600 font-medium flex items-center group-hover:text-purple-800">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverPolicy;