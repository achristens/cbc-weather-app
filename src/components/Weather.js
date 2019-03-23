import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';
import WeatherDetails from './WeatherDetails';

class Weather extends Component {

  componentWillReceiveProps(){
    this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }

  render() {
    return (
      <div>
        <h1>Weather Component</h1>
        <div>This will display details</div>
        <div>{this.props.longitude}</div>
        <div>{this.props.latitude}</div>
        <button>This will be the Refresh button</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Weather);
