import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Tittle from './Tittle';

const CartTotal = () => {

    const {currancy , getCartAmount, delivery_fee} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Tittle  text1={'CART'} text2={'TOTAL'}/>

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
         <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currancy}{getCartAmount()}.00</p>

         </div>
         <hr/>
         <div className='flex justify-between'>
        <p>Shipping Fee</p>
        <p> {currancy}{delivery_fee}.00</p>
         </div>
         <hr/>
         <div className='flex justify-between'>
          <p>Total</p>
          <p>{currancy}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee }.00</p>
         </div>
        </div>
      
    </div>
  )
}

export default CartTotal
