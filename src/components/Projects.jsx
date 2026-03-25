import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'JHARKHAND IRON ORE PROJECT',
    desc: 'Large-scale iron ore mining operation supplying major steel manufacturers',
    location: 'Jharkhand',
    capacity: '3.5M tons/year',
    established: '2015',
    status: 'OPERATIONAL',
    image: '/images/operations/exploration.jpg',
  },
  {
    title: 'ODISHA BAUXITE MINING',
    desc: 'High-grade bauxite extraction for aluminum industry',
    location: 'Odisha',
    capacity: '2.8M tons/year',
    established: '2017',
    status: 'OPERATIONAL',
    image: '/images/about-loader.jpg',
  },
  {
    title: 'MADHYA PRADESH COAL MINING',
    desc: 'Thermal coal production for power generation sector',
    location: 'Madhya Pradesh',
    capacity: '4M tons/year',
    established: '2012',
    status: 'OPERATIONAL',
    image: '/images/operations/processing.jpg',
  },
  {
    title: 'RAJASTHAN LIMESTONE PROJECT',
    desc: 'New limestone mining project for cement industry',
    location: 'Rajasthan',
    capacity: '2M tons/year',
    established: '2024',
    status: 'UNDER DEVELOPMENT',
    image: '/images/operations/logistics.jpg',
  },
  {
    title: 'CHHATTISGARH IRON ORE EXTENSION',
    desc: 'Expansion of existing iron ore operations',
    location: 'Chhattisgarh',
    capacity: '2.5M tons/year',
    established: '2025',
    status: 'UNDER DEVELOPMENT',
    image: '/images/operations/exploration.jpg',
  },
  {
    title: 'GUJARAT BAUXITE DEVELOPMENT',
    desc: 'Greenfield bauxite mining project',
    location: 'Gujarat',
    capacity: '1.8M tons/year',
    established: '2026',
    status: 'PLANNING',
    image: '/images/about-loader.jpg',
  },
];

export default function Projects() {
  return (
    <div id="projects">
      {/* 1. Projects Hero */}
      <section className="pro-hero fade-in">
        <div className="pro-hero-bg">
          <img src="/images/operations/logistics.jpg" alt="Mining Across India Banner" />
        </div>
        <div className="pro-hero-overlay"></div>
        <div className="pro-hero-content text-center">
          <p className="section-label">OUR PROJECTS</p>
          <h1 className="pro-title">MINING ACROSS INDIA</h1>
        </div>
      </section>

      {/* 2. Active Projects Intro */}
      <section className="section bg-primary text-center">
        <h2 className="section-title fade-in mb-20">ACTIVE PROJECTS</h2>
        <p className="section-desc max-w-800 mx-auto fade-in">
          Our mining operations span across multiple states in India, each project designed to meet the highest standards of efficiency, safety, and sustainability.
        </p>
      </section>

      {/* 3. Projects Grid */}
      <section className="section bg-primary pro-grid-wrapper">
        <div className="pro-grid">
          {projectsData.map((project, i) => (
            <div className="pro-card fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="pro-image-container">
                <img src={project.image} alt={project.title} className="pro-image" />
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <div className="pro-content">
                <h3 className="pro-card-title">{project.title}</h3>
                <p className="pro-card-desc">{project.desc}</p>
                <div className="pro-details">
                  <div className="pro-detail-item">
                    <svg className="pro-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <div className="pro-detail-item">
                    <svg className="pro-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    <span>Capacity: {project.capacity}</span>
                  </div>
                  <div className="pro-detail-item">
                    <svg className="pro-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Established: {project.established}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
