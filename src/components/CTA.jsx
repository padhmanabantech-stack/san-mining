import React from 'react';
import './CTA.css';

export default function CTA() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    alert('Thank you for your message! Our team will get back to you soon.');
    e.target.reset();
  };

  return (
    <section className="contact-full" id="cta">
      {/* Contact Hero Banner */}
      <div className="contact-hero fade-in">
        <div className="contact-hero-bg">
          <img src="/images/hero-bg.png" alt="Contact Us Background" />
        </div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content text-center">
          <p className="section-label">GET IN TOUCH</p>
          <h1 className="contact-hero-title">CONTACT US</h1>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="section bg-primary contact-main">
        <div className="contact-container">
          {/* Left Side: Info */}
          <div className="contact-info-side fade-in-left">
            <h2 className="contact-main-title">LET'S TALK</h2>
            <p className="contact-main-desc">
              Whether you're interested in partnering with us, exploring career opportunities, or have questions about our operations, we're here to help.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="method-text">
                  <h3>Corporate Office</h3>
                  <p>Mining House, Sector 18</p>
                  <p>Gurgaon, Haryana 122001</p>
                  <p>India</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="method-text">
                  <h3>Phone</h3>
                  <p>+91 124 456 7890</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="method-text">
                  <h3>Email</h3>
                  <p>info@sanmining.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-side fade-in-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>NAME *</label>
                <input type="text" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label>EMAIL *</label>
                <input type="email" placeholder="your.email@company.com" required />
              </div>

              <div className="form-group">
                <label>PHONE</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="form-group">
                <label>COMPANY</label>
                <input type="text" placeholder="Your company name" />
              </div>

              <div className="form-group">
                <label>MESSAGE *</label>
                <textarea rows="6" placeholder="Tell us about your inquiry..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
