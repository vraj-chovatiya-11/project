import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currancy } from '../App';
import {toast} from 'react-toastify';
import { assets } from '../assets/assets';

const Order = ({token}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrder = async()=>{
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers:{token}})
     if (response.data.success) {
      setOrders(response.data.orders.reverse())

     }else{
      toast.error(response.data.message)
     }
      
    } catch (error) {
      toast.error(error.message)
    }

  }


  const statusHandler = async(event , orderId)=>{
    try {
      const response = await axios.post(backendUrl + '/api/order/status' , {orderId,status:event.target.value} , {headers:{token}})
      console.log("ads",response.data);
      
      if (response.data.success) {
        await fetchAllOrder();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message)
    }
  }
  useEffect(()=>{
  fetchAllOrder();
  },[token])




  return (
<div>
  <h3>Order Page</h3>
  <div>
    {
      orders.map((order, index) => (
        <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index} >
          <img className='w-11' src={assets.parcel_icon} alt="Parcel Icon" />
          <div>
            <div>
              {
                order.items.map((item, itemIndex) => (
                  <p className='py-1' key={itemIndex}>
                    {item.name} x {item.quantity} <span>{item.size}</span>
                  </p>
                ))
              }
            </div>
            {/* Display address information here */}
            <p className='mt-3 mb-3 font-medium'>{order.address.firstName + " " + order.address.lastName}</p>
            <div>
              <p>{order.address.street + ","}</p>
              <p>
                {order.address.city + ", " + 
                order.address.state + ", " + // Assuming you want to include state here
                order.address.country + ", " + 
                order.address.zipcode}
              </p>
            </div>
            <p>{order.address.phone}</p>
          </div>
          <div>
            <p className='sm:text-[15px] text-sm '>Items: {order.items.length}</p> {/* Fixed to use order.items */}
            <p className='mt-3'>Method: {order.paymentMethod}</p>
            <p>Payment: {order.payment ? "Done" : "Pending"}</p>
            <p>Date: {new Date (order.Date).toLocaleDateString()}</p> 
     
          </div>
          <p className='text-sm sm:text-[15px]'>{currancy}{order.amount}</p>

          <select onChange={(event)=>statusHandler(event,order._id)} className='mb-2 font-semibold' value={order.status} >
            <option value="Order Placed">Order Placed</option>
            <option value="Paking">Paking</option>
            <option value="Shiped">Shiped</option>
            <option value="Out Of Delivery">Out Of Delivery</option>
            <option value="Deliverd">Deliverd</option>
          </select>
        </div>
      ))
    }
  </div>
</div>

  
  )
}

export default Order
