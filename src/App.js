//

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components1/Navbar";
import Home from "./components1/Home";
import Login from "./components1/Login";
import Signup from "./components1/Signup";
import Profile from "./components1/Profile";
import Weather from "./components1/Weather";
import Damlevel from "./components1/Damlevel";
import Cropimprovement from "./components1/Cropimprovement";
import Cropmanagement from "./components1/Cropmanagement";
import Cropirrigation from "./components1/Cropirrigation";
import Weather1 from "./components1/Weather1";
import Dams from "./components1/Dams";
import Daminspection from "./components1/Daminspection";
import Email from "./components1/Email";
import Cropweather from "./components1/Cropweather";
import Carbornfootprint from "./components1/Carbornfootprint";
import "./components1/Navbar.css";
import "./components1/Login.css";
import "./components1/Signup.css";
import "./components1/Profile.css";
import "./components1/Content.css";
import "./components1/Dams.css";
import "./components1/i18n";

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
          <Route path="/weather" element={<Weather />} />
          <Route path="/damlevel" element={<Damlevel />} />
          <Route path="/cropimprovement" element={<Cropimprovement />} />
          <Route path="/cropmanagement" element={<Cropmanagement />} />
          <Route path="/cropirrigation" element={<Cropirrigation />} />
          <Route path="/weather1" element={<Weather1 />} />
          <Route path="/maps" element={<Dams />} />
          <Route path="/daminspection" element={<Daminspection />} />
          <Route path="/email" element={<Email />} />
          <Route path="/cropweather" element={<Cropweather />} />
          <Route path="/carbornfootprint" element={<Carbornfootprint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
