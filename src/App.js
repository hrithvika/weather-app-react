import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Components/header';
import Day from './Components/daily-forecast';
import GetForecast from './Components/getForecast';

function App() {
  return (
    <div className="App">
      <GetForecast />
    </div>
  );
}

export default App;
