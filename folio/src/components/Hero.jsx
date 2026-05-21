import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-role">Executive &amp; Administrative Virtual Assistant</p>
        <h1 className="hero-name">
          Damilola
          <em>Adams</em>
        </h1>
        <div className="hero-divider"></div>
        <p className="hero-desc">
          Detail-oriented and proactive, I help founders and teams run smoother operations — from managing schedules to building the systems your business actually needs.
        </p>
        <a href="#about" className="hero-cta">
          Learn More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

        <div className="hero-scroll-hint">
          <div className="scroll-bar"></div>
          <span>Scroll</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-container">
          {/* Replace the div below with: <img src="your-photo.jpg" alt="Damilola Adams" /> */}
          <div className="photo-placeholder-hero">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p>Your Photo Here</p>
          </div>
        </div>

        <div className="hero-float-tag">
          <div className="float-tag-label">Available for</div>
          <div className="float-tag-value">New<br />Projects</div>
        </div>
      </div>
    </section>
  );
}
