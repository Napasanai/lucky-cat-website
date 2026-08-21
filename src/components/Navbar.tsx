import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <i className="ti ti-cat"></i>
          <span>Lucky Cat</span>
        </a>
        
        <div className="navbar-actions-mobile">
          <button className="cart-btn-mobile mobile-only" onClick={toggleCart}>
            <i className="ti ti-shopping-cart"></i>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`ti ${isMobileMenuOpen ? 'ti-x' : 'ti-menu-2'}`}></i>
          </button>
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a></li>
          <li><a href="#promo" onClick={() => setIsMobileMenuOpen(false)}>Promotions</a></li>
          <li><a href="#find-us" onClick={() => setIsMobileMenuOpen(false)}>Find Us</a></li>
          <li className="mobile-only">
            <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }} onClick={() => { setIsMobileMenuOpen(false); toggleCart(); }}>
              View Order ({itemCount})
            </button>
          </li>
        </ul>

        <button className="cart-btn-desktop desktop-only" onClick={toggleCart}>
          <i className="ti ti-shopping-cart"></i>
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
