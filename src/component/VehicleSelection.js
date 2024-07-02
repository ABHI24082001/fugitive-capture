// src/components/VehicleSelection.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/VehicleSelection.css";

const vehicles = [
  { type: "EV Bike", range: 60, count: 2 },
  { type: "EV Car", range: 100, count: 1 },
  { type: "EV SUV", range: 120, count: 1 },
];

const VehicleSelection = () => {
  const { state } = useLocation();
  const { copSelections } = state;
  const [vehicleSelections, setVehicleSelections] = useState(Array(3).fill(""));
  const navigate = useNavigate();

  const handleChange = (index, event) => {
    const newSelections = [...vehicleSelections];
    newSelections[index] = event.target.value;
    setVehicleSelections(newSelections);
  };

  const handleSubmit = () => {
    navigate("/result", { state: { copSelections, vehicleSelections } });
  };

  return (
    <div className="vehicle-selection">
      <h1>Select Vehicle for Each Cop</h1>
      {vehicleSelections.map((selection, index) => (
        <div key={index} className="vehicle-selection-item">
          <label>
            Cop {index + 1} ({copSelections[index]}):
          </label>
          <select value={selection} onChange={(e) => handleChange(index, e)}>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.type} value={vehicle.type}>
                {vehicle.type}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default VehicleSelection;
