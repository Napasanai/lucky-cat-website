import React from 'react';
import './FindUs.css';

const FindUs: React.FC = () => {
  return (
    <section id="find-us" className="section-padding findus-section">
      <div className="container">
        <div className="findus-grid">
          <div className="findus-info">
            <h2>Find Us</h2>
            <p className="findus-desc">Located right by the University of Virginia, we're your perfect spot for authentic Asian street food.</p>
            
            <div className="info-block">
              <i className="ti ti-map-pin"></i>
              <div>
                <h4>Address</h4>
                <p>123 University Ave<br/>Charlottesville, VA 22903</p>
              </div>
            </div>
            
            <div className="info-block">
              <i className="ti ti-clock"></i>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 11:00 AM - 10:00 PM<br/>Sat-Sun: 12:00 PM - 11:00 PM</p>
              </div>
            </div>
            
            <div className="info-block">
              <i className="ti ti-phone"></i>
              <div>
                <h4>Contact</h4>
                <p>(555) 123-4567<br/>hello@luckycatasianfood.com</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="ti ti-brand-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="ti ti-brand-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="ti ti-brand-twitter"></i></a>
            </div>
          </div>
          
          <div className="findus-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100378.07727376722!2d-78.53696887556942!3d38.03454728560126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b38622f6bf3c29%3A0xc3e658ec35058ec0!2sUniversity%20of%20Virginia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lucky Cat Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
