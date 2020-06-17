import React, {useEffect} from 'react';
import './daily.css';
import Day from './daily-forecast';

function Daily() {
    return(
        <div>
            <div className="day1">
                <Day />
            </div>
            <div className="day2">
                <Day />
            </div>
            <div className="day3">
                <Day />
            </div>
            <div className="day4">
                <Day />
            </div>
            <div className="day5">
                <Day />
            </div>
        </div>
    )
}

export default Daily;