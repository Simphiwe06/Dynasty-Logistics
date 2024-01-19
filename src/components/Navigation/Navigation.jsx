// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="navigation">
      <div className="nav-icon" onClick={toggleSidebar}>
        &#9776;
      </div>

      <nav className={showSidebar ? 'sidebar open' : 'sidebar'}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/OurServices/OurServices">Services</Link></li>
          <li><Link to="/TrackShipment/TrackShipment">Track Shipment</Link></li>
          <li><Link to="/AboutUs/AboutUs">About Us</Link></li>
          <li><Link to="/Contacts/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
