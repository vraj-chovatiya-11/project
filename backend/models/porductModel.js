import mongoose from "mongoose";

// const prodcutSchema = new mongoose.Schema({

// image: { type: Array, required: true },

//   date: { type: Number, required: true },
// });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  bestseller: {
    type: Boolean,
    default: false,
  },
  sizes: {
    type: Array,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
