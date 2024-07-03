// src/components/StartPage.js
import React from "react";
import {  useNavigate } from "react-router-dom";
import "../style/StartPage.css";


const StartPage = () => {
  const navigate = useNavigate();


  const handleStart = () => {
    navigate("/city-selection");
  };

  return (
    <div className="start-page">
      <h1>Welcome to Fugitive Capture Game</h1>
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
};

export default StartPage;
