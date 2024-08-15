import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out, e.g., clearing user session or token
    // Redirect to login page after logout
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p className="profile-username">Username: [User's Name]</p>
        {/* Display additional user information here */}
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
