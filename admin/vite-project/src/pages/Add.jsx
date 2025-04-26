import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import '../styles/addProduct.css';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]); // Reset sizes
        setBestseller(false); // Reset bestseller
      } else {
        toast.error(response.data.message); // Correct the error message key
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div>
        <p className="field-label">Upload Images</p>
        <div className="image-upload">
          {[image1, image2, image3, image4].map((image, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                className="image-thumb"
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
              />
              <input
                onChange={(e) => {
                  if (e.target.files[0]) {
                    const file = e.target.files[0];
                    switch (index) {
                      case 0:
                        setImage1(file);
                        break;
                      case 1:
                        setImage2(file);
                        break;
                      case 2:
                        setImage3(file);
                        break;
                      case 3:
                        setImage4(file);
                        break;
                      default:
                        break;
                    }
                  }
                }}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <p className="field-label">Product Name</p>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type here"
          required
        />
      </div>

      <div className="form-group">
        <p className="field-label">Product Description</p>
        <textarea
          className="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write here"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <p className="field-label">Product Category</p>
          <select
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="form-group">
          <p className="field-label">Sub Category</p>
          <select
            className="input"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className="form-group">
          <p className="field-label">Product Price</p>
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="25"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <p className="field-label">Product Size</p>
        <div className="size-options">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              className={`size-box ${sizes.includes(size) ? "active" : ""}`}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="checkbox-row">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller(!bestseller)}
        />
        <label htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
};

export default Add;