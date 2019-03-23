import React, { Component } from 'react';

class WeatherDetails extends Component {
  
  render() {
    return (
      <div>
        <h1>WeatherDetails Component</h1>
        <div>This will display details</div>
        <div>{this.props.longitude}</div>
        <div>{this.props.latitude}</div>
        <button>This will be the Refresh button</button>
      </div>
    );
  }
}

export default WeatherDetails;
