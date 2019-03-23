import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: null,
      temperature: null,
      wind: null
    }
  }

  componentDidMount(){
    this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const weatherData = JSON.parse(this.props.weather[0]);
      this.setState({
        city: weatherData.city[0],
        temperature: weatherData.temperature[0],
        wind: weatherData.wind[0]
      });
    }
  }

  renderWeatherData() {
    if (this.state.city) {
      return <div>{this.state.city.name[0]}</div>
    }
  }
  render() {
    return (
      <div>
        <h1>Weather Component</h1>
        <div>{this.props.weather}</div>
        <div>{this.renderWeatherData()}</div>
        <button>This will be the Refresh button</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
