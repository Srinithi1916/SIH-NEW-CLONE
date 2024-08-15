import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components1/Navbar';
import Home from './components1/Home';
import Login from './components1/Login';
import Signup from './components1/Signup';
import Profile from './components1/Profile';
import './components1/Navbar.css';
// import './components1/Home.css';
import './components1/Login.css';
import './components1/Signup.css';
import './components1/Profile.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
