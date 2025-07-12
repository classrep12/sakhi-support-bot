import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsResources.css';

function NewsResources() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          'https://newsdata.io/api/1/news?apikey=pub_67b958449773462781b9eba82b3b5567&q=women+empowerment&language=en'
        );
        setArticles(res.data.results);
      } catch (err) {
        console.error("News API error:", err.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-section">
      <h2>Women Empowerment News & Resources</h2>
      <div className="news-cards">
        {articles.map((item, index) => (
          <div className="news-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsResources;
