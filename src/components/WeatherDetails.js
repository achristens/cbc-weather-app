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

  return (
    <div>
      <div>The current weather for:</div>
      <div className="location">{props.city}, {props.country}</div>
      <div className="description">{checkWeatherDescription()}</div>
      <div className="temperature">It is {props.temperature}°C</div>
      <div className="wind">With a {props.windSpeed} coming in from the {props.windDirection}</div>
    </div>
  )
}


export default WeatherDetails;
