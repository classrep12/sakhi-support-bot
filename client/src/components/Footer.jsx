import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="sakhi-footer">
      <div className="footer-content">
        <p>🌸 Sakhi © {new Date().getFullYear()} — Empowering Women Together</p>
        <p>Made with 💜 for a better tomorrow</p>
      </div>
    </footer>
  );
}

export default Footer;
