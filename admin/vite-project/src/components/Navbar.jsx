import React from 'react';
import { assets } from '../assets/assets';
import '../styles/navbar.css';

const Navbar = ({ setToken }) => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <button onClick={() => setToken('')} className='logout-button'>
        Log out
      </button>
    </div>
  );
};

export default Navbar;