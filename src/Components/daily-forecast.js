import React, { useEffect } from 'react';
import './stylesheets.css';
import DayDetail from './dayDetail';
import Weather from './header';

function Day(props) {
    const max = props.max;
    const min = props.min;
    const day = props.day;
    return (
        <div className='days-card'>
            <article className='card'>
                <h4><span>{day}</span></h4>
                <div className="sky">
                <div className="sun"></div>
                    <div className="cloud">
                        <div className="circle-small"></div>
                        <div className="circle-tall"></div>
                        <div className="circle-medium"></div>
                    </div>
                </div>
                <hr />
                <h4>{max}° {min}°</h4>
            </article>
        </div>
    );
}

export default Day;