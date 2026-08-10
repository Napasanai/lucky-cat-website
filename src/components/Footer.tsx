import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="ti ti-cat"></i>
            <span>Lucky Cat</span>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Lucky Cat Asian Food. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
