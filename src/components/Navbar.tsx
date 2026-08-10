import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="#" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <i className="ti ti-cat"></i>
          <span>Lucky Cat</span>
        </a>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`ti ${isMobileMenuOpen ? 'ti-x' : 'ti-menu-2'}`}></i>
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a></li>
          <li><a href="#promo" onClick={() => setIsMobileMenuOpen(false)}>Promotions</a></li>
          <li><a href="#find-us" onClick={() => setIsMobileMenuOpen(false)}>Find Us</a></li>
          <li className="mobile-only"><button className="btn-primary">Order Now</button></li>
        </ul>
        <button className="btn-primary desktop-only">Order Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
