import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OmegleWeb from './components/OmegleWeb.jsx';
import ChatInterface from './components/ChatInterface.jsx';
import VideoRoom from './components/VideoRoom.jsx'; // fixed import name
import ChatRoom from './components/ChatRoom.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsConditions from './components/TermsConditions.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import NewEra from './components/NewEra.jsx';
import WelcomeToOmegleWeb from './components/WelcomeToOmegleWeb.jsx';
import GlobalCommunity from './components/GlobalCommunity.jsx';
import PrivacyFocusedDesign from './components/PrivacyFocusedDesign.jsx';
import NoAppNeeded from './components/NoAppNeeded.jsx';
import SuperiorExperience from './components/SuperiorExperience.jsx';
import ReadyToJoin from './components/ReadyToJoin.jsx';
import GlobalConnectionPlatform from './components/GlobalConnectionPlatform.jsx';
import SafetyFirst from './components/SafetyFirst.jsx';
import YourNextAdventure from './components/YourNextAdventure.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OmegleWeb />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/video" element={<VideoRoom />} /> {/* new route for video chat */}
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-era" element={<NewEra />} />
        <Route path="/welcome" element={<WelcomeToOmegleWeb />} />
        <Route path="/global-community" element={<GlobalCommunity />} />
        <Route path="/privacy-design" element={<PrivacyFocusedDesign />} />
        <Route path="/no-app-needed" element={<NoAppNeeded />} />
        <Route path="/superior-experience" element={<SuperiorExperience />} />
        <Route path="/ready-to-join" element={<ReadyToJoin />} />
        <Route path="/global-connection-platform" element={<GlobalConnectionPlatform />} />
        <Route path="/safety-first" element={<SafetyFirst />} />
        <Route path="/your-next-adventure" element={<YourNextAdventure />} />
      </Routes>
    </Router>
  );
}

export default App;
