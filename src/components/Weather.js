import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';
import WeatherDetails from './WeatherDetails';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: null,
      temperature: null,
      wind: null,
      weather: null
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
        temperature: Math.ceil(weatherData.temperature[0].value[0]),
        wind: weatherData.wind[0],
      });
      this.mapWeatherObject(weatherData);
    }
  }

  mapWeatherObject(weatherData) {
    const weather = [];
    weatherData.weather.map(item => {
      weather.push(item.value);
    });
    this.setState({ weather });
  }

  renderWeatherData() {
    return <WeatherDetails
              city={this.state.city.name[0]}
              country={this.state.city.country[0]}
              weather={this.state.weather}
              temperature={this.state.temperature}
              windSpeed={this.state.wind.speed[0].name[0]}
              windDirection={this.state.wind.direction[0].name[0]}
            />
  }

  handleClick = () => {
    this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }

  render() {
    return (
      <div>
        <h1>Weather Component</h1>
        {this.state.city ? this.renderWeatherData() : "Waiting for data..." }
        <button onClick={this.handleClick}>Click to refresh</button>
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
