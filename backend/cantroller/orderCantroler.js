import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';
// import { currancy } from "../../admin/vite-project/src/App.jsx";

const currency = 'inr';
const deliveryCharge = 10;

// const Stripe = require('stripe'); // Ensure you have required the stripe package

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); 



const placeOrder = async (req, res) => {
  try {
    const { address, amount, items } = req.body;

    const userId = req.userId;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      Date: new Date(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

const placeOrderStripe = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;
    const {origin}=req.headers 

    // Save order to DB
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe", // Update payment method if needed
      payment: false,
      Date: new Date(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Map line items for Stripe
    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Ensure the price is in cents
      },
      quantity: item.quantity,
    }));

    // Add delivery charges
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharge * 100, // Assuming deliveryCharge is in your currency unit
      },
      quantity: 1,
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      // success_url: `${origin}/verifyy?session_id={CHECKOUT_SESSION_ID}`,
      success_url: `${origin}/verifyy?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verifyy?success=false&ordreId=${newOrder._id}`,
      // cancel_url: `${req.headers.origin}/cancel`,
    });

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyStripe = async(req,res) => {
  const userId = req.userId;
  const{success,orderId} = req.body
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId,{payment:true});
      await userModel.findByIdAndUpdate (userId,{cartData: {}});
      res.json({success:true});

    }else{
      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false})
    }

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message })
  }
}


const placeOrderRazorpay = async (req, res) => {};

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

const userOrders = async (req, res) => {
  try {
    //  const {userId} = req.body
    const userId = req.userId;
    // console.log(req.userId);

    const orders = await orderModel.find({ userId });

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    
    const{orderId , status } = req.body
   
    
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true , message:'status Updated'})
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  
};
