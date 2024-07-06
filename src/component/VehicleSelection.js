import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from '../axiosConfig'
import "../style/VehicleSelection.css";

const vehicles = [
  {
    type: "EV Bike",
    range: 60,
    count: 2,
    image:
      "https://images.unsplash.com/photo-1481575184241-4754ea78a1bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "EV Car",
    range: 100,
    count: 1,
    image:
      "https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "EV SUV",
    range: 120,
    count: 1,
    image:
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
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

    const handleSubmit = async () => {
      try {
        const cops = copSelections.map((cop, index) => ({
          name: cop,
          city: copSelections[index],
          vehicle: vehicleSelections[index],
        }));

        const response = await axiosInstance.post("/capture/check-capture", {
          cops,
        }); // Using axiosInstance with base URL
        navigate("/result", { state: { result: response.data } });
      } catch (error) {
        console.error("There was an error making the request:", error);
      }
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
          {vehicles.map(
            (vehicle) =>
              vehicle.type === vehicleSelections[index] && (
                <img
                  key={vehicle.type}
                  src={vehicle.image}
                  alt={vehicle.type}
                  style={{ width: "100px", height: "auto", marginTop: "10px" }}
                />
              )
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default VehicleSelection;
