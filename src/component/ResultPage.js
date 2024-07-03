// src/components/ResultPage.js
import React from "react";
import { useLocation } from "react-router-dom";
import "../style/ResultPage.css";

const ResultPage = () => {
  const { state } = useLocation();
  const { result } = state;

  return (
    <div className="result-page">
      <h1>Capture Result</h1>
      {result.captureStatus === "Captured" ? (
        <p>Fugitive captured by {result.capturingCop}!</p>
      ) : (
        <p>Fugitive not captured.</p>
      )}
    </div>
  );
};

export default ResultPage;
