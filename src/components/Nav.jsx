import React, { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <ul className="nav-left">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      <div className="nav-monogram">DA</div>
      <ul className="nav-right">
        <li><a href="#tools">Tools</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact" className="nav-hire">Hire Me</a></li>
      </ul>
    </nav>
  );
}
