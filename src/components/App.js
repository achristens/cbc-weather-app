import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      errorMessage: "",
    };
  }


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  determineRenderView() {
    let content;
    if (this.state.errorMessage) {
      content = <div>Error: {this.state.errorMessage}</div>
    } else if (this.state.lat && this.state.long) {
      content = <WeatherDetails latitude={this.state.lat} longitude={this.state.long} />
    } else {
      content = <div>Please accept location request</div>
    }
    return content;
  }

  render() {
    return (
      <div>{this.determineRenderView()}</div>
    )
  }
};

export default App;
