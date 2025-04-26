import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cludnary.js";
import userRouter from "./routes/userRouter.js";
import productRauter from "./routes/productRauter.js";
import cartRouter from "./routes/cartRout.js";
import orderRouter from "./routes/orderRouter.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/product", productRauter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT :" + port));
