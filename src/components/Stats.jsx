import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const stats = [
  { number: 25, suffix: '+', label: 'Years of Excellence' },
  { number: 5000, suffix: '+', label: 'Skilled Workforce', format: true },
  { number: 15, suffix: '', label: 'Active Mining Sites' },
];

function AnimatedCounter({ target, suffix, format, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  const formatted = format ? count.toLocaleString() : count;

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-card fade-in" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="stat-number">
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                format={stat.format}
              />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
