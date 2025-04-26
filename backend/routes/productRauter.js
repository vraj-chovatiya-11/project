import express from "express";

import {
  addProduct,
  listProduct,
  singleProduct,
  removeProduct,
} from "../cantroller/productCantroller.js";
import upload from "../middlewere/multer.js";
import adminAuth from "../middlewere/adminAuth.js";

const productRauter = express.Router();

productRauter.post(
  "/add",
  adminAuth,upload.fields([  
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRauter.get("/list", listProduct);
productRauter.post("/single", singleProduct);
productRauter.delete("/remove",adminAuth, removeProduct);

export default productRauter;


