import React from 'react';
import './PeerProfiles.css';

const profiles = [
  {
    name: "Aarti Verma",
    skill: "Tailoring",
    location: "Lucknow",
    about: "I run a small tailoring unit and love mentoring girls to become self-reliant.",
    image: "https://tse4.mm.bing.net/th/id/OIP.VtxojsAxcF0RXa0oZX5OnAHaE8?pid=Api&P=0&h=220"
  },
  {
    name: "Shalini Raut",
    skill: "Organic Farming",
    location: "Nashik",
    about: "Passionate about farming and training women in sustainable agriculture.",
    image: "https://tse2.mm.bing.net/th/id/OIP.4oX3P9lLD7PsRbKYkCrr5gHaEP?pid=Api&P=0&h=220"
  },
  {
    name: "Meena Gupta",
    skill: "Handicrafts",
    location: "Jaipur",
    about: "I design and sell Rajasthani handmade jewelry and decor.",
    image: "https://img.freepik.com/premium-photo/portrait-beautiful-indian-village-woman_987694-108.jpg"
  },
];

function PeerProfiles() {
  return (
    <div className="peer-section">
      <h2>Connect with Skilled Women</h2>
      <div className="profile-grid">
        {profiles.map((profile, idx) => (
          <div className="profile-card" key={idx}>
            <img src={profile.image} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p><strong>Skill:</strong> {profile.skill}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p className="about">{profile.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PeerProfiles;
