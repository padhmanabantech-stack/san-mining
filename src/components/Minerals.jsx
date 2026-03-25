import React, { useState, useEffect } from 'react';
import './Operations.css';

const processSteps = [
  {
    title: 'EXPLORATION',
    desc: 'Advanced geological surveys and resource identification using cutting-edge technology',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    image: '/images/operations/exploration.jpg',
  },
  {
    title: 'EXTRACTION',
    desc: 'Safe and efficient mining operations with modern heavy equipment and precision drilling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    image: '/images/operations/excavation.jpg',
  },
  {
    title: 'MINERAL PROCESSING',
    desc: 'Advanced processing facilities ensuring highest quality output and minimal waste',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    image: '/images/operations/processing.jpg',
  },
  {
    title: 'LOGISTICS & SUPPLY CHAIN',
    desc: 'Efficient transportation and delivery systems ensuring timely supply to clients',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    image: '/images/operations/logistics.jpg',
  }
];

const mineralCatalog = [
  {
    category: 'Major Minerals',
    minerals: ['Barytes', 'Limestone', 'Bauxite', 'Manganese Ore', 'Iron Ore'],
  },
  {
    category: 'Minor Minerals',
    minerals: [
      'Ordinary Sand (River Sand)',
      'Gravel',
      'Ordinary Earth',
      'Moorum / Red Earth',
      'Road Metal',
      'Building Stone',
      'Laterite',
      'Rubble Stone',
      'Granite - Black',
      'Granite - Grey',
      'Granite - Pink',
      'Granite - White',
      'Limestone Slabs (Kadapa Stone)',
    ],
  },
  {
    category: 'Industrial / Non-Metallic Minerals',
    minerals: [
      'Quartz',
      'Feldspar',
      'Dolomite',
      'Calcite',
      'Silica Sand',
      'Garnet',
      'Ball Clay',
      'China Clay (Kaolin)',
    ],
  },
  {
    category: 'Beach Sand Minerals',
    minerals: ['Ilmenite', 'Rutile', 'Zircon', 'Garnet', 'Sillimanite', 'Monazite'],
  },
];

const mineralsExtracted = [
  { name: 'IRON ORE', shortDesc: 'High-grade iron ore for steel manufacturing', capacity: '10 Million tons/year', locations: 'Odisha, Jharkhand, Chhattisgarh' },
  { name: 'COAL', shortDesc: 'Thermal and coking coal for power and steel industries', capacity: '8 Million tons/year', locations: 'Jharkhand, West Bengal, Madhya Pradesh' },
  { name: 'BAUXITE', shortDesc: 'Premium bauxite for aluminum production', capacity: '5 Million tons/year', locations: 'Odisha, Gujarat, Madhya Pradesh' },
  { name: 'LIMESTONE', shortDesc: 'Quality limestone for cement and chemical industries', capacity: '6 Million tons/year', locations: 'Rajasthan, Madhya Pradesh, Andhra Pradesh' },
];

export default function Minerals() {
  const [data, setData] = useState(mineralsExtracted);
  const [catalog] = useState(mineralCatalog);

  useEffect(() => {
    fetch('/api/minerals')
      .then((res) => res.json())
      .then((apiData) => {
        // Here we could map API data to our new layout format
      })
      .catch((e) => console.log('Using static backup data'));
  }, []);

  return (
    <div id="minerals">
      {/* Operations Hero Banner */}
      <section className="operations-hero fade-in">
        <div className="op-hero-bg">
          <img src="/images/about-loader.jpg" alt="Operations background" />
        </div>
        <div className="op-hero-overlay"></div>
        <div className="op-hero-content">
          <p className="section-label">OUR OPERATIONS</p>
          <h1 className="op-title">MINING EXCELLENCE</h1>
        </div>
      </section>

      {/* Process Intro */}
      <section className="section bg-primary text-center process-intro fade-in">
        <h2 className="section-title">OUR PROCESS</h2>
        <p className="section-desc max-w-800 mx-auto">
          From exploration to delivery, every step of our operation is optimized for efficiency, safety, sustainability, and quality.
        </p>
      </section>

      {/* Process ZigZag Grid */}
      <section className="process-zigzag">
        {processSteps.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div className="process-row fade-in" key={idx}>
              {isEven ? (
                <>
                  <div className="process-image fade-in-left">
                    <img src={step.image} alt={step.title} />
                  </div>
                  <div className="process-text fade-in-right">
                    <div className="process-icon">{step.icon}</div>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-desc">{step.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="process-text fade-in-left">
                    <div className="process-icon">{step.icon}</div>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-desc">{step.desc}</p>
                  </div>
                  <div className="process-image fade-in-right">
                    <img src={step.image} alt={step.title} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>

      {/* Minerals Overview Grid */}
      <section className="section min-extract-section">
        <p className="section-label text-center fade-in">RESOURCES</p>
        <h2 className="section-title text-center fade-in mb-60 text-uppercase">MINERALS WE EXTRACT</h2>

        <div className="minerals-fullgrid">
          {data.map((min, idx) => (
            <div className="min-stat-card fade-in" key={idx} style={{ transitionDelay: `${idx * 0.15}s` }}>
              <h3 className="min-stat-title">{min.name}</h3>
              <p className="min-stat-desc">{min.shortDesc}</p>
              
              <div className="min-stat-table">
                <div className="min-stat-row">
                  <span className="min-stat-label">CAPACITY</span>
                  <span className="min-stat-val">{min.capacity}</span>
                </div>
                <div className="min-stat-row">
                  <span className="min-stat-label">LOCATIONS</span>
                  <span className="min-stat-val">{min.locations}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Catalog Section */}
      <section className="section bg-secondary min-catalog-section">
        <div className="container">
          <p className="section-label text-center fade-in">FULL CATALOG</p>
          <h2 className="section-title text-center fade-in mb-40">EXTENSIVE MINERAL PORTFOLIO</h2>
          
          <div className="catalog-wrapper fade-in">
            <div className="catalog-fader fader-left"></div>
            <div className="catalog-fader fader-right"></div>
            
            <div className="catalog-scroll-container" id="catalogScroll">
              {catalog.map((cat, idx) => (
                <div className="catalog-card" key={idx}>
                  <h3 className="catalog-cat-title">{cat.category}</h3>
                  <ul className="catalog-list">
                    {cat.minerals.map((min, j) => (
                      <li key={j} className="catalog-list-item">
                        <span className="list-dot"></span>
                        {min}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Navigation Indicators */}
            <div className="catalog-nav-hints">
              <button 
                className="scroll-btn scroll-prev" 
                onClick={() => document.getElementById('catalogScroll').scrollBy({ left: -350, behavior: 'smooth' })}
                aria-label="Scroll left"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button 
                className="scroll-btn scroll-next" 
                onClick={() => document.getElementById('catalogScroll').scrollBy({ left: 350, behavior: 'smooth' })}
                aria-label="Scroll right"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
          
          <p className="catalog-scroll-hint text-center fade-in mt-40">
            <span className="scroll-icon">&#8596;</span> Swipe or use arrows to discover more
          </p>
        </div>
      </section>
    </div>
  );
}
