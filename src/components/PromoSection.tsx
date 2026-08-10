import React from 'react';
import './PromoSection.css';

const PromoSection: React.FC = () => {
  return (
    <section id="promo" className="section-padding promo-section">
      <div className="container">
        <div className="promo-card">
          <div className="promo-content">
            <span className="promo-badge">Special Offer</span>
            <h2>UVA Student Discount</h2>
            <p>Show your UVA Student ID and get <strong>10% OFF</strong> your entire order!</p>
            <ul className="promo-terms">
              <li><i className="ti ti-check"></i> Valid Mon–Fri</li>
              <li><i className="ti ti-check"></i> 11am–3pm</li>
              <li><i className="ti ti-check"></i> Dine-in only</li>
            </ul>
          </div>
          <div className="promo-icon">
            <i className="ti ti-discount"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
