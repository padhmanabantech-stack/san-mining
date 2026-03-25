import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-bg">
        <img src="/images/hero-bg.png" alt="Mining operations at sunset" />
      </div>
      <div className="home-overlay"></div>
      <div className="home-content fade-in">
        <h1 className="home-title">
          Powering India's Growth
          <span className="highlight">Through Responsible Mining</span>
        </h1>
        <p className="home-subtitle">
          Leading India's mining revolution with cutting-edge technology, unwavering safety
          standards, and a commitment to sustainable resource management for future generations.
        </p>
        <div className="home-cta">
          <a href="#cta" className="btn btn-primary">
            Partner With Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#minerals" className="btn btn-outline">
            Explore Operations
          </a>
        </div>
      </div>
    </section>
  );
}
