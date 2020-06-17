import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import './getForecast.css';
import Day from './daily-forecast';
import Weather from './header';

function GetForecast () {
    const dayBuilder = d => {
        let day = d.getDay();
        return day;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [daily1, setDaily1] = useState({max: 0, min: 0});
    const [daily2, setDaily2] = useState({max: 0, min: 0});
    const [daily3, setDaily3] = useState({max: 0, min: 0});
    const [daily4, setDaily4] = useState({max: 0, min: 0});
    const [daily5, setDaily5] = useState({max: 0, min: 0});
    const [day, setDay] = useState(0);
    const [detail, setDetail] = useState(false);
    const [temp, setTemp] = useState(0);
    const [weather, setWeather] = useState(0);
    const [hum, setHum] = useState(0);
    const [wind, setWind] = useState(0);

    const refreshPage = () => {
        setDetail(true);
    }

    useEffect (() => {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=17.9528&lon=73.8886&units=metric&exclude=minutely&appid=4cf8d63c470508ccd8b7958f022ca1d1")
        .then(result => {
            setDaily1({max: result.data.daily[0].temp.max, min: result.data.daily[0].temp.min});
            setDaily2({max: result.data.daily[1].temp.max, min: result.data.daily[1].temp.min});
            setDaily3({max: result.data.daily[2].temp.max, min: result.data.daily[2].temp.min});
            setDaily4({max: result.data.daily[3].temp.max, min: result.data.daily[3].temp.min});
            setDaily5({max: result.data.daily[4].temp.max, min: result.data.daily[4].temp.min});
            setDay(dayBuilder(new Date()));
            setTemp(Math.round(result.data.current.feels_like));
            setWeather(result.data.current.weather[0].main);
            setHum(result.data.current.humidity);
            setWind(result.data.current.wind_speed);
            console.log(result);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <header className="App-header">
                <Weather detail={detail} temp={temp} weather={weather} hum={hum} wind={wind} />
            </header>
            <a style={{height: "200px", width: "600px"}} onClick={refreshPage} className="day1">
                <Day max={Math.round(daily1.max)} min={Math.round(daily1.min)} day={"Today"}/>
            </a>
            <div className="day2">
                <Day max={Math.round(daily2.max)} min={Math.round(daily2.min)} day={days[(day+1)%7]}/>
            </div>
            <div className="day3">
                <Day max={Math.round(daily3.max)} min={Math.round(daily3.min)} day={days[(day+2)%7]}/>
            </div>
            <div className="day4">
                <Day max={Math.round(daily4.max)} min={Math.round(daily4.min)} day={days[(day+3)%7]}/>
            </div>
            <div className="day5">
                <Day max={Math.round(daily5.max)} min={Math.round(daily5.min)} day={days[(day+4)%7]}/>
            </div>
        </div>
    )
}

export default GetForecast;

/*class GetForecast extends Component {
    constructor(props) {
        super(props) 
            
        this.state = {
            forecast: []
        }
    }

    componentDidMount() {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=metric&exclude=minutely&appid=4cf8d63c470508ccd8b7958f022ca1d1")
        .then(result => {
            console.log(result.data.daily);
        })
        .catch(err => console.log(err));
    }

    render () {
        return (
            <div>

            </div>
        )
    }
}

export default GetForecast;
*/
