// Dashboard.js
import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h2>Welcome to Dynasty Logistics Dashboard!</h2>
        <p>
          We're thrilled to have you on board as we navigate the logistics landscape together. Your journey begins here, where efficiency meets excellence, and every shipment tells a story.
        </p>
        <p>
          Explore the various facets of our logistics operations, track shipments in real-time, and uncover insights that drive our commitment to delivering beyond expectations.
        </p>
        <p>
          Feel free to use the navigation menu to discover the powerful features tailored for your logistics experience. If you have any questions or need assistance, our support team is just a click away.
        </p>
        <div className="dashboard-image">
          {/* You can add an image or illustration here to enhance the visual appeal */}
        </div>
      </div>

      {/* The rest of your dashboard components go here... */}
    </div>
  );
}

export default Dashboard;