import React from 'react';
import './Navbar.css';



function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleEmergencyHelp = () => {
    const confirmed = window.confirm("⚠️ Are you sure you want to call the women's helpline 1091?");
    if (confirmed) {
      window.location.href = 'tel:1091';
    }
  };
  
  return (
    <nav className="navbar">
      <div className="nav-logo">🌸 Sakhi 🌸 </div>
      <ul className="nav-links">
        <li onClick={() => scrollTo('about')}>About</li>
        <li onClick={() => scrollTo('chatbot')}>Chatbot</li>
        <li onClick={() => scrollTo('stories')}>Stories</li>
        <li onClick={() => scrollTo('health')}>Health</li>
        <li onClick={() => scrollTo('peers')}>Peers</li>
        <li onClick={() => scrollTo('news')}>News</li>
      </ul>
      <div className="emergency-buttons">
      <button className="emergency-button" onClick={handleEmergencyHelp}>
          Call Helpline
        </button>
      <button className="emergency-button" onClick={() => window.location.href = 'https://www.google.com'}>
        Emergency Exit
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
