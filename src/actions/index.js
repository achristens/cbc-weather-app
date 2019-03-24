import { parseString } from "react-native-xml2js";
import axios from 'axios';

const API_KEY = "7ed88b137358bdb2e938f5af6e70671d";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_FAILURE = "FETCH_FAILURE";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";

export const fetchWeather = (latitude, longitude) => dispatch => {
  const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}&mode=xml&units=metric`;

  const response = axios.get(url).then(response => {
        parseString(response.data, {mergeAttrs: true}, function(error, result) {
          if (result) {
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: JSON.stringify(result.current) })
          } else if (error) {
            dispatch({ type: FETCH_FAILURE, payload: "Failure to fetch weather" })
            throw error;
          }
        })
      })
}
