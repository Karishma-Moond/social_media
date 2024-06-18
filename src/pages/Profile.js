// Profile.js
import React from 'react';
import './Page.css'; // Import CSS for styling

const Profile = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2>User Profile</h2>
        <div className="profile-info">
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Location: New York, USA</p>
          {/* Add more profile information here */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
