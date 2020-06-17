import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import DayDetail from './dayDetail';

function Weather(props) {
    if (props.detail) {
        return (
            <div>
                <DayDetail temp={props.temp} weather={props.weather} hum={props.hum} wind={props.wind}/>
                <div>
                    <h2 style={{textAlign: "center"}}>Weather</h2>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <h2 style={{textAlign: "center"}}>Weather</h2>
                </div>
            </div>
        );
    }
}

export default Weather;