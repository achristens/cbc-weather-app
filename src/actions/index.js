import { parseString } from "react-native-xml2js";
import axios from 'axios';
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_STARTED
} from './types';

const API_KEY = "7ed88b137358bdb2e938f5af6e70671d";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;


export const fetchWeather = (latitude, longitude) => dispatch => {
    const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}&mode=xml&units=metric`;
    const response = axios.get(url);

    dispatch(fetchWeatherStarted());

    response.then(response => {
      parseString(response.data, { mergeAttrs: true }, function(err, result) {
        if (result) {
          dispatch(fetchWeatherSuccess(JSON.stringify(result.current)));
        } else if (err) {
          dispatch(fetchWeatherFailure(err));
        }
      })
    })
    .catch(err => {
      dispatch(fetchWeatherFailure(err));
    });
}

const fetchWeatherStarted = () => ({
  type: FETCH_WEATHER_STARTED
});

const fetchWeatherSuccess = data => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { data }
});

const fetchWeatherFailure = err => ({
  type: FETCH_WEATHER_FAILURE,
  payload: err
});
