import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1>Build Your Perfect Plate</h1>
        <p className="hero-sub">Pick your base. Choose 2–3 dishes. Ready in minutes.</p>
        
        <div className="hero-tags">
          <span>Thai</span> &bull; <span>Japanese</span> &bull; <span>Ramen</span> &bull; <span>Sushi</span> &bull; <span>Near UVA</span>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <i className="ti ti-bowl"></i>
            <span>10+ dishes</span>
          </div>
          <div className="stat-item">
            <i className="ti ti-coin"></i>
            <span>From $8</span>
          </div>
          <div className="stat-item">
            <i className="ti ti-clock"></i>
            <span>Under 5 min</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#menu" className="btn-primary">See Our Menu</a>
          <a href="#find-us" className="btn-secondary">Find Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
