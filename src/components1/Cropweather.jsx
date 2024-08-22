import React, { useState } from 'react';
import video from '../assests3/video.mp4';

import './Cropweather.css'; 

const cropsData = [
    { crop: 'Wheat', minTemp: 10, maxTemp: 25, image: 'https://cdn.pixabay.com/photo/2023/07/30/07/23/soft-wheat-8158264_1280.jpg' },
    { crop: 'Barley', minTemp: 8, maxTemp: 24, image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Carrot', minTemp: 10, maxTemp: 20, image: 'https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Spinach', minTemp: 10, maxTemp: 22, image: 'https://images.pexels.com/photos/7457011/pexels-photo-7457011.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { crop: 'Beetroot', minTemp: 10, maxTemp: 25, image: 'https://images.pexels.com/photos/5502852/pexels-photo-5502852.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { crop: 'Onion', minTemp: 10, maxTemp: 30, image: 'https://images.pexels.com/photos/10041307/pexels-photo-10041307.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { crop: 'Cabbage', minTemp: 10, maxTemp: 25, image: 'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { crop: 'Cauliflower', minTemp: 10, maxTemp: 25, image: 'https://images.pexels.com/photos/23235232/pexels-photo-23235232/free-photo-of-close-up-of-cauliflower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Green Peas', minTemp: 10, maxTemp: 20, image: 'https://images.pexels.com/photos/4750262/pexels-photo-4750262.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { crop: 'Radish', minTemp: 10, maxTemp: 25, image: 'https://images.pexels.com/photos/20852224/pexels-photo-20852224/free-photo-of-close-up-of-radish-and-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Corn', minTemp: 20, maxTemp: 40, image: 'https://images.pexels.com/photos/10041342/pexels-photo-10041342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Tomato', minTemp: 15, maxTemp: 35, image: 'https://images.pexels.com/photos/5503107/pexels-photo-5503107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Pepper', minTemp: 18, maxTemp: 30, image: 'https://images.pexels.com/photos/5988689/pexels-photo-5988689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Cucumber', minTemp: 15, maxTemp: 40, image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { crop: 'Pumpkin', minTemp: 15, maxTemp: 30, image: 'https://images.pexels.com/photos/4750287/pexels-photo-4750287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Okra (Ladyfinger)', minTemp: 20, maxTemp: 40, image: 'https://ilovenursery.com/wp-content/uploads/2023/03/Bhindi-Okra-F1-Sujata-Vegetable-Seeds.jpg' },
    { crop: 'Chili', minTemp: 20, maxTemp: 45, image: 'https://images.pexels.com/photos/12192807/pexels-photo-12192807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Sweet Potato', minTemp: 20, maxTemp: 35, image: 'https://images.pexels.com/photos/2889344/pexels-photo-2889344.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { crop: 'Groundnut (Peanut)', minTemp: 20, maxTemp: 37, image: 'https://agrocares.com/wp-content/uploads/2023/01/Groundnuts.webp' },
    { crop: 'Soybean', minTemp: 15, maxTemp: 30, image: 'https://eos.com/wp-content/uploads/2023/05/green-soybeans.jpg.webp' },
    { crop: 'Watermelon', minTemp: 20, maxTemp: 35, image: 'https://images.pexels.com/photos/5187233/pexels-photo-5187233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Papaya', minTemp: 18, maxTemp: 35, image: 'https://images.pexels.com/photos/10954336/pexels-photo-10954336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Mango', minTemp: 25, maxTemp: 35, image: 'https://images.pexels.com/photos/16537239/pexels-photo-16537239/free-photo-of-green-mango-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Banana', minTemp: 20, maxTemp: 30, image: 'https://images.pexels.com/photos/2168838/pexels-photo-2168838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Guava', minTemp: 20, maxTemp: 35, image: 'https://images.pexels.com/photos/9708957/pexels-photo-9708957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Pomegranate', minTemp: 15, maxTemp: 35, image: 'https://images.pexels.com/photos/5272973/pexels-photo-5272973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Coconut', minTemp: 25, maxTemp: 35, image: 'https://images.pexels.com/photos/1646272/pexels-photo-1646272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Ragi', minTemp: 25, maxTemp: 45, image: 'https://www.agrifarming.in/wp-content/uploads/Guide-to-Finger-Millet-Cultivation-2.jpg' },
    { crop: 'Cashew', minTemp: 20, maxTemp: 35, image: 'https://images.pexels.com/photos/16562995/pexels-photo-16562995/free-photo-of-close-up-of-cashew.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'Rice', minTemp: 25, maxTemp: 37, image: 'https://images.pexels.com/photos/7718572/pexels-photo-7718572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'chickpea', minTemp: 15, maxTemp: 25, image: 'https://images.pexels.com/photos/2664269/pexels-photo-2664269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { crop: 'sorghum', minTemp: 30, maxTemp: 42, image: 'https://sorghumgrowers.com/wp-content/uploads/2019/02/National-Sorghum-Producers-Sorghum-101-5.jpg' },
];

export default function Cropweather() {
    const [temperature, setTemperature] = useState('');
    const [suitableCrops, setSuitableCrops] = useState([]);

    const handleTemperatureChange = (event) => {
        setTemperature(event.target.value);
    };

    const findCrops = () => {
        const temp = parseFloat(temperature);
        if (isNaN(temp)) {
            setSuitableCrops([]);
            return;
        }
        const crops = cropsData.filter(
            (crop) => temp >= crop.minTemp && temp <= crop.maxTemp
        );
        setSuitableCrops(crops);
    };

    return (
        <div>
            <br></br>
          
              <div className='crop-container'>
      <video className='crop-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='crop-content'></div>
            <br />
            <br />
            <div className="crop-suggestion-container">
                <h2>Crop Suggestions Based on Temperature</h2>
                <form onSubmit={(e) => { e.preventDefault(); findCrops(); }} className="crop-form">
                    <div className="input-group">
                        <label htmlFor="temperature">Enter Temperature (°C):</label>
                        <input
                            type="number"
                            id="temperature"
                            value={temperature}
                            onChange={handleTemperatureChange}
                            placeholder="Temperature in °C"
                        />
                    </div>
                    <button type="submit" className="submit-button">Find Suitable Crops</button>
                </form>
                <div className="crops-list">
                    {suitableCrops.length > 0 ? (
                        <ul>
                            {suitableCrops.map((crop, index) => (
                                <li key={index} className="crop-item">
                                    <img src={crop.image} alt={crop.crop} className="crop-image" />
                                    <span className="crop-name">{crop.crop}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No suitable crops found for this temperature.</p>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
}
