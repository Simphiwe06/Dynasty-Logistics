// Header.js
import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="src\images\dynasty-logistics.png" alt="Dynasty Logistics Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/OurServices">Services</Link></li>
          <li><Link to="/TrackShipment">Track Shipment</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Contacts">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
