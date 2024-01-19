// Home.js
import React from 'react';
import Image from '../Home/Dynasty-logistics-transport.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Dynasty Logistics</h1>
        <p>
          Explore a world of seamless logistics solutions designed to meet your every need. From reliable transportation to real-time tracking, we've got you covered.
        </p>
      </div>
      {/* Add more content specific to your home page */}
      <div className="image-container">
        <img src={Image} alt='Dynasty Logistics Transport' className="logo-image" />
      </div>
    </div>
  );
}

export default Home;
