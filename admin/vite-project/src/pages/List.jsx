import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currancy } from '../App';
import { toast } from 'react-toastify';
import '../styles/productList.css';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message || 'Failed to fetch products');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error fetching product list');
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/product/remove`, {
        data: { id },
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message || 'Failed to delete product');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error removing product');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="product-list-heading">All list products</p>
      <div className="product-list-wrapper">
        <div className="product-list-header">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="action-column">Action</b>
        </div>

        {list.map((item, index) => (
          <div className="product-row" key={index}>
            <img className="product-image" src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currancy}{item.price}</p>
            <p
              onClick={() => removeProduct(item._id)}
              className="remove-action"
              title="Remove product"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
