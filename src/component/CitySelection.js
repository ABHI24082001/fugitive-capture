// src/components/CitySelection.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/CitySelection.css";

const cities = [
  { name: "Yapkashnagar", distance: 60, image: "yapkashnagar.jpg" },
  { name: "Lihaspur", distance: 50, image: "lihaspur.jpg" },
  { name: "Narmis City", distance: 40, image: "yapkashnagar.jpg" },
  { name: "Shekharvati", distance: 30, image: "yapkashnagar.jpg" },
  { name: "Nuravgram", distance: 20, image: "yapkashnagar.jpg" },
];

const CitySelection = () => {
  const [copSelections, setCopSelections] = useState(Array(3).fill(""));
  const navigate = useNavigate();

  const handleChange = (index, event) => {
    const newSelections = [...copSelections];
    newSelections[index] = event.target.value;
    setCopSelections(newSelections);
  };

  const handleSubmit = () => {
    navigate("/vehicle-selection", { state: { copSelections } });
  };

  return (
    <div className="city-selection">
      <h1>Select City for Each Cop</h1>
      {copSelections.map((selection, index) => (
        <div key={index} className="city-selection-item">
          <label>Cop {index + 1}:</label>
          <select value={selection} onChange={(e) => handleChange(index, e)}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          {selection && (
            <img
              src={`/images/${
                cities.find((city) => city.name === selection).image
              }`}
              alt={selection}
            />
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default CitySelection;
