import React from 'react';
import './Sustainability.css';

const sustainabilityCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-.14.28-4.5 9-4.5 12a4.5 4.5 0 0 0 9 0C16.5 11 12.14 2.28 12 2z" />
        <path d="M12 14c-1.66 0-3-1.34-3-3" />
      </svg>
    ),
    title: 'Environmental Responsibility',
    desc: 'Minimizing ecological impact through advanced monitoring and mitigation practices',
    bullets: [
      'Air quality monitoring systems',
      'Dust suppression technology',
      'Noise pollution control',
      'Wildlife habitat protection',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20v-4M8 20v-2M15 20v-6M18 20v-8M5 16l3-3 3 1 3-3 3 1" />
      </svg>
    ),
    title: 'Land Restoration',
    desc: 'Comprehensive programs to restore mined land to its natural state',
    bullets: [
      'Afforestation of 50,000+ acres',
      'Soil conservation measures',
      'Biodiversity restoration',
      'Post-mining land use planning',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: 'Water Conservation',
    desc: 'Sustainable water management and recycling initiatives',
    bullets: [
      'Rainwater harvesting systems',
      'Water recycling plants',
      'Groundwater recharge programs',
      'Zero liquid discharge targets',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Community Development',
    desc: 'Empowering local communities through education and employment',
    bullets: [
      'Skill development programs',
      'Healthcare facilities',
      'Education infrastructure',
      'Local employment initiatives',
    ],
  },
];

export default function Sustainability() {
  return (
    <div id="sustainability">
      {/* 1. Sustainability Banner */}
      <section className="sus-hero fade-in">
        <div className="sus-hero-bg">
          <img src="/images/sustainability.png" alt="Hands planting seedling - sustainability" />
        </div>
        <div className="sus-hero-overlay"></div>
        <div className="sus-hero-content text-center">
          <p className="section-label">SUSTAINABILITY</p>
          <h1 className="sus-title">MINING RESPONSIBLY</h1>
        </div>
      </section>

      {/* 2. Our Commitment */}
      <section className="section bg-primary text-center">
        <h2 className="section-title fade-in mb-60">OUR COMMITMENT</h2>
        <p className="section-desc max-w-800 mx-auto fade-in">
          We believe that economic growth and environmental stewardship go hand in hand. Our comprehensive sustainability framework ensures that we mine responsibly, leaving a positive legacy for future generations.
        </p>

        <div className="sus-stats-container mt-80 fade-in">
          <div className="sus-stat-item">
            <h3 className="sus-stat-num">50,000+</h3>
            <p className="sus-stat-label">Acres Afforested</p>
          </div>
          <div className="sus-stat-item">
            <h3 className="sus-stat-num">80%</h3>
            <p className="sus-stat-label">Water Recycled</p>
          </div>
          <div className="sus-stat-item">
            <h3 className="sus-stat-num">25,000+</h3>
            <p className="sus-stat-label">Community Beneficiaries</p>
          </div>
        </div>
      </section>

      {/* 3. Cards Grid */}
      <section className="section bg-primary sus-cards-wrapper">
        <div className="sus-cards-grid">
          {sustainabilityCards.map((card, i) => (
            <div className="sus-card fade-in" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="sus-card-icon">{card.icon}</div>
              <h3 className="sus-card-title">{card.title}</h3>
              <p className="sus-card-desc">{card.desc}</p>
              <ul className="sus-card-bullets">
                {card.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. A Greener Tomorrow */}
      <section className="section bg-primary sus-greener border-bottom">
        <div className="sus-greener-grid">
          <div className="sus-greener-image fade-in-left">
            <img src="/images/sustainability.png" alt="A greener tomorrow" />
          </div>
          <div className="sus-greener-text fade-in-right">
            <h2 className="sus-greener-title">A GREENER TOMORROW</h2>
            <div className="sus-greener-paragraphs">
              <p>
                Our sustainability vision extends beyond compliance. We actively invest in renewable energy, reduce carbon emissions, and implement circular economy principles across our operations.
              </p>
              <p>
                Through partnerships with environmental organizations and local communities, we're creating a model for responsible mining that balances economic development with ecological preservation.
              </p>
              <p>
                Our goal is not just to minimize harm, but to actively contribute to environmental restoration and community wellbeing in all regions where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
