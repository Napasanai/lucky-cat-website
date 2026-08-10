import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-logo">
          <i className="ti ti-cat"></i>
          <span>Lucky Cat</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#promo">Promotions</a></li>
          <li><a href="#find-us">Find Us</a></li>
        </ul>
        <button className="btn-primary">Order Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
