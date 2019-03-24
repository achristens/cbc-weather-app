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
      weather: null,
      err: null,
      loading: true
    }
  }

  componentDidMount(){
    this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.weather.loading !== this.props.weather.loading) {
      this.setState({ loading: this.props.weather.loading });
    }

    if (prevProps.weather.err !== this.props.weather.err) {
      this.setState({ err: this.props.weather.err })
    }

    if (prevProps.weather.response !== this.props.weather.response) {
      const weatherData = JSON.parse(this.props.weather.response.data);
      this.setState({
        city: weatherData.city[0],
        temperature: Math.ceil(weatherData.temperature[0].value[0]),
        wind: weatherData.wind[0]
      });
      this.mapWeatherObject(weatherData);
    }
  }

  mapWeatherObject(weatherData) {
    const weather = [];
    weatherData.weather.map(item => {
      weather.push(item.value);
      return weather;
    });
    this.setState({ weather });
  }

  renderWeatherData() {
    return (
      <div>
        <WeatherDetails
          city={this.state.city.name[0]}
          country={this.state.city.country[0]}
          weather={this.state.weather}
          temperature={this.state.temperature}
          windSpeed={this.state.wind.speed[0].name[0]}
          windDirection={this.state.wind.direction[0].name[0]}
        />
        <button onClick={this.handleClick}>Refresh</button>
      </div>
    )
  }

  handleClick = () => {
    this.props.fetchWeather(this.props.latitude, this.props.longitude);
  }

  render() {
    return (
      <div className="weather-body">
        { this.state.loading ? "Waiting for data..." : this.renderWeatherData() }
        { this.state.err ? `Error fetching data: ${this.state.err}` : "" }
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
