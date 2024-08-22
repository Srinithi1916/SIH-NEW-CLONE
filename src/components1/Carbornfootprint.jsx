import React, { useState } from 'react';
import './Carborn.css'; 
import { Modal } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import video from '../assests7/video.mp4';


const Carbonfootprint = () => {
  const [formData, setFormData] = useState({
    farmSize: 0, 
    cropType: '',
    livestock: {
      feedType: '',
      wasteManagement: '',
      healthMonitoring: '',
      nutrition: '',
    },
    irrigationType: '',
    waterUsage: 0, 
    equipment: {
      tractor: false,
      combineHarvester: false,
      plow: false,
      other: false,
    },
    energyConsumption: 0, 
    renewableEnergySources: {
      solar: false,
      wind: false,
      biogas: false,
    },
    fertilizerUse: 0, 
    pesticideUse: 0, 
    manureManagement: '',
    landUse: '',
    responsiblePractices: 'Sometimes',
  });

  const [open, setOpen] = useState(false);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name.includes('renewableEnergySources') || name.includes('equipment')) {
        setFormData({
          ...formData,
          [name.split('.')[0]]: {
            ...formData[name.split('.')[0]],
            [name.split('.')[1]]: checked,
          },
        });
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        });
      }
    } else if (name.includes('livestock')) {
      setFormData({
        ...formData,
        livestock: {
          ...formData.livestock,
          [name.split('.')[1]]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCalculate = () => {
    const result =
      0.1 * formData.farmSize +
      0.05 * formData.waterUsage +
      0.2 * formData.energyConsumption +
      0.15 * formData.fertilizerUse +
      0.1 * formData.pesticideUse +
      (formData.manureManagement === 'Advanced' ? 0.1 : 0);

    setCarbonFootprint(result);
    setOpen(true);
  };

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <div className='carborn-container'>
      <video className='carborn-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='carborn-content'></div>

    <div className="calculator-container">
      <header>
        <h1>
        
          Agricultural Carbon Footprint Calculator
        </h1>
        <img
          src="https://www.gannett-cdn.com/indepth-static-assets/uploads/master/70222728007/3d28ae4e-d697-400b-b080-1e78ba14942d-climate_leaders_topper_desktop.jpg?width=1600"
          alt="Agricultural"
          className="header-image"
          />
      </header>
      <div className="calculator-form">
        <div className="form-left">
          <div className="form-section farm-details">
            <h2><AgricultureIcon /> Farm Details</h2>
            <label>
              Farm Size (acres):
              <input
                type="number"
                name="farmSize"
                value={formData.farmSize}
                onChange={handleChange}
                />
            </label>
            <label>
              Main Crop Type:
              <input
                type="text"
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                />
            </label>
            <label>
              Land Use:
              <input
                type="text"
                name="landUse"
                value={formData.landUse}
                onChange={handleChange}
                />
            </label>
          </div>
          <div className="form-section livestock-details">
            <h2>Livestock Management</h2>
            <label>
              Feed Type:
              <input
                type="text"
                name="livestock.feedType"
                value={formData.livestock.feedType}
                onChange={handleChange}
                />
            </label>
            <label>
              Waste Management Practices:
              <textarea
                name="livestock.wasteManagement"
                value={formData.livestock.wasteManagement}
                onChange={handleChange}
                />
            </label>
            <label>
              Health Monitoring:
              <input
                type="text"
                name="livestock.healthMonitoring"
                value={formData.livestock.healthMonitoring}
                onChange={handleChange}
                />
            </label>
            <label>
              Nutrition Management:
              <input
                type="text"
                name="livestock.nutrition"
                value={formData.livestock.nutrition}
                onChange={handleChange}
                />
            </label>
            <label>
              Irrigation Type:
              <input
                type="text"
                name="irrigationType"
                value={formData.irrigationType}
                onChange={handleChange}
                />
            </label>
            <label>
              Water Usage (liters per day):
              <input
                type="range"
                name="waterUsage"
                min="0"
                max="10000"
                step="100"
                value={formData.waterUsage}
                onChange={handleChange}
                />
              <span>{formData.waterUsage} liters/day</span>
            </label>
            <label>
              Manure Management:
              <select
                name="manureManagement"
                value={formData.manureManagement}
                onChange={handleChange}
                >
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          </div>
        </div>
        <div className="form-right">
          <div className="form-section agricultural-equipment">
            <h2><AgricultureIcon /> Agricultural Equipment</h2>
            {['tractor', 'combineHarvester', 'plow', 'other'].map((item) => (
                <label key={item}>
                <input
                  type="checkbox"
                  name={`equipment.${item}`}
                  checked={formData.equipment[item]}
                  onChange={handleChange}
                  />
                {item.replace(/([A-Z])/g, ' $1')}
              </label>
            ))}
            <label>
              Monthly Energy Consumption (KWh):
              <input
                type="range"
                name="energyConsumption"
                min="0"
                max="5000"
                step="50"
                value={formData.energyConsumption}
                onChange={handleChange}
                />
              <span>{formData.energyConsumption} KWh</span>
            </label>
          </div>
          <div className="form-section renewable-resources">
            <h2><SolarPowerIcon /> Renewable Energy Sources</h2>
            {['solar', 'wind', 'biogas'].map((source) => (
                <label key={source}>
                <input
                  type="checkbox"
                  name={`renewableEnergySources.${source}`}
                  checked={formData.renewableEnergySources[source]}
                  onChange={handleChange}
                  />
                {source.charAt(0).toUpperCase() + source.slice(1)}
              </label>
            ))}
          </div>
          <div className="form-section additional-details">
            <h2>Additional Details</h2>
            <label>
              Fertilizer Use (kg per year):
              <input
                type="number"
                name="fertilizerUse"
                value={formData.fertilizerUse}
                onChange={handleChange}
                />
            </label>
            <label>
              Pesticide Use (liters per year):
              <input
                type="number"
                name="pesticideUse"
                value={formData.pesticideUse}
                onChange={handleChange}
                />
            </label>
            <label>
              Do you follow environmentally responsible practices?
              <select
                name="responsiblePractices"
                value={formData.responsiblePractices}
                onChange={handleChange}
                >
                <option value="Sometimes">Sometimes</option>
                <option value="Always">Always</option>
                <option value="Rarely">Rarely</option>
              </select>
            </label>
          </div>
          <button className="calculate-btn" onClick={handleCalculate}>
            Calculate Carbon Footprint
          </button>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-content">
          <h2>Your Carbon Footprint Result</h2>
          <p>Your estimated carbon footprint is: {carbonFootprint.toFixed(2)} tons of CO2e per year.</p>
          <button className="close-btn" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
                  </div>
                  </div>
            
  );
};

export default Carbonfootprint;
