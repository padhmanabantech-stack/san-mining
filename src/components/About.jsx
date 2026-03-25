import React from 'react';
import './About.css';

const valuesData = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'SUSTAINABILITY',
    desc: 'Environmental responsibility in every operation',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-3 4-3-4V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10l-3-4z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    title: 'SAFETY',
    desc: 'Zero-harm workplace culture and practices',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'INNOVATION',
    desc: 'Cutting-edge technology and methods',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'INTEGRITY',
    desc: 'Transparent operations and ethical conduct',
  },
];

export default function About() {
  return (
    <section className="about-wrapper" id="about">
      
      {/* 1. Who We Are (Image & Text Intro) */}
      <div className="section about-intro fade-in">
        <div className="about-image-container fade-in-left">
          <img src="/images/about-loader.jpg" alt="SAN Mining loader equipment at site" className="about-image" />
        </div>
        <div className="about-text-container fade-in-right">
          <h2 className="section-title-left">WHO WE ARE</h2>
          <div className="about-paragraphs">
            <p>
              Established in 1998, SAN Mining Corporation Private Limited has grown to become one of India's most trusted mining companies, specializing in the extraction and processing of essential minerals that drive the nation's industrial growth.
            </p>
            <p>
              Our operations span across multiple states in India, employing over 5,000 skilled professionals and leveraging cutting-edge technology to ensure efficient, safe, and sustainable mining practices.
            </p>
            <p>
              We are committed to not just extracting resources, but doing so responsibly while contributing to the socio-economic development of the communities where we operate.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Vision & Mission Banner */}
      <div className="vision-mission-banner">
        <div className="vm-container">
          
          <div className="vm-card fade-in">
            <div className="vm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-desc">
              To be India's most respected and sustainable mining corporation, setting industry benchmarks in safety, innovation, and environmental stewardship while powering the nation's growth.
            </p>
          </div>

          <div className="vm-card fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="vm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-desc">
              To responsibly extract and process India's mineral wealth using advanced technology, ensuring safety, sustainability, and value creation for all stakeholders while contributing to national development.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Our Values / What Drives Us */}
      <div className="section values-section">
        <p className="section-label fade-in">OUR VALUES</p>
        <h2 className="section-title fade-in">WHAT DRIVES US</h2>
        
        <div className="values-grid">
          {valuesData.map((val, i) => (
            <div className="value-card fade-in" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="value-icon">{val.icon}</div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
