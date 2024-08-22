import React, { useState } from "react";
import "./Weather.css";
import video from '../assests6/video.mp4';


const Weather = () => {
  const [locationWeather, setLocationWeather] = useState(null);
  const [selectedDamWeather, setSelectedDamWeather] = useState(null);
  const [selectedDam, setSelectedDam] = useState("");

  const dams = [
    { name: "Mettur Dam", lat: 11.7906, lon: 77.8008 },
    { name: "Bhavani Sagar Dam", lat: 11.5767, lon: 77.0066 },
    { name: "Pudhur Dam", lat: 11.3375, lon: 78.4204 },
    { name: "Kundah Dam", lat: 11.4321, lon: 76.6481 },
    { name: "Sathiyar Dam", lat: 10.6183, lon: 77.3169 },
    { name: "Aliyar Dam", lat: 10.3733, lon: 76.9053 },
    { name: "Vaigai Dam", lat: 9.9786, lon: 77.7061 },
    { name: "Periyar Dam", lat: 9.4531, lon: 77.287 },
    { name: "Mullaperiyar Dam", lat: 9.6411, lon: 77.1899 },
    { name: "Gundar Dam", lat: 9.207, lon: 77.537 },
    { name: "Muthupet Dam", lat: 10.3171, lon: 79.2744 },
    { name: "Maruthanadhi Dam", lat: 10.4186, lon: 77.4037 },
    { name: "Palar Dam", lat: 13.1426, lon: 79.671 },
    { name: "Kattaboman Dam", lat: 10.1182, lon: 77.486 },
  ];

  const fetchWeatherData = async (lat, lon) => {
    const apiKey = "50f93f6f32035c1a96f1d16410bc5280"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    return response.json();
  };

  const handleFindLocationClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const locationData = await fetchWeatherData(latitude, longitude);
        setLocationWeather(locationData);
      });
    }
  };

  const handleDamChange = async (event) => {
    const damName = event.target.value;
    setSelectedDam(damName);

    const dam = dams.find((d) => d.name === damName);
    if (dam) {
      const damData = await fetchWeatherData(dam.lat, dam.lon);
      setSelectedDamWeather(damData);
    }
  };

  return (
    <div>

      <div className='weather-container1'>
      <video className='weather-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='weather-content1'>


    <div className="weather-container1">
      <center>

<br></br>
<br></br>
    <br></br>
    <br></br>
    <br></br>


    <div className="weather-card1">
      <div className="location1" onClick={handleFindLocationClick}>
        <div className="location-icon1">&#128205;</div> 
        <div className="location-text1">Find your location</div>
      </div>

      {locationWeather && (
        <div className="weather-info1">
          <h2>Your Location</h2>
          <div className="temp-info1">
            <div className="main-temp1">{locationWeather.main.temp}°C</div>
            <div className="weather-desc1">
              {locationWeather.weather[0].description}
            </div>
          </div>
        </div>
      )}

      <div className="dam-selector1">
        <label htmlFor="dam-select1">Select a Dam:</label>
        <select id="dam-select1" value={selectedDam} onChange={handleDamChange}>
          <option value="">--Select a Dam--</option>
          {dams.map((dam, index) => (
            <option key={index} value={dam.name}>
              {dam.name}
            </option>
          ))}
        </select>
      </div>

      {selectedDamWeather && (
        <div className="dam-weather1">
          <h2>Selected Dam: {selectedDam}</h2>
          <div className="temp-info1">
            <div className="main-temp1">{selectedDamWeather.main.temp}°C</div>
            <div className="weather-desc1">
              {selectedDamWeather.weather[0].description}
            </div>
          </div>
        </div>
      )}
    </div>
      </center>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Weather;