import React from 'react';
import { connect } from 'react-redux';

const WeatherDetails = () => {
  // <div>{this.state.weather}</div>
  return(
    <div>
    </div>
  );
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherDetails);
