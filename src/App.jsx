// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import OurServices from './components/OurServices/OurServices';
import TrackShipment from './components/TrackShipment/TrackShipment';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/TrackShipment" element={<TrackShipment />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
