import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import Artists from './pages/Artists/Artists';
import Services from './pages/Services/Services';
import Process from './pages/Process/Process';
import Studio from './pages/Studio/Studio';
import Contact from './pages/Contact/Contact'

import Policies from './pages/more/Policies/Policies';
import FAQ from './pages/more/FAQ/FAQ';



const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          {/*main pages*/}
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
