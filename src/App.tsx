import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import MissionStatement from './components/MissionStatement';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

import smallLogo from './assets/images/logo_32x32.png';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
    setIsVisible(true);
  }, []);

  return (
    <BrowserRouter basename="/">
      <div className="min-h-screen bg-gray-300 flex flex-col">
        {/* Header */}
        <Header fontLoaded={fontLoaded} smallLogo={smallLogo} />
        
        {/* Main Content Wrapper */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission-statement" element={<MissionStatement /> } />
            <Route path="/faq" element={<FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />} />
          </Routes>
        </main>

        {/* CTA & Footer Section */}
        <CTA isVisible={isVisible} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;