import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { Menu, X, Search, User, ShoppingBag } from 'lucide-react';
import '../styles/navbar.css'; 
import Logo from '../assets/logo21.png';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const { getCartCount, setShowSearch, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setToken('');
    setCartItems({});
  };

  // Hide dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, mobileMenuRef]);

  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="brand-logo">
          <img src={Logo} alt='logo' />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/collection" 
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Icon Group */}
        <div className="nav-icons">
          <button 
            onClick={() => setShowSearch(true)}
            className="icon-button"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          {/* Profile icon with hover functionality as in original code */}
          <div className="profile-container profile-icon-group">
            <button
              onClick={() => token ? toggleDropdown() : navigate('/login')}
              className="profile-icon-button"
              aria-label="User account"
            >
              <User size={20} />
            </button>
            
            {/* Dropdown that appears on hover or click */}
            <div className="profile-dropdown">
              <NavLink 
                to="/profile" 
                className="dropdown-link dropdown-button"
              >
                View My Profile
              </NavLink>
              <NavLink 
                to="/orders" 
                className="dropdown-link dropdown-button"
              >
                My Orders
              </NavLink>
              <button 
                onClick={logout}
                className="dropdown-button"
              >
                Log Out
              </button>
            </div>
          </div>
          
          <Link 
            to="/cart" 
            className="cart-link"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {getCartCount() > 0 && (
              <span className="cart-badge">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
      >
        <nav className="mobile-nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/collection" 
            className={({ isActive }) => 
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Collection
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "mobile-nav-link active" : "mobile-nav-link"
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;