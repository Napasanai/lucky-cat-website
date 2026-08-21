import React, { useState, useEffect } from 'react';
import './Hero.css';

const images = [
  '/images/thai_dish.webp',
  '/images/national_dish.webp',
  '/images/appetizer.webp',
  '/images/drink_dessert.webp',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {images.map((img, index) => (
        <div 
          key={img}
          className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1>Welcome to<br />Lucky Cat</h1>
        <p className="hero-sub">Experience the authentic and vibrant flavors of Asia.</p>
        
        <div className="hero-tags">
          <span className="hero-tag">Thai</span>
          <span className="hero-tag">Chinese</span>
          <span className="hero-tag">Korean</span>
          <span className="hero-tag">Near UVA</span>
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
