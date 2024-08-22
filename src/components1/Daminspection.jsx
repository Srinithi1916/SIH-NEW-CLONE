import React, { useState } from "react";
import video from '../assests4/video.mp4';

import "./Daminspection.css";

const Daminspection = () => {
  const [siltLevel, setSiltLevel] = useState(30); 
  const [waterExtraction, setWaterExtraction] = useState(0); 
  const [warning, setWarning] = useState("");
  const [accumulationRate, setAccumulationRate] = useState(5); 
  const [predictionMonths, setPredictionMonths] = useState(6); 
  const [predictedSiltLevel, setPredictedSiltLevel] = useState(null); 

  const inspectAndExtractWater = () => {
    if (siltLevel > 50) {
      setWarning(
        "Warning: Silt level is too high! Maintenance required before extracting water."
      );
    } else {
      const waterAvailable = 100 - siltLevel; 
      if (waterExtraction > waterAvailable) {
        setWarning(
          `Only ${waterAvailable} liters of water can be extracted. Reduce extraction amount.`
        );
      } else {
        setWarning(
          `Water extraction successful: ${waterExtraction} liters extracted.`
        );
      }
    }
  };

  const predictSiltLevel = () => {
    const predictedLevel = siltLevel + accumulationRate * predictionMonths;
    setPredictedSiltLevel(predictedLevel > 100 ? 100 : predictedLevel); 
  };

  return (
    <div>
      <br></br>
      <div className='login-container'>
      <video className='login-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='login-content'></div>

    <div className="container">
      
      <h2>Dam Inspection and Water Extraction</h2>
      <div className="input-group">
        <label>
          Silt Level (%):
          <input
            type="number"
            value={siltLevel}
            onChange={(e) => setSiltLevel(Number(e.target.value))}
            min="0"
            max="100"
            />
        </label>
        <div className="silt-bar">
          <div
            className="silt-level"
            style={{
              width: `${siltLevel}%`, 
              backgroundColor: siltLevel > 50 ? "red" : "#003366",
            }}
            >
            {siltLevel}%
          </div>
        </div>
      </div>
      <div className="input-group">
        <label>
          Water to Extract (liters):
          <input
            type="number"
            value={waterExtraction}
            onChange={(e) => setWaterExtraction(Number(e.target.value))}
            min="0"
            max={100 - siltLevel}
            />
        </label>
      </div>
      <div className="input-group">
        <label>
          Silt Accumulation Rate (% per month):
          <input
            type="number"
            value={accumulationRate}
            onChange={(e) => setAccumulationRate(Number(e.target.value))}
            min="0"
            max="100"
            />
        </label>
      </div>
      <div className="input-group">
        <label>
          Prediction Period (months):
          <input
            type="number"
            value={predictionMonths}
            onChange={(e) => setPredictionMonths(Number(e.target.value))}
            min="1"
            max="24"
            />
        </label>
      </div>
      <button onClick={inspectAndExtractWater} className="btn">
        Inspect and Extract Water
      </button>
      <button onClick={predictSiltLevel} className="btn predict-btn">
        Predict Future Silt Level
      </button>
      <h3
        className={`message ${
          warning.includes("Warning") ? "warning" : "success"
        }`}
        >
        {warning}
      </h3>
      {predictedSiltLevel !== null && (
        <h3 className="message prediction">
          Predicted Silt Level in {predictionMonths} months: {predictedSiltLevel}%
        </h3>
      )}
    </div>
      </div>
      </div>
    
  );
};

export default Daminspection;
