
import productModel from "../models/porductModel.js";
import { v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      subCategory,
      description,
      sizes,
      bestseller,
      price,
    } = req.body;

    // Check if files exist and assign them accordingly
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // console.log("sd", req.files);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url; // Get the secure URL from Cloudinary
      })
    );

    
    
    // console.log("da", imagesUrl);

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    // Assuming you will perform some action with these images and the product info

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    
    res.json({ success: true, message: "Product Romoved" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

const singleProduct = async (req, res) => {

    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success:true,product})
    } catch (error) {
        console.log(error);

        res.json({ success: false, message: error.message });  
    }
};

export { addProduct, listProduct, singleProduct, removeProduct };
