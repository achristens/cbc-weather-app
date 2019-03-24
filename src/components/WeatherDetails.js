import React from 'react';

const WeatherDetails = (props) => {

  const checkWeatherDescription = () => {
    let weatherDescription;
    if (props.weather.length > 1) {
      weatherDescription = props.weather.join(", ");
    } else {
      weatherDescription = props.weather[0];
    }
    return weatherDescription;
  }

  const displayDate = () => {
    let date = new Date();
    date = date.toLocaleString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
    return date;
  }

  return (
    <div className="weather-detail">
      <div>
        <div className="location">{props.city}, {props.country}</div>
        <div>{displayDate()}</div>
      </div>
      <div className="temperature">{props.temperature}<sup>°C</sup></div>
      <div className="description">{checkWeatherDescription()}</div>
      <div className="wind">With a {props.windSpeed} coming in from the {props.windDirection}</div>
    </div>
  )
}


export default WeatherDetails;
