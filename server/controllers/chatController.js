const axios = require('axios');
require('dotenv').config();

exports.handleChat = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model:'meta-llama/llama-3-8b-instruct',
        // You can also try: meta-llama/llama-3-8b-instruct
        messages: [
          {
            role: 'system',
            content: "You are Sakhi, a kind and caring support counselor who helps women experiencing emotional distress or abuse. Respond with empathy and encouragement."
          },
          {
            role: 'user',
            content: userMessage
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error('OpenRouter Error:', error.response?.data || error.message);
    res.status(500).json({ reply: 'Sorry, something went wrong. Please try again.' });
  }
};
