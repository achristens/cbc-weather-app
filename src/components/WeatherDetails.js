import React from 'react';
import { connect } from 'react-redux';

const WeatherDetails = () => {
  return(
    <div>
      <div>WEATHER DETAILS COMPONENT</div>
    </div>
  );
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherDetails);
