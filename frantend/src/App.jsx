import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Collaction from './pages/Collaction'
import Serchbar from './components/Serchbar'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verifyy from './pages/Verifyy'
// import Verefy from './pages/Verefy'





const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <Serchbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collaction/>}/>

       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/product/:productId' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/> 
       <Route path='/place-order' element={<PlaceOrder/>}/>
       <Route path='/orders' element={<Orders/>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/verifyy' element={<Verifyy/>}/>
      {/* <Route path='/verefy' element={<Verefy/>}/> */}
   

   
      </Routes>
      <Footer/>
  
    </div>
  )
}

export default App
 