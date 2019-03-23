import React, { Component } from 'react';

class UseLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      errorMessage: "",
      setErrorMessage: ""
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

  render() {
    return (
      <div>UseLocation</div>
    )
  }
}

export default UseLocation;
