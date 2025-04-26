import React from 'react'
import { Link } from 'react-router-dom'

const ProductIteam = ({ id, image, name, price }) => {
  return (
    <Link className='block w-full h-full group' to={`/product/${id}`}>
      <div className="relative overflow-hidden rounded-t-lg aspect-square">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={image[0]} 
          alt={name} 
        />
        {image.length > 1 && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {[...Array(Math.min(4, image.length))].map((_, idx) => (
              <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-white' : 'bg-white/50'}`}></div>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300"></div>
      </div>
      <div className="p-3">
        <h3 className="text-sm text-gray-800 truncate">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm font-semibold">${price}</p>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductIteam

