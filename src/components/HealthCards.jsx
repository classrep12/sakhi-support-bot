import React from 'react';
import './HealthCards.css';

const topics = [
  {
    title: "Menstrual Hygiene",
    content: "Change pads every 4–6 hours, wash with warm water, and avoid scented products to prevent infections.",
  },
  {
    title: "Mental Wellness",
    content: "It's okay to talk about your feelings. Practice journaling, meditation, and reach out when you feel overwhelmed.",
  },
  {
    title: "Nutrition",
    content: "Eat iron-rich foods like spinach and legumes. Stay hydrated and avoid skipping meals.",
  },
  {
    title: "Self-Care",
    content: "Take time for yourself — read, walk, or do what brings you peace. Your health matters.",
  },
  {
    title: "Safety Tips",
    content: "Keep emergency contacts handy. Trust your instincts and don't hesitate to ask for help.",
  },
];

function HealthCards() {
  return (
    <div className="health-section">
      <h2>Health & Hygiene Education</h2>
      <div className="card-container">
        {topics.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthCards;
