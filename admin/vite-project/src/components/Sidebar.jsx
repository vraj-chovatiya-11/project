import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-links'>
        <NavLink className="sidebar-link" to="/add">
          <img className='icon' src={assets.add_icon} alt="Add" />
          <p className='link-text'>Add Items</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/list">
          <img className='icon' src={assets.order_icon} alt="List" />
          <p className='link-text'>List Items</p>
        </NavLink>
        <NavLink className="sidebar-link" to="/orders">
          <img className='icon' src={assets.order_icon} alt="Orders" />
          <p className='link-text'>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;