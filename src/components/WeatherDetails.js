import React from 'react';
import { connect } from 'react-redux';

const WeatherDetails = (props) => {
  return (
    <div>
      <div>The current temperature in:</div>
      <div className="location">{props.city}, {props.country}</div>
      <div className="temperature">is {props.temperature}°C</div>
      <div className="wind">With a {props.windSpeed} coming in from the {props.windDirection}</div>
    </div>
  )
}


export default WeatherDetails;
