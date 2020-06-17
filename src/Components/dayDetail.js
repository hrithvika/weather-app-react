import React from 'react';
import './dayDetail.css';

function DayDetail(props) {
    return (
        <div>
            <h3>{props.weather}</h3>
            <p>{props.temp}°</p>
            <h5>Feels Like</h5>
            <p className="humidity">Humidity <span style={{color: "white"}}>{props.hum}%</span></p>
            <p className="wind">Wind Speed <span style={{color: "white"}}>{props.wind}km/h</span></p>
        </div>
    )
}

export default DayDetail;