import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import ChatWindow from './components/ChatWindow';
import StoryBoard from './components/StoryBoard';
import HealthCards from './components/HealthCards';
import AboutSakhi from './components/AboutSakhi';
import PeerProfiles from './components/PeerProfiles';
import NewsResources from './components/NewsResources';
import Navbar from './components/Navbar';
import Footer from './components/Footer';








import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      
      {loggedIn ? (
        <>
          <Navbar />
          <div id="about">
            <AboutSakhi />
          </div>

          <div className="logged-in-layout">
            <div className="column" id="chatbot">
              <ChatWindow />
            </div>
            <div className="column" id="stories">
              <StoryBoard />
            </div>
          </div>

          <div className="full-width-section" id="health">
            <HealthCards />
          </div>

          <div className="full-width-section" id="peers">
            <PeerProfiles />
          </div>

          <div className="full-width-section" id="news">
           <NewsResources />
          </div>
          <Footer />
        </>
      ) : (
        <LoginForm onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
