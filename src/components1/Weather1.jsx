import React, { useState } from 'react';
import axios from 'axios';
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from 'react-icons/wi';
import video from '../assests5/video.mp4';
import './Weather1.css';

const Weather1 = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = '50f93f6f32035c1a96f1d16410bc5280';

  const getWeather = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data.list.slice(0, 7)); // Limiting to 7-day forecast
      setError(null);
    } catch (err) {
      setError('City not found or API request limit exceeded');
      setWeather(null);
      setForecast([]);
    }
  };

  const renderWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return <WiDaySunny className="weather-icon" />;
      case 'Clouds':
        return <WiCloudy className="weather-icon" />;
      case 'Rain':
        return <WiRain className="weather-icon" />;
      case 'Snow':
        return <WiSnow className="weather-icon" />;
      case 'Thunderstorm':
        return <WiThunderstorm className="weather-icon" />;
      case 'Fog':
      case 'Mist':
      case 'Haze':
        return <WiFog className="weather-icon" />;
      default:
        return <WiDaySunny className="weather-icon" />;
    }
  };

  return (
    <div className="weather-page">
      <video className="weather-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="weather-content">
        <h1 className="title">Weather Forecast</h1>
        <div className="input-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            className="city-input"
          />
          <button onClick={getWeather} className="get-weather-btn">
            Get Weather
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2 className="city-name">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="date-time">{new Date().toLocaleString()}</p>
            {renderWeatherIcon(weather.weather[0].main)}
            <p className="description">{weather.weather[0].description}</p>
            <p className="temperature">Temperature: {weather.main.temp}°C</p>
            <p className="humidity">Humidity: {weather.main.humidity}%</p>
            <p className="wind-speed">Wind Speed: {weather.wind.speed} m/s</p>
            <p className="coordinates">
              Coordinates: {weather.coord.lat}°N, {weather.coord.lon}°E
            </p>
            <p className="timezone">Timezone: {weather.timezone}</p>

            <div className="forecast-container">
              <h3>7-Day Forecast</h3>
              <div className="forecast">
                {forecast.map((day, index) => (
                  <div key={index} className="forecast-day">
                    <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                    {renderWeatherIcon(day.weather[0].main)}
                    <p>{day.main.temp}°C</p>
                    <p>Humidity: {day.main.humidity}%</p>
                    <p>Wind: {day.wind.speed} m/s</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather1;
