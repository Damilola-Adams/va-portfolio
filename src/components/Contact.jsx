import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [btnText, setBtnText] = useState('Send Message');
  const [btnStyle, setBtnStyle] = useState({});
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setBtnText('✓ Sent — I\'ll be in touch!');
          setBtnStyle({ background: '#4A4843' });
          e.target.reset();
          setTimeout(() => {
            setBtnText('Send Message');
            setBtnStyle({});
          }, 3500);
        },
        (error) => {
          console.error('EmailJS submission failed:', error.text || error);
          setBtnText('Failed to send — Please try again');
          setBtnStyle({ background: '#B35E5E' }); // soft red
          setTimeout(() => {
            setBtnText('Send Message');
            setBtnStyle({});
          }, 3500);
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="reveal">
          <div className="eyebrow">Get In Touch</div>
          <p className="contact-statement">Let's build something <em>great together.</em></p>
          <p className="contact-note">Open to VA retainers, one-off projects, and operational builds. If you're a founder or team that needs reliable, proactive support — I'd love to connect.</p>

          <div className="socials-list">
            <a href="https://linkedin.com/in/damilola-adams" target="_blank" rel="noreferrer" className="social-item">
              <div className="soc-left">
                <div className="soc-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="soc-text">
                  <div className="soc-platform">LinkedIn</div>
                  <div className="soc-handle">Damilola Adams</div>
                </div>
              </div>
              <span className="soc-arrow">→</span>
            </a>

            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-item">
              <div className="soc-left">
                <div className="soc-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#555">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="soc-text">
                  <div className="soc-platform">X (Twitter)</div>
                  <div className="soc-handle">@yourhandle</div>
                </div>
              </div>
              <span className="soc-arrow">→</span>
            </a>

            <a href="mailto:damilola@email.com" className="social-item">
              <div className="soc-left">
                <div className="soc-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="soc-text">
                  <div className="soc-platform">Email</div>
                  <div className="soc-handle">damilola@email.com</div>
                </div>
              </div>
              <span className="soc-arrow">→</span>
            </a>

            <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="social-item">
              <div className="soc-left">
                <div className="soc-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="soc-text">
                  <div className="soc-platform">Instagram</div>
                  <div className="soc-handle">@yourhandle</div>
                </div>
              </div>
              <span className="soc-arrow">→</span>
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form reveal d2">
          <p className="form-title">Send a message</p>
          <div className="form-row">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Your name" required />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="your@email.com" required />
          </div>
          <div className="form-row">
            <label>How can I help?</label>
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service...</option>
              <option>Executive & Admin Support</option>
              <option>Operations Systems Design</option>
              <option>Communication Automation</option>
              <option>Travel Coordination</option>
              <option>Lead & CRM Management</option>
              <option>Social Media & Personal Brand</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-row">
            <label>Message</label>
            <textarea name="message" placeholder="Tell me about your needs..." required></textarea>
          </div>
          <button type="submit" className="form-submit" style={btnStyle}>
            {btnText}
          </button>
        </form>
      </div>
    </section>
  );
}
