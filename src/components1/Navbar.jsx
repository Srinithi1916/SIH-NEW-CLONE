import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status and fetch username from localStorage
    const loggedInUser = localStorage.getItem('username');
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('username'); // Clear stored username
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Your Project Name</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">Sign Up</Link>
            <Link to="/profile" className="navbar-link">Profile</Link>
          </>
        ) : (
          <div className="navbar-profile">
            <div className="profile-circle">
              <span>{username.charAt(0)}</span>
            </div>
            <div className="profile-dropdown">
              <span className="profile-username">{username}</span>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
