import React, { useState } from 'react';
import axios from 'axios';

function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('https://sakhi-support-bot-2.onrender.com/api/chat', {
        message: input
      });

      const botMessage = {
        sender: 'bot',
        text: response.data.reply
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Sorry, something went wrong. Please try again later.' }
      ]);
    }

    setInput('');
  };

  return (
    <div className="chat-window">
      <h2>Chat your concerns with Sakhi</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;
