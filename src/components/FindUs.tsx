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
                <p>946 Grady Ave Ste O<br/>Charlottesville, VA 22903</p>
              </div>
            </div>
            
            <div className="info-block">
              <i className="ti ti-clock"></i>
              <div>
                <h4>Hours</h4>
                <p>
                  Mon: Closed<br/>
                  Tue - Thu: 11:00 AM - 9:00 PM<br/>
                  Fri - Sat: 11:00 AM - 10:00 PM<br/>
                  Sun: 11:00 AM - 9:00 PM
                </p>
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
              src="https://maps.google.com/maps?q=946%20Grady%20Ave%20Ste%20O,%20Charlottesville,%20VA%2022903&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
