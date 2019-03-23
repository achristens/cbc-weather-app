import React, { Component } from 'react';

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
      content = <div>THIS IS WHERE WE WILL PASS PROPS TO A COMPONENT FOR GETTING WEATHER</div>
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
