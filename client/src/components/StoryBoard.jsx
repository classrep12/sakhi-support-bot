import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StoryBoard.css';

function StoryBoard() {
  const [stories, setStories] = useState([]);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const fetchStories = async () => {
    const res = await axios.get('https://sakhi-support-bot-2.onrender.com/api/story/all');
    setStories(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await axios.post('https://sakhi-support-bot-2.onrender.com/api/story/submit', { text });
      setMessage(res.data.message);
      setText('');
      fetchStories();
    } catch (error) {
      setMessage('Failed to submit story.');
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="story-board">
      <h2>Anonymous Stories</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Share your story anonymously..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Post Story</button>
      </form>
      <p>{message}</p>

      <div className="story-list">
        {stories.map((s) => (
          <div key={s.id} className="story">
            <p>{s.text}</p>
            <span>{new Date(s.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryBoard;
