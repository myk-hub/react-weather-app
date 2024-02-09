import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from "./components/Signup";
import Home from "./components/Home";

export const WeatherIcons = {
  "01d": "/src/icons/sunny.svg",
  "01n": "/src/icons/night.svg",
  "02d": "/src/icons/day.svg",
  "02n": "/src/icons/cloudy-night.svg",
  "03d": "/src/icons/cloudy.svg",
  "03n": "/src/icons/cloudy.svg",
  "04d": "/src/icons/perfect-day.svg",
  "04n": "/src/icons/cloudy-night.svg",
  "09d": "/src/icons/rain.svg",
  "09n": "/src/icons/rain-night.svg",
  "10d": "/src/icons/rain.svg",
  "10n": "/src/icons/rain-night.svg",
  "11d": "/src/icons/storm.svg",
  "11n": "/src/icons/storm.svg",
} as any;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
