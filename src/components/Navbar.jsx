import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About Us', sectionId: 'about' },
    { label: 'Operations', sectionId: 'minerals' },
    { label: 'Sustainability', sectionId: 'sustainability' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'cta' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'stats', 'minerals', 'sustainability', 'projects', 'cta', 'footer'];
      let currentSectionId = 'home';
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          // If the top of the section crosses 40% of the screen from top
          if (element.getBoundingClientRect().top <= window.innerHeight * 0.4) {
             currentSectionId = id;
          }
        }
      }

      // Group 'stats' logically under the 'about' tab
      if (currentSectionId === 'stats') {
        currentSectionId = 'about';
      }
      // Group 'footer' logically under the 'Contact' tab (cta)
      if (currentSectionId === 'footer') {
        currentSectionId = 'cta';
      }

      // Find the corresponding label for the nav
      const activeNav = navLinks.find(link => link.sectionId === currentSectionId);
      if (activeNav) {
        setActiveLink((prev) => prev !== activeNav.label ? activeNav.label : prev);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId, label) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveLink(label);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, 'home', 'Home')}>
        <div className="brand-logo">SAN</div>
        <span className="brand-name">SAN Mining Corporation</span>
      </a>

      <button
        className={`menu-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-nav${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={`#${link.sectionId}`}
              className={`nav-link${activeLink === link.label ? ' active' : ''}`}
              onClick={(e) => handleNavClick(e, link.sectionId, link.label)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
