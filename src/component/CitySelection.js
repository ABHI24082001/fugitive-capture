// src/components/CitySelection.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/CitySelection.css";

const cities = [
  {
    name: "Yapkashnagar",
    distance: 60,
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lihaspur",
    distance: 50,
    image:
      "https://images.unsplash.com/photo-1496871455396-14e56815f1f4?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Narmis City",
    distance: 40,
    image:
      "https://images.unsplash.com/photo-1503642551022-c011aafb3c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shekharvati",
    distance: 30,
    image:
      "https://images.unsplash.com/photo-1417632993443-302f4897cf67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nuravgram",
    distance: 20,
    image:
      "https://images.unsplash.com/photo-1517462035531-76bc910a6903?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
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
              src={cities.find((city) => city.name === selection).image}
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
