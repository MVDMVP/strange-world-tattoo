import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import Artists from './pages/Artists/Artists';
import Services from './pages/Services/Services';
import Process from './pages/Process/Process';
import Studio from './pages/Studio/Studio';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/Studio" element={<Studio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
