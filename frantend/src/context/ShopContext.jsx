import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";  
// import Serchbar from "../components/Serchbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currancy = '$'; 
  const delivery_fee = 10;
 const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products,setProducts]=useState([]);
  const [token,setToken]= useState('');
  const navigate =useNavigate();

  // Add to cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; 
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData); 
  

   
  };

  // Get cart count
  // const getCartCount = () => {
  //   let totalCount = 0;

  //   for (const itemId in cartItems) {
  //     const sizes = cartItems[itemId];
  //     for (const size in sizes) {
  //       totalCount += sizes[size];
  //     }
  //   }

  //   return totalCount;
  // };

const getCartCount = () =>{
  let totalAmount = 0;
  for (const items in cartItems){
    
    for(const item in cartItems[items]){
      try {
        if(cartItems[items][item] > 0  ){
          totalAmount += cartItems[items][item];
        }
      } catch (error) {
        
      }
    }
  } 
  return totalAmount;
}

// const getCartAmount = () => {
//   let totalAmount = 0;
//   for (const item in cartItems) {
//     try {
//       if (cartItems[item] > 0) {
//         totalAmount += cartItems[item];
//       }
//     } catch (error) {
//       console.error(error); // Optional: log the error for debugging
//     }
//   }
//   return totalAmount;
// };


  // Update cart quantity
  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (quantity === 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    setCartItems(cartData);
  };

  // Calculate total cart amount
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (!itemInfo) continue;

      for (const size in cartItems[items]) {
        const quantity = cartItems[items][size];
        if (quantity > 0) {
          try {
            totalAmount += itemInfo.price * quantity;
          } catch (error) {
            console.error("Error calculating total amount:", error);
          }
        }
      }
    }
    return totalAmount;
  };

  // const getCartAmount = () =>{
  //   let totalAmount = 0;
  //   for(const iteam in cartItems){ 
  //     for (const iteam in cartItems[items]){
  //       try {
  //         if(cartItems[iteams][iteam] > 0){
  //           totalCount += cartItems[iteams][iteam];
  //         }
  //       } catch (error) {
          
  //       }
  //     }
  //   }
  //   return totalAmount;
  // }
  // const getCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     try {
  //       if (cartItems[item] > 0) {
  //         totalAmount += cartItems[item];
  //       }
  //     } catch (error) {
  //       console.error(error); // Optional: log the error for debugging
  //     }
  //   }
  //   return totalAmount;
  // };
  

 const getProductsData = async() =>{
  try {
    const response = await axios.get(backendUrl + '/api/product/list')

  // console.log(response.data.products);
  
  
 
     if (response.data.success){

      setProducts(response.data.products)
    }else{
      toast.error(response.data.message)
    }
    
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    
  }
 };
 const getUserCart = async(token) => {
  try {
    const response = await axios.post(backendUrl + '/api/cart/get', {},{headers:{token}} )
    if (response.data.success) {
      setCartItems(response.data.cartData)
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message)
    
  }
 }

 useEffect(()=>{
  getProductsData();
 },[])

 useEffect(()=>{
 if (!token && localStorage.getItem('token')) {
  setToken(localStorage.getItem('token'))
    getUserCart(localStorage.getItem('token'));
 }
 },[])

 

  const value = {
    products,
    currancy,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    setCartItems,
  };
 
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;