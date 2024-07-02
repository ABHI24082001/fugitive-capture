import React from 'react';

import StartPage from './component/StartPage';
import CitySelection from './component/CitySelection';
import VehicleSelection from './component/VehicleSelection';
import ResultPage from './component/ResultPage';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

const  App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/city-selection" element={<CitySelection />} />
        <Route path="/vehicle-selection" element={<VehicleSelection />} />
        <Route path="/result" element={<ResultPage />} />  
      </Routes>
    </Router>
  );
}

export default App;
