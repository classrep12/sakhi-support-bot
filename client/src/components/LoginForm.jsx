import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim()) {
      onLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to <span>Sakhi</span></h2>
        <p>Your safe space for support, connection & empowerment 🌸</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
