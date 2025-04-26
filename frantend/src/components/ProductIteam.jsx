import React from 'react'
import { Link } from 'react-router-dom'


const ProductIteam = ({ id, image, name, price,}) => {
  
  



    return (
      
          <Link className='cursor-pointer' to={`/product/${id}`}>
            
      <div className=" overflow-hidden product-item">
        <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt={name}  />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">$ {price}</p>

      </Link>
    );
  };
  

  

export default ProductIteam

