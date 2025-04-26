// import React, { useContext, useEffect } from 'react'; // Added useEffect
// import { ShopContext } from '../context/ShopContext';
// import { useSearchParams } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Verefy = () => {
//   const { token, navigate, setCartItems, backendUrl } = useContext(ShopContext); // Corrected setCartItems
//   const [searchParams] = useSearchParams(); // Corrected spelling from 'serchPrams' to 'searchParams'

//   const success = searchParams.get('success'); // Corrected spelling
//   const orderId = searchParams.get('orderId');

//   const verifyPayment = async () => { // Corrected function name
//     try {
//       if (!token) {
//         return null;
//       }
//       const response = await axios.post(backendUrl + '/api/order/verifyStripe', { success, orderId }, { headers: { token } });
      
//       if (response.data.success) {
//         setCartItems({}); // Use correct function name for clearing cart
//         navigate('/orders');
//       } else {
//         navigate('/cart');
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     verifyPayment();
//   }, [token]);

//   return (
//     <div>
//       {/* Optionally, you can add some loading state here */}
//       <p>Verifying payment, please wait...</p>
//     </div>
//   );
// };

// export default Verefy;
