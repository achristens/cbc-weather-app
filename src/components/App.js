import React, { Component } from 'react';
import Weather from './Weather';
import "../App.scss";

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

  timeOfDay() {
    const time = new Date().getHours();
    let className;
    if (time >= 5 && time <= 8) {
      className = "morning";
    } else if (time > 8 && time <= 18){
      className = "day";
    } else if (time > 18 && time <= 21) {
      className = "evening"
    } else {
      className = "night"
    }
    return className;
  }

  determineRenderView() {
    let content;
    if (this.state.errorMessage) {
      content = <div className="pageload-styles">Error: {this.state.errorMessage}</div>
    } else if (this.state.lat && this.state.long) {
      document.body.classList.add(this.timeOfDay());
      content = <Weather latitude={this.state.lat} longitude={this.state.long} />
    } else {
      content = <div className="pageload-styles">Please accept location request</div>
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
