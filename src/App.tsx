import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './components/Signup';
import Home from "./components/Home";

export const WeatherIcons = {
  "01d": `${process.env.PUBLIC_URL}/icons/sunny.svg`,
  "01n": `${process.env.PUBLIC_URL}/icons/night.svg`,
  "02d": `${process.env.PUBLIC_URL}/icons/day.svg`,
  "02n": `${process.env.PUBLIC_URL}/icons/cloudy-night.svg`,
  "03d": `${process.env.PUBLIC_URL}/icons/cloudy.svg`,
  "03n": `${process.env.PUBLIC_URL}/icons/cloudy.svg`,
  "04d": `${process.env.PUBLIC_URL}/icons/perfect-day.svg`,
  "04n": `${process.env.PUBLIC_URL}/icons/cloudy-night.svg`,
  "09d": `${process.env.PUBLIC_URL}/icons/rain.svg`,
  "09n": `${process.env.PUBLIC_URL}/icons/rain-night.svg`,
  "10d": `${process.env.PUBLIC_URL}/icons/rain.svg`,
  "10n": `${process.env.PUBLIC_URL}/icons/rain-night.svg`,
  "11d": `${process.env.PUBLIC_URL}/icons/storm.svg`,
  "11n": `${process.env.PUBLIC_URL}/icons/storm.svg`,
} as any;

function App() {
  const [email, setEmail] = React.useState('');
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup email={email} setEmail={setEmail} />} />
          <Route path="/" element={<Home email={email} />} />
        </Routes>
      </div>
  </Router>
  );
}

export default App;
