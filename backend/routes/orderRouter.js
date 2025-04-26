import express from "express";
import { placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyStripe } from "../cantroller/orderCantroler.js";
import adminAuth from "../middlewere/adminAuth.js";
import authUser from "../middlewere/auth.js";

const orderRouter = express.Router();

orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);


orderRouter.post('/place',authUser,placeOrder);
orderRouter.post('/stripe',authUser,placeOrderStripe);
orderRouter.post('/razorpay',authUser,placeOrderRazorpay);

orderRouter.post('/userorders',authUser,userOrders);

orderRouter.post('/verifyStripe',authUser,verifyStripe);

export default orderRouter;